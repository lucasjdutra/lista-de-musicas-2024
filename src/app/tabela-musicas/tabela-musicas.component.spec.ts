import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMusicasComponent } from './tabela-musicas.component';

describe('TabelaMusicasComponent', () => {
  let component: TabelaMusicasComponent;
  let fixture: ComponentFixture<TabelaMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
