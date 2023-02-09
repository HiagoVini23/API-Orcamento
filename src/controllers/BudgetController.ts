import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { products, users } from '..//findAll'

export default {
    async doBudget(request: Request, response: Response) {
        const { idUser, idProducts } = request.body;
        const user = users.find((item: any)=> item.id == idUser);
        const filteredProducts = products.filter((product: any) => idProducts.includes(product.id));
        const updatedProducts = filteredProducts.map((product:any)=>{
            return { ...product, price: product.price * (user.tax/100) };
        })
        response.status(StatusCodes.OK).send(updatedProducts);
    },
}