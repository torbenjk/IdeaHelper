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
  showShareButton: boolean;

  constructor(private wizardDataService: WizardDataService, private router: Router) { }

  ngOnInit(): void {
    if (this.wizardDataService.ideas.length > 0) {
      this.result = this.wizardDataService.ideas.reduce( (prev, current) => prev + '\n' + current);
    }
    this.showShareButton = !!navigator.share;
  }
  
  share() {
    let sharableObject = {
      title: 'Ideas created with IdeaHelper',
      text: this.result
    };
    if (navigator.share()) {
      navigator.share(sharableObject).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    }
  }

}
