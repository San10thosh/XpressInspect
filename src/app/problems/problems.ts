import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { DigitalInspectionComponent } from '../digital-inspection/digital-inspection';
import { FaqComponent } from '../faq/faq';
import { TeamFlowComponent } from "../team-flow/team-flow";
@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [Dashboard, DigitalInspectionComponent, FaqComponent, TeamFlowComponent],
  // SAFE MODE: We are putting the HTML directly here to stop the file error
  templateUrl: './problems.html',
  styleUrl: './problems.css' 
})
export class Problems {
}