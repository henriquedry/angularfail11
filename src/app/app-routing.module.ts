import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { ServicosComponent } from './servicos/servicos.component';

import { ClientesComponent } from './clientes/clientes.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },



{ path: 'login', component: LoginComponent },

{ path: 'servicos', component: ServicosComponent },


{ path: 'clientes', component: ClientesComponent }

];

@NgModule({

imports: [ RouterModule.forRoot(routes) ],

exports: [ RouterModule ]

})

export class AppRoutingModule {}