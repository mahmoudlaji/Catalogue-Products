import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct!: FormGroup

  constructor( private fb:FormBuilder, private serciceProduct:ProductService, private routeP:Router){}
  ngOnInit(): void {
   this.newProduct = this.fb.group({
    id:this.fb.control(null),
    name:this.fb.control(null),
    price:this.fb.control(null),
    reference:this.fb.control(null),
    promotion:this.fb.control(false),
   })
  }
saveProduct(){
let product = this.newProduct.value
this.serciceProduct.AddToNewProduct(product)
this.newProduct.reset()
alert("Your product are added successufly")
this.routeP.navigateByUrl("/products")
}
backProduct(){
  this.routeP.navigateByUrl("/products")
}
}
