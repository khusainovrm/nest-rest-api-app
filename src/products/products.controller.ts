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
import { UpdateProductDto } from './dto/update-product.dto';

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Removed ' + id;
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return `Updated product #${id} and new product title: ${updateProductDto.title} and price: ${updateProductDto.price}`;
  }
}
