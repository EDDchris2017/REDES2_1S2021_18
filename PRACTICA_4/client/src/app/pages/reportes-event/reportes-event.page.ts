import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { ReporteService } from '../../services/reporte.service'

@Component({
  selector: 'app-reportes-event',
  templateUrl: './reportes-event.page.html',
  styleUrls: ['./reportes-event.page.scss'],
})
export class ReportesEventPage implements OnInit {
  items;
  isEvento: number = 0;

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
                Nombre Evento <strong>${datos['nombreEvento']}</strong><hr>
                idEvento <strong>${datos['idEvento']}</strong><hr>
                Procesado por <strong>${datos['servidor']}</strong><hr>
                Fecha <strong>${datos['fecha']}</strong><hr>
                Foto <ion-img style="width: 100px; height: 100px;" [src]="${datos['base64']}"></ion-img><hr>
             
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
    this.reporteServices.obtenerReportesAsistencia().subscribe(
      res => {
        console.log(res);
        this.items = res;
        this.items = this.items.reverse();
      },
      err => console.log(err)
    );
  }

  async getItems(ev) {
    
    //TODO: agrego valor a la busqueda
    var val = ev.target.value;
    console.log('evento es->' + this.isEvento +' Valor->' +val)

    if(this.isEvento == 0){ //* Filtro por carnet
    //TODO: filstro la informacion que lleva la base de datos
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        console.log(item['carnet'])
        return (item['carnet'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      console.log('paso aqui alguna vez')
    } else {
      //TODO: Al no tener nada la base de datos, reinicio la lista
      this.initializeItems();
    }
  }else { //* Filtro por ID evento
    //TODO: filstro la informacion que lleva la base de datos
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        console.log(item['idEvento'])
        return (item['idEvento'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      console.log('paso aqui alguna vez')
    } else {
      //TODO: Al no tener nada la base de datos, reinicio la lista
      this.initializeItems();
    }
  }
  }

  getReportes() {
    this.reporteServices.obtenerReportesAsistencia().subscribe(
      res => {
        console.log(res)
      },
      err => this.presentToast("Error al enviar Reporte")
    );
  }

  evento(event : any){
    if(this.isEvento == 0){
      this.isEvento = 1;
    } else {
      this.isEvento = 0;
    }
  }

}
