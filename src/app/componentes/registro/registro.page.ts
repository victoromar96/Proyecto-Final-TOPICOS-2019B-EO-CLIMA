import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router} from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email: string;
  public name: string;
  public password: string;

  constructor( private auth: AuthService, private router : Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    this.auth.register(this.email, this.password, this.name).then(auth => {
      this.router.navigate(['home'])
      console.log(auth)
    }).catch(err => this.presentAlert())
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Datos incorrectos',
      message: 'Ingrese todos los datos correctamente',
      buttons : ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }




}
