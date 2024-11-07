import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/reusable/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [

    {
      id: 1,
      name: "Apple air 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam corporis doloremque quam laborum.",
      price: 32321,
      img: "https://www.reliancedigital.in/medias/Apple-Airpods-Pro-2nd-Gen-493839243-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDYyMTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDAzL2hkYS8xMDA1MDczMTIxMjgzMC5qcGd8ZTRmNTk4Yzk4MjBmMDljYTg5NDIxOTE3ZGJhZTk0MGRhMTNhNDA0OGE0NzJmYjhjYTY5MzQ0YmFlM2ZhYTBiZQ"
    },

    {
      id: 2,
      name: "Apple Mac m1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam corporis doloremque quam laborum.",
      price: 32321,
      img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_m1-chip-macbookair-facetime-screen_11102020_big.jpg.large.jpg"
    },

    {
      id: 3,
      name: "Apple Iphone 12",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam corporis doloremque quam laborum.",
      price: 32321,
      img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.news_app_ed.jpg"
    },

    {
      id: 4,
      name: "Apple Watch SE2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam corporis doloremque quam laborum.",
      price: 2313,
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5E3_VW_34FR+watch-case-44-aluminum-starlight-nc-se_VW_34FR+watch-face-44-aluminum-starlight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=dnhEUUNSSTRqeWRMamlHYUxoTnN3eGJnWjJGdmhDSm9jUGNSdkZQN3V5SCtXSjNialExcG1CNUplQlpFSTFUWnF5VHRBbElsRHpXaE1mSkhoUzFQcHhpWE5LNlBMYStqTjdWem0zakpaYVZnTFdIZTlrbit2a2RHTFgxdXJlaEoyaHJLTHRtQ21rRFZOd2lyemVkbStNKzNTbk5oNWNKTXhGZnI1Vm1GbjNSQUM0VzY0ZFZ0S21LTGc3Snk3TVBjOWE5RkJ2dEY1c1pRZkdGUUtnZHBSZmJoRi9kdjB5RWREdk9kSkVOcWxxbz0="
    },

  ]

  deleteProduct = (id: number) => {
    this.products = this.products.filter((product) => product.id !== id);
  }

}
 