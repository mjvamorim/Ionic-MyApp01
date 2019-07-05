import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string = null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  async mostraAlerta() {
		const alert = await this.alertCtrl.create({
		header: "Bem vindo!",
		subHeader: this.nome,
		buttons: ["Ok"]
		});
		await alert.present();
	}
}