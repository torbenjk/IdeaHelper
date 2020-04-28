import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromptComponent } from './prompt/prompt.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { WizardComponent } from './wizard.component';
import { FinishComponent } from './finish/finish.component';


const routes: Routes = [
  {
    path: '', component: WizardComponent, children: [
      {
        path: '', component: ChallengeComponent
      },
      {
        path: 'prompt/:step', component: PromptComponent
      },
      {
        path: 'finish', component: FinishComponent
      },
     // { path: '**', component: Page404leavesComponent }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
