import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { productModule } from "./product.module";

@Injectable()
export class ProductService {
  products: Product[] = [];

  insertProduct(title: string) {
    const prodId = Math.random().toLocaleString();
    const newProduct = new Product(prodId, title);
//comment here repo
    this.products.push(newProduct);
//comment here local
    return prodId;
  }

  getAllProducts() {
    //comment
    return [...this.products];
  }

  getProductById(prodId: string) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException();
    } else {
      return { ...product };
    }
  }
}
