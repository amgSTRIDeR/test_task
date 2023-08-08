import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeIconsComponent } from './font-awesome-icons.component';

describe('FontAwesomeIconsComponent', () => {
  let component: FontAwesomeIconsComponent;
  let fixture: ComponentFixture<FontAwesomeIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontAwesomeIconsComponent]
    });
    fixture = TestBed.createComponent(FontAwesomeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
