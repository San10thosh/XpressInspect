import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { DigitalInspectionComponent } from '../digital-inspection/digital-inspection';
import { FaqComponent } from '../faq/faq';
@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [Dashboard, DigitalInspectionComponent, FaqComponent],
  // SAFE MODE: We are putting the HTML directly here to stop the file error
  templateUrl: './problems.html',
  styleUrl: './problems.css' 
})
export class Problems {
}