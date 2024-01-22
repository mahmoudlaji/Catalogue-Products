import { Component, OnInit } from '@angular/core';
import { products } from '../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  prodId!:string
  product!:any ;
updateForm!:FormGroup
  constructor(private route:ActivatedRoute, private serviceProduct:ProductService, private fb:FormBuilder,private routen:Router) { 
    this.prodId = this.route.snapshot.params['id']
    // console.log("this.prodId=>",this.prodId)
  }
 

  ngOnInit(): void {
   this.product =this.serviceProduct.Update(this.prodId)
  this.updateForm = this.fb.group({
    id:this.fb.control(this.product.id),
    name:this.fb.control(this.product.name),
    price:this.fb.control(this.product.price),
    reference:this.fb.control(this.product.reference),
    promotion:this.fb.control(this.product.promotion),
   })
  }
  setUpdate(){
    let p=this.updateForm.value
    this.serviceProduct.GetProductById(p)
    
    Swal.fire("your update is successufly!");
    this.routen.navigateByUrl("/products")
    // this.updateForm.GetProductById(p)
    // alert('your update is successufly')
  }
}
