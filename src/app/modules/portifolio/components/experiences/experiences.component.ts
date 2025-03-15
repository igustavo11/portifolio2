import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/IExperiences.interfaces';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Suporte Técnico',
        p: 'Inovar Sistemas | Mai 2024 - Present',
      },
      text: 'Sou responsável pelo suporte de TI, ajudando os usuários a resolver problemas relacionados ao sistema e prestando assistência técnica. Minha rotina envolve orientar as pessoas no uso correto do sistema, solucionar dúvidas e corrigir erros em consultas SQL para garantir que os dados sejam recuperados de forma precisa e eficiente. Com isso, desenvolvi habilidades de comunicação, resolução de problemas, conhecimento em SQL e entendimento das necessidades do usuário, competências que considero valiosas para uma transição para a área de desenvolvimento, onde posso criar soluções que realmente atendam às expectativas dos usuários.',
    },
    {
      summary: {
        strong: 'Especialista em suporte de TI',
        p: 'Anhanguera | Mar 2024 - Mai 2024',
      },
      text: 'Fui responsável pela infraestrutura na faculdade, atuando com manutenção de hardware e configurações de rede no domínio. Minha função envolvia garantir a estabilidade da rede, realizar manutenções preventivas e corretivas, e assegurar que os sistemas da instituição funcionassem sem falhas. Com isso, adquiri experiência prática em infraestrutura de TI, resolução de problemas e gestão de redes, habilidades que complementam meu interesse em desenvolvimento, especialmente no que diz respeito à integração de sistemas e otimização de ambientes tecnológicos.',
    },
    {
      summary: {
        strong: 'Técnico de Telecomunicações',
        p: 'RadioTelecom | Jan 2020 - Mar 2024',
      },
      text: 'Durante meu período na RadioTelecom de janeiro de 2020 a março de 2024, atuei como técnico de telecomunicações dando manutenção e programando rádios de comunicação P25',
    },
  ]);
}
