'use server'

import { google } from 'googleapis'
import { Readable } from 'stream'

// --- AS CHAVES AGORA VÊM DO .ENV (SEGURO) ---
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN

// ID da pasta no Google Drive (Isso não é segredo, pode ficar aqui)
const GOOGLE_FOLDER_ID = "1cY4UeujTkXref1eHPT2SWUVpHWDJSmnd"

export async function uploadToDrive(formData: FormData) {
  try {
    const file = formData.get('file') as File
    const plano = formData.get('plano') as string

    // Verificação de segurança para não quebrar se faltar o .env
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      throw new Error('Credenciais do Google não configuradas no .env.local')
    }

    if (!file) return { success: false, error: 'Arquivo vazio' }

    // 1. Autenticação OAuth2 (Usa sua conta pessoal com 15GB+)
    const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET)
    auth.setCredentials({ refresh_token: REFRESH_TOKEN })

    const drive = google.drive({ version: 'v3', auth })

    // 2. Prepara o arquivo (converte para Stream)
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const stream = new Readable()
    stream.push(buffer)
    stream.push(null)

    // 3. Cria um nome organizado para o arquivo
    const timestamp = new Date().toISOString().split('T')[0]
    // Remove caracteres especiais para evitar erros
    const safePlano = (plano || 'S-PLANO').replace(/[^a-zA-Z0-9]/g, '_')
    const fileName = `PGTO_${safePlano}_${timestamp}_${file.name}`

    // 4. Faz o Upload
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [GOOGLE_FOLDER_ID],
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
    })

    console.log("Upload realizado com sucesso! ID:", response.data.id)
    return { success: true, fileId: response.data.id }

  } catch (error: any) {
    console.error('Erro detalhado no upload:', error)
    return { success: false, error: 'Falha no upload: ' + (error.message || error) }
  }
}

