import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Response, NextFunction, Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);

    if(req.path.startsWith('/admin')) {
      const role = req.headers['x-user-role'];
      if(role !== 'supervisor') {
        return res.status(403).json({ 
          statusCode: 403,
          message: 'Acesso negado',
          error: 'Not Authorized'
        });
      }
    }
    next();
  }
}
