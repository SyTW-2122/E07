import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-riu-arecas',
  templateUrl: './riu-arecas.component.html',
  styleUrls: ['./riu-arecas.component.css']
})
export class RiuArecasComponent implements OnInit {

  reserva = {
    nombre_hotel: "RIU Arecas ★★★★",
    tipo_habitacion: "",
    numero_huespedes: "",
    fecha_entrada: "",
    fecha_salida: ""
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("Página cargada");
  }

  reserva_habitacion() {
    let date_entrada = new Date(this.reserva.fecha_entrada);
    let date_salida = new Date(this.reserva.fecha_salida);

    if (date_salida > date_entrada) {
      this.authService.reserva_hotel(this.reserva).subscribe(
        res => {
          alert("Reserva realizada");
          this.router.navigate(['/perfil-usuario']);
        }, err => {
          alert("No se ha podido realizar la reserva");
        }
      )
    } else {
      alert("La fecha de salida del hotel tiene que ser mínimo 1 día posterior a la fecha de entrada")
    }

  }

}
