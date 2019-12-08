import { TestBed } from '@angular/core/testing';

import { NgxMatRpgBattleService } from './ngx-mat-rpg-battle.service';

describe('NgxMatRpgBattleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatRpgBattleService = TestBed.get(NgxMatRpgBattleService);
    expect(service).toBeTruthy();
  });
});
