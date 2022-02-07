import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InicioComponent implements OnInit {

  tarjetas: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.inicio().subscribe(
      res => {
        let hoteles = Object.values(res);

        let tarjeta_hotel = '';
        hoteles.forEach((hotel, index) => {
          tarjeta_hotel = tarjeta_hotel + '<div class="card" tabindex="' + index + '">';
          tarjeta_hotel = tarjeta_hotel + '<img src="' + hotel.ruta_imagen + '">'
          tarjeta_hotel = tarjeta_hotel + '<h4 tabindex="' + index + '">' + hotel.nombre +'</h4>'
          tarjeta_hotel = tarjeta_hotel + '<p tabindex="' + index + '">' + hotel.descripcion +'</p>'
          tarjeta_hotel = tarjeta_hotel + '<a href="' + hotel.enlace_pagina + '" tabindex="' + index +'">Leer más</a>'
          tarjeta_hotel = tarjeta_hotel + '</div>'
        })
        this.tarjetas = tarjeta_hotel;
      },
      err => console.log(err)
    )
  }

}
