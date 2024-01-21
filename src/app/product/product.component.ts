import { Component, OnInit } from '@angular/core';
import { products } from '../model/product.model';
import { ProductService } from '../services/product.service';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {
 searchForm!:FormGroup
  data = {
    keyword:""
  }
  AllProducts!:Array<products>
  
  constructor(private productService: ProductService, private routeh: Router, private fb:FormBuilder){}
  ngOnInit(): void {
   this.searchForm = this.fb.group({ keyword: this.fb.control(null)})
  this.AllProducts=this.productService.SetProducts()
  }
 Delete(data:products){
  let conf = confirm('Are you sure you want to delete?');
  if (conf == true) {
  this.productService.DestroyProduct(data)
  console.log('Item deleted.');
} else {
    // User clicked "Cancel" or closed the dialog
    console.log('Deletion canceled.');
}
// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to delete? this!",
//   // icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//   }
// });
 }
 SetPromotion(data:any){
  this.productService.SetProm(data.id)
 }
 searchprod(){
  const x = this.searchForm.value.keyword
  this.AllProducts= this.productService.Search(x)
 }

 backHome(){
this.routeh.navigateByUrl("/home")
 }
}