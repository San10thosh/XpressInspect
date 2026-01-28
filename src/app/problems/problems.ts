import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [Dashboard],
  // SAFE MODE: We are putting the HTML directly here to stop the file error
  templateUrl: './problems.html',
  styleUrl: './problems.css' 
})
export class Problems {
}