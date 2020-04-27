import products from '../data/products.json'
import { Request, Response } from 'express'

export default {
    async index(req: Request, res: Response) {
        return res.send(products)
    }
}