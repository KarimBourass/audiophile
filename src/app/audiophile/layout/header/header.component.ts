import { ModalService } from 'src/app/shared/components/services/modal.service';
import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNav = false;
  showBurgerMenu = false;
  mobielMenu = false;

  products = [
    {
      'imgPath': "../../../../../../assets/shared/desktop/image-category-thumbnail-headphones.png",
      'name': 'headphones',
    },
    {
      'imgPath': "../../../../../../assets/shared/desktop/image-category-thumbnail-speakers.png",
      'name': 'speakers',

    },
    {
      'imgPath': "../../../../../../assets/shared/desktop/image-category-thumbnail-earphones.png",
      'name': 'earphones'
    },
  ]

  constructor(public breakpointObserver: BreakpointObserver, private modalService: ModalService) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 769px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 768px or greater!');
          this.showNav = true
          this.showBurgerMenu = false
          this.mobielMenu = false;
        } else {
          this.showNav = false
          this.showBurgerMenu = true
          console.log('Viewport width is less than 768px!');
        }
      });
    this.displayNav()
  }

  displayNav() {
    this.mobielMenu = !this.mobielMenu;
    console.log('mobielMenu', this.mobielMenu);
  }

  openCart() {
    this.modalService.openCartDialog();
  }

}
