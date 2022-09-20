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

  form: any;
  // form: FormGroup;

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



  }


  OnSubmit() {

    console.log('formData :>> ', this.form.value)

    // if (this.form.valid) {


    // const formData: any = new FormData();

    // formData.forEach((item: any) => {
    //   console.log('formData :>> ', item);

    // });



    this.client.postRequestRegistroUsers('http://190.60.101.59:6003/api/Personas', this.form.value).subscribe(
      (response: any) => {
        var data: any = {
          nombre: this.form.value.nombreEmpresa,
          tipoE: this.form.value.tipoEmpresa,
          direccionE: this.form.value.DireccionEmpresa,
          numeroE: this.form.value.NumeroEmpresa,
          numeroS: this.form.value.NumeroSecundario,
          emailE: this.form.value.emailEmpresa,
          horario: this.form.value.Horario,
          logo: response.img, //LO que obtenga de la respuesta
          // correo: this.auth.getCourrentUserCorreo()
        }
        // this.registrarEmpresaDB(data);
      },
      (error) => {
        console.error(error);
      }
    )

    // }

  }
}
