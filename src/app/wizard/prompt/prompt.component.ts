import { Component, OnInit } from '@angular/core';
import { PromptService } from '../../prompt.service';
import { WizardDataService } from '../../wizard-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  challenge: string;
  word: string;
  ideas: string;
  step: number;
  maxSteps = 4;

  constructor(
    private promptService: PromptService, 
    private wizardDataService: WizardDataService, 
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.challenge = this.wizardDataService.challenge;
    if (this.challenge === null) {
      this.router.navigate(['/']);
    }
    this.route.params.subscribe( params => { this.doStep(params['step']); });
  }

  doStep(step: number): void {
    this.ideas = '';
    this.step = step;
    this.word = this.promptService.getPrompt();
  }

  submit() {
    this.save();
    this.step++;
    if (+this.step > this.maxSteps) {
      this.finish();
    } else {
    this.word = this.promptService.getPrompt();
    this.router.navigate(['/wizard/prompt/' + (this.step)]);
    }
  }

  finish(): void {
    this.router.navigate(['/wizard/finish']);
  }

  private save(): void {
    this.wizardDataService.ideas.push(this.ideas);
  }

}
