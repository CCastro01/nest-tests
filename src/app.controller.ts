import { Controller, Get, HttpCode, Req, Res, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  //
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }


  //Usando os métodos de tratamento de respostas nativos
  @Get('users')
  getBye(@Response() response): JSON {
    return response.status(200).json({
      "Nome": "Chris",
      "Idade": 20
    })

  }


  // @Get('users')
  // getBye(@Req() request: Request): string{
  //   return 'Testando o Request'
  // }

}
