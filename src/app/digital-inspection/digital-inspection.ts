import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-inspection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digital-inspection.html',
  styleUrls: ['./digital-inspection.css']
})
export class DigitalInspectionComponent {

  features: string[] = [
    'Digital inspection checklists and workflows',
    'Real-time reporting with photo evidence',
    'Automated compliance tracking and audit readiness'
  ];

}