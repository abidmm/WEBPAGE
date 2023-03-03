import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content5CardComponent } from './content5-card.component';

describe('Content5CardComponent', () => {
  let component: Content5CardComponent;
  let fixture: ComponentFixture<Content5CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content5CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content5CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
