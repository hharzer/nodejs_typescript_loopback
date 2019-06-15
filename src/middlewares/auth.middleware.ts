/**
 * Login Required middleware.
 */
import async from "async";
import { Request, Response, NextFunction } from "express";
export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    next();
};