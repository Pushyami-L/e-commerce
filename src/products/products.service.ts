import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { fakeDB } from './fake-db';

@Injectable()
export class ProductsService {
  private products = fakeDB;

  //Get All Products
  findAll(): Product[] {
    console.log('Fetching all products:', this.products);
    return this.products;
  }

  //Get Single Product by ID
  findOne(id: number): Product {
    console.log(`Fetching product with ID: ${id}`);
    
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error(`Product with ID ${id} not found`);
      throw new NotFoundException('Product not found');
    }

    console.log('Found product:', product);
    return product;
  }

  //Create Product
  create(product: Partial<Product>, id?: number): Product {
    const newId = id ? id : this.products.length + 1; // Auto-incremented ID
    const newProduct: Product = {
      id: newId,
      category: product.category || 'Unknown', // Default value
      name: product.name || 'Unnamed Product',
      price: product.price || 0.0,
      quantity: product.quantity || 0,
    };

    this.products.push(newProduct);
    console.log('Created new product:', newProduct);
    return newProduct; // Return complete product
  }

  //Update Product
  update(id: number, updatedProduct: Partial<Product>): Product {
    console.log(`Updating product with ID: ${id}`);

    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      console.error(`Product with ID ${id} not found`);
      throw new NotFoundException('Product not found');
    }

    console.log('Before Update:', this.products[index]);
    console.log('Update Data:', updatedProduct);

    // Merge Updates
    this.products[index] = { 
      ...this.products[index], 
      ...updatedProduct 
    };

    console.log('Updated Product:', this.products[index]);
    return this.products[index]; // Return updated product
  }

  //Delete Product
  delete(id: number): Product[] {
    console.log(`Deleting product with ID: ${id}`);
    
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      console.error(`Product with ID ${id} not found`);
      throw new NotFoundException('Product not found');
    }

    this.products.splice(index, 1);
    console.log(`Product with ID ${id} deleted successfully`);
    
    console.log('Updated Product List:', this.products);
    return this.products; // Return updated list
  }
}
