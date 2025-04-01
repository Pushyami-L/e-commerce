"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const fake_db_1 = require("./fake-db");
let ProductsService = class ProductsService {
    products = fake_db_1.fakeDB;
    findAll() {
        console.log('Fetching all products:', this.products);
        return this.products;
    }
    findOne(id) {
        console.log(`Fetching product with ID: ${id}`);
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            console.error(`Product with ID ${id} not found`);
            throw new common_1.NotFoundException('Product not found');
        }
        console.log('Found product:', product);
        return product;
    }
    create(product, id) {
        const newId = id ? id : this.products.length + 1;
        const newProduct = {
            id: newId,
            category: product.category || 'Unknown',
            name: product.name || 'Unnamed Product',
            price: product.price || 0.0,
            quantity: product.quantity || 0,
        };
        this.products.push(newProduct);
        console.log('Created new product:', newProduct);
        return newProduct;
    }
    update(id, updatedProduct) {
        console.log(`Updating product with ID: ${id}`);
        const index = this.products.findIndex((p) => p.id === id);
        if (index === -1) {
            console.error(`Product with ID ${id} not found`);
            throw new common_1.NotFoundException('Product not found');
        }
        console.log('Before Update:', this.products[index]);
        console.log('Update Data:', updatedProduct);
        this.products[index] = {
            ...this.products[index],
            ...updatedProduct
        };
        console.log('Updated Product:', this.products[index]);
        return this.products[index];
    }
    delete(id) {
        console.log(`Deleting product with ID: ${id}`);
        const index = this.products.findIndex((p) => p.id === id);
        if (index === -1) {
            console.error(`Product with ID ${id} not found`);
            throw new common_1.NotFoundException('Product not found');
        }
        this.products.splice(index, 1);
        console.log(`Product with ID ${id} deleted successfully`);
        console.log('Updated Product List:', this.products);
        return this.products;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map