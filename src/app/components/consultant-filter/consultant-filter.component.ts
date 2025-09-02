import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantsService } from '../../services/consultants.service';

@Component({
  selector: 'app-consultant-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultant-filter.component.html',
  styleUrls: ['./consultant-filter.component.css']
})
export class ConsultantFilterComponent implements OnInit {

  specializations: string[] = [];
  @Output() filterSelected = new EventEmitter<string>();

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit(): void {
    this.specializations = this.consultantsService.getSpecializations();
  }

  onFilterChange(event: any): void {
    this.filterSelected.emit(event.target.value);
  }
}