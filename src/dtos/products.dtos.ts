import {
  IsString,
  IsNumber,
  IsUrl,
  IsDate,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsString()
  @IsNotEmpty()
  readonly description!: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price!: number;

  @IsString()
  @IsNotEmpty()
  readonly category!: string;

  @IsNumber()
  @IsNotEmpty()
  readonly stock!: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

// PartialType(CreateProductDto)
// Le dice a esta clase que ocupará las mismas validaciones
// y los mismos campos de la clase CreateProductDto
// pero los dejará todos como campos opcionales
export class UpdateProductDto extends PartialType(CreateProductDto) { }
