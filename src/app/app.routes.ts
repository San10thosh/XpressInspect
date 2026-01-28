import { Routes } from '@angular/router';
import { PricingComponent } from './pricing/pricing'; // Import it
import { Dashboard } from './dashboard/dashboard';
import { Problems } from './problems/problems';

export const routes: Routes = [
    { path: '', component: Problems },
  // Add this line:
  { path: 'pricing', component: PricingComponent },
  
  //Optional: Redirect empty path to home if needed
   { path: '', redirectTo: 'home', pathMatch: 'full' } 
];