import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  products = [
    {
      'imgPath': "../../../../../../assets/shared/desktop/image-category-thumbnail-headphones.png",
      'name': 'headphones'
    },
    {
      'imgPath': "../../../../../../assets/shared/desktop/image-category-thumbnail-speakers.png",
      'name': 'speakers'
    },
    {
      'imgPath': "../../../../../../assets/shared/desktop/image-category-thumbnail-earphones.png",
      'name': 'earphones'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
