import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { products } from '..//findAll'

export default {
    async getProducts(request: Request, response: Response) {
        response.status(StatusCodes.OK).send(products);
    },
}