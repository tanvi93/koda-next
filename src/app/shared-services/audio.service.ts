import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
  private audios;
  private currentAudio;
  private audioInLoop;
  private callbackOnAudioEnd;

  public errorSound;
  public backgroundSound;
  public successSound;
  public badgeSound;

  public readyToGoNext;

  constructor() {
    this.backgroundSound = new Audio();
    this.backgroundSound.src = './assets/audio/game_background_audio.ogg';
    this.backgroundSound.load();
    this.backgroundSound.volume = 0.2;
    this.backgroundSound.loop = true;

    this.errorSound = new Audio();
    this.errorSound.src = './assets/audio/wrong_answer.ogg';
    this.errorSound.load();

    this.successSound = new Audio();
    this.successSound.src = './assets/audio/right_answer.mp3';
    this.successSound.load();

    this.badgeSound = new Audio();
    this.badgeSound.src = './assets/audio/badge_audio.ogg';
    this.badgeSound.load();
  }

  loader(arr) {
    let audio;
    this.audios = arr.map(src => {
      audio = new Audio();
      audio.src = src;
      audio.load();
      return audio;
    });
  }

  play(index = 0, callback = null) {
    this.currentAudio = this.audios[index];
    this.currentAudio.play();
    this.readyToGoNext = false;
    this.currentAudio.addEventListener('ended', this.onAudioEnd);
    this.callbackOnAudioEnd = callback;
  }

  onAudioEnd = () => {
    this.readyToGoNext = true;
    this.currentAudio.removeEventListener('ended', this.onAudioEnd);
    if (this.callbackOnAudioEnd) {
      this.callbackOnAudioEnd();
    }
  }

  playForever = (index = 0) => {
    this.audioInLoop = this.audios[index];
    this.audioInLoop.loop = true;
    this.audioInLoop.play();
    this.audioInLoop.volume = 0.1;
  }

  stop() {
    if (!this.currentAudio) return;
    this.currentAudio.pause();
  }

  stopForeverPlayingAudio() {
    if (!this.audioInLoop) return;
    this.audioInLoop.loop = false;
    this.audioInLoop.pause();
  }
}

