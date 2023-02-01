import { Request, Response } from "express";
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

const urlBase = 'https://mockend.com/juunegreiros/BE-test-api'

export default {
    async getUsers(request: Request, response: Response) {
        axios.get(`${urlBase}/users`)
            .then((res) => {
                response.status(StatusCodes.OK).send(res.data);
            })
            .catch(error => {
                response.status(StatusCodes.NOT_FOUND);    
            });
    },
}