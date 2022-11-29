import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsPublicDataViewComponent } from './us-public-data-view.component';

describe('UsPublicDataViewComponent', () => {
  let component: UsPublicDataViewComponent;
  let fixture: ComponentFixture<UsPublicDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsPublicDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsPublicDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
