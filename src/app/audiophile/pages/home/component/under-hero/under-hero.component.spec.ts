import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderHeroComponent } from './under-hero.component';

describe('UnderHeroComponent', () => {
  let component: UnderHeroComponent;
  let fixture: ComponentFixture<UnderHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
