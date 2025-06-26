import { Router } from "express"
import { createProduct } from './handlers/product';
import { handleInputErrors } from "./middleware";
const router = Router()

router.get('/',handleInputErrors,(req, res)=>{
    res.send("Hola ya casi pasas el parcial")
})
//create
router.post('/',handleInputErrors,createProduct)
router.put('/',handleInputErrors,(req,res)=>{
    res.send("Hola desde put")
})
router.delete('/',handleInputErrors,(req,res)=>{
    res.send("Hola desde delete")
})
export default router