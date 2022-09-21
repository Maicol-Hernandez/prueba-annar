import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../servicios/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formRegistro!: FormGroup;

  constructor(

    private readonly fb: FormBuilder,
    private client: ClientService,

  ) { }

  ngOnInit(): void {
    this.formRegistro = this.initForm()
  }


  onSubmit(): void {
    if (this.formRegistro.valid) {


      let data = {
        idPersona: this.formRegistro.value.idPersona,
        documento: this.formRegistro.value.documento,
        nombres: this.formRegistro.value.nombres,
        apellidos: this.formRegistro.value.apellidos,
        telefono: this.formRegistro.value.telefono,
        correo: this.formRegistro.value.correo,
        direccion: this.formRegistro.value.direccion
      }

      this.client.postRequestRegistroUsers(data).subscribe(
        (response: any) => {

          console.log('response :>> ', response);
          // this.ngOnInit()
        },
        (error) => {
          console.error(error);
        }
      )

    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      idPersona: ['', Validators.required, Validators.maxLength(5)],
      documento: ['', Validators.required, Validators.maxLength(10)],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required, Validators.maxLength(10)],
      correo: ['', Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )],
      direccion: ['', Validators.required],
    })
  }


}
