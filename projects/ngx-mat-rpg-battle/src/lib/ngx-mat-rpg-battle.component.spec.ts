import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatRpgBattleComponent } from './ngx-mat-rpg-battle.component';

describe('NgxMatRpgBattleComponent', () => {
  let component: NgxMatRpgBattleComponent;
  let fixture: ComponentFixture<NgxMatRpgBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatRpgBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatRpgBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
