import { Component, OnInit } from '@angular/core';
import { PromptService } from '../../prompt.service';
import { WizardDataService } from '../../wizard-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  challenge: string;
  word: string;
  ideas: string;

  constructor(private promptService: PromptService, private wizardDataService: WizardDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.word = this.promptService.getPrompt();
    this.challenge = this.wizardDataService.challenge;
  }

  submit() {
      this.save();
      alert('fdsfsda');
      this.router.navigate(['/wizard/prompt']);
  }

  finish(): void {
    this.save();
    this.router.navigate(['/wizard/finish']);
  }

  private save(): void {
    this.wizardDataService.ideas.push(this.ideas);
  }

}
