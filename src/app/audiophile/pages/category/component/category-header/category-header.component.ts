import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit {

  headerName = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.headerName = this.route.parent?.snapshot.paramMap.get('id') || 'hhh'
  }

}
