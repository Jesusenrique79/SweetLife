import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[ClienteService]
})
export class ViewComponent implements OnInit {

  public clientes: string;
  public hora: string;
  public cliente: Cliente;
  public status: string;
  constructor(
    private _clienteService: ClienteService
  ) { 
    this.clientes = "Clientes Activos:";
    this.hora = "Hora:";
    this.cliente = new Cliente(1, 1 , 1);

  }

  ngOnInit() {
  }

  onSubmit(form) {
   
    //GUARDAR LOS DATOS
    this._clienteService.saveCliente(this.cliente).subscribe(
      response => {
        if (response.cliente) {

            	//this.save_cliente = response.cliente;

            this.status = 'success';
            	form.reset();
          } else {
          this.status = 'failed';
         }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}


