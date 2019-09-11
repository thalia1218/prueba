import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
opcioneskioskos: any[];

  constructor() {

  }

  ngOnInit() {
    this.opcioneskioskos = [
      {
        codigo: '011',
        descripcion: 'IR A DATOS PERSONALES',
        ayuda: 'Al desplegar este menú podrá encontrar una serie de reportes que podrá enviar al correo o imprimir. Al mismo tiempo, encontrará una opción de consulta de datos personales.',
        clase: 'PANTALLA',
        empresa: ''
      },
      {
        codigo: '0121',
        descripcion: 'DESPRENDIBLE DE NÓMINA',
        ayuda: 'Para visualizar su Desprendible de Nomina, es necesario especificar en la parte de superior la fecha desde y hasta, rango de fechas en la cual usted desea ver su desprendible, luego debe hacer  hacer clic en el botón [Ejecutar Opción].',
        clase: 'REPORTE',
        empresa: ''
      },
      {
        codigo: '0123',
        descripcion: 'CERTIFICADO DE INGRESOS Y RETENCIONES',
        ayuda: 'Este reporte permite obtener el Certificado de Ingresos y Retenciones. Antes de generarlo, modifique la fecha inicial con 01 de enero del año del certificado, y la fecha final con 31 de diciembre del mismo año a consultar.',
        clase: 'REPORTE',
        empresa: ''
      },
      {
        codigo: '0124',
        descripcion: 'SALDO DE VACACIONES',
        ayuda: 'Para visualizar su Saldo de Vacaciones, es necesario especificar en la parte de superior la fecha desde y hasta, rango de fechas en la cual usted desea ver su saldo de vacaciones, luego debe hacer  hacer clic en el botón [Generar Reporte].',
        clase: 'REPORTE',
        empresa: ''
      },
      {
        codigo: '0125',
        descripcion: 'SALDO DE CESANTIAS',
        ayuda: 'Para visualizar su Saldo de Cesantías, es necesario especificar en la parte de superior la fecha desde y hasta, rango de fechas en la cual usted desea ver su saldo de cesantías, luego debe hacer  hacer clic en el botón [Generar Reporte].',
        clase: 'REPORTE',
        empresa: ''
      },
      {
        codigo: '0126',
        descripcion: 'CERTIFICADO LABORAL PERSONALIZADO',
        ayuda: 'Para visualizar su Constancia Laboral, es necesario especificar en la parte de superior la fecha desde y hasta, rango de fechas en la cual usted desea ver su certificado, luego debe hacer hacer clic en el botón [Generar Reporte].',
        clase: 'REPORTE',
        empresa: ''
      }
    ]


  }



}
