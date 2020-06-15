import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product  = {
    name: '',
    price: null
  }

  constructor(private router: Router, private ProductService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductService.readById(id).subscribe(product=>{
      this.product = product;
    });
  }

  updateProduct(): void{
    this.ProductService.update(this.product).subscribe(()=>{
      this.ProductService.showMessage("Produto alterado com sucesso !");
      this.router.navigate(['/products']);
    });
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
