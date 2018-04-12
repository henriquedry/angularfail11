import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  
})


export class ClientesComponent implements OnInit {

cliente : Cliente;

formGroup : FormGroup;


  constructor(private formBuilder: FormBuilder, private clienteService : ClienteService) { 

    this.formGroup = this.formBuilder.group({
      // Parâmetros: valor inicial, lista de validators (repetir do backend)
     
      cpf : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      nome: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      endereco : ['Rua Via', [Validators.required]],
      municipio : ['Rio de Janeiro', []],
      estado : ['RJ', []],
      telefone : ['977261827', [Validators.required]],
      email: ['joaquim@gmail.com', [Validators.required, Validators.email]],
      senha : ['123', [Validators.required]]
    }); // Responsável por instanciar um FormGroup

  }




  ngOnInit() {
  }

}
