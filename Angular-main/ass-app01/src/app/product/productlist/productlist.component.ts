import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList:IProduct[]=[{ productName:"burger",productQuantity:"1", productCost:"90"},
  {productName:"pizza",productQuantity:"2",productCost:"210"}];

  constructor() { }

  ngOnInit(): void {
  }

}
