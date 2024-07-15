import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuelsComponent } from './visuels.component';

describe('VisuelsComponent', () => {
  let component: VisuelsComponent;
  let fixture: ComponentFixture<VisuelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisuelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
