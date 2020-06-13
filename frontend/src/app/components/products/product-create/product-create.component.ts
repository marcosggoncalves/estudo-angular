import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product  = {
    name: '',
    price: null
  }

  constructor(private router: Router, private ProductService: ProductService) { }

  ngOnInit(): void {
  }

  createProduct() : void {
    this.ProductService.create(this.product).subscribe(()=>{
      this.ProductService.showMessage("Produto cadastrado com sucesso !");
      this.router.navigate(['/products']);
    });
  }

  cancel() : void{
    this.router.navigate(['/products']);
  }
}
