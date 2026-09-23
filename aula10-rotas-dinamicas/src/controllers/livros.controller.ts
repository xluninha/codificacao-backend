import { Controller, Get, Param } from '@nestjs/common';
import { LivrosService } from '../services/livros.service.js';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  // Declaração de Rota Dinâmica com Placeholder :id
  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    const numId = +id; // Conversão explícita de string para number
    return this.livrosService.findById(numId);
  }
}