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

  constructor(public consumo:ConsumoService){}

  ngOnInit(){

  }
}
