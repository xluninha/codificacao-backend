import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);

      if(req.path.startsWith('')){
        const role = req.headers['x-user-role'];
        if(role !== 'supervisor'){
          return res.status(403).json({
            statuscode:403,
            message:'Acesso negado: Permissão insuficiente para acessar esta rota.',
            log: new Date(),
          })
        }
      }

      next();
  }

}