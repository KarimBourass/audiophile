import { SEOService } from './shared/services/seo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'audiophile';

  constructor(private SEOService: SEOService) {
    this.SEOService.updateTitle();
   }
}
