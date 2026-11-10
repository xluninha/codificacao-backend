import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { Model } from 'mongoose';
import { Aluno, AlunoDocument } from './schemas/aluno.schema.js';

@Injectable()
export class AlunosService {
  constructor(
    @InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>,
  ) {}

  // @POST
  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const createdAluno = new this.alunoModel(createAlunoDto);
    return createdAluno.save();
  }

  // $GET
  async findAllPage(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        this.alunoModel.find().skip(skip).limit(limit).exec(),
        this.alunoModel.countDocuments().exec(),
    ]);

    return {data, 
        meta: {total, page, limit, totalPages: Math.ceil(total/limit)},};
    return this.alunoModel.find().exec();
  }

  //!GET

  // $GET
  async findOne (id: string): Promise<Aluno> {
    const aluno = await this.alunoModel.findById(id).exec();

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
    const alunoDeletado = await this.alunoModel.findByIdAndDelete(id).exec();
    if (!alunoDeletado)
      throw new NotFoundException(`Aluno com id: ${id} não encontrado`);

    return alunoDeletado;
  }
}