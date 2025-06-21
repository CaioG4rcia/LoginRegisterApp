import { Router } from "express"
import userController from "./app/controllers/userController.js"

const route = Router()

route.get('/users', userController.read)
route.post('/users', userController.create)
route.put('/users/:id', userController.update)
route.delete('/users/:id', userController.delete)
route.post('/users/login', userController.login)

export default route


