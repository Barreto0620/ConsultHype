import { Injectable } from '@angular/core';

export interface Consultant {
  name: string;
  specialization: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {

  private consultants: Consultant[] = [
  { name: 'Gabriel Barreto', specialization: 'Full Stack', bio: 'Desenvolvedor Full Stack especializado em Angular, Node.js e bancos de dados relacionais.' },
  { name: 'Ana Silva', specialization: 'TI', bio: 'Especialista em desenvolvimento web e mobile.' },
  { name: 'João Santos', specialization: 'Marketing', bio: 'Consultor de marketing digital e mídias sociais.' },
  { name: 'Carla Oliveira', specialization: 'Finanças', bio: 'Analista financeira com foco em planejamento estratégico.' },
  { name: 'Pedro Souza', specialization: 'TI', bio: 'Desenvolvedor backend em Java e Python.' },
  { name: 'Mariana Lima', specialization: 'Marketing', bio: 'Estrategista de conteúdo e SEO.' },
  { name: 'Fernando Costa', specialization: 'Finanças', bio: 'Consultor de investimentos e gestão de patrimônio.' },
  { name: 'Lucas Ferreira', specialization: 'DevOps', bio: 'Especialista em infraestrutura e automação de deploys.' },
  { name: 'Beatriz Rodrigues', specialization: 'UX/UI', bio: 'Designer de experiência do usuário e interfaces digitais.' },
  { name: 'Rafael Almeida', specialization: 'Data Science', bio: 'Cientista de dados especializado em machine learning e analytics.' }
];

  constructor() { }

  getConsultants(filter: string = ''): Consultant[] {
    if (filter === 'Todos' || filter === '') {
      return this.consultants;
    }
    return this.consultants.filter(c => c.specialization === filter);
  }

  getSpecializations(): string[] {
    const specializations = this.consultants.map(c => c.specialization);
    return ['Todos', ...new Set(specializations)];
  }
}