import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: {
    name: string,
    category: string,
    price: string,
    image: string
  };
  p = 1;
  productList: string[];
  searchText: string;
  searchData: any;
  minValue = 100;
  maxValue = 500;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'Rs. ' + value;
        case LabelType.High:
          return 'Rs. ' + value;
        default:
          return 'Rs. ' + value;
      }
    }
  };
  constructor(private httpService: HttpClient, private router: Router,
              public productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProductList();
  }

  public getProductList() {
    this.getSearchData();
    this.getProducts();
  }

  public getProducts() {
    this.httpService.get('./assets/products.json').subscribe(
      data => {
        this.productList = data as string[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  public info(item) {
    this.router.navigate(['/product-description'], { queryParams: item, skipLocationChange: true });
  }

  public getSearchData() {
    this.productService.getSearchResults().subscribe((searchText) => {
      if (searchText) {
        this.searchData = searchText;
        this.getProducts();
      } else {
        this.searchData = '';
      }
    });
  }

}

