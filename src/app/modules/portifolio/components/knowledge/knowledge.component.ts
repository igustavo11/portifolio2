import { Component, signal } from '@angular/core';
import { IKnowledge } from '../interface/iKnowledge.interfaces';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt:'icone conhecimento'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt:'icone conhecimento'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt:'icone conhecimento'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt:'icone conhecimento'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt:'icone conhecimento'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt:'icone conhecimento'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt:'icone conhecimento'
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt:'icone conhecimento'
    },
  ])

}
