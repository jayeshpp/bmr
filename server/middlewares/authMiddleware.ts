import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
    if (req.session.member) {
        next(); // User authenticated, proceed to next middleware
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
