import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
})
export class ItemPageComponent implements OnInit {
  itemId: any;
  itemData: any;

  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService
  ) {}

  ngOnInit(): void {
    this.itemId = this.param.snapshot.paramMap.get('id');

    if (this.itemId) {
      this.itemData = this.service.clothesDetails.filter(
        (item) => item.id == this.itemId
      );
    }
  }
}
