import { Component, OnInit } from '@angular/core';
import { WizardDataService } from '../../wizard-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  challenge: string;

  constructor(private wizardDataService: WizardDataService, private router: Router) { }

  ngOnInit(): void {
  }

  
  enableContinueButton(): boolean {
    return this.challenge?.length > 0;
  }

  submit() {
      this.wizardDataService.challenge = this.challenge;
      this.router.navigate(['/wizard/prompt/1']);
  }
}
