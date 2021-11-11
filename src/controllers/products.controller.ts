import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products.service';

// import { Response } from 'express';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  // Si hay dos rutas que comiencen igual entonces es mejor dejar más arriba las rutas sin parametros porque sino nunca podrán ser interceptadas.
  // Ejemplo:
  // @Get('/products/filter') -> ruta estática debe ir primero
  // @Get('/products/:id') -> ruta dinámica debe ir después
  @Get('/filter')
  getProductsFilter() {
    return `Hi, I'm a Product Filter`;
  }

  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // getProduct(@Res() response: Response, @Param('id') id: string) {
    // Ejemplo de como responder usando Express en Nest
    // response.status(HttpStatus.OK).send({
    //   message: `Product ${id}`,
    // });

    // return {
    //   message: `Product ${id}`,
    // };

    return this.productsService.findOne(id);
  }
  // http://localhost:3000/products?limit=100&offset=50
  @Get('/')
  getProducts(@Query() params: any) {
    const { limit, offset } = params;
    // return `Products with limit ${limit} and offset ${offset}`;
    return this.productsService.findAll();
  }

  // http://localhost:3000/products/products2?limit=100&offset=50&brand=nike
  // http://localhost:3000/products/products2?brand=nike&offset=4321
  // http://localhost:3000/products/products2?brand=nike
  @Get('/products2')
  getProducts2(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products with limit ${limit} and offset ${offset} of the brand ${brand}`;
  }

  @Post('/')
  createProduct(@Body() body: CreateProductDto) {
    // return {
    //   message: 'Product created',
    //   body,
    //   // body: {
    //   //   name: 'Product 1',
    //   //   description: 'Product description',
    //   //   price: 100,
    //   // },
    // };

    return this.productsService.create(body);
  }

  @Put('/:id')
  updateProduct(@Param('id') id: number, @Body() body: UpdateProductDto) {
    // return {
    //   message: `Product ${id} updated`,
    //   body,
    // };
    return this.productsService.update(id, body);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number) {
    // return {
    //   message: `Product ${id} deleted`,
    // };
    return this.productsService.delete(id);
  }
}
