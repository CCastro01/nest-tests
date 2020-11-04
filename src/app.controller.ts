import { 
  Controller, 
  Get, 
  HttpCode, 
  Req, Res, 
  Request, 
  Response, 
  Post, 
  Redirect,
  Param
} from '@nestjs/common';
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
  // @Get('users')
  // @HttpCode(200)
  // getBye(@Response() response): JSON {
  //   return response.json({
  //     "Nome": "Chris",
  //     "Idade": 20
  //   })

  // }

  // @Get('users')
  // getBye(@Req() request: Request): string{
  //   return 'Testando o Request'
  // }

  // ROUTE PARAMS
  @Get(':id')
  findOne(@Param('id') id): string{
    return `This action returns a ${id} user`
  }


}
