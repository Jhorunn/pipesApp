import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunoes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  clientes: string[] = ['María', 'Pedro', 'Juan', 'Hernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  cambiarCliente() {
    this.nombre = 'Talía';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.splice(0, 1);
  }

  persona = {
    nombre: 'Hernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  };

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })

}
