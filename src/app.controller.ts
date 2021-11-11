import { Controller, Get, Param, Query } from '@nestjs/common';
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

  // // Si hay dos rutas que comiencen igual entonces es mejor dejar más arriba las rutas sin parametros porque sino nunca podrán ser interceptadas.
  // // Ejemplo:
  // // @Get('/products/filter') -> ruta estática debe ir primero
  // // @Get('/products/:id') -> ruta dinámica debe ir después
  // @Get('/products/filter')
  // getProductsFilter() {
  //   return `Hi, I'm a Product Filter`;
  // }

  // @Get('/products/:id')
  // getProduct(@Param('id') id: string) {
  //   return `Product ${id}`;
  // }

  // @Get('/categories/:id/products/:productId')
  // getCategories(
  //   @Param('id') id: string,
  //   @Param('productId') productId: string,
  // ) {
  //   return `Product ${productId} with categorie ${id}`;
  // }

  // // http://localhost:3000/products?limit=100&offset=50
  // @Get('/products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `Products with limit ${limit} and offset ${offset}`;
  // }

  // // http://localhost:3000/products2?limit=100&offset=50&brand=nike
  // // http://localhost:3000/products2?brand=nike&offset=4321
  // // http://localhost:3000/products2?brand=nike
  // @Get('/products2')
  // getProducts2(
  //   @Query('limit') limit = 100,
  //   @Query('offset') offset = 0,
  //   @Query('brand') brand: string,
  // ) {
  //   return `Products with limit ${limit} and offset ${offset} of the brand ${brand}`;
  // }
}
