interface IMailService {
    sendMail(request: IMessageDTO): void
}

interface IMailTo {
    name: string
    email: string
}

interface IMailMessage {
    subject: string
    body: string
    attachment?: Array<string>
}

// Data Transfer Object (DTO)
interface IMessageDTO {
    to: IMailTo
    message: IMailMessage
}

class EmailService implements IMailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService