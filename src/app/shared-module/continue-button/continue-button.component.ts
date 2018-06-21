import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';

@Component({
  selector: 'app-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent {
  @Input() pageData;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private utility: UtilitiesService) { }

  goNext() {
    this.utility.nextPage(this.router.url.substr(1), this.pageData);
  }

}
