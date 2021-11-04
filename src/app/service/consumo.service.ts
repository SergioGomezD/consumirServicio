import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  items:any={};
  constructor(private http:HttpClient) {
    console.log('funcionando!')
    this.http.get("https://www.datos.gov.co/resource/6he3-5m6n.json")
    .subscribe(
      (      result: any) => {
        this.items = result;
        console.log(result)
      },
      (      _error: any) => {
        console.log('problemas');
      }
    );
  }
}
