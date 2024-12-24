import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor() {}

  // A placeholder method for future homepage-specific logic
  getWelcomeMessage(): string {
    return 'Welcome to the homepage!';
  }
}
