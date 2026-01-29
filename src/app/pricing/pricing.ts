import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface PricingPlan {
  name: string;
  role: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  displayPrice: number;
  cssClass: string;
  btnClass?: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class PricingComponent implements OnInit {

  billingCycle: 'monthly' | 'yearly' = 'monthly';
  
  plans: PricingPlan[] = [
    {
      name: 'Base',
      role: 'Individual professionals (<500 clients)',
      description: 'The perfect match for starting professionals with a smaller clientele.',
      monthlyPrice: 999,
      yearlyPrice: 899, 
      displayPrice: 0,
      cssClass: 'bg-card-1'
    },
    {
      name: 'Plus',
      role: 'Growing teams & Smaller agencies',
      description: 'For professionals who have many hours and a large customer database.',
      monthlyPrice: 1499,
      yearlyPrice: 1299,
      displayPrice: 0,
      cssClass: 'bg-card-2'
    },
    {
      name: 'Premium',
      role: 'Larger agencies (3+ professionals)',
      description: 'The ultimate solution for the bigger agencies with a larger clientele.',
      monthlyPrice: 1999,
      yearlyPrice: 1799,
      displayPrice: 0,
      cssClass: 'bg-card-3',
      btnClass: 'btn-premium'
    }
  ];
features = [
    'Receive unlimited bookings 24/7',
    'Send unlimited mail confirmations',
    'Automated reminders',
    'Client database management',
    'Custom branding'
  ];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef // <--- Inject ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.runNumberAnimation();
    } else {
      this.setPricesWithoutAnimation();
    }
  }

  toggleBilling(cycle: 'monthly' | 'yearly') {
    if (this.billingCycle === cycle) return;
    this.billingCycle = cycle;
    
    if (isPlatformBrowser(this.platformId)) {
      this.runNumberAnimation();
    } else {
      this.setPricesWithoutAnimation();
    }
  }

  runNumberAnimation() {
    const duration = 1000;
    
    this.plans.forEach(plan => {
      // 1. Determine target
      const targetPrice = this.billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
      
      // 2. Reset to 0 immediately so user sees it start
      const startValue = 0; 
      plan.displayPrice = 0;
      
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing: start fast, slow down
        const easeOut = 1 - Math.pow(1 - progress, 3);

        // Update the value
        plan.displayPrice = Math.floor(startValue + (targetPrice - startValue) * easeOut);

        // FORCE ANGULAR TO UPDATE VIEW
        this.cdr.detectChanges(); 

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure it ends on the exact number
          plan.displayPrice = targetPrice;
          this.cdr.detectChanges();
        }
      };

      requestAnimationFrame(animate);
    });
  }

  setPricesWithoutAnimation() {
    this.plans.forEach(plan => {
      plan.displayPrice = this.billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    });
  }
}