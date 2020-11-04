import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Bem vindo ao seu novo novo trabalho';
  // }
  getBye(): string {
    return 'Você está demitido';
  }
}
