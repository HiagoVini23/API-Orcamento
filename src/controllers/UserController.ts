import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { users } from '..//findAll'

export default {
    async getUsers(request: Request, response: Response) {
        response.status(StatusCodes.OK).send(users);
    },
}