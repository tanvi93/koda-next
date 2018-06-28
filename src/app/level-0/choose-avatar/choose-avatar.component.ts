import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from './../../shared-services/utilities.service';
@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.component.html',
  styleUrls: ['./choose-avatar.component.scss']
})
export class ChooseAvatarComponent implements OnInit {

  private characterList: object;
  private charValue: string;
  private namePopupActive: boolean;
  private imageSelectFlag: boolean;
  private checkLengthFlag: boolean;
  private loading: boolean;
  constructor(private utility: UtilitiesService, private router: Router) {
    this.loading = true;
  }

  ngOnInit() {
    this.namePopupActive = false;
    this.imageSelectFlag = false;
    this.checkLengthFlag = false;
    this.charValue = 'character8';
    this.characterList = {
      row1: ['character1', 'character2', 'character3'],
      row2: ['character4', 'character5', 'character6']
    };
    let avatarimageCount = 0;
    const onImageLoad = () => {
      ++avatarimageCount;
      if (avatarimageCount === 6) {
        this.loading = false;
      }
    }
    Object.keys(this.characterList).forEach(element => {
      this.characterList[element].forEach(element => {
        let image = new Image();
        image.onload = onImageLoad;
        image.src = 'assets/images/avatar/' + element + '.png';
        return image;
      });
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
    if (name.length > 0) {
      let json = {
        avatarName: name,
        avatar: `./assets/images/avatar/${this.charValue}.png`
      }
      this.utility.updateAvatar(json);
      // switching page code here
      this.utility.nextPage(this.router.url.substr(1))
    }
  }
}
