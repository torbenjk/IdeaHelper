import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { WizardComponent } from './wizard/wizard.component';
import { ChallengeComponent } from './wizard/challenge/challenge.component';
import { PromptComponent } from './wizard/prompt/prompt.component';
import { FinishComponent } from './wizard/finish/finish.component';
import { FormsModule } from '@angular/forms';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    DonateComponent,
    FrontpageComponent,
    WizardComponent,
    ChallengeComponent,
    PromptComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'help', component: HelpComponent},
      {path: '', component: FrontpageComponent},
      // {path: 'wizard', component: WizardComponent},
      { path: 'wizard', loadChildren: () => import(`./wizard/wizard.module`).then(m => m.WizardModule) },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
