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

  // form: any;
  form!: FormGroup;

  constructor(

    public fb: FormBuilder,
    // public form: FormGroup,
    private route: Router,
    private client: ClientService,

  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      // idPersona: ['', Validators.required],
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      direcion: ['', Validators.required],
    });

    console.log('this.form :>> ', this.form);


    this.client.getRequestUssers().subscribe(res => {
      console.log('res :>> ', res);
    })

  }


  OnSubmit() {

    let data = {
      idPersona: Math.random(),
      documento: this.form.value.documento,
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      telefono: this.form.value.telefono,
      correo: this.form.value.correo,
      direccion: this.form.value.direcion
    }

    this.client.postRequestRegistroUsers(data).subscribe(
      (response: any) => {

        console.log('response :>> ', response);
      },
      (error) => {
        console.error(error);
      }
    )

  }
}
