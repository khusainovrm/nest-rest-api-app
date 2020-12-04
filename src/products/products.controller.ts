import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express';

@Controller('products')
export class ProductsController {
  // @Get()
  // // @Redirect('https://yandex.ru', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('this is response');
  //   return 'get all' + req + res;
  // }

  @Get()
  // @Redirect('https://yandex.ru', 301)
  getAll(): string {
    return 'get all';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'get one id:' + ' ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Chace-Control', 'none')
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
