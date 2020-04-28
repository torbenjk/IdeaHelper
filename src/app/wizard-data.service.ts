import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WizardDataService {

  challenge: string;

  ideas: string[] = [];

  constructor() { }
}
