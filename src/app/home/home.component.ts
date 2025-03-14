import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToGame(): void {
    this.router.navigate(['/game']); // Navigates to the game page
  }

  goToRules(): void {
    this.router.navigate(['/rules']); // Navigates to the rules page
  }
}
