import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/new')
  newEndpoint() {
    return 'This is a new endpoint';
  }

  @Get('/ruta/')
  newEndpoint1() {
    return 'This is a new route with /x/';
  }

  @Get('/products/:id')
  getProduct(@Param() params: any) {
    return `Product ${params.id}`;
  }
}
