import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Output() onAddProduct = new EventEmitter
  productList:any[] = [
    {
      id:1,
      name:"Iphone 12",
      price: 850000,
      image:"assets/images/download.jpg"
    },
    {
      id:2,
      name:"Samsung",
      price: 65000,
      image:"assets/images/download (2).jpg"
    },
    {
      id:3,
      name:"OPPO",
      price: 75000,
      image:"assets/images/download (3).jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(product: any){
    this.onAddProduct.emit(product);
  }
}
