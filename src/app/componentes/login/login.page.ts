import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  } 

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(res=> {
      this.router.navigate(['/home']);
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
