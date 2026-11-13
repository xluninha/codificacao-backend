import { Injectable, NotFoundException, ConflictException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { Model } from 'mongoose';
import { Aluno, AlunoDocument } from './schemas/aluno.schema.js';
import { MongoServerError } from 'mongodb';

@Injectable()
export class AlunosService {
  constructor(
    @InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>,
  ) {}

  // @POST
  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {

    try{const aluno = new this.alunoModel(createAlunoDto);
    return await aluno.save();} catch (error: unknown) {
      if (error instanceof MongoServerError && error.code === 11000) {
        throw new ConflictException('A matrícula fornecida já existe.');
      }
      throw new InternalServerErrorException('Ocorreu um erro ao criar a matrícula do aluno.');
    }
  }

  // $GET
  async findAllPageFilter(
    page: number, 
    limit: number, 
    nome?: string,
    curso?: string, 
    orderBy?: string, 
    orderByDirection?: 'asc' | 'desc') {

    const skip = (page - 1) * limit;
    const filter: any = {ativo: true};
    const [data, total] = await Promise.all([
        this.alunoModel.find().skip(skip).limit(limit).exec(),
        this.alunoModel.countDocuments().exec(),
    ]);


    if(nome){ filter.nome = {
      $regex: new RegExp(nome, 'i'),
    };}
    if(curso){ filter.cursos = curso;}

    const sort: any = {};
    if(orderBy){
      sort[orderBy] = orderByDirection === 'desc' ? -1 : 1;
    }

    return {data, 
        meta: {total, page, limit, totalPages: Math.ceil(total/limit)},};
    return this.alunoModel.find().exec();

  }

  //!GET

  // $GET
  async findOne (id: string): Promise<Aluno> {
    const aluno = await this.alunoModel.findOne({
      _id: id, ativo: true})

    if (!aluno)
      throw new NotFoundException(`Aluno com id: ${id} não encontrado.`);

    return aluno;
  }

  // !PATCH
  async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    const alunoUpdate = await this.alunoModel
      .findByIdAndUpdate(id, updateAlunoDto, {
        new: true,
      })
      .exec();

    if (!alunoUpdate)
      throw new NotFoundException(`Aluno com id: ${id} não encontrado`);

    return alunoUpdate;
  }

  // !DELETE
  async remove(id: string): Promise<Aluno> {
    const alunoDeletado = await this.alunoModel.findByIdAndUpdate
    (id, {ativo: false}, {new: true } ).exec();
    if (!alunoDeletado)
      throw new NotFoundException(`Aluno com id: ${id} não encontrado`);

    return alunoDeletado;
  }
}