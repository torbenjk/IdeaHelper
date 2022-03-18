import { Component, OnInit } from '@angular/core';
import { WizardDataService } from '../../wizard-data.service';
import { Router } from '@angular/router';
import { DonateComponent } from 'src/app/donate/donate.component';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  result: string;
  showShareButton: boolean = true;

  constructor(private wizardDataService: WizardDataService, private router: Router, private ngNavigatorShareService: NgNavigatorShareService) { }

  ngOnInit(): void {
    if (this.wizardDataService.ideas.length > 0) {
      this.result = this.wizardDataService.ideas.reduce( (prev, current) => prev + '\n' + current);
    }
    this.showShareButton = this.ngNavigatorShareService.canShare();
  }

  share() {
    
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
 
    this.ngNavigatorShareService.share({
      title: 'Ideas created with IdeaHelper',
      text: this.result
    }).then( (response) => {
      console.log('Thanks for sharing');
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

}
