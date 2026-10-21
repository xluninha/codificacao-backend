<<<<<<< HEAD
import fs from 'fs';
const data = new Date().toISOString().split('T')[0];
const hora = new Date().toLocaleTimeString();

const streamEscrita = fs.createWriteStream('servidor.log');
console.log('Gerando arquivo de log simulado...')

for( let i = 0; i < 400000; i++){
    const tipo = i % 7 === 0 ? 'ERROR' : 'INFO';
    streamEscrita.write(`[${data} - ${hora}] Linha ${i}: Status 200 - Mensagem de teste ${tipo} \n`);

}
=======
import fs from 'fs'

const streamEscrita = fs.createWriteStream('servidor.log')
console.log('[OK] Gerando arquivo de log simulado...');

for (let i = 0; i < 10e4; i++) {
    const tipo = i % 7 === 0 ? 'ERROR' : 'INFO';
    streamEscrita.write(`Linha ${i}: Status 200 - Mensagem simulada ${tipo}\n`);
}

>>>>>>> 85be0353abe368cfb22198039ec2a90bb8420d72
streamEscrita.end();