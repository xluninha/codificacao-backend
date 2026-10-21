import { Controller, Get, Head, Headers, Res } from "@nestjs/common";
import type { Response } from "express";

@Controller('secreto')
export class SegurancaController {
    @Get()
    acessarAreaSecreta(@Headers('x-api-key') apiKey: string, @Res() Res: Response ){
        if(apiKey === '123456'){
            Res.setHeader('x-auth-status', 'ok');
            return Res.status(200).json({
                mensagem: 'Acesso permitido a área secreta',
                timesStamp: new Date().toISOString()
            });
        }
        return Res.status(403).json({
            erro: 'Forbidden',
            mensagem: 'Chave de API inválida ou ausente',
        });
    }
}