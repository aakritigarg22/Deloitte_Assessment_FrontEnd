import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  keyup(e) {
    this.productService.setSearchValue(e.target.value);
  }

}
