import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpleadorComponent } from './details-empleador.component';

describe('DetailEmpleadorComponent', () => {
  let component: DetailEmpleadorComponent;
  let fixture: ComponentFixture<DetailEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEmpleadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
