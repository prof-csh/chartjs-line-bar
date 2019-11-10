import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  type = 'bar';
  data = {
    labels: ["Instacia 1", "Instacia 2", "Instacia 3", "Instacia 4", "Instacia 5", "Instacia 6", "Instacia 7"],
    datasets: [   
      
      {
        label: "Maximo",
        data: [165, 159, 180, 181, 156, 155, 140],
        type: 'line',
        borderColor:'#eddb1c',
        backgroundColor:'#FFF3D6',
        fill: false
      },
      {
        label: "Promedio",
        data: [115, 109, 130, 131, 106, 105, 90],
        type: 'line',
        borderColor:'#FF7A96',
        backgroundColor:'#EAC3CC',
        fill: false
      },
      {
        label: "Minimo",
        data: [65, 59, 80, 81, 56, 55, 40],
        type: 'line',
        borderColor:'#4BB7FF',
        backgroundColor:'#CDEBFF',
        fill: false
      }
      ,{
        label: "Error",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor:'#FF7A96',
        borderWidth: 1,
        backgroundColor:'#EAC3CC'
      },
      {
        label: "NOK",
        data: [5, 9, 10, 11,6, 5, 10],
        borderColor:'#4BB7FF',
        borderWidth: 1,
        backgroundColor:'#CDEBFF'
      },
      {
        label: "PROCESING",
        data: [51, 19, 110, 111,16, 15, 110],
        borderColor:'#FFD36C',
        borderWidth: 1,
        backgroundColor:'#FFF3D6'
      }
    ]
  };
  options = {
    responsive: true,
  };
}
