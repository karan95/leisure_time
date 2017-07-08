import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsLoadingComponent } from './feeds-loading.component';

describe('FeedsLoadingComponent', () => {
  let component: FeedsLoadingComponent;
  let fixture: ComponentFixture<FeedsLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
