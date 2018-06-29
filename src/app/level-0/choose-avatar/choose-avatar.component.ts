import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';
@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.component.html',
  styleUrls: ['./choose-avatar.component.scss']
})
  
/**
   * @name ChooseAvatarComponent<app-choose-avatar>
   * @description This component helps the user to choose the avatar and  name the same.
   * @constructor initiate all the params
   */

/**
 * @method card
 * @memberOf ChooseAvatarComponent
 * @description this method is triggered with click event. When this method is triggered the submit button which is in disable state get enable along with drawing border along the div making user to realize which option has been choose from the user.
 * @param event variable object of the div which user choose.
 */

/**
 * @method namepopUp
 * @memberOf ChooseAvatarComponent
 * @description Popup screen when user click submit button.
 * @param data this variable provide the avatar which user choose before clicking submit button.
 */

/**
* @method checkLength
* @memberOf ChooseAvatarComponent
* @description It is input type event method which check the length of avatar name provided by user removing extra whitespaces.
* If user provided name is blank then the submit button of the popup will remain disabled.
* @param ev this is an event variable object through which the length/size of the name is extracted. 
*/

/**
 * @method nameSubmit
 * @memberOf ChooseAvatarComponent
 * @description This method helps in switching the page and also setting the avatar look and its corresponding name in localstorage for future reference.
 * @param name this variable have the name provided by user.
 */
  
export class ChooseAvatarComponent implements OnInit {

  private characterList: string[];
  private charValue: string;
  private namePopupActive: boolean;
  private imageSelectFlag: boolean;
  private checkLengthFlag: boolean;
  private loading: boolean;
  constructor(private utility: UtilitiesService, private router: Router) {
    this.loading = true;
    this.characterList = [];
  }

  ngOnInit() {
    this.namePopupActive = false;
    this.imageSelectFlag = false;
    this.checkLengthFlag = false;
    this.charValue = 'character8';
    this.characterList = [
      'character1', 'character2', 'character3', 'character4', 'character5', 'character6'
    ]
    let avatarimageCount = 0;
    const onImageLoad = () => {
      ++avatarimageCount;
      if (avatarimageCount === 6) {
        this.loading = false;
      }
    }
    this.characterList.forEach(element => {
      let image = new Image();
      image.onload = onImageLoad;
      image.src = 'http://dqfevutdn6sxd.cloudfront.net/avatar/' + element + '.png';
      return image;
    });
  }


  card = (ev) => {
    this.charValue = ev.target.id;
    this.imageSelectFlag = true;
  }

  namepopUp = (data) => {
    if (data.length > 1) {
      this.namePopupActive = true;
    } else {
      this.namePopupActive = false;
    }
  }

  checkLength = (ev) => {
    if (ev.target.value.trim().length === 0) {
      this.checkLengthFlag = false;
    } else {
      this.checkLengthFlag = true;
    }
  }

  nameSubmit = (name) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let json = {
      avatarName: name,
      avatar: `.http://dqfevutdn6sxd.cloudfront.net/avatar/${this.charValue}.png`
    }
    this.utility.updateAvatar(json);
    this.utility.nextPage(this.router.url.substr(1))
  }
}