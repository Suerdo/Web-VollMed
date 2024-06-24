import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirMedicoComponent } from './excluir-medico.component';

describe('ExcluirMedicoComponent', () => {
  let component: ExcluirMedicoComponent;
  let fixture: ComponentFixture<ExcluirMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
