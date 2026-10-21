import { Controller, Get, Param, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
@Controller('produtos')
export class ProdutosController {
private readonly logger = new Logger(ProdutosController.name);
// Lista fixa de produtos em memória
private readonly produtos = [
{ id: 1, nome: 'Combo Whooper BurguerKing', preco: 35.0 },
{ id: 2, nome: 'Latinha de Coca-Cola', preco: 12.0 },
{ id: 3, nome: 'Urso de Pelúcia', preco: 1500.0 },
];
@Get(':id')
buscarPorId(@Param('id') idParam: string) {
const id = Number(idParam);
// Erro 1: Validação de tipo (se o ID não for um número válido)
if (isNaN(id)) {
this.logger.warn(`Tentativa de busca com ID não numérico: ${idParam}`);
throw new BadRequestException('O ID fornecido deve ser do tipo inteiro');
}
// Erro 2: Validação de existência do registro
const produto = this.produtos.find((item) => item.id === id);
if (!produto) {
this.logger.warn(`Produto com ID ${id} não foi localizado.`);
throw new NotFoundException(`Produto com ID ${id} não encontrado`);
}
// Retorno de Sucesso (HTTP Status 200 por padrão no NestJS para requisições GET)
return produto;
}
}