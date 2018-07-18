import { Component, OnInit } from '@angular/core';
import { CaptchaActivityContent } from './../../data/captchaActivity'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-captcha-activity',
  templateUrl: './captcha-activity.component.html',
  styleUrls: ['./captcha-activity.component.scss']
})

/**
  * @name CaptchaActivityComponent<app-captcha-activity>
  * @description This component will deal captcha pattern activity in which it accept data provided by input section and then validation is performed inorder to see whether correct pattern is been entered or not.
  * @param contentData its holds entire detail of the page which is passed as an input to its child component.
  * @param patternData its hold entire detail with respect to current pattern which user is trying to crack.
  * @constructor activated Route is injected.
  */

/**
 * @method patternValidation
 * @memberOf CaptchaActivityComponent
 * @param $event This varaible object contains the value which user will see in the output section of the div
 * @description this is an event based method which get triggered whenever child emit data to parents inorder to represent the changes done in child to its siblings.
 */
/**
 * @method invalidErrorHiddenFunction
 * @memberOf CaptchaActivityComponent
 * @param $event This varaible object contains the boolean which help is hidding the invalid captcha msg which we can see in the output section.
 * @description this is an event based method which get triggered whenever any action is taking place in the input section of the parent.
 */


  
export class CaptchaActivityComponent implements OnInit {
  private contentData = CaptchaActivityContent;
  private patternData: any;
  private pageId: string;
  public inputValue: string[];
  private invalidErrorHidden: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = this.route.snapshot.paramMap.get('pageId');
      this.patternData = CaptchaActivityContent[`${this.pageId}`];
    });
    this.invalidErrorHidden = true;
    this.inputValue = this.patternData.inputValue;
  }

  patternValidation($event) {
    this.inputValue = $event;
  }

  invalidErrorHiddenFunction($event) {
    this.invalidErrorHidden = $event;
  }
}
