import { parse, isValid } from 'date-fns'

export type Evento = {
    id: string
    dateObj: Date
    dataDisplay: string
    horario: string
    atividade: string
    badge: string
    imagem: string
    descricao: string
}

// Funções auxiliares para manter o código limpo
const createTreino = (date: string, diaSemana: string, horario: string) => ({
    dataStr: date,
    diaSemana,
    horario,
    atividade: `Treino CPP ${horario}`,
    badge: 'Treino',
    imagem: '/cpplua.jpeg',
    descricao: 'Treino regular de Canoa Havaiana. Foco em técnica, condicionamento e sincronia.'
})

const createEspecial = (date: string, diaSemana: string, horario: string, atividade: string, badge: string, imagem: string, descricao: string) => ({
    dataStr: date,
    diaSemana,
    horario,
    atividade,
    badge,
    imagem,
    descricao
})

// Dados COMPLETOS de Janeiro a Dezembro de 2026
const rawData = [
    {
        mes: 'Janeiro 2026',
        year: 2026,
        eventos: [
            // --- SEMANA 2 (05-11) ---
            createTreino('05/01', '(Seg)', '06:00'), createTreino('05/01', '(Seg)', '07:30'), createTreino('05/01', '(Seg)', '12:15'),
            createTreino('06/01', '(Ter)', '06:00'), createTreino('06/01', '(Ter)', '07:30'), createTreino('06/01', '(Ter)', '12:15'),
            createTreino('07/01', '(Qua)', '06:00'), createTreino('07/01', '(Qua)', '07:30'), createTreino('07/01', '(Qua)', '12:15'),
            createTreino('08/01', '(Qui)', '06:00'), createTreino('08/01', '(Qui)', '07:30'), createTreino('08/01', '(Qui)', '12:15'),
            createTreino('09/01', '(Sex)', '06:00'), createTreino('09/01', '(Sex)', '07:30'), createTreino('09/01', '(Sex)', '12:15'),
            createEspecial('10/01', '(Sáb)', '05:00', 'Remada do Nascer do Sol 🌅', 'Energia', '/lualua.jpg', 'Comece o dia recarregando as energias.'),
            createEspecial('10/01', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', 'Um passeio tranquilo.'),
            createEspecial('10/01', '(Sáb)', '16:00', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', 'Contemple o pôr do sol.'),
            createEspecial('11/01', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', 'Domingo relax.'),

            // --- SEMANA 3 (12-18) ---
            createTreino('12/01', '(Seg)', '06:00'), createTreino('12/01', '(Seg)', '07:30'), createTreino('12/01', '(Seg)', '12:15'),
            createTreino('13/01', '(Ter)', '06:00'), createTreino('13/01', '(Ter)', '07:30'), createTreino('13/01', '(Ter)', '12:15'),
            createTreino('14/01', '(Qua)', '06:00'), createTreino('14/01', '(Qua)', '07:30'), createTreino('14/01', '(Qua)', '12:15'),
            createTreino('15/01', '(Qui)', '06:00'), createTreino('15/01', '(Qui)', '07:30'), createTreino('15/01', '(Qui)', '12:15'),
            createTreino('16/01', '(Sex)', '06:00'), createTreino('16/01', '(Sex)', '07:30'), createTreino('16/01', '(Sex)', '12:15'),
            createEspecial('17/01', '(Sáb)', '05:00', 'Remada do Nascer do Sol 🌅', 'Energia', '/lualua.jpg', 'Nascer do sol.'),
            createEspecial('17/01', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', 'Passeio relaxante.'),
            createEspecial('17/01', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', 'Golden hour.'),
            createEspecial('18/01', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', 'Domingo relax.'),

            // --- SEMANA 4 (19-25) ---
            createTreino('19/01', '(Seg)', '06:00'), createTreino('19/01', '(Seg)', '07:30'), createTreino('19/01', '(Seg)', '12:15'),
            createTreino('20/01', '(Ter)', '06:00'), createTreino('20/01', '(Ter)', '07:30'), createTreino('20/01', '(Ter)', '12:15'),
            createTreino('21/01', '(Qua)', '06:00'), createTreino('21/01', '(Qua)', '07:30'), createTreino('21/01', '(Qua)', '12:15'),
            createTreino('22/01', '(Qui)', '06:00'), createTreino('22/01', '(Qui)', '07:30'), createTreino('22/01', '(Qui)', '12:15'),
            createTreino('23/01', '(Sex)', '06:00'), createTreino('23/01', '(Sex)', '07:30'), createTreino('23/01', '(Sex)', '12:15'),
            createEspecial('24/01', '(Sáb)', '05:00', 'Remada do Nascer do Sol 🌅', 'Energia', '/lualua.jpg', 'Nascer do sol.'),
            createEspecial('24/01', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', 'Passeio relaxante.'),
            createEspecial('24/01', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', 'Golden hour.'),
            createEspecial('25/01', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', 'Domingo relax.'),

            // --- SEMANA 5 (26-31) ---
            createTreino('26/01', '(Seg)', '06:00'), createTreino('26/01', '(Seg)', '07:30'), createTreino('26/01', '(Seg)', '12:15'),
            createTreino('27/01', '(Ter)', '06:00'), createTreino('27/01', '(Ter)', '07:30'), createTreino('27/01', '(Ter)', '12:15'),
            createTreino('28/01', '(Qua)', '06:00'), createTreino('28/01', '(Qua)', '07:30'), createTreino('28/01', '(Qua)', '12:15'),
            createTreino('29/01', '(Qui)', '06:00'), createTreino('29/01', '(Qui)', '07:30'), createTreino('29/01', '(Qui)', '12:15'),
            createTreino('30/01', '(Sex)', '06:00'), createTreino('30/01', '(Sex)', '07:30'), createTreino('30/01', '(Sex)', '12:15'),
            createEspecial('31/01', '(Sáb)', '05:00', 'Remada do Nascer do Sol 🌅', 'Energia', '/lualua.jpg', 'Nascer do sol.'),
            createEspecial('31/01', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', 'Passeio relaxante.'),
            createEspecial('31/01', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', 'Golden hour.'),
        ]
    },
    {
        mes: 'Fevereiro 2026',
        year: 2026,
        eventos: [
            createEspecial('01/02', '(Dom)', '17:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', 'Lua Cheia.'),

            // Semana 1 (02-08)
            createTreino('02/02', '(Seg)', '06:00'), createTreino('02/02', '(Seg)', '07:30'), createTreino('02/02', '(Seg)', '12:15'), createTreino('02/02', '(Seg)', '17:40'),
            createEspecial('02/02', '(Seg)', '18:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', 'Lua Cheia.'),

            createTreino('03/02', '(Ter)', '06:00'), createTreino('03/02', '(Ter)', '07:30'), createTreino('03/02', '(Ter)', '17:40'),
            createEspecial('03/02', '(Ter)', '19:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', 'Lua Cheia.'),

            createTreino('04/02', '(Qua)', '06:00'), createTreino('04/02', '(Qua)', '07:30'), createTreino('04/02', '(Qua)', '12:15'), createTreino('04/02', '(Qua)', '17:40'),
            createTreino('05/02', '(Qui)', '06:00'), createTreino('05/02', '(Qui)', '07:30'), createTreino('05/02', '(Qui)', '17:40'),
            createTreino('06/02', '(Sex)', '06:00'), createTreino('06/02', '(Sex)', '07:30'), createTreino('06/02', '(Sex)', '12:15'), createTreino('06/02', '(Sex)', '17:40'),

            createEspecial('07/02', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('07/02', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('07/02', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('08/02', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (09-15)
            createTreino('09/02', '(Seg)', '06:00'), createTreino('09/02', '(Seg)', '07:30'), createTreino('09/02', '(Seg)', '12:15'), createTreino('09/02', '(Seg)', '17:40'),
            createTreino('10/02', '(Ter)', '06:00'), createTreino('10/02', '(Ter)', '07:30'), createTreino('10/02', '(Ter)', '17:40'),
            createTreino('11/02', '(Qua)', '06:00'), createTreino('11/02', '(Qua)', '07:30'), createTreino('11/02', '(Qua)', '12:15'), createTreino('11/02', '(Qua)', '17:40'),
            createTreino('12/02', '(Qui)', '06:00'), createTreino('12/02', '(Qui)', '07:30'), createTreino('12/02', '(Qui)', '17:40'),
            createTreino('13/02', '(Sex)', '06:00'), createTreino('13/02', '(Sex)', '07:30'), createTreino('13/02', '(Sex)', '12:15'), createTreino('13/02', '(Sex)', '17:40'),

            createEspecial('14/02', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('14/02', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('14/02', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('15/02', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (16-22)
            createTreino('16/02', '(Seg)', '06:00'), createTreino('16/02', '(Seg)', '07:30'), createTreino('16/02', '(Seg)', '12:15'), createTreino('16/02', '(Seg)', '17:40'), // Carnaval (treino normal na imagem)
            createTreino('17/02', '(Ter)', '06:00'), createTreino('17/02', '(Ter)', '07:30'), createTreino('17/02', '(Ter)', '17:40'),
            createTreino('18/02', '(Qua)', '06:00'), createTreino('18/02', '(Qua)', '07:30'), createTreino('18/02', '(Qua)', '12:15'), createTreino('18/02', '(Qua)', '17:40'),
            createTreino('19/02', '(Qui)', '06:00'), createTreino('19/02', '(Qui)', '07:30'), createTreino('19/02', '(Qui)', '17:40'),
            createTreino('20/02', '(Sex)', '06:00'), createTreino('20/02', '(Sex)', '07:30'), createTreino('20/02', '(Sex)', '12:15'), createTreino('20/02', '(Sex)', '17:40'),

            createEspecial('21/02', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('21/02', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('21/02', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('22/02', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (23-28)
            createTreino('23/02', '(Seg)', '06:00'), createTreino('23/02', '(Seg)', '07:30'), createTreino('23/02', '(Seg)', '12:15'), createTreino('23/02', '(Seg)', '17:40'),
            createTreino('24/02', '(Ter)', '06:00'), createTreino('24/02', '(Ter)', '07:30'), createTreino('24/02', '(Ter)', '17:40'),
            createTreino('25/02', '(Qua)', '06:00'), createTreino('25/02', '(Qua)', '07:30'), createTreino('25/02', '(Qua)', '12:15'), createTreino('25/02', '(Qua)', '17:40'),
            createTreino('26/02', '(Qui)', '06:00'), createTreino('26/02', '(Qui)', '07:30'), createTreino('26/02', '(Qui)', '17:40'),
            createTreino('27/02', '(Sex)', '06:00'), createTreino('27/02', '(Sex)', '07:30'), createTreino('27/02', '(Sex)', '12:15'), createTreino('27/02', '(Sex)', '17:40'),

            createEspecial('28/02', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('28/02', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('28/02', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
        ]
    },
    {
        mes: 'Março 2026',
        year: 2026,
        eventos: [
            createEspecial('02/03', '(Seg)', '16:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('03/03', '(Ter)', '17:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('04/03', '(Qua)', '18:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('05/03', '(Qui)', '18:50', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('06/03', '(Sex)', '08:00', 'Sprint Seletiva 🏆', 'Competição', '/cpplua.jpeg', ''),
            createEspecial('07/03', '(Sáb)', '08:00', 'Sprint Seletiva 🏆', 'Competição', '/cpplua.jpeg', ''),
            createEspecial('08/03', '(Dom)', '08:00', 'Sprint Seletiva 🏆', 'Competição', '/cpplua.jpeg', ''),

            // Semana 1 (02-08) - Treinos normais
            createTreino('02/03', '(Seg)', '06:00'), createTreino('02/03', '(Seg)', '07:30'), createTreino('02/03', '(Seg)', '12:15'), createTreino('02/03', '(Seg)', '17:40'),
            createTreino('03/03', '(Ter)', '06:00'), createTreino('03/03', '(Ter)', '07:30'), createTreino('03/03', '(Ter)', '17:40'),
            createTreino('04/03', '(Qua)', '06:00'), createTreino('04/03', '(Qua)', '07:30'), createTreino('04/03', '(Qua)', '12:15'), createTreino('04/03', '(Qua)', '17:40'),
            createTreino('05/03', '(Qui)', '06:00'), createTreino('05/03', '(Qui)', '07:30'), createTreino('05/03', '(Qui)', '17:40'),
            createTreino('06/03', '(Sex)', '06:00'), createTreino('06/03', '(Sex)', '07:30'), createTreino('06/03', '(Sex)', '12:15'), createTreino('06/03', '(Sex)', '17:40'),

            createEspecial('07/03', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('07/03', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('07/03', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('08/03', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (09-15)
            createTreino('09/03', '(Seg)', '06:00'), createTreino('09/03', '(Seg)', '07:30'), createTreino('09/03', '(Seg)', '12:15'), createTreino('09/03', '(Seg)', '17:40'),
            createTreino('10/03', '(Ter)', '06:00'), createTreino('10/03', '(Ter)', '07:30'), createTreino('10/03', '(Ter)', '17:40'),
            createTreino('11/03', '(Qua)', '06:00'), createTreino('11/03', '(Qua)', '07:30'), createTreino('11/03', '(Qua)', '12:15'), createTreino('11/03', '(Qua)', '17:40'),
            createTreino('12/03', '(Qui)', '06:00'), createTreino('12/03', '(Qui)', '07:30'), createTreino('12/03', '(Qui)', '17:40'),
            createTreino('13/03', '(Sex)', '06:00'), createTreino('13/03', '(Sex)', '07:30'), createTreino('13/03', '(Sex)', '12:15'), createTreino('13/03', '(Sex)', '17:40'),

            createEspecial('14/03', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('14/03', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('14/03', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('15/03', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (16-22)
            createTreino('16/03', '(Seg)', '06:00'), createTreino('16/03', '(Seg)', '07:30'), createTreino('16/03', '(Seg)', '12:15'), createTreino('16/03', '(Seg)', '17:40'),
            createTreino('17/03', '(Ter)', '06:00'), createTreino('17/03', '(Ter)', '07:30'), createTreino('17/03', '(Ter)', '17:40'),
            createTreino('18/03', '(Qua)', '06:00'), createTreino('18/03', '(Qua)', '07:30'), createTreino('18/03', '(Qua)', '12:15'), createTreino('18/03', '(Qua)', '17:40'),
            createTreino('19/03', '(Qui)', '06:00'), createTreino('19/03', '(Qui)', '07:30'), createTreino('19/03', '(Qui)', '17:40'),
            createTreino('20/03', '(Sex)', '06:00'), createTreino('20/03', '(Sex)', '07:30'), createTreino('20/03', '(Sex)', '12:15'), createTreino('20/03', '(Sex)', '17:40'),

            createEspecial('21/03', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('21/03', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('21/03', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('22/03', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (23-29)
            createTreino('23/03', '(Seg)', '06:00'), createTreino('23/03', '(Seg)', '07:30'), createTreino('23/03', '(Seg)', '12:15'), createTreino('23/03', '(Seg)', '17:40'),
            createTreino('24/03', '(Ter)', '06:00'), createTreino('24/03', '(Ter)', '07:30'), createTreino('24/03', '(Ter)', '17:40'),
            createTreino('25/03', '(Qua)', '06:00'), createTreino('25/03', '(Qua)', '07:30'), createTreino('25/03', '(Qua)', '12:15'), createTreino('25/03', '(Qua)', '17:40'),
            createTreino('26/03', '(Qui)', '06:00'), createTreino('26/03', '(Qui)', '07:30'), createTreino('26/03', '(Qui)', '17:40'),
            createTreino('27/03', '(Sex)', '06:00'), createTreino('27/03', '(Sex)', '07:30'), createTreino('27/03', '(Sex)', '12:15'), createTreino('27/03', '(Sex)', '17:40'),

            createEspecial('28/03', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('28/03', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('28/03', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('29/03', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (30-31)
            createTreino('30/03', '(Seg)', '06:00'), createTreino('30/03', '(Seg)', '07:30'), createTreino('30/03', '(Seg)', '12:15'), createTreino('30/03', '(Seg)', '17:40'),
            createTreino('31/03', '(Ter)', '06:00'), createTreino('31/03', '(Ter)', '07:30'), createTreino('31/03', '(Ter)', '17:40'),
        ]
    },
    {
        mes: 'Abril 2026',
        year: 2026,
        eventos: [
            createEspecial('01/04', '(Qua)', '16:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('01/04', '(Qua)', '17:40', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('02/04', '(Qui)', '17:40', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('03/04', '(Sex)', '17:40', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('11/04', '(Sáb)', '07:00', 'Brasileiro de Va\'a OC6 🏆', 'Competição', '/cpplua.jpeg', ''),
            createEspecial('12/04', '(Dom)', '07:00', 'Brasileiro de Va\'a OC6 🏆', 'Competição', '/cpplua.jpeg', ''),
            createEspecial('25/04', '(Sáb)', '06:00', 'Volta ao Lago CPP Revezamento 🚣‍♀️', 'Desafio', '/cpplua.jpeg', ''),
            createEspecial('30/04', '(Qui)', '17:40', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01-05)
            createTreino('01/04', '(Qua)', '06:00'), createTreino('01/04', '(Qua)', '07:30'), createTreino('01/04', '(Qua)', '12:15'), createTreino('01/04', '(Qua)', '17:40'),
            createTreino('02/04', '(Qui)', '06:00'), createTreino('02/04', '(Qui)', '07:30'), createTreino('02/04', '(Qui)', '17:40'),
            createTreino('03/04', '(Sex)', '06:00'), createTreino('03/04', '(Sex)', '07:30'), createTreino('03/04', '(Sex)', '12:15'), createTreino('03/04', '(Sex)', '17:40'),

            createEspecial('04/04', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('04/04', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('04/04', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('05/04', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (06-12)
            createTreino('06/04', '(Seg)', '06:00'), createTreino('06/04', '(Seg)', '07:30'), createTreino('06/04', '(Seg)', '12:15'), createTreino('06/04', '(Seg)', '17:40'),
            createTreino('07/04', '(Ter)', '06:00'), createTreino('07/04', '(Ter)', '07:30'), createTreino('07/04', '(Ter)', '17:40'),
            createTreino('08/04', '(Qua)', '06:00'), createTreino('08/04', '(Qua)', '07:30'), createTreino('08/04', '(Qua)', '12:15'), createTreino('08/04', '(Qua)', '17:40'),
            createTreino('09/04', '(Qui)', '06:00'), createTreino('09/04', '(Qui)', '07:30'), createTreino('09/04', '(Qui)', '17:40'),
            createTreino('10/04', '(Sex)', '06:00'), createTreino('10/04', '(Sex)', '07:30'), createTreino('10/04', '(Sex)', '12:15'), createTreino('10/04', '(Sex)', '17:40'),

            createEspecial('11/04', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('11/04', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('11/04', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),

            // Semana 3 (13-19)
            createTreino('13/04', '(Seg)', '06:00'), createTreino('13/04', '(Seg)', '07:30'), createTreino('13/04', '(Seg)', '12:15'), createTreino('13/04', '(Seg)', '17:40'),
            createTreino('14/04', '(Ter)', '06:00'), createTreino('14/04', '(Ter)', '07:30'), createTreino('14/04', '(Ter)', '17:40'),
            createTreino('15/04', '(Qua)', '06:00'), createTreino('15/04', '(Qua)', '07:30'), createTreino('15/04', '(Qua)', '12:15'), createTreino('15/04', '(Qua)', '17:40'),
            createTreino('16/04', '(Qui)', '06:00'), createTreino('16/04', '(Qui)', '07:30'), createTreino('16/04', '(Qui)', '17:40'),
            createTreino('17/04', '(Sex)', '06:00'), createTreino('17/04', '(Sex)', '07:30'), createTreino('17/04', '(Sex)', '12:15'), createTreino('17/04', '(Sex)', '17:40'),

            createEspecial('18/04', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('18/04', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('18/04', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('19/04', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (20-26)
            createTreino('20/04', '(Seg)', '06:00'), createTreino('20/04', '(Seg)', '07:30'), createTreino('20/04', '(Seg)', '12:15'), createTreino('20/04', '(Seg)', '17:40'),
            createTreino('21/04', '(Ter)', '06:00'), createTreino('21/04', '(Ter)', '07:30'), createTreino('21/04', '(Ter)', '17:40'),
            createTreino('22/04', '(Qua)', '06:00'), createTreino('22/04', '(Qua)', '07:30'), createTreino('22/04', '(Qua)', '12:15'), createTreino('22/04', '(Qua)', '17:40'),
            createTreino('23/04', '(Qui)', '06:00'), createTreino('23/04', '(Qui)', '07:30'), createTreino('23/04', '(Qui)', '17:40'),
            createTreino('24/04', '(Sex)', '06:00'), createTreino('24/04', '(Sex)', '07:30'), createTreino('24/04', '(Sex)', '12:15'), createTreino('24/04', '(Sex)', '17:40'),

            createEspecial('25/04', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('25/04', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('26/04', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (27-30)
            createTreino('27/04', '(Seg)', '06:00'), createTreino('27/04', '(Seg)', '07:30'), createTreino('27/04', '(Seg)', '12:15'), createTreino('27/04', '(Seg)', '17:40'),
            createTreino('28/04', '(Ter)', '06:00'), createTreino('28/04', '(Ter)', '07:30'), createTreino('28/04', '(Ter)', '17:40'),
            createTreino('29/04', '(Qua)', '06:00'), createTreino('29/04', '(Qua)', '07:30'), createTreino('29/04', '(Qua)', '12:15'), createTreino('29/04', '(Qua)', '17:40'),
            createTreino('30/04', '(Qui)', '06:00'), createTreino('30/04', '(Qui)', '07:30'), createTreino('30/04', '(Qui)', '17:40'),
        ]
    },
    {
        mes: 'Maio 2026',
        year: 2026,
        eventos: [
            createEspecial('01/05', '(Sex)', '16:30', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('02/05', '(Sáb)', '17:10', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('03/05', '(Dom)', '17:40', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('04/05', '(Seg)', '19:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('30/05', '(Sáb)', '16:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('31/05', '(Dom)', '16:40', 'Remada da Lua Cheia - Blue Moon 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01-03)
            createTreino('01/05', '(Sex)', '06:00'), createTreino('01/05', '(Sex)', '07:30'), createTreino('01/05', '(Sex)', '12:15'), createTreino('01/05', '(Sex)', '17:40'), // Treino no feriado
            createEspecial('02/05', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('02/05', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('03/05', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (04-10)
            createTreino('04/05', '(Seg)', '06:00'), createTreino('04/05', '(Seg)', '07:30'), createTreino('04/05', '(Seg)', '12:15'), createTreino('04/05', '(Seg)', '17:40'),
            createTreino('05/05', '(Ter)', '06:00'), createTreino('05/05', '(Ter)', '07:30'), createTreino('05/05', '(Ter)', '17:40'),
            createTreino('06/05', '(Qua)', '06:00'), createTreino('06/05', '(Qua)', '07:30'), createTreino('06/05', '(Qua)', '12:15'), createTreino('06/05', '(Qua)', '17:40'),
            createTreino('07/05', '(Qui)', '06:00'), createTreino('07/05', '(Qui)', '07:30'), createTreino('07/05', '(Qui)', '17:40'),
            createTreino('08/05', '(Sex)', '06:00'), createTreino('08/05', '(Sex)', '07:30'), createTreino('08/05', '(Sex)', '12:15'), createTreino('08/05', '(Sex)', '17:40'),

            createEspecial('09/05', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('09/05', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('09/05', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('10/05', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (11-17)
            createTreino('11/05', '(Seg)', '06:00'), createTreino('11/05', '(Seg)', '07:30'), createTreino('11/05', '(Seg)', '12:15'), createTreino('11/05', '(Seg)', '17:40'),
            createTreino('12/05', '(Ter)', '06:00'), createTreino('12/05', '(Ter)', '07:30'), createTreino('12/05', '(Ter)', '17:40'),
            createTreino('13/05', '(Qua)', '06:00'), createTreino('13/05', '(Qua)', '07:30'), createTreino('13/05', '(Qua)', '12:15'), createTreino('13/05', '(Qua)', '17:40'),
            createTreino('14/05', '(Qui)', '06:00'), createTreino('14/05', '(Qui)', '07:30'), createTreino('14/05', '(Qui)', '17:40'),
            createTreino('15/05', '(Sex)', '06:00'), createTreino('15/05', '(Sex)', '07:30'), createTreino('15/05', '(Sex)', '12:15'), createTreino('15/05', '(Sex)', '17:40'),

            createEspecial('16/05', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('16/05', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('16/05', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('17/05', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (18-24)
            createTreino('18/05', '(Seg)', '06:00'), createTreino('18/05', '(Seg)', '07:30'), createTreino('18/05', '(Seg)', '12:15'), createTreino('18/05', '(Seg)', '17:40'),
            createTreino('19/05', '(Ter)', '06:00'), createTreino('19/05', '(Ter)', '07:30'), createTreino('19/05', '(Ter)', '17:40'),
            createTreino('20/05', '(Qua)', '06:00'), createTreino('20/05', '(Qua)', '07:30'), createTreino('20/05', '(Qua)', '12:15'), createTreino('20/05', '(Qua)', '17:40'),
            createTreino('21/05', '(Qui)', '06:00'), createTreino('21/05', '(Qui)', '07:30'), createTreino('21/05', '(Qui)', '17:40'),
            createTreino('22/05', '(Sex)', '06:00'), createTreino('22/05', '(Sex)', '07:30'), createTreino('22/05', '(Sex)', '12:15'), createTreino('22/05', '(Sex)', '17:40'),

            createEspecial('23/05', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('23/05', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('23/05', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('24/05', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (25-31)
            createTreino('25/05', '(Seg)', '06:00'), createTreino('25/05', '(Seg)', '07:30'), createTreino('25/05', '(Seg)', '12:15'), createTreino('25/05', '(Seg)', '17:40'),
            createTreino('26/05', '(Ter)', '06:00'), createTreino('26/05', '(Ter)', '07:30'), createTreino('26/05', '(Ter)', '17:40'),
            createTreino('27/05', '(Qua)', '06:00'), createTreino('27/05', '(Qua)', '07:30'), createTreino('27/05', '(Qua)', '12:15'), createTreino('27/05', '(Qua)', '17:40'),
            createTreino('28/05', '(Qui)', '06:00'), createTreino('28/05', '(Qui)', '07:30'), createTreino('28/05', '(Qui)', '17:40'),
            createTreino('29/05', '(Sex)', '06:00'), createTreino('29/05', '(Sex)', '07:30'), createTreino('29/05', '(Sex)', '12:15'), createTreino('29/05', '(Sex)', '17:40'),

            createEspecial('30/05', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('30/05', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('31/05', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),
        ]
    },
    {
        mes: 'Junho 2026',
        year: 2026,
        eventos: [
            createEspecial('01/06', '(Seg)', '17:30', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('02/06', '(Ter)', '18:30', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('29/06', '(Seg)', '16:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('30/06', '(Ter)', '18:10', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01-07)
            createTreino('01/06', '(Seg)', '06:00'), createTreino('01/06', '(Seg)', '07:30'), createTreino('01/06', '(Seg)', '12:15'), createTreino('01/06', '(Seg)', '17:40'),
            createTreino('02/06', '(Ter)', '06:00'), createTreino('02/06', '(Ter)', '07:30'), createTreino('02/06', '(Ter)', '17:40'),
            createTreino('03/06', '(Qua)', '06:00'), createTreino('03/06', '(Qua)', '07:30'), createTreino('03/06', '(Qua)', '12:15'), createTreino('03/06', '(Qua)', '17:40'),
            createTreino('04/06', '(Qui)', '06:00'), createTreino('04/06', '(Qui)', '07:30'), createTreino('04/06', '(Qui)', '17:40'), // Corpus Christi com treino
            createTreino('05/06', '(Sex)', '06:00'), createTreino('05/06', '(Sex)', '07:30'), createTreino('05/06', '(Sex)', '12:15'), createTreino('05/06', '(Sex)', '17:40'),

            createEspecial('06/06', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('06/06', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('06/06', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('07/06', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (08-14)
            createTreino('08/06', '(Seg)', '06:00'), createTreino('08/06', '(Seg)', '07:30'), createTreino('08/06', '(Seg)', '12:15'), createTreino('08/06', '(Seg)', '17:40'),
            createTreino('09/06', '(Ter)', '06:00'), createTreino('09/06', '(Ter)', '07:30'), createTreino('09/06', '(Ter)', '17:40'),
            createTreino('10/06', '(Qua)', '06:00'), createTreino('10/06', '(Qua)', '07:30'), createTreino('10/06', '(Qua)', '12:15'), createTreino('10/06', '(Qua)', '17:40'),
            createTreino('11/06', '(Qui)', '06:00'), createTreino('11/06', '(Qui)', '07:30'), createTreino('11/06', '(Qui)', '17:40'),
            createTreino('12/06', '(Sex)', '06:00'), createTreino('12/06', '(Sex)', '07:30'), createTreino('12/06', '(Sex)', '12:15'), createTreino('12/06', '(Sex)', '17:40'),

            createEspecial('13/06', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('13/06', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('13/06', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('14/06', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (15-21)
            createTreino('15/06', '(Seg)', '06:00'), createTreino('15/06', '(Seg)', '07:30'), createTreino('15/06', '(Seg)', '12:15'), createTreino('15/06', '(Seg)', '17:40'),
            createTreino('16/06', '(Ter)', '06:00'), createTreino('16/06', '(Ter)', '07:30'), createTreino('16/06', '(Ter)', '17:40'),
            createTreino('17/06', '(Qua)', '06:00'), createTreino('17/06', '(Qua)', '07:30'), createTreino('17/06', '(Qua)', '12:15'), createTreino('17/06', '(Qua)', '17:40'),
            createTreino('18/06', '(Qui)', '06:00'), createTreino('18/06', '(Qui)', '07:30'), createTreino('18/06', '(Qui)', '17:40'),
            createTreino('19/06', '(Sex)', '06:00'), createTreino('19/06', '(Sex)', '07:30'), createTreino('19/06', '(Sex)', '12:15'), createTreino('19/06', '(Sex)', '17:40'),

            createEspecial('20/06', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('20/06', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('20/06', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('21/06', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (22-28)
            createTreino('22/06', '(Seg)', '06:00'), createTreino('22/06', '(Seg)', '07:30'), createTreino('22/06', '(Seg)', '12:15'), createTreino('22/06', '(Seg)', '17:40'),
            createTreino('23/06', '(Ter)', '06:00'), createTreino('23/06', '(Ter)', '07:30'), createTreino('23/06', '(Ter)', '17:40'),
            createTreino('24/06', '(Qua)', '06:00'), createTreino('24/06', '(Qua)', '07:30'), createTreino('24/06', '(Qua)', '12:15'), createTreino('24/06', '(Qua)', '17:40'),
            createTreino('25/06', '(Qui)', '06:00'), createTreino('25/06', '(Qui)', '07:30'), createTreino('25/06', '(Qui)', '17:40'),
            createTreino('26/06', '(Sex)', '06:00'), createTreino('26/06', '(Sex)', '07:30'), createTreino('26/06', '(Sex)', '12:15'), createTreino('26/06', '(Sex)', '17:40'),

            createEspecial('27/06', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('27/06', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('27/06', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('28/06', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (29-30)
            createTreino('29/06', '(Seg)', '06:00'), createTreino('29/06', '(Seg)', '07:30'), createTreino('29/06', '(Seg)', '12:15'), createTreino('29/06', '(Seg)', '17:40'),
            createTreino('30/06', '(Ter)', '06:00'), createTreino('30/06', '(Ter)', '07:30'), createTreino('30/06', '(Ter)', '17:40'),
        ]
    },
    {
        mes: 'Julho 2026',
        year: 2026,
        eventos: [
            createEspecial('17/07', '(Sex)', '14:00', 'Volta Ilha de Vix 🏝️', 'Viagem', '/cpplua.jpeg', 'Expedição em Vitória.'),
            createEspecial('18/07', '(Sáb)', '08:00', 'Volta Ilha de Vix 🏝️', 'Viagem', '/cpplua.jpeg', 'Expedição em Vitória.'),
            createEspecial('19/07', '(Dom)', '08:00', 'Volta Ilha de Vix 🏝️', 'Viagem', '/cpplua.jpeg', 'Expedição em Vitória.'),
            createEspecial('29/07', '(Qua)', '16:00', 'Remada da Lua Cheia - CPP Extreme 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('29/07', '(Qua)', '17:40', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('30/07', '(Qui)', '17:50', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('31/07', '(Sex)', '18:30', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01-05)
            createTreino('01/07', '(Qua)', '06:00'), createTreino('01/07', '(Qua)', '07:30'), createTreino('01/07', '(Qua)', '12:15'), createTreino('01/07', '(Qua)', '17:40'),
            createTreino('02/07', '(Qui)', '06:00'), createTreino('02/07', '(Qui)', '07:30'), createTreino('02/07', '(Qui)', '17:40'),
            createTreino('03/07', '(Sex)', '06:00'), createTreino('03/07', '(Sex)', '07:30'), createTreino('03/07', '(Sex)', '12:15'), createTreino('03/07', '(Sex)', '17:40'),
            createEspecial('04/07', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('04/07', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('04/07', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('05/07', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (06-12)
            createTreino('06/07', '(Seg)', '06:00'), createTreino('06/07', '(Seg)', '07:30'), createTreino('06/07', '(Seg)', '12:15'), createTreino('06/07', '(Seg)', '17:40'),
            createTreino('07/07', '(Ter)', '06:00'), createTreino('07/07', '(Ter)', '07:30'), createTreino('07/07', '(Ter)', '17:40'),
            createTreino('08/07', '(Qua)', '06:00'), createTreino('08/07', '(Qua)', '07:30'), createTreino('08/07', '(Qua)', '12:15'), createTreino('08/07', '(Qua)', '17:40'),
            createTreino('09/07', '(Qui)', '06:00'), createTreino('09/07', '(Qui)', '07:30'), createTreino('09/07', '(Qui)', '17:40'),
            createTreino('10/07', '(Sex)', '06:00'), createTreino('10/07', '(Sex)', '07:30'), createTreino('10/07', '(Sex)', '12:15'), createTreino('10/07', '(Sex)', '17:40'),
            createEspecial('11/07', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('11/07', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('11/07', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('12/07', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (13-19)
            createTreino('13/07', '(Seg)', '06:00'), createTreino('13/07', '(Seg)', '07:30'), createTreino('13/07', '(Seg)', '12:15'), createTreino('13/07', '(Seg)', '17:40'),
            createTreino('14/07', '(Ter)', '06:00'), createTreino('14/07', '(Ter)', '07:30'), createTreino('14/07', '(Ter)', '17:40'),
            createTreino('15/07', '(Qua)', '06:00'), createTreino('15/07', '(Qua)', '07:30'), createTreino('15/07', '(Qua)', '12:15'), createTreino('15/07', '(Qua)', '17:40'),
            createTreino('16/07', '(Qui)', '06:00'), createTreino('16/07', '(Qui)', '07:30'), createTreino('16/07', '(Qui)', '17:40'),
            // Dia 17 tem viagem, mas pode ter treino em BSB. Mantendo normal.
            createTreino('17/07', '(Sex)', '06:00'), createTreino('17/07', '(Sex)', '07:30'), createTreino('17/07', '(Sex)', '12:15'), createTreino('17/07', '(Sex)', '17:40'),
            createEspecial('18/07', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('18/07', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('18/07', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('19/07', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (20-26)
            createTreino('20/07', '(Seg)', '06:00'), createTreino('20/07', '(Seg)', '07:30'), createTreino('20/07', '(Seg)', '12:15'), createTreino('20/07', '(Seg)', '17:40'),
            createTreino('21/07', '(Ter)', '06:00'), createTreino('21/07', '(Ter)', '07:30'), createTreino('21/07', '(Ter)', '17:40'),
            createTreino('22/07', '(Qua)', '06:00'), createTreino('22/07', '(Qua)', '07:30'), createTreino('22/07', '(Qua)', '12:15'), createTreino('22/07', '(Qua)', '17:40'),
            createTreino('23/07', '(Qui)', '06:00'), createTreino('23/07', '(Qui)', '07:30'), createTreino('23/07', '(Qui)', '17:40'),
            createTreino('24/07', '(Sex)', '06:00'), createTreino('24/07', '(Sex)', '07:30'), createTreino('24/07', '(Sex)', '12:15'), createTreino('24/07', '(Sex)', '17:40'),
            createEspecial('25/07', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('25/07', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('25/07', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('26/07', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (27-31)
            createTreino('27/07', '(Seg)', '06:00'), createTreino('27/07', '(Seg)', '07:30'), createTreino('27/07', '(Seg)', '12:15'), createTreino('27/07', '(Seg)', '17:40'),
            createTreino('28/07', '(Ter)', '06:00'), createTreino('28/07', '(Ter)', '07:30'), createTreino('28/07', '(Ter)', '17:40'),
            createTreino('29/07', '(Qua)', '06:00'), createTreino('29/07', '(Qua)', '07:30'), createTreino('29/07', '(Qua)', '12:15'), createTreino('29/07', '(Qua)', '17:40'),
            createTreino('30/07', '(Qui)', '06:00'), createTreino('30/07', '(Qui)', '07:30'), createTreino('30/07', '(Qui)', '17:40'),
            createTreino('31/07', '(Sex)', '06:00'), createTreino('31/07', '(Sex)', '07:30'), createTreino('31/07', '(Sex)', '12:15'), createTreino('31/07', '(Sex)', '17:40'),
        ]
    },
    {
        mes: 'Agosto 2026',
        year: 2026,
        eventos: [
            createEspecial('27/08', '(Qui)', '16:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('28/08', '(Sex)', '17:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('29/08', '(Sáb)', '18:10', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01-02)
            createEspecial('01/08', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('01/08', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('01/08', '(Sáb)', '17:10', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('02/08', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (03-09)
            createTreino('03/08', '(Seg)', '06:00'), createTreino('03/08', '(Seg)', '07:30'), createTreino('03/08', '(Seg)', '12:15'), createTreino('03/08', '(Seg)', '17:40'),
            createTreino('04/08', '(Ter)', '06:00'), createTreino('04/08', '(Ter)', '07:30'), createTreino('04/08', '(Ter)', '17:40'),
            createTreino('05/08', '(Qua)', '06:00'), createTreino('05/08', '(Qua)', '07:30'), createTreino('05/08', '(Qua)', '12:15'), createTreino('05/08', '(Qua)', '17:40'),
            createTreino('06/08', '(Qui)', '06:00'), createTreino('06/08', '(Qui)', '07:30'), createTreino('06/08', '(Qui)', '17:40'),
            createTreino('07/08', '(Sex)', '06:00'), createTreino('07/08', '(Sex)', '07:30'), createTreino('07/08', '(Sex)', '12:15'), createTreino('07/08', '(Sex)', '17:40'),
            createEspecial('08/08', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('08/08', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('08/08', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('09/08', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (10-16)
            createTreino('10/08', '(Seg)', '06:00'), createTreino('10/08', '(Seg)', '07:30'), createTreino('10/08', '(Seg)', '12:15'), createTreino('10/08', '(Seg)', '17:40'),
            createTreino('11/08', '(Ter)', '06:00'), createTreino('11/08', '(Ter)', '07:30'), createTreino('11/08', '(Ter)', '17:40'),
            createTreino('12/08', '(Qua)', '06:00'), createTreino('12/08', '(Qua)', '07:30'), createTreino('12/08', '(Qua)', '12:15'), createTreino('12/08', '(Qua)', '17:40'),
            createTreino('13/08', '(Qui)', '06:00'), createTreino('13/08', '(Qui)', '07:30'), createTreino('13/08', '(Qui)', '17:40'),
            createTreino('14/08', '(Sex)', '06:00'), createTreino('14/08', '(Sex)', '07:30'), createTreino('14/08', '(Sex)', '12:15'), createTreino('14/08', '(Sex)', '17:40'),
            createEspecial('15/08', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('15/08', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('15/08', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('16/08', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (17-23)
            createTreino('17/08', '(Seg)', '06:00'), createTreino('17/08', '(Seg)', '07:30'), createTreino('17/08', '(Seg)', '12:15'), createTreino('17/08', '(Seg)', '17:40'),
            createTreino('18/08', '(Ter)', '06:00'), createTreino('18/08', '(Ter)', '07:30'), createTreino('18/08', '(Ter)', '17:40'),
            createTreino('19/08', '(Qua)', '06:00'), createTreino('19/08', '(Qua)', '07:30'), createTreino('19/08', '(Qua)', '12:15'), createTreino('19/08', '(Qua)', '17:40'),
            createTreino('20/08', '(Qui)', '06:00'), createTreino('20/08', '(Qui)', '07:30'), createTreino('20/08', '(Qui)', '17:40'),
            createTreino('21/08', '(Sex)', '06:00'), createTreino('21/08', '(Sex)', '07:30'), createTreino('21/08', '(Sex)', '12:15'), createTreino('21/08', '(Sex)', '17:40'),
            createEspecial('22/08', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('22/08', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('22/08', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('23/08', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (24-31)
            createTreino('24/08', '(Seg)', '06:00'), createTreino('24/08', '(Seg)', '07:30'), createTreino('24/08', '(Seg)', '12:15'), createTreino('24/08', '(Seg)', '17:40'),
            createTreino('25/08', '(Ter)', '06:00'), createTreino('25/08', '(Ter)', '07:30'), createTreino('25/08', '(Ter)', '17:40'),
            createTreino('26/08', '(Qua)', '06:00'), createTreino('26/08', '(Qua)', '07:30'), createTreino('26/08', '(Qua)', '12:15'), createTreino('26/08', '(Qua)', '17:40'),
            createTreino('27/08', '(Qui)', '06:00'), createTreino('27/08', '(Qui)', '07:30'), createTreino('27/08', '(Qui)', '17:40'),
            createTreino('28/08', '(Sex)', '06:00'), createTreino('28/08', '(Sex)', '07:30'), createTreino('28/08', '(Sex)', '12:15'), createTreino('28/08', '(Sex)', '17:40'),
            createEspecial('29/08', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('29/08', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('30/08', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),
            createTreino('31/08', '(Seg)', '06:00'), createTreino('31/08', '(Seg)', '07:30'), createTreino('31/08', '(Seg)', '12:15'), createTreino('31/08', '(Seg)', '17:40'),
        ]
    },
    {
        mes: 'Setembro 2026',
        year: 2026,
        eventos: [
            createEspecial('26/09', '(Sáb)', '17:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('27/09', '(Dom)', '18:00', 'Remada da Lua Cheia - CPP Extreme 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('28/09', '(Seg)', '19:00', 'Remada da Lua Cheia - CPP Extreme 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01-06)
            createTreino('01/09', '(Ter)', '06:00'), createTreino('01/09', '(Ter)', '07:30'), createTreino('01/09', '(Ter)', '17:40'),
            createTreino('02/09', '(Qua)', '06:00'), createTreino('02/09', '(Qua)', '07:30'), createTreino('02/09', '(Qua)', '12:15'), createTreino('02/09', '(Qua)', '17:40'),
            createTreino('03/09', '(Qui)', '06:00'), createTreino('03/09', '(Qui)', '07:30'), createTreino('03/09', '(Qui)', '17:40'),
            createTreino('04/09', '(Sex)', '06:00'), createTreino('04/09', '(Sex)', '07:30'), createTreino('04/09', '(Sex)', '12:15'), createTreino('04/09', '(Sex)', '17:40'),
            createEspecial('05/09', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('05/09', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('05/09', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('06/09', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (07-13)
            createTreino('07/09', '(Seg)', '06:00'), createTreino('07/09', '(Seg)', '07:30'), createTreino('07/09', '(Seg)', '12:15'), createTreino('07/09', '(Seg)', '17:40'), // Feriado com treino
            createTreino('08/09', '(Ter)', '06:00'), createTreino('08/09', '(Ter)', '07:30'), createTreino('08/09', '(Ter)', '17:40'),
            createTreino('09/09', '(Qua)', '06:00'), createTreino('09/09', '(Qua)', '07:30'), createTreino('09/09', '(Qua)', '12:15'), createTreino('09/09', '(Qua)', '17:40'),
            createTreino('10/09', '(Qui)', '06:00'), createTreino('10/09', '(Qui)', '07:30'), createTreino('10/09', '(Qui)', '17:40'),
            createTreino('11/09', '(Sex)', '06:00'), createTreino('11/09', '(Sex)', '07:30'), createTreino('11/09', '(Sex)', '12:15'), createTreino('11/09', '(Sex)', '17:40'),
            createEspecial('12/09', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('12/09', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('12/09', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('13/09', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (14-20)
            createTreino('14/09', '(Seg)', '06:00'), createTreino('14/09', '(Seg)', '07:30'), createTreino('14/09', '(Seg)', '12:15'), createTreino('14/09', '(Seg)', '17:40'),
            createTreino('15/09', '(Ter)', '06:00'), createTreino('15/09', '(Ter)', '07:30'), createTreino('15/09', '(Ter)', '17:40'),
            createTreino('16/09', '(Qua)', '06:00'), createTreino('16/09', '(Qua)', '07:30'), createTreino('16/09', '(Qua)', '12:15'), createTreino('16/09', '(Qua)', '17:40'),
            createTreino('17/09', '(Qui)', '06:00'), createTreino('17/09', '(Qui)', '07:30'), createTreino('17/09', '(Qui)', '17:40'),
            createTreino('18/09', '(Sex)', '06:00'), createTreino('18/09', '(Sex)', '07:30'), createTreino('18/09', '(Sex)', '12:15'), createTreino('18/09', '(Sex)', '17:40'),
            createEspecial('19/09', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('19/09', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('19/09', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('20/09', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (21-27)
            createTreino('21/09', '(Seg)', '06:00'), createTreino('21/09', '(Seg)', '07:30'), createTreino('21/09', '(Seg)', '12:15'), createTreino('21/09', '(Seg)', '17:40'),
            createTreino('22/09', '(Ter)', '06:00'), createTreino('22/09', '(Ter)', '07:30'), createTreino('22/09', '(Ter)', '17:40'),
            createTreino('23/09', '(Qua)', '06:00'), createTreino('23/09', '(Qua)', '07:30'), createTreino('23/09', '(Qua)', '12:15'), createTreino('23/09', '(Qua)', '17:40'),
            createTreino('24/09', '(Qui)', '06:00'), createTreino('24/09', '(Qui)', '07:30'), createTreino('24/09', '(Qui)', '17:40'),
            createTreino('25/09', '(Sex)', '06:00'), createTreino('25/09', '(Sex)', '07:30'), createTreino('25/09', '(Sex)', '12:15'), createTreino('25/09', '(Sex)', '17:40'),
            createEspecial('26/09', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('26/09', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('26/09', '(Sáb)', '17:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('27/09', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (28-30)
            createTreino('28/09', '(Seg)', '06:00'), createTreino('28/09', '(Seg)', '07:30'), createTreino('28/09', '(Seg)', '12:15'), createTreino('28/09', '(Seg)', '17:40'),
            createTreino('29/09', '(Ter)', '06:00'), createTreino('29/09', '(Ter)', '07:30'), createTreino('29/09', '(Ter)', '17:40'),
            createTreino('30/09', '(Qua)', '06:00'), createTreino('30/09', '(Qua)', '07:30'), createTreino('30/09', '(Qua)', '12:15'), createTreino('30/09', '(Qua)', '17:40'),
        ]
    },
    {
        mes: 'Outubro 2026',
        year: 2026,
        eventos: [
            createEspecial('26/10', '(Seg)', '16:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('27/10', '(Ter)', '17:30', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('27/10', '(Ter)', '19:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01-04)
            createTreino('01/10', '(Qui)', '06:00'), createTreino('01/10', '(Qui)', '07:30'), createTreino('01/10', '(Qui)', '17:40'),
            createTreino('02/10', '(Sex)', '06:00'), createTreino('02/10', '(Sex)', '07:30'), createTreino('02/10', '(Sex)', '12:15'), createTreino('02/10', '(Sex)', '17:40'),
            createEspecial('03/10', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('03/10', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('03/10', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('04/10', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (05-11)
            createTreino('05/10', '(Seg)', '06:00'), createTreino('05/10', '(Seg)', '07:30'), createTreino('05/10', '(Seg)', '12:15'), createTreino('05/10', '(Seg)', '17:40'),
            createTreino('06/10', '(Ter)', '06:00'), createTreino('06/10', '(Ter)', '07:30'), createTreino('06/10', '(Ter)', '17:40'),
            createTreino('07/10', '(Qua)', '06:00'), createTreino('07/10', '(Qua)', '07:30'), createTreino('07/10', '(Qua)', '12:15'), createTreino('07/10', '(Qua)', '17:40'),
            createTreino('08/10', '(Qui)', '06:00'), createTreino('08/10', '(Qui)', '07:30'), createTreino('08/10', '(Qui)', '17:40'),
            createTreino('09/10', '(Sex)', '06:00'), createTreino('09/10', '(Sex)', '07:30'), createTreino('09/10', '(Sex)', '12:15'), createTreino('09/10', '(Sex)', '17:40'),
            createEspecial('10/10', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('10/10', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('10/10', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('11/10', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (12-18)
            createTreino('12/10', '(Seg)', '06:00'), createTreino('12/10', '(Seg)', '07:30'), createTreino('12/10', '(Seg)', '12:15'), createTreino('12/10', '(Seg)', '17:40'), // Feriado com treino
            createTreino('13/10', '(Ter)', '06:00'), createTreino('13/10', '(Ter)', '07:30'), createTreino('13/10', '(Ter)', '17:40'),
            createTreino('14/10', '(Qua)', '06:00'), createTreino('14/10', '(Qua)', '07:30'), createTreino('14/10', '(Qua)', '12:15'), createTreino('14/10', '(Qua)', '17:40'),
            createTreino('15/10', '(Qui)', '06:00'), createTreino('15/10', '(Qui)', '07:30'), createTreino('15/10', '(Qui)', '17:40'),
            createTreino('16/10', '(Sex)', '06:00'), createTreino('16/10', '(Sex)', '07:30'), createTreino('16/10', '(Sex)', '12:15'), createTreino('16/10', '(Sex)', '17:40'),
            createEspecial('17/10', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('17/10', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('17/10', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('18/10', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (19-25)
            createTreino('19/10', '(Seg)', '06:00'), createTreino('19/10', '(Seg)', '07:30'), createTreino('19/10', '(Seg)', '12:15'), createTreino('19/10', '(Seg)', '17:40'),
            createTreino('20/10', '(Ter)', '06:00'), createTreino('20/10', '(Ter)', '07:30'), createTreino('20/10', '(Ter)', '17:40'),
            createTreino('21/10', '(Qua)', '06:00'), createTreino('21/10', '(Qua)', '07:30'), createTreino('21/10', '(Qua)', '12:15'), createTreino('21/10', '(Qua)', '17:40'),
            createTreino('22/10', '(Qui)', '06:00'), createTreino('22/10', '(Qui)', '07:30'), createTreino('22/10', '(Qui)', '17:40'),
            createTreino('23/10', '(Sex)', '06:00'), createTreino('23/10', '(Sex)', '07:30'), createTreino('23/10', '(Sex)', '12:15'), createTreino('23/10', '(Sex)', '17:40'),
            createEspecial('24/10', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('24/10', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('24/10', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('25/10', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (26-31)
            createTreino('26/10', '(Seg)', '06:00'), createTreino('26/10', '(Seg)', '07:30'), createTreino('26/10', '(Seg)', '12:15'), createTreino('26/10', '(Seg)', '17:40'),
            createTreino('27/10', '(Ter)', '06:00'), createTreino('27/10', '(Ter)', '07:30'), createTreino('27/10', '(Ter)', '17:40'),
            createTreino('28/10', '(Qua)', '06:00'), createTreino('28/10', '(Qua)', '07:30'), createTreino('28/10', '(Qua)', '12:15'), createTreino('28/10', '(Qua)', '17:40'),
            createTreino('29/10', '(Qui)', '06:00'), createTreino('29/10', '(Qui)', '07:30'), createTreino('29/10', '(Qui)', '17:40'),
            createTreino('30/10', '(Sex)', '06:00'), createTreino('30/10', '(Sex)', '07:30'), createTreino('30/10', '(Sex)', '12:15'), createTreino('30/10', '(Sex)', '17:40'),
            createEspecial('31/10', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('31/10', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('31/10', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
        ]
    },
    {
        mes: 'Novembro 2026',
        year: 2026,
        eventos: [
            createEspecial('24/11', '(Ter)', '16:20', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('24/11', '(Ter)', '18:50', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('25/11', '(Qua)', '20:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),
            createEspecial('26/11', '(Qui)', '20:00', 'Remada da Lua Cheia 🌕', 'Especial', '/lualua.jpg', ''),

            // Semana 1 (01)
            createEspecial('01/11', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (02-08)
            createTreino('02/11', '(Seg)', '06:00'), createTreino('02/11', '(Seg)', '07:30'), createTreino('02/11', '(Seg)', '12:15'), createTreino('02/11', '(Seg)', '17:40'), // Finados com treino
            createTreino('03/11', '(Ter)', '06:00'), createTreino('03/11', '(Ter)', '07:30'), createTreino('03/11', '(Ter)', '17:40'),
            createTreino('04/11', '(Qua)', '06:00'), createTreino('04/11', '(Qua)', '07:30'), createTreino('04/11', '(Qua)', '12:15'), createTreino('04/11', '(Qua)', '17:40'),
            createTreino('05/11', '(Qui)', '06:00'), createTreino('05/11', '(Qui)', '07:30'), createTreino('05/11', '(Qui)', '17:40'),
            createTreino('06/11', '(Sex)', '06:00'), createTreino('06/11', '(Sex)', '07:30'), createTreino('06/11', '(Sex)', '12:15'), createTreino('06/11', '(Sex)', '17:40'),
            createEspecial('07/11', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('07/11', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('07/11', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('08/11', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 3 (09-15)
            createTreino('09/11', '(Seg)', '06:00'), createTreino('09/11', '(Seg)', '07:30'), createTreino('09/11', '(Seg)', '12:15'), createTreino('09/11', '(Seg)', '17:40'),
            createTreino('10/11', '(Ter)', '06:00'), createTreino('10/11', '(Ter)', '07:30'), createTreino('10/11', '(Ter)', '17:40'),
            createTreino('11/11', '(Qua)', '06:00'), createTreino('11/11', '(Qua)', '07:30'), createTreino('11/11', '(Qua)', '12:15'), createTreino('11/11', '(Qua)', '17:40'),
            createTreino('12/11', '(Qui)', '06:00'), createTreino('12/11', '(Qui)', '07:30'), createTreino('12/11', '(Qui)', '17:40'),
            createTreino('13/11', '(Sex)', '06:00'), createTreino('13/11', '(Sex)', '07:30'), createTreino('13/11', '(Sex)', '12:15'), createTreino('13/11', '(Sex)', '17:40'),
            createEspecial('14/11', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('14/11', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('14/11', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('15/11', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (16-22)
            createTreino('16/11', '(Seg)', '06:00'), createTreino('16/11', '(Seg)', '07:30'), createTreino('16/11', '(Seg)', '12:15'), createTreino('16/11', '(Seg)', '17:40'),
            createTreino('17/11', '(Ter)', '06:00'), createTreino('17/11', '(Ter)', '07:30'), createTreino('17/11', '(Ter)', '17:40'),
            createTreino('18/11', '(Qua)', '06:00'), createTreino('18/11', '(Qua)', '07:30'), createTreino('18/11', '(Qua)', '12:15'), createTreino('18/11', '(Qua)', '17:40'),
            createTreino('19/11', '(Qui)', '06:00'), createTreino('19/11', '(Qui)', '07:30'), createTreino('19/11', '(Qui)', '17:40'),
            createTreino('20/11', '(Sex)', '06:00'), createTreino('20/11', '(Sex)', '07:30'), createTreino('20/11', '(Sex)', '12:15'), createTreino('20/11', '(Sex)', '17:40'),
            createEspecial('21/11', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('21/11', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('21/11', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('22/11', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 5 (23-30)
            createTreino('23/11', '(Seg)', '06:00'), createTreino('23/11', '(Seg)', '07:30'), createTreino('23/11', '(Seg)', '12:15'), createTreino('23/11', '(Seg)', '17:40'),
            createTreino('24/11', '(Ter)', '06:00'), createTreino('24/11', '(Ter)', '07:30'), createTreino('24/11', '(Ter)', '17:40'),
            createTreino('25/11', '(Qua)', '06:00'), createTreino('25/11', '(Qua)', '07:30'), createTreino('25/11', '(Qua)', '12:15'), createTreino('25/11', '(Qua)', '17:40'),
            createTreino('26/11', '(Qui)', '06:00'), createTreino('26/11', '(Qui)', '07:30'), createTreino('26/11', '(Qui)', '17:40'),
            createTreino('27/11', '(Sex)', '06:00'), createTreino('27/11', '(Sex)', '07:30'), createTreino('27/11', '(Sex)', '12:15'), createTreino('27/11', '(Sex)', '17:40'),
            createEspecial('28/11', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('28/11', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('28/11', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('29/11', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),
            createTreino('30/11', '(Seg)', '06:00'), createTreino('30/11', '(Seg)', '07:30'), createTreino('30/11', '(Seg)', '12:15'), createTreino('30/11', '(Seg)', '17:40'),
        ]
    },
    {
        mes: 'Dezembro 2026',
        year: 2026,
        eventos: [
            createEspecial('11/12', '(Sex)', '10:00', 'Volta Ilhabela 🏝️', 'Viagem', '/cpplua.jpeg', 'Expedição.'),
            createEspecial('13/12', '(Dom)', '10:00', 'Volta Ilhabela - Chegada 🏝️', 'Viagem', '/cpplua.jpeg', ''),

            // Semana 1 (01-06)
            createTreino('01/12', '(Ter)', '06:00'), createTreino('01/12', '(Ter)', '07:30'), createTreino('01/12', '(Ter)', '17:40'),
            createTreino('02/12', '(Qua)', '06:00'), createTreino('02/12', '(Qua)', '07:30'), createTreino('02/12', '(Qua)', '12:15'), createTreino('02/12', '(Qua)', '17:40'),
            createTreino('03/12', '(Qui)', '06:00'), createTreino('03/12', '(Qui)', '07:30'), createTreino('03/12', '(Qui)', '17:40'),
            createTreino('04/12', '(Sex)', '06:00'), createTreino('04/12', '(Sex)', '07:30'), createTreino('04/12', '(Sex)', '12:15'), createTreino('04/12', '(Sex)', '17:40'),
            createEspecial('05/12', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('05/12', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('05/12', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('06/12', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 2 (07-13)
            createTreino('07/12', '(Seg)', '06:00'), createTreino('07/12', '(Seg)', '07:30'), createTreino('07/12', '(Seg)', '12:15'), createTreino('07/12', '(Seg)', '17:40'),
            createTreino('08/12', '(Ter)', '06:00'), createTreino('08/12', '(Ter)', '07:30'), createTreino('08/12', '(Ter)', '17:40'),
            createTreino('09/12', '(Qua)', '06:00'), createTreino('09/12', '(Qua)', '07:30'), createTreino('09/12', '(Qua)', '12:15'), createTreino('09/12', '(Qua)', '17:40'),
            createTreino('10/12', '(Qui)', '06:00'), createTreino('10/12', '(Qui)', '07:30'), createTreino('10/12', '(Qui)', '17:40'),
            // Dia 11: Sexta-feira com Viagem Volta Ilhabela, mas pode ter treino em BSB? Vou manter.
            createTreino('11/12', '(Sex)', '06:00'), createTreino('11/12', '(Sex)', '07:30'), createTreino('11/12', '(Sex)', '12:15'), createTreino('11/12', '(Sex)', '17:40'),
            createEspecial('12/12', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('12/12', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('12/12', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            // Dia 13: Apenas chegada da volta a ilha, sem remada contemplativa

            // Semana 3 (14-20)
            createTreino('14/12', '(Seg)', '06:00'), createTreino('14/12', '(Seg)', '07:30'), createTreino('14/12', '(Seg)', '12:15'), createTreino('14/12', '(Seg)', '17:40'),
            createTreino('15/12', '(Ter)', '06:00'), createTreino('15/12', '(Ter)', '07:30'), createTreino('15/12', '(Ter)', '17:40'),
            createTreino('16/12', '(Qua)', '06:00'), createTreino('16/12', '(Qua)', '07:30'), createTreino('16/12', '(Qua)', '12:15'), createTreino('16/12', '(Qua)', '17:40'),
            createTreino('17/12', '(Qui)', '06:00'), createTreino('17/12', '(Qui)', '07:30'), createTreino('17/12', '(Qui)', '17:40'),
            createTreino('18/12', '(Sex)', '06:00'), createTreino('18/12', '(Sex)', '07:30'), createTreino('18/12', '(Sex)', '12:15'), createTreino('18/12', '(Sex)', '17:40'),
            createEspecial('19/12', '(Sáb)', '05:00', 'Remada do Nascer do Sol', 'Energia', '/lualua.jpg', ''),
            createEspecial('19/12', '(Sáb)', '09:30', 'Remada Contemplativa CPP', 'Lazer', '/cpplua.jpeg', ''),
            createEspecial('19/12', '(Sáb)', '17:40', 'Remada Pôr do Sol', 'Visual', '/lualua2.jpg', ''),
            createEspecial('20/12', '(Dom)', '11:00', 'Remada Contemplativa', 'Lazer', '/cpplua.jpeg', ''),

            // Semana 4 (21-26) - Natal
            createTreino('21/12', '(Seg)', '06:00'), createTreino('21/12', '(Seg)', '07:30'), createTreino('21/12', '(Seg)', '12:15'), createTreino('21/12', '(Seg)', '17:40'),
            createTreino('22/12', '(Ter)', '06:00'), createTreino('22/12', '(Ter)', '07:30'), createTreino('22/12', '(Ter)', '17:40'),
            createTreino('23/12', '(Qua)', '06:00'), createTreino('23/12', '(Qua)', '07:30'), createTreino('23/12', '(Qua)', '12:15'), createTreino('23/12', '(Qua)', '17:40'),
            // Dia 24 (Véspera): Apenas manhã
            createTreino('24/12', '(Qui)', '06:00'), createTreino('24/12', '(Qui)', '07:30'),

        ]
    }
]

// Função que apenas processa os dados manuais para o formato final
const generateAllEvents = (): Evento[] => {
    const events: Evento[] = []

    rawData.forEach(grupo => {
        grupo.eventos.forEach((ev, idx) => {
            // O ano vem do grupo (2026)
            const dateString = `${ev.dataStr}/${grupo.year}`
            // parse do date-fns para criar objeto Date
            const dateObj = parse(dateString, 'dd/MM/yyyy', new Date())

            if (isValid(dateObj)) {
                events.push({
                    id: `${grupo.mes}-${idx}`,
                    dateObj,
                    dataDisplay: `${ev.dataStr} ${ev.diaSemana}`,
                    horario: ev.horario,
                    atividade: ev.atividade,
                    badge: ev.badge,
                    imagem: ev.imagem,
                    descricao: ev.descricao
                })
            }
        })
    })

    // Ordenar cronologicamente
    return events.sort((a, b) => {
        const dateDiff = a.dateObj.getTime() - b.dateObj.getTime()
        if (dateDiff !== 0) return dateDiff
        // Ordena por horário se for o mesmo dia
        return a.horario.localeCompare(b.horario)
    })
}

export const allEvents = generateAllEvents()