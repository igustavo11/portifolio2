import { Component, signal ,inject} from '@angular/core';
import { IProjects } from '../interface/IProjects.interfaces';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

 public arrayProjects = signal<IProjects[]>([
  {
    src:'assets/img/projects/becoffe.png',
    alt:"Projeto Cardapio",
    title:"Becoffee Caravelas",
    width:'70px',
    height:'51px',
    description:'<p>Projeto feito para ser uma landing page junto com o cardapio da cafeteria, feito em jquery e bootstrap</p>',
    links: [
      {
        name:'Conheça a Becoffee',
        href:'https://becoffeecaravelas.com.br'
      },
    ],
  },
  {
    src:'assets/img/projects/vision.png',
    alt:"Projeto Ladingpage",
    title:"Agencia Vision",
    width:'100px',
    height:'51px',
    description:'<p>Projeto landing page para uma agencia, feito em html,jquery,bootstrap</p>',
    links: [
      {
        name:'Conheça a VisOn',
        href:'https://visionagencia.com.br/'
      },
    ],
  },
  {
    src:'assets/img/projects/app-fianc.png',
    alt:"Projeto Financeiro",
    title:"Authentic Finanças",
    width:'100px',
    height:'51px',
    description:'<p>Projeto para controle financeiro de uma loja de roupas, armazenado em local storage foi feito um crud em react e scss </p>',
    links: [
      {
        name:'Conheça o app',
        href:'https://authenticfinancas.vercel.app/'
      },
    ],
  },
  {
    src:'assets/img/projects/cardapio.png',
    alt:"Projeto Delivery",
    title:"Delivery via whatsapp",
    width:'100px',
    height:'51px',
    description:'<p>Projeto construido para ser um delivery que facilita a vida de quem está começando na área de comida, onde o pedido irá ser direcionado ao whatsapp da empresa, feito em jquery, javascript e bootstrap, consumindo api de CEP e envio via whatsapp </p>',
    links: [
      {
        name:'Conheça o app',
        href:'https://cardapiomostruariogustavo.netlify.app/'
      },
    ],
  },
  {
    src:'assets/img/projects/força.png',
    alt:"Projeto Site Construtora",
    title:"Site Institucional",
    width:'100px',
    height:'51px',
    description:'<p>Projeto construido para servir de site institucional a uma construtora nos Estados Unidos, feito em javascript vanilha e css </p>',
    links: [
      {
        name:'Conheça Força Builders',
        href:'https://www.forcabuilders.com/'
      },
    ],
  },
  {
    src:'assets/img/projects/primecine.png',
    alt:"Projeto Site filmes",
    title:"Projeto em react",
    width:'60px',
    height:'51px',
    description:'<p>Projeto de estudo em react consumindo uma api publica de filmes, onde ficam salvos os seus filmes favoritos na localstorage!</p>',
    links: [
      {
        name:'Conheça Prime Cine',
        href:'https://primecine.vercel.app/'
      },
    ],
  },
 ]);

 public openDialog(data: IProjects){
  this.#dialog.open(DialogProjectsComponent, {
    data,
    panelClass: EDialogPanelClass.PROJECTS
  })
 }
}
