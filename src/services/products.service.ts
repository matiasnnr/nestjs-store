import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      image: 'image1.jpg',
    },
  ];

  create(product: Product) {
    const newProduct = {
      id: this.products.length + 1,
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, product: Product) {
    console.log(`id`, id);
    console.log(`this.products`, this.products);
    const index = this.products.findIndex((p: Product) => p.id == id);
    console.log(`index`, index);
    this.products[index] = {
      ...this.products[index],
      ...product,
    };
    return this.products[index];
  }

  delete(id: number) {
    const product = this.products.find((product: Product) => product.id == id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    const index = this.products.findIndex((p: Product) => p.id == id);
    this.products.splice(index, 1);
    return this.products;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product: Product) => product.id == id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }
}
