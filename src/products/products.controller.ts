import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'get all';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'get one id:' + ' ' + id;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title: ${createProductDto.title} Price:${createProductDto.price}`;
  }

  // @Delete
  // remove() {}
  //
  // @Put
  // update() {}
}
