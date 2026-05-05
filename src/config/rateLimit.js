import rateLimit from 'express-rate-limit';

export const limitadorGlobal = rateLimit({
    windowMs: 15*60*1000, //Janela de tempo para fazer algo
    max: 200,
    message: {
        erro: "Muitas requisições por minuto"
    },
    standardHeaders: true,
    legacyHeaders: false
})

export const limitadorLogin = rateLimit({
    windowMs: 15*60*1000, //Janela de tempo para fazer algo
    max: 10,
    message: {
        erro: "Muitas requisições por minuto"
    },
    standardHeaders: true,
    legacyHeaders: false
})

export const limitadorCadastro = rateLimit({
    windowMs: 15*60*1000, //Janela de tempo para fazer algo
    max: 5,
    message: {
        erro: "Muitas requisições por minuto"
    },
    standardHeaders: true,
    legacyHeaders: false
})