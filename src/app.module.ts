import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule], // Registering the ProductModule
})
export class AppModule {}