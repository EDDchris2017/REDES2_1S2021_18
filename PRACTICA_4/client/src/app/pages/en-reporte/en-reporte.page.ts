import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-en-reporte',
  templateUrl: './en-reporte.page.html',
  styleUrls: ['./en-reporte.page.scss'],
})
export class EnReportePage implements OnInit {
  reporte: any = [];

  constructor(private reporteServices: ReporteService,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(mensaje, alerta) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: alerta,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  obtenerDatos(id, name, cur, cuerpo) {
    console.log(id.value, name.value, cur.value, cuerpo.value)
    this.reporteServices.guardarReporte(id.value, name.value, cur.value, cuerpo.value).subscribe(
      res => {
        console.log(res)
        //return [{ok:true, msg:'Reporte creado', carnet: '1111', nombre: 'nombre1', curso: 'redes2', cuerpo: 'hola ke ace', servidor: '201213283'}]
        let data = res;
        this.presentToast(`${res['msg']} Atendido por ${res['servidor']}`, 'success')
      },
      err => this.presentToast("Error al enviar Reporte", 'danger')
    )
  }

}
