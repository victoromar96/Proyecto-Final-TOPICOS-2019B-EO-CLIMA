import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ActionSheetController } from '@ionic/angular';
import { WeatherService } from '../servicios/weather.service';
import { Weather2Service } from '../servicios/weather2.service';
import { Weather3Service } from '../servicios/weather3.service';
import { Weather4Service } from '../servicios/weather4.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  

  weather;
  weather2;
  weather3; 
  weather4;


  constructor( public authservice : AuthService,
    public actionSheetController: ActionSheetController,
    private weatherService: WeatherService,
    private weatherService2: Weather2Service,
    private weatherService3: Weather3Service,
    private weatherService4: Weather4Service,
    public alertController: AlertController
    ) {
      
    }

  ngOnInit(){
    
    
  }


  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName,countryCode).subscribe(
      res => {
        console.log(res);
        this.weather = res},
      err => console.log(err)
    )
  }

  getWeather2(cityName: string, countryCode: string){
    this.weatherService2.getWeather2(cityName,countryCode).subscribe(
      res => {
        console.log(res);
        this.weather2 = res},
      err => console.log(err)
    )
  }

  getWeather3(cityName: string, countryCode: string){
    this.weatherService3.getWeather3(cityName,countryCode).subscribe(
      res => {
        console.log(res);
        this.weather3 = res},
      err => console.log(err)
    )
  }

  getWeather4(cityName: string, countryCode: string){
    this.weatherService4.getWeather4(cityName,countryCode).subscribe(
      res => {
        console.log(res);
        this.weather4 = res},
      err => console.log(err)
    )
  }

  


  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){
    if(cityName.value && countryCode.value){
      this.getWeather(cityName.value, countryCode.value);
      cityName.value ="";
      countryCode.value ="";
    }else{
      this.presentAlert();
    }
    cityName.focus();
    return false;
  }

  submitLocation2(cityName2: HTMLInputElement, countryCode2: HTMLInputElement){
    if(cityName2.value && countryCode2.value){
      this.getWeather2(cityName2.value, countryCode2.value);
      cityName2.value ="";
      countryCode2.value ="";
    }else{
      this.presentAlert();
    }
    cityName2.focus();
    return false;
  }

  submitLocation3(cityName3: HTMLInputElement, countryCode3: HTMLInputElement){
    if(cityName3.value && countryCode3.value){
      this.getWeather3(cityName3.value, countryCode3.value);
      cityName3.value ="";
      countryCode3.value ="";
    }else{
      this.presentAlert();
    }
    cityName3.focus();
    return false;
  }

  submitLocation4(cityName4: HTMLInputElement, countryCode4: HTMLInputElement){
    if(cityName4.value && countryCode4.value){
      this.getWeather4(cityName4.value, countryCode4.value);
      cityName4.value ="";
      countryCode4.value ="";
    }else{
      this.presentAlert();
    }
    cityName4.focus();
    return false;
  }

  

  Onlogout(){
    this.authservice.logout();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.Onlogout()
        },
      
      }]
    });
    await actionSheet.present();
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
