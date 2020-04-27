import { Router } from 'express'
import UserController from './controllers/UserController'
import ProductController from './controllers/ProductController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

routes.get('/products', ProductController.index)

export default routes