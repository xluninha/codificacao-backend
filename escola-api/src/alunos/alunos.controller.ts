import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
import { ApiTags, ApiQuery, ApiOperation, ApiResponse} from '@nestjs/swagger';


@ApiTags('Alunos')
@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  @ApiOperation({summary:"Cria a matrícula do aluno"})
  @ApiResponse({status: 201, description:"Matricula do aluno criada com sucesso"})
  @ApiResponse({status: 400, description:"Dados inválidos fornecidos na matrícula do aluno."})
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  @ApiOperation({summary:"Retorna os alunos presentes no sistema"})

  @ApiResponse({status: 200, description:"Lista de alunos retornada com sucesso."})

  @ApiResponse({status: 404, description:"Nenhum aluno encontrado no sistema."})

  @ApiResponse({status: 500, description:"Problema interno do sistema."})

 // findAll() {
   // return this.alunosService.findAll();
  //}

@Get('page')
    @ApiOperation({summary:"Retorna os alunos presentes no sistema por paginação, filtros opcionais e ordenação"})

    @ApiResponse({status: 200, description:"Lista de alunos retornada com sucesso."})

    @ApiResponse({status: 404, description:"Nenhum aluno encontrado no sistema."})

    @ApiResponse({status: 500, description:"Problema interno do sistema."})

    @ApiQuery({name:'page', description:'Número da página(padrão: 1', required:false, type: Number})
    @ApiQuery({name:'limit', description:'Itens por página(padrão: 10)', required:false, type: Number})
    @ApiQuery({name: 'nome', description: 'Filtra alunos pelo nome', required: false, type: String})
    @ApiQuery({name: 'curso', description: 'Filtra alunos pelo curso', required: false, type: String})
    @ApiQuery({name: 'orderBy', description: 'Ordena os resultados pelo campo especificado (ex: nome e idade)', required: false, type: String})
    @ApiQuery({name: 'orderDirection', description: 'Define a direção da ordenação (asc para ascendente, desc para descendente)', required: false, enum: ['asc', 'desc',]})

  findAllPage(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('nome') nome?: string,
    @Query('curso') curso?: string,
    @Query('orderBy') orderBy?: string,
    @Query('orderDirection') orderDirection?: 'asc' | 'desc',
  ) {
    return this.alunosService.findAllPageFilter(page, limit, curso, nome, orderBy, orderDirection);
  }






  @Get(':id')
  @ApiOperation({summary:"Retorna o aluno presente no sistema pelo id"})
  @ApiResponse({status: 200, description:"Aluno retornado com sucesso."})
  @ApiResponse({status: 404, description:"Aluno não encontrado no sistema."})
  @ApiResponse({status: 500, description:"Problema interno do sistema."})
  findOne(@Param('id') id: string) {
    return this.alunosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:"Atualiza os dados do aluno presente no sistema pelo id"})
  @ApiResponse({status: 200, description:"Aluno atualizado com sucesso."})
  @ApiResponse({status: 404, description:"Aluno não encontrado no sistema."})
  @ApiResponse({status: 500, description:"Problema interno do sistema."})
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(id, updateAlunoDto);
  }

  @Delete(':id')
    @ApiOperation({summary:"Deleta o aluno presente no sistema pelo id"})
    @ApiResponse({status: 200, description:"Aluno deletado com sucesso."})
    @ApiResponse({status: 404, description:"Aluno não encontrado no sistema."})
    @ApiResponse({status: 500, description:"Problema interno do sistema."})
  remove(@Param('id') id: string) {
    return this.alunosService.remove(id);
  }
}