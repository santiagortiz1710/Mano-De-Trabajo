import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmpleadorComponent } from './details-empleador.component';

describe('DetailsEmpleadorComponent', () => {
  let component: DetailsEmpleadorComponent;
  let fixture: ComponentFixture<DetailsEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEmpleadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
