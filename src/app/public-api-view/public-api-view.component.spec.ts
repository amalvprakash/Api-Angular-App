import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicApiViewComponent } from './public-api-view.component';

describe('PublicApiViewComponent', () => {
  let component: PublicApiViewComponent;
  let fixture: ComponentFixture<PublicApiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicApiViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicApiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
