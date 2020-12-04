import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'get all';
  }

  @Get(':id')
  getOne(@Param('id') id): string {
    return 'get one id:' + ' ' + id;
  }
}
