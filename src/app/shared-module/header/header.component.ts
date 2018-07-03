import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() gameDetails;

  constructor(private router: Router) { }

  goToDashBoard() {
    this.router.navigate(['/dashboard']);;
  }

}
