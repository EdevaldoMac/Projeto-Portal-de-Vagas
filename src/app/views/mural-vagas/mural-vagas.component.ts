import { Component, OnInit } from '@angular/core';
import { Vagas } from 'src/app/models/vagas.model';
import { VagasServiceService } from 'src/app/services/vagas-service.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {
  vagas! : Vagas[];

  constructor(private vagasServico : VagasServiceService) { }

  ngOnInit(): void {
    this.vagasServico.read().subscribe(itens=>{
      this.vagas = itens;
    })
  }

}
