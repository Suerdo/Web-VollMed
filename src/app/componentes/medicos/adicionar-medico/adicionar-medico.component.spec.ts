import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarMedicoComponent } from './adicionar-medico.component';

describe('AdicionarMedicoComponent', () => {
  let component: AdicionarMedicoComponent;
  let fixture: ComponentFixture<AdicionarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
