import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdComponent } from './products-ad.component';

describe('ProductsAdComponent', () => {
  let component: ProductsAdComponent;
  let fixture: ComponentFixture<ProductsAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
