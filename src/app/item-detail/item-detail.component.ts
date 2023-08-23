import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  @Input() item:string;
  @Input() num:number;
  @Input() foto:string;
}