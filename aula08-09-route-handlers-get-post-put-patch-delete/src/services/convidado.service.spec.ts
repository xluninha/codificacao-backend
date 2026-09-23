import { Test, TestingModule } from '@nestjs/testing';
import { ConvidadoService } from './convidados.service.js';

describe('ConvidadosService', () => {
  let service: ConvidadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvidadoService],
    }).compile();

    service = module.get<ConvidadoService>(ConvidadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});