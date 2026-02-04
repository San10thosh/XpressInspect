import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface FlowStep {
  id: number;
  title: string;
  // CHANGED: Description is now an array of strings for bullet points
  description: string[]; 
}

export type TeamType = 'field' | 'admin';

@Component({
  selector: 'app-team-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-flow.html',
  styleUrls: ['./team-flow.css']
})
export class TeamFlowComponent implements AfterViewInit {
  activeTab: TeamType = 'field';
  activeStepIndex = 0;

  fieldSteps: FlowStep[] = [
    { 
      id: 1, 
      title: 'Opening Meeting', 
      description: [
        'Scope, objectives, and methodology explained.',
        'Roles and responsibilities clarified.'
      ]
    },
    { 
      id: 2, 
      title: 'Attendance Sheet', 
      description: [
        'Names and designations captured.',
        'Digital acknowledgment or signature obtained.'
      ]
    },
    { 
      id: 3, 
      title: 'Risk Assessment', 
      description: [
        'Site conditions and operational risks evaluated.',
        'Risk levels categorized.'
      ] 
    },
    { 
      id: 4, 
      title: 'Audit Points & Observations', 
      description: [
        'Evidence such as photos and measurements captured.',
        'Non-conformities documented.'
      ]
    },
    { 
      id: 5, 
      title: 'Report Generation', 
      description: [
        'Findings and scores consolidated.',
        'Final report generated and shared digitally.'
      ]
    }
  ];

  adminSteps: FlowStep[] = [
    { 
      id: 1, 
      title: 'Approval', 
      description: [
        'Inspection data reviewed.',
        'Annotations and inputs verified.',
        'Report approved digitally.'
      ]
    },
    { 
      id: 2, 
      title: 'Quality Validation', 
      description: [
        'Compliance parameters validated.',
        'Defects and SLA adherence reviewed.'
      ]
    },
    { 
      id: 3, 
      title: 'Stakeholder Review', 
      description: [
        'Approved report shared.',
        'Feedback collected.',
        'Action items communicated.'
      ]
    },
    { 
      id: 4, 
      title: 'Record & Closure', 
      description: [
        'Report archived securely.',
        'Audit marked completed.',
        'Historical data retained.'
      ]
    }
  ];

  currentSteps: FlowStep[] = this.fieldSteps;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChildren('stepCard') stepCards!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.detectActiveStep();
  }

  switchTab(tab: TeamType) {
    if (this.activeTab === tab) return;
    
    this.activeTab = tab;
    this.currentSteps = tab === 'field' ? this.fieldSteps : this.adminSteps;
    this.activeStepIndex = 0; 
    
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId) && this.scrollContainer) {
        this.scrollContainer.nativeElement.scrollTop = 0;
        this.detectActiveStep();
      }
    }, 50);
  }

  onScroll() {
    this.detectActiveStep();
  }

  detectActiveStep() {
    if (!isPlatformBrowser(this.platformId) || !this.scrollContainer || !this.stepCards) return;

    const container = this.scrollContainer.nativeElement;
    const containerCenter = container.scrollTop + (container.clientHeight / 2);
    
    let closestIndex = 0;
    let minDistance = Number.MAX_VALUE;

    this.stepCards.forEach((card, index) => {
      const element = card.nativeElement;
      const cardTop = element.offsetTop; 
      const cardHeight = element.offsetHeight;
      const cardCenter = cardTop + (cardHeight / 2);
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (this.activeStepIndex !== closestIndex) {
      this.activeStepIndex = closestIndex;
    }
  }

  scrollToStep(index: number) {
    if (isPlatformBrowser(this.platformId) && this.stepCards) {
      const cardArray = this.stepCards.toArray();
      if (cardArray[index]) {
        cardArray[index].nativeElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center', 
          inline: 'nearest'
        });
      }
    }
  }
}