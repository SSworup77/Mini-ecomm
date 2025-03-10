import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsListComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
  template:`<app-header/>
  <router-outlet/>`,
  styles:``
})
export class AppComponent {
  title = 'ang-ecomm';
}
