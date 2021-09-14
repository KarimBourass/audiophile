import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseProductComponent } from './showcase-product.component';

describe('ShowcaseProductComponent', () => {
  let component: ShowcaseProductComponent;
  let fixture: ComponentFixture<ShowcaseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
