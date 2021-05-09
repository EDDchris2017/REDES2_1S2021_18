import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-re-individual',
  templateUrl: './re-individual.page.html',
  styleUrls: ['./re-individual.page.scss'],
})




export class ReIndividualPage implements OnInit {

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  extension: string;
  base64: string;
  foto: number = 0;



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

  fileChangeListener(fileInput: any){
    console.log(fileInput.target.files)
    if (fileInput.target.files && fileInput.target.files[0]) {
      console.log(fileInput.target.files[0].name.split('.').pop());
      this.extension = fileInput.target.files[0].name.split('.').pop()
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;

                    this.base64 = this.cardImageBase64;
                    this.foto = 1;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  obtenerDatos(id, nombre, nombreEvento, idevento){
    console.log(id.value, nombre.value, nombreEvento.value, idevento.value, this.extension, this.base64)
    this.reporteServices.guardarReporteEventos(id.value, nombre.value, nombreEvento.value, idevento.value, this.extension, this.base64).subscribe(
      res => {
        console.log(res);
        this.presentToast(`${res['msg']} Atendido por ${res['servidor']}`, 'success');
      },
      err =>  this.presentToast("Error al enviar Reporte", 'danger')
    )
  }
}
