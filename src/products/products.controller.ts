import { 
    Controller, Get, Post, Put, Delete, Body, Param, Query, UploadedFile, UseInterceptors 
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
  import { Product } from './product.model';
  import { FileInterceptor } from '@nestjs/platform-express';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    //Get All Products
    @Get()
    findAll(): Product[] {
      console.log('Received GET request for all products');
      return this.productsService.findAll();
    }
  
    //Get a Single Product by ID
    @Get(':id')
    findOne(@Param('id') id: number): Product {
      console.log(`Received GET request for product with ID: ${id}`);
      return this.productsService.findOne(Number(id));
    }
  
    //Create Product (Supports JSON, Query Params & Form-data)
    @Post()
    @UseInterceptors(FileInterceptor('file')) // Supports file uploads
    create(
      @Body() body: Partial<Product>,
      @Query() query: Partial<Product>
    ): Product {
      console.log('Received POST request');
  
      // Merge Query Params & Body Data
      const productData: Partial<Product> = { ...query, ...body };
  
      if (!productData || Object.keys(productData).length === 0) {
        throw new Error('No product data provided!');
      }
  
      console.log('Final Merged Data:', productData);
      return this.productsService.create(productData);
    }
  
    //Update Product (Supports JSON, Query Params & Form-data)
    @Put(':id')
    @UseInterceptors(FileInterceptor('file')) // Supports file uploads
    update(
      @Param('id') id: number,
      @Body() body: Partial<Product>,
      @Query() query: Partial<Product>
    ): Product {
      console.log(`Received PUT request for ID: ${id}`);
  
      // Merge Query Params & Body Data
      const updatedData = { ...query, ...body };
  
      if (!updatedData || Object.keys(updatedData).length === 0) {
        throw new Error('No update data provided!');
      }
  
      console.log('Final Updated Data:', updatedData);
      return this.productsService.update(Number(id), updatedData);
    }
  
    //Delete Product and Return Updated List
    @Delete(':id')
    delete(@Param('id') id: number): Product[] {
      console.log(`Received DELETE request for product with ID: ${id}`);
      return this.productsService.delete(Number(id));
    }
  }
  