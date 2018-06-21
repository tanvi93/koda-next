import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {
  private baseUrl: String;
  private body;

  constructor(private http: Http) {
    this.baseUrl = 'https://nova.nexterp.in/NextTopic/nexttopic/koda/';
    // this.baseUrl = 'https://ln-qa.nexterp.in/api/NextTopic/nexttopic/koda/';
  }

  getUserProgress() {
    let userProgress = localStorage.getItem('userProgress');
    if (!userProgress) {
      let tmpData = {
        activitiesCompleted: 3,
        badgesEarned: 3,
        challengesCompleted: 1,
        conceptsCompleted: "c1,c2,c3,c4",
        leaderboardRank: 15,
        modulesCompleted: 3,
        pointsEarned: 700,
        titleEarned: 'Position Pundit',
        userId: 700
      }
      localStorage.setItem('userProgress', JSON.stringify(tmpData));
    }

    let userId = 700;
    this.http.get(`${this.baseUrl}user_progress/${userId}`)//, {withCredentials: true})
      .subscribe(data => {
        data = data.json();
        let tmpData = {
          activitiesCompleted: 3,
          avatar: null,
          avatarName: null,
          badgesEarned: 3,
          challengesCompleted: 0,
          conceptsCompleted: "c1,c2,c3,c4",
          leaderboardRank: 0,
          modulesCompleted: 3,
          pointsEarned: 0,
          titleEarned: null,
          userId: 700
        }
        localStorage.setItem('userProgress', JSON.stringify(tmpData));
        console.log(data['userId']);
      });
  }

  getGameProgress() {

    let gameProgress = localStorage.getItem('gameProgress');
    if (!gameProgress) {
      let tmpData = { "userId": 700, "gameId": 1, "name": "Monkey Menace", "atLevel": 0, "atModule": 0, "atResource": 0, "badgesEarned": 0, "pointsEarned": 0, "conceptsCompleted": "c1,c2,c3,c4", "lastCodingPageXml": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n  <block type=\"go_to\" id=\"go_to\" x=\"90\" y=\"50\">\n    <field name=\"sprite\">0</field>\n    <value name=\"input_x\">\n      <shadow type=\"number\" id=\"Bc#.prK*MtlPm}+EWzM(\">\n        <field name=\"n\">0</field>\n      </shadow>\n    </value>\n    <value name=\"input_y\">\n      <shadow type=\"number\" id=\"zGAeyVfKiYZ!WL!0}:);\">\n        <field name=\"n\">10</field>\n      </shadow>\n    </value>\n    <next>\n      <block type=\"go_to\" id=\"g08V_|sp!.*!tnt!2I4g\">\n        <field name=\"sprite\">1</field>\n        <value name=\"input_x\">\n          <shadow type=\"number\" id=\"sen*N8K3?)z[8b/4iHgT\">\n            <field name=\"n\">2</field>\n          </shadow>\n        </value>\n        <value name=\"input_y\">\n          <shadow type=\"number\" id=\"X#gXBHO21Tw]3FU;x@VU\">\n            <field name=\"n\">7</field>\n          </shadow>\n        </value>\n      </block>\n    </next>\n  </block>\n</xml>", "modulesCompleted": 1, "challengesCompleted": 0, "activitiesCompleted": 0, "status": "active", "userRating": 0, "preferenceMap": { "key1": "value1", "key2": "value2", "monkey": "1", "fruitOffsetY": "8", "key3": "value3", "fruit": "1", "fruitOffsetX": "-5", "monkeyOffsetY": "13", "monkeyOffsetX": "0", "capOffsetY": "-15", "cap": "1", "capOffsetX": "-23", "background": "3" } }
      localStorage.setItem('gameProgress', JSON.stringify(tmpData));
    }

    let userId = 700;
    let gameId = 1;
    this.http.get(`${this.baseUrl}user_game_progress/${userId}/${gameId}`)//, { withCredentials: true })
      .subscribe(data => {
        data = data.json();
        console.log(data);
      });
  }

  postUserProgress(body) {
    this.http.post(`${this.baseUrl}user_progress/`, body)//, { withCredentials: true })
      .subscribe(data => {
      });
  }

  postGameProgress(body) {
    this.http.post(`${this.baseUrl}user_game_progress/`, body)//, { withCredentials: true })
      .subscribe(data => {
      });
  }

}
