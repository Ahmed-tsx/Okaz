import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor (private readonly databaseService: DatabaseService){}

  async create(createOrderDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({
      data:createOrderDto
    });
  }

  async findAll() {
    return this.databaseService.product.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.databaseService.product.update({
      where:{
        id,
      },
      data : updateProductDto
    })
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where:{
        id,
      }
    })
  }
}