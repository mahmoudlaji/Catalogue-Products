import { Injectable } from '@angular/core';
import { products } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
DataProducts!:Array<products>
  constructor() {
    this.DataProducts=[
      {id: '1', name: 'TV',prix:'2000',reference:'TV1',promotion:true},
      {id:'2' , name: 'LAPTOP',prix:'3500',reference:'LAP1',promotion:false},
      {id: '3', name: 'PHONE',prix:'1500',reference:'PH1',promotion:true},
      {id: '4', name: 'MODEM',prix:'100',reference:'MOD1',promotion:false}

    ]
   }
   SetProducts(){
    return this.DataProducts;}

   DestroyProduct(data:any){
    let product=this.DataProducts.indexOf(data)
    this.DataProducts.splice(product,1)}

   SetProm(id:string){
      let product =this.DataProducts.find(p=>p.id===id) 
      if (product){
        product.promotion= !product.promotion}}

   Search(data:any){
   let product =this.DataProducts.filter(p=>p.name.includes(data))
   return product
    console.log('search')
   }  
      
}