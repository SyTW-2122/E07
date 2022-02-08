import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PerfilUsuarioComponent implements OnInit {

  tarjeta_usuario_html = '';
  tarjetas_reservas = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.perfil_usuario().subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res)))
        let usuario = JSON.parse(JSON.stringify(res));

        let tarjeta_usuario = '<img src="../../../assets/img/user_icon.png">';
        tarjeta_usuario = tarjeta_usuario + '<h4 tabindex="1">Nombre</h4>'
        tarjeta_usuario = tarjeta_usuario + '<p tabindex="1">' + usuario.nombre + '</p>'
        tarjeta_usuario = tarjeta_usuario + '<h4 tabindex="1">Apellidos</h4>'
        tarjeta_usuario = tarjeta_usuario + '<p tabindex="1">' + usuario.apellidos + '</p>'
        tarjeta_usuario = tarjeta_usuario + '<h4 tabindex="1">Nombre de usuario</h4>'
        tarjeta_usuario = tarjeta_usuario + '<p tabindex="1">' + usuario.nombre_usuario + '</p>'
        tarjeta_usuario = tarjeta_usuario + '<h4 tabindex="1">Fecha de nacimiento</h4>'
        tarjeta_usuario = tarjeta_usuario + '<p tabindex="1">' + usuario.fecha_nacimiento + '</p>'
        tarjeta_usuario = tarjeta_usuario + '<h4 tabindex="1">DNI</h4>'
        tarjeta_usuario = tarjeta_usuario + '<p tabindex="1">' + usuario.dni + '</p>'
        tarjeta_usuario = tarjeta_usuario + '<h4 tabindex="1">Teléfono</h4>'
        tarjeta_usuario = tarjeta_usuario + '<p tabindex="1">' + usuario.telefono + '</p>'

        this.tarjeta_usuario_html = tarjeta_usuario;
      },
      err => console.log(err)
    )

    this.authService.obtener_reservas().subscribe(
      res => {
        let reservas = Object.values(res);

        let tarjeta_reserva = '<h2>Reservas</h2>';
        reservas.forEach((reserva, index) => {
          tarjeta_reserva = tarjeta_reserva + '<hr>';
          tarjeta_reserva = tarjeta_reserva + '<h4>' + reserva.nombre_hotel + '</h4>'
          tarjeta_reserva = tarjeta_reserva + '<p>Fecha de entrada: ' + reserva.fecha_entrada + '</p>'
          tarjeta_reserva = tarjeta_reserva + '<p>Fecha de salida: ' + reserva.fecha_entrada + '</p>'
        })
        this.tarjetas_reservas = tarjeta_reserva;
      },
      err => console.log(err)
    )
  }

}
