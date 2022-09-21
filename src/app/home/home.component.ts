import { Component, OnInit } from '@angular/core';
import { ClientService } from '../servicios/client.service'
import { Router } from '@angular/router';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any

  constructor(
    private client: ClientService,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.client.getRequestUsers().subscribe(res => {
      console.log('res :>> ', res);
      this.data = res
    })
  }

  editarRegistro(id: number) {
    console.log(' id a editar :>> ', id);
  }

  eliminarRegistro(id: number) {
    console.log(' id a eliminar :>> ', id);
    let data = {
      IdPersona: id
    }
    this.client.deleteRequestUser(data.IdPersona).subscribe((res: any) => {
      console.log('res :>> ', res);

      Swal.fire({
        position: 'center',
        title: `${res}!`,
        showConfirmButton: false,
        icon: 'success',
        confirmButtonText: 'Cool',
        timer: 2000

      }).then(() => {

        this.ngOnInit()

      });


    })

  }

}
