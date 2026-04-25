import { Component, computed, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly searchTerm = signal('');

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
      description:
        'Description for Product 2 loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 9.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 14.99,
      originalPrice: 19.99,
    },
  ]);

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.productos();

    return this.productos().filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term),
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected trimSearch() {
    this.searchTerm.update((value) => value.trim());
  }

  protected onAddToCard(product: Product) {
    console.log('Product added to cart:', product.name);
  }
}
