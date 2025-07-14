import { Request, Response } from "express";
import Product from "../models/Producto.mo";

//Create Products
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
//Get Products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await Product.findAll(
        {
            order:[
                ['price','DESC']
            ]
        }
    );
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
//getByIDD
export const getProductByID =  async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if (!product){
        return res.status(404).json({
            error: 'producto no encontrado'
        })
    }
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};


export const updateProduct =async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if (!product){
        return res.status(404).json({
            error: 'producto no encontrado'
        })
    }
    await product.update(req.body)
    await product.save()

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if (!product){
        return res.status(404).json({
            error: 'producto no encontrado'
        })
    }
    product.availability = !product.dataValues.availability;
    await product.save()
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};


export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if (!product){
        return res.status(404).json({
            error: 'producto no encontrado'
        })
    }
    await product.destroy()
    res.json(`{ data: product deleted id : ${id} }`);
  } catch (error) {
    console.log(error);
  }
};