import {Request,Response} from 'express';
import { check, ExpressValidator, validationResult } from 'express-validator';
import Product from '../models/Producto.mo';

//Create Products
export const createProduct = async (req : Request, res : Response)=>{
    /*
    const product = new Product(req.body) product.save() console.log(req.body)
    */
   //validar nombre y precio
    await check('name').notEmpty().withMessage('tonto te falto el nombre').run(req)
    let errors = validationResult(req)
    const product = await Product.create(req.body)
    res.json({data:product})
    }
//Get Products
export const getAllProducts = async (req:Request,res:Response )=>{
    const product = await new Product(req.body)
    res.json({data:product})
    res.send("Hola desde post")
    
    
}

//Get Product by ID
export const getProductByID = async (req:Request,res:Response )=>{
    const product = await new Product(req.body)
    res.json({data:product})
    res.send("Hola desde post")
    
    
}

//UPDATE product
export const uptadeProductByID = async (req:Request,res:Response )=>{
    const product = await new Product(req.body)
    res.json({data:product})
    res.send("Hola desde post")
    
    
}


//Delete product
export const deleteProductById = async (req:Request,res:Response )=>{
    const product = await new Product(req.body)
    res.json({data:product})
    res.send("Hola desde post")
    
    
}
