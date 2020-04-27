import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { id:1, name: 'Felipe', email: 'felipe@teste.com' },
    { id:2, name: 'Testing', email: 'adm@teste.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: { 
                name: 'Felipe', 
                email: 'felipe1@teste.com' 
            },
            
            message: { 
                subject: 'Bem vindo', 
                body: 'Seja bem-vindo' 
            }
        })

        return res.send()
    }
}