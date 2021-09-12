import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-hero',
  templateUrl: './under-hero.component.html',
  styleUrls: ['./under-hero.component.scss']
})
export class UnderHeroComponent implements OnInit {


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
