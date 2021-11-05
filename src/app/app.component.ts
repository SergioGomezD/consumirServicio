import { Component } from '@angular/core';
import { ConsumoService } from './service/consumo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicio';
  public page!: number;
  buscando: number=0;
  abuscar!:number;

  constructor(public consumo:ConsumoService){}

  ngOnInit(){

  }

  buscar(){
    if(this.abuscar!=0){
      this.buscando=this.abuscar;
    }
    if(this.abuscar>this.consumo.items.length || this.abuscar<=0){
      alert('Este valor no existe')
      this.buscando=0
    }

  }

  volver(){
    this.buscando=0;
  }
}
