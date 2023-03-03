import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content2CardComponent } from './content2-card.component';

describe('Content2CardComponent', () => {
  let component: Content2CardComponent;
  let fixture: ComponentFixture<Content2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content2CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
