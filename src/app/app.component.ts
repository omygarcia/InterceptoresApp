import { Component } from '@angular/core';
import { UsuariosService } from "src/app/services/usuarios.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private usuariosService:UsuariosService)
  {
      this.usuariosService.obtenerUsuario().subscribe(usuarios=>{
        console.log(usuarios);
      },err=>{
        console.log("ERROR:"+err);
      });
  }
}
