import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/IExperiences.interfaces';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: 'Suporte Técnico',
        p: 'Inovar Sistemas | Mai 2024 - Present'
      },
      text: 'Desde maio de 2024, atuo como suporte técnico na Inovar Sistemas, aplicando suporte do software Advanced, para os clientes'
    },
    {
      summary:{
        strong: 'Especialista em suporte de TI',
        p: 'Anhanguera | Mar 2024 - Mai 2024'
      },
      text: 'Durante meu período na Anhanguera de março de 2024 a maio de 2024, atuei como especialista em suporte de TI, aplicando suporte em infraestrutura computacional, como servidores e redes'
    },
    {
      summary:{
        strong: 'Técnico de Telecomunicações',
        p: 'RadioTelecom | Jan 2020 - Mar 2024'
      },
      text: 'Durante meu período na RadioTelecom de janeiro de 2020 a março de 2024, atuei como técnico de telecomunicações dando manutenção e programando rádios de comunicação P25'
    },

  ])

}
