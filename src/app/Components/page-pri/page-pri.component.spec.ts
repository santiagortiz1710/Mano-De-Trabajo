import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePriComponent } from './page-pri.component';

describe('PagePriComponent', () => {
  let component: PagePriComponent;
  let fixture: ComponentFixture<PagePriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
