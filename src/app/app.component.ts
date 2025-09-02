import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantsService, Consultant } from './services/consultants.service';
import { ConsultantListComponent } from './components/consultant-list/consultant-list.component';
import { ConsultantFilterComponent } from './components/consultant-filter/consultant-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConsultantListComponent, ConsultantFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  filteredConsultants: Consultant[] = [];

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit(): void {
    this.onFilterSelected('Todos');
  }

  onFilterSelected(specialization: string): void {
    this.filteredConsultants = this.consultantsService.getConsultants(specialization);
  }
}