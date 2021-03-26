import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service'
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  items;

  constructor(private reporteServices: ReporteService,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.initializeItems();
  }

  async presentAlert(datos) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ingreso de reportes de practicantes',
      message: `Carnet <strong>${datos['carnet']}</strong><hr>
                Nombre <strong>${datos['nombre']}</strong><hr>
                Curso <strong>${datos['curso']}</strong><hr>
                Procesado por <strong>${datos['servidor']}</strong><hr>
                Fecha <strong>${datos['fecha']}</strong><hr>
                Cuerpo del Reporte <strong>${datos['cuerpo']}</strong><hr>
                Solicitud atendida por el servidor <strong>\"${datos['servidor']}\"</strong>`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async initializeItems() {
    this.reporteServices.obtenerReportes().subscribe(
      res => {
        console.log(res);
        this.items = res;
      },
      err => console.log(err)
    );
  }

  async getItems(ev) {

    //TODO: agrego valor a la busqueda
    var val = ev.target.value;
    console.log(val)

    //TODO: filstro la informacion que lleva la base de datos
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        console.log(item['carnet'])
        return (item['carnet'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      console.log('paso aqui alguna vez')
    } else {
      //TODO: Al no tener nada la base de datos, reinicio la lista
      this.initializeItems();
    }

  }

  getReportes() {
    this.reporteServices.obtenerReportes().subscribe(
      res => {
        console.log(res)
      },
      err => this.presentToast("Error al enviar Reporte")
    );
  }

}