import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  title = "PRODUITS";
  produits: Produit[] = [];
  selectProd: Produit | undefined;

  constructor(private productService: ProductService) {}

  onDetail(pro: Produit): void {
    alert(pro.description);  
  }

  onSelectProd(p: Produit): void {
    this.selectProd = p;
  }

  getProducts(): void {
    this.produits = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
