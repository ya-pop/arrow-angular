import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLevelComponent } from './tree-level.component';

describe('TreeLevelComponent', () => {
  let component: TreeLevelComponent;
  let fixture: ComponentFixture<TreeLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
