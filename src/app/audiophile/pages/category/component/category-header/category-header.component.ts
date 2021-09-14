import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit {

  @Input() headerName = ''
  constructor() { }

  ngOnInit() {
  }

}
