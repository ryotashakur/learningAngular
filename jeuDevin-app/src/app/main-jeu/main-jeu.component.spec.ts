import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJeuComponent } from './main-jeu.component';

describe('MainJeuComponent', () => {
  let component: MainJeuComponent;
  let fixture: ComponentFixture<MainJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainJeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
