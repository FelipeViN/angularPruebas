import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAddPageComponent } from './crud-add-page.component';

describe('CrudAddPageComponent', () => {
  let component: CrudAddPageComponent;
  let fixture: ComponentFixture<CrudAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAddPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
