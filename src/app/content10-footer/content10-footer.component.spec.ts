import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content10FooterComponent } from './content10-footer.component';

describe('Content10FooterComponent', () => {
  let component: Content10FooterComponent;
  let fixture: ComponentFixture<Content10FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content10FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content10FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
