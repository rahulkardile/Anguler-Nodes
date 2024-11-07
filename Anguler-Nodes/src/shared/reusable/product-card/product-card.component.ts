import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnChanges {
  @Input() Product = {
    id: 0,
    name: '',
    description : "",
    img: '',
    price: 0
  }

  @Input() temp: any;

  @Output() deleteProduct = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
      console.log('on changes : ', changes);
      
  }

}
