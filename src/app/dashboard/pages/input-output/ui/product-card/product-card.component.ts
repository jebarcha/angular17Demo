import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  //@Input({ required: true }) product!: Product;
  product = input.required<Product>();

  //@Output() onIncrementQuantity = new EventEmitter<number>();
  onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    //console.log(this.product().name);
  });
}
