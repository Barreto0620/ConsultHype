import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Consultant } from '../../services/consultants.service';

@Component({
  selector: 'app-consultant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent {
  @Input() consultants: Consultant[] = [];
}