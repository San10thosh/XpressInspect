import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class FaqComponent {

  faqs: FaqItem[] = [
    
    {
      question: 'what can XpressInspect do ?',
      answer: 'XpressInspect allows you to track compliance reports and automate inspections with ease.',
      isOpen: false
    },
    {
      question: 'How secure is XpressInspect?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, are GDPR compliant, and undergo regular security audits to keep your data safe.',
      isOpen: false
    },
    {
      question: 'Can I integrate XpressInspect with my current tools?',
      answer: 'Yes, we offer seamless integrations with major ATS platforms, Slack, Zoom, and Google Calendar to fit right into your existing tech stack.',
      isOpen: false
    },
    {
      question: 'Does XpressInspect offer a free trial?',
      answer: 'Yes! We offer a 7-day free trial with full access to all features. all you need to do is sign up with your email to get started.',
      isOpen: false
    },
    {
      question: 'Can XpressInspect scale with my business as we grow?',
      answer: 'Definitely. Whether you are a startup or an enterprise with thousands, our infrastructure scales with you.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    // Option 1: Allow multiple to be open (Toggle only clicked)
    this.faqs[index].isOpen = !this.faqs[index].isOpen;

    // Option 2: Accordion style (Close others when one opens) - Uncomment if preferred
    // this.faqs.forEach((faq, i) => {
    //   if (i !== index) faq.isOpen = false;
    // });
  }
}