import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get('public')
  getPublic() {
    return {
      message: 'Rota pública acessada com sucesso',
    };
  }

  @Get('admin')
  getAdmin() {
    return {
      message: 'Rota de administrador acessada com sucesso',
    };
  }

  @Get('secret')
  getSecret() {
    return {
      message: 'Rota secreta acessada com sucesso',
    };
  }
}
