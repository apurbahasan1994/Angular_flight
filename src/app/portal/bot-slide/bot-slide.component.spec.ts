import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotSlideComponent } from './bot-slide.component';

describe('BotSlideComponent', () => {
  let component: BotSlideComponent;
  let fixture: ComponentFixture<BotSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
