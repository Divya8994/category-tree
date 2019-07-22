import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateNodeComponent } from './intermediate-node.component';

describe('IntermediateNodeComponent', () => {
  let component: IntermediateNodeComponent;
  let fixture: ComponentFixture<IntermediateNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediateNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
