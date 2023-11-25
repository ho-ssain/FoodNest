import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantServingFoodsComponent } from './restuarant-serving-foods.component';

describe('RestuarantServingFoodsComponent', () => {
  let component: RestuarantServingFoodsComponent;
  let fixture: ComponentFixture<RestuarantServingFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestuarantServingFoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestuarantServingFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
