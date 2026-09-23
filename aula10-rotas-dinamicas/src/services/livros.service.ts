import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LivrosService {
    private livros = [
        {id: 1, titulo: 'A Morte de Ivan Ilitch ', autor: 'Toysloi'},
        {id: 2, titulo: 'O Anticristo', autor: 'Frederico Nietzsche'},
        {id: 3, titulo: 'Café com Deus pai', autor: 'o pasto lá'},
        {id: 4, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen'},
        {id: 5, titulo: 'Os segredos da mente milionaria', autor: 'Elon MUsk'},
    ];

    findAll() {
        return this.livros;
    }

    findById(id: number){
        const livro = this.livros.find((l) => l.id === id);
        
        if (!livro) {
            throw new NotFoundException(`[ERROR] Livro com ID ${id} não localizado em nosso acervo.`)
        }

        return livro;
    }
}
