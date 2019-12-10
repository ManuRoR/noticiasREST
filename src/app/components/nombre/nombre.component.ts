import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.scss']
})
export class NombreComponent implements OnInit {
  @Input()
  titulo: string;

  name: string;
  show: boolean;
  boton: string;
  colorButton: string;


  constructor() {
    this.name = '';
    this.show = true;
    this.boton = 'Mostrar';
    this.colorButton = 'primary';
  }

  muestra(muestra: boolean) {
    /*this.show = muestra;*/
     if (this.show) {
      this.show = false;
      this.boton = 'Mostrar';
      this.colorButton = 'primary';

    } else {
      this.show = true;
      this.boton = 'Ocultar';
      this.colorButton = 'warn';
    }
  }

  ngOnInit() {
  }

}
