import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products-model';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.scss'
})
export class ProductsCardComponent {
  product=input.required<Product>();
  cartService=inject(CartService)
}
