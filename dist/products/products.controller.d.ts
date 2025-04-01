import { ProductsService } from './products.service';
import { Product } from './product.model';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Product[];
    findOne(id: number): Product;
    create(body: Partial<Product>, query: Partial<Product>): Product;
    update(id: number, body: Partial<Product>, query: Partial<Product>): Product;
    delete(id: number): Product[];
}
