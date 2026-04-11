import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly productos = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      originalPrice: 29.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 9.99,
      originalPrice: 14.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 14.99,
      originalPrice: 19.99,
    },
  ]);
}
