import { Component, OnInit } from '@angular/core';
import { WizardDataService } from '../../wizard-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  result: string;

  constructor(private wizardDataService: WizardDataService, private router: Router) { }

  ngOnInit(): void {
    this.result = this.wizardDataService.ideas.reduce( (prev, current) => prev + '\n\r' + current);
  }

}
