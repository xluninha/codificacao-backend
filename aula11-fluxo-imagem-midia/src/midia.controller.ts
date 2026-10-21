import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Controller('midia')
export class MidiaController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('arquivo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const nomeUnico = `${uuidv4()}${extname(file.originalname)}`;
          callback(null, nomeUnico);
        },
      }),
      limits: {
        fileSize: 2 * 1024 * 1024, // Limite de 2MB
      },
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpeg|jpg|png|gif)$/)) {
          return callback(
            new BadRequestException('Tipo de arquivo não permitido.'),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado');
    }

    return {
      filename: file.filename,
      size: file.size,
      url: `http://localhost:3000/api/uploads/${file.filename}`,
    };
  }
}