import { Product } from './product.model';
export declare class ProductsService {
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(product: Partial<Product>, id?: number): Product;
    update(id: number, updatedProduct: Partial<Product>): Product;
    delete(id: number): Product[];
}
