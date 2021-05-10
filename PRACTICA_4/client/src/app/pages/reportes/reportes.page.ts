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
  pru = [{ "carnet": 201213283, "nombre": "Mario", "curso": "redes2", "cuerpo": "yanosale", "fecha": "2021-05-09T23:28:44.644Z", "servidor": "API__1 Servidor: servidor1" }, { "carnet": 2015, "nombre": "adio", "curso": "assd", "cuerpo": "asad", "fecha": "2021-05-09T23:47:32.668Z", "servidor": "API__1 Servidor: servidor1" }, { "carnet": 20145555, "nombre": "prueba movil", "curso": "assd", "cuerpo": "asad", "fecha": "2021-05-09T23:52:39.331Z", "servidor": "API__1 Servidor: servidor1" }, { "carnet": 2015664, "nombre": "movil 2", "curso": "rouexto", "cuerpo": "dhdhd", "fecha": "2021-05-09T23:53:20.426Z", "servidor": "API__1 Servidor: servidor1" }, { "carnet": 2334, "nombre": "PC 111", "curso": "ssd", "cuerpo": "sdsd", "fecha": "2021-05-10T00:02:44.550Z", "servidor": "API__1 Servidor: servidor1" }, { "carnet": 20141111, "nombre": "Prueba Reporte", "curso": "Proyecto", "cuerpo": "Prueba proyecto", "fecha": "2021-05-10T04:53:53.646Z", "servidor": "API__1 Servidor: servidor1" }, { "carnet": 201504100, "nombre": "ALEX LOP", "curso": "IPC1", "cuerpo": "mi reporte de IPC1", "fecha": "2021-05-10T06:31:50.562Z", "servidor": "API__1 Servidor: servidor1" }, { "carnet": 201504100, "nombre": "ACTUALIZO", "curso": "IPC1", "cuerpo": "actualizo", "fecha": "2021-05-10T06:33:26.929Z", "servidor": "API__1 Servidor: servidor1" }]

  constructor(private reporteServices: ReporteService,
    public toastController: ToastController,
    public alertController: AlertController) {
    this.initializeItems();
  }

  ngOnInit() {
    this.initializeItems();
  }

  actualizar() {
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
    this.items = this.pru.reverse();
    /**
    this.reporteServices.obtenerReportes().subscribe(
      res => {
        console.log(res);
        this.items = res;
        this.items = this.items.reverse();
      },
      err => console.log(err)
    );
     */
  }

  async getItems(ev) {

    //TODO: agrego valor a la busqueda
    var val = ev.target.value;
    console.log('entrada->'+val)

    //TODO: filstro la informacion que lleva la base de datos
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        
        return (item['carnet'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
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