import { validationResult } from 'express-validator';
import {Request,Response,NextFunction} from 'express';
export const handleInputErrors = (req:Request,res:Response, next:NextFunction)=>{
     console.log("Entro al midleware");
       let error =validationResult(req)
    if (!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
     next()
}