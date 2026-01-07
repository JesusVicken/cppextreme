import { parse, isValid, getDay, format, getDate } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

const eventosEspeciais = [
    {
        mes: 'Janeiro 2026',
        year: 2026,
        eventos: [
            { dataStr: '10/01', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Comece o dia recarregando as energias com o nascer do sol no Lago Paranoá.' },
            { dataStr: '10/01', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Um passeio tranquilo para apreciar a natureza e relaxar nas águas.' },
            { dataStr: '10/01', diaSemana: '(Sáb)', horario: '16:00', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Contemple o pôr do sol mais bonito de Brasília de dentro da canoa.' },
            { dataStr: '11/01', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo é dia de relaxar. Venha remar sem pressa.' },
            { dataStr: '17/01', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'A melhor forma de começar o final de semana.' },
            { dataStr: '17/01', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Curta a manhã de sábado com uma remada leve.' },
            { dataStr: '17/01', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour no lago. Experiência inesquecível.' },
            { dataStr: '18/01', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Remada para toda a família.' },
            { dataStr: '24/01', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Desperte com o sol nascendo no horizonte.' },
            { dataStr: '24/01', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Conexão com a natureza e esporte.' },
            { dataStr: '24/01', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Encerre o dia com chave de ouro.' },
            { dataStr: '25/01', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Atividade relaxante para o seu domingo.' },
            { dataStr: '31/01', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Último nascer do sol de janeiro. Aproveite!' },
            { dataStr: '31/01', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Manhã de sol e água fresca.' },
            { dataStr: '31/01', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Despeça-se de janeiro com um visual incrível.' },
        ]
    },
    {
        mes: 'Fevereiro 2026',
        year: 2026,
        eventos: [
            { dataStr: '01/02', diaSemana: '(Dom)', horario: '17:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Experiência mágica remando sob a luz da lua cheia.' },
            { dataStr: '02/02', diaSemana: '(Seg)', horario: '18:00', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Contemple o nascer da lua de dentro do lago.' },
            { dataStr: '03/02', diaSemana: '(Ter)', horario: '19:00', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Última chance de curtir a lua cheia de fevereiro.' },
            { dataStr: '07/02', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol incrível no lago.' },
            { dataStr: '07/02', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '07/02', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '08/02', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '14/02', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol incrível no lago.' },
            { dataStr: '14/02', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '14/02', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '15/02', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '21/02', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol incrível no lago.' },
            { dataStr: '21/02', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '21/02', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '22/02', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '28/02', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol incrível no lago.' },
            { dataStr: '28/02', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '28/02', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
        ]
    },
    {
        mes: 'Março 2026',
        year: 2026,
        eventos: [
            { dataStr: '06/03', diaSemana: '(Sex)', horario: '08:00', atividade: 'Sprint Seletiva 🏆', badge: 'Competição', imagem: '/cpplua.jpeg', descricao: 'Seletiva de Sprint para atletas.' },
            { dataStr: '07/03', diaSemana: '(Sáb)', horario: '08:00', atividade: 'Sprint Seletiva 🏆', badge: 'Competição', imagem: '/cpplua.jpeg', descricao: 'Continuação da Seletiva de Sprint.' },
            { dataStr: '08/03', diaSemana: '(Dom)', horario: '08:00', atividade: 'Sprint Seletiva 🏆', badge: 'Competição', imagem: '/cpplua.jpeg', descricao: 'Finais da Seletiva de Sprint.' },
            { dataStr: '02/03', diaSemana: '(Seg)', horario: '16:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia.' },
            { dataStr: '03/03', diaSemana: '(Ter)', horario: '17:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia.' },
            { dataStr: '04/03', diaSemana: '(Qua)', horario: '18:00', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia.' },
            { dataStr: '05/03', diaSemana: '(Qui)', horario: '18:50', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia.' },
            { dataStr: '07/03', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '07/03', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '07/03', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '08/03', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '14/03', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '14/03', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '14/03', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '15/03', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '21/03', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '21/03', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '21/03', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '22/03', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '28/03', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '28/03', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '28/03', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '29/03', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
        ]
    },
    {
        mes: 'Abril 2026',
        year: 2026,
        eventos: [
            { dataStr: '01/04', diaSemana: '(Qua)', horario: '16:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial sob a luz do luar.' },
            { dataStr: '01/04', diaSemana: '(Qua)', horario: '17:40', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Experiência noturna no lago.' },
            { dataStr: '02/04', diaSemana: '(Qui)', horario: '17:40', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Contemple a lua cheia de abril.' },
            { dataStr: '03/04', diaSemana: '(Sex)', horario: '17:40', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Sexta-feira de lua cheia.' },
            { dataStr: '11/04', diaSemana: '(Sáb)', horario: '07:00', atividade: 'Brasileiro de Va\'a OC6 🏆', badge: 'Competição', imagem: '/cpplua.jpeg', descricao: 'Campeonato Brasileiro de Va\'a OC6. Venha torcer ou competir!' },
            { dataStr: '12/04', diaSemana: '(Dom)', horario: '07:00', atividade: 'Brasileiro de Va\'a OC6 🏆', badge: 'Competição', imagem: '/cpplua.jpeg', descricao: 'Segundo dia do Campeonato Brasileiro de Va\'a OC6.' },
            { dataStr: '25/04', diaSemana: '(Sáb)', horario: '06:00', atividade: 'Volta ao Lago CPP Revezamento 🚣‍♀️', badge: 'Desafio', imagem: '/cpplua.jpeg', descricao: 'Desafio de revezamento Volta ao Lago. Prepare sua equipe!' },
            { dataStr: '30/04', diaSemana: '(Qui)', horario: '17:40', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia.' },
            { dataStr: '04/04', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '04/04', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '04/04', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '05/04', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '11/04', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '11/04', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '11/04', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '18/04', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '18/04', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '18/04', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '19/04', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '25/04', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '25/04', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '26/04', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
        ]
    },
    {
        mes: 'Maio 2026',
        year: 2026,
        eventos: [
            { dataStr: '01/05', diaSemana: '(Sex)', horario: '16:30', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
            { dataStr: '02/05', diaSemana: '(Sáb)', horario: '17:10', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
            { dataStr: '03/05', diaSemana: '(Dom)', horario: '17:40', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
            { dataStr: '04/05', diaSemana: '(Seg)', horario: '19:00', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
            { dataStr: '02/05', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '02/05', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '03/05', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '09/05', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '09/05', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '09/05', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '10/05', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '16/05', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '16/05', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '16/05', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '17/05', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '23/05', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '23/05', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '23/05', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '24/05', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '30/05', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '30/05', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '30/05', diaSemana: '(Sáb)', horario: '16:00', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '31/05', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '31/05', diaSemana: '(Dom)', horario: '16:40', atividade: 'Remada da Lua Cheia - Blue Moon 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Evento especial Blue Moon.' }
        ]
    },
    {
        mes: 'Junho 2026',
        year: 2026,
        eventos: [
            { dataStr: '01/06', diaSemana: '(Seg)', horario: '17:30', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
            { dataStr: '02/06', diaSemana: '(Ter)', horario: '18:30', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
            { dataStr: '06/06', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '06/06', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '06/06', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '07/06', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '13/06', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '13/06', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '13/06', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '14/06', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '20/06', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '20/06', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '20/06', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '21/06', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '27/06', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '27/06', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '27/06', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '28/06', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '29/06', diaSemana: '(Seg)', horario: '16:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
            { dataStr: '30/06', diaSemana: '(Ter)', horario: '18:10', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia - CPP Extreme.' },
        ]
    },
    {
        mes: 'Julho 2026',
        year: 2026,
        eventos: [
            { dataStr: '04/07', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '04/07', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '04/07', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '05/07', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '11/07', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '11/07', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '11/07', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '12/07', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '17/07', diaSemana: '(Sex)', horario: '14:00', atividade: 'Volta Ilha de Vix 🏝️', badge: 'Viagem', imagem: '/cpplua.jpeg', descricao: 'Expedição Volta à Ilha de Vitória.' },
            { dataStr: '18/07', diaSemana: '(Sáb)', horario: '08:00', atividade: 'Volta Ilha de Vix 🏝️', badge: 'Viagem', imagem: '/cpplua.jpeg', descricao: 'Segundo dia da expedição em Vitória.' },
            { dataStr: '19/07', diaSemana: '(Dom)', horario: '08:00', atividade: 'Volta Ilha de Vix 🏝️', badge: 'Viagem', imagem: '/cpplua.jpeg', descricao: 'Encerramento da expedição.' },
            { dataStr: '18/07', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol em BSB.' },
            { dataStr: '18/07', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante em BSB.' },
            { dataStr: '18/07', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour em BSB.' },
            { dataStr: '19/07', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax em BSB.' },
            { dataStr: '25/07', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '25/07', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '25/07', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '26/07', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '29/07', diaSemana: '(Qua)', horario: '16:00', atividade: 'Remada da Lua Cheia - CPP Extreme 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia.' },
            { dataStr: '29/07', diaSemana: '(Qua)', horario: '17:40', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia.' },
            { dataStr: '30/07', diaSemana: '(Qui)', horario: '17:50', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia.' },
            { dataStr: '31/07', diaSemana: '(Sex)', horario: '18:30', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia.' },
        ]
    },
    {
        mes: 'Agosto 2026',
        year: 2026,
        eventos: [
            { dataStr: '01/08', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '01/08', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '01/08', diaSemana: '(Sáb)', horario: '17:10', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '02/08', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '08/08', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '08/08', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '08/08', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '09/08', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '15/08', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '15/08', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '15/08', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '16/08', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '22/08', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '22/08', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '22/08', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '23/08', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '27/08', diaSemana: '(Qui)', horario: '16:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '28/08', diaSemana: '(Sex)', horario: '17:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '29/08', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '29/08', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '29/08', diaSemana: '(Sáb)', horario: '18:10', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '30/08', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
        ]
    },
    {
        mes: 'Setembro 2026',
        year: 2026,
        eventos: [
            { dataStr: '05/09', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '05/09', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '05/09', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '06/09', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '12/09', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '12/09', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '12/09', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '13/09', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '19/09', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '19/09', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '19/09', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '20/09', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '26/09', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '26/09', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '26/09', diaSemana: '(Sáb)', horario: '17:00', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '27/09', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '27/09', diaSemana: '(Dom)', horario: '18:00', atividade: 'Remada da Lua Cheia - CPP Extreme 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia.' },
            { dataStr: '28/09', diaSemana: '(Seg)', horario: '19:00', atividade: 'Remada da Lua Cheia - CPP Extreme 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada especial de Lua Cheia.' },
        ]
    },
    {
        mes: 'Outubro 2026',
        year: 2026,
        eventos: [
            { dataStr: '03/10', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '03/10', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '03/10', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '04/10', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '10/10', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '10/10', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '10/10', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '11/10', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '17/10', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '17/10', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '17/10', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '18/10', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '24/10', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '24/10', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '24/10', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
            { dataStr: '25/10', diaSemana: '(Dom)', horario: '11:00', atividade: 'Remada Contemplativa', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Domingo relax.' },
            { dataStr: '26/10', diaSemana: '(Seg)', horario: '16:20', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '27/10', diaSemana: '(Ter)', horario: '17:30', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '27/10', diaSemana: '(Ter)', horario: '19:00', atividade: 'Remada da Lua Cheia 🌕', badge: 'Especial', imagem: '/lualua.jpg', descricao: 'Remada da Lua Cheia - CPP Extreme.' },
            { dataStr: '31/10', diaSemana: '(Sáb)', horario: '05:00', atividade: 'Remada do Nascer do Sol 🌅', badge: 'Energia', imagem: '/lualua.jpg', descricao: 'Nascer do sol.' },
            { dataStr: '31/10', diaSemana: '(Sáb)', horario: '09:30', atividade: 'Remada Contemplativa CPP', badge: 'Lazer', imagem: '/cpplua.jpeg', descricao: 'Passeio relaxante.' },
            { dataStr: '31/10', diaSemana: '(Sáb)', horario: '17:40', atividade: 'Remada Pôr do Sol', badge: 'Visual', imagem: '/lualua2.jpg', descricao: 'Golden hour.' },
        ]
    }
]

const generateAllEvents = (): Evento[] => {
    const events: Evento[] = []

    // 1. Adicionar eventos manuais (Experiências e Luas)
    eventosEspeciais.forEach(grupo => {
        grupo.eventos.forEach((ev, idx) => {
            const dateString = `${ev.dataStr}/${grupo.year}`
            const dateObj = parse(dateString, 'dd/MM/yyyy', new Date())
            if (isValid(dateObj)) {
                events.push({
                    id: `esp-${grupo.mes}-${idx}`,
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

    // 2. Gerar Treinos de Rotina para O ANO TODO (Jan a Dez 2026)
    // 0 = Jan, 11 = Dez
    const mesesParaGerar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    mesesParaGerar.forEach(mesIndex => {
        const ano = 2026
        const diasNoMes = new Date(ano, mesIndex + 1, 0).getDate()

        for (let d = 1; d <= diasNoMes; d++) {
            const currentData = new Date(ano, mesIndex, d)
            const diaSemana = getDay(currentData)
            const diaMes = getDate(currentData)

            if (diaSemana >= 1 && diaSemana <= 5) {
                const diaFormatado = format(currentData, 'dd/MM', { locale: ptBR })
                const diaSemanaStr = format(currentData, '(EEE)', { locale: ptBR })
                let horariosDoDia: string[] = []

                if (mesIndex === 0) {
                    // JANEIRO
                    horariosDoDia = ['06:00', '07:30', '12:15']
                } else {
                    // FEVEREIRO A DEZEMBRO (Padrão 2026)
                    // Seg, Qua, Sex: 06:00, 07:30, 12:15, 17:40
                    if (diaSemana === 1 || diaSemana === 3 || diaSemana === 5) {
                        horariosDoDia = ['06:00', '07:30', '12:15', '17:40']
                    }
                    // Ter, Qui: 06:00, 07:30, 17:40 (Sem 12:15)
                    else {
                        horariosDoDia = ['06:00', '07:30', '17:40']
                    }
                }

                horariosDoDia.forEach((horario, idx) => {
                    events.push({
                        id: `treino-${mesIndex}-${d}-${idx}`,
                        dateObj: currentData,
                        dataDisplay: `${diaFormatado} ${diaSemanaStr}`,
                        horario: horario,
                        atividade: `Treino CPP ${horario}`,
                        badge: 'Treino',
                        imagem: '/cpplua.jpeg',
                        descricao: 'Treino regular de Canoa Havaiana. Foco em técnica, condicionamento e sincronia.'
                    })
                })
            }
        }
    })

    return events.sort((a, b) => {
        const dateDiff = a.dateObj.getTime() - b.dateObj.getTime()
        if (dateDiff !== 0) return dateDiff
        return a.horario.localeCompare(b.horario)
    })
}

export const allEvents = generateAllEvents()