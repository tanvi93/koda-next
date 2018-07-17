import { Injectable } from '@angular/core';
import { fabric } from 'fabric';
import { SpriteService } from './sprite.service';
import { InterpreterService } from './interpreter.service';
import { variableList } from './blocks/variable-block.service';

@Injectable()
export class GameStageService {

  private fabricCanvas: any;
  private sprites: any;
  private buttons: any;
  private audio: any;
  private bgImages: Array<any>;
  private bgImgInstance: any;
  private buttonSrcs: any;
  private buttonStatus: String;
  private variableBoxes: Array<any>;
  private pageId: String;
  private activity: any;
  private xAxisUnit;
  private yAxisUnit;
  private totalX;
  private totalY;
  private xCoordinate: Number;
  private yCoordinate: Number;
  private showGrid: Boolean;
  private sp: SpriteService;
  private interpreter: InterpreterService;
  private pageData: any;
  private backgroundScore: any;
  
  public returnControl: any;
  public spriteStatusList: Array<any>;

  constructor() {
    this.showGrid = false;
    this.totalX = 70;
    this.totalY = 42;
    this.xCoordinate = 0;
    this.yCoordinate = 0;
    this.spriteStatusList = [];
  }

  loadAudio(activity_name) {
    if (this.pageId.indexOf('_challenge') === -1) {
      let src = `./assets/audio/${activity_name.indexOf('monkey_menace') !== -1 ? 'forest_audio' : 'activity_background_audio'}.ogg`;
      this.audio.loader([src]);
      this.audio.playForever();
    }
  }

  init(sp, intrp, audio, pageData, pageId, callback = null) {
    this.sp = sp;
    this.interpreter = intrp;
    this.audio = audio;
    this.pageData = pageData;
    this.pageId = pageId;
    let totalImages = 0;
    let imageLoadCount = 0;
    let bgLoadCount = 0;
    let buttonLoadCount = 0;

    //Audio added here
    // this.loadAudio(pageData.activity_name);

    const checkIfReady = () => {
      if (imageLoadCount >= totalImages && bgLoadCount >= this.pageData.backgrounds.length && buttonLoadCount >= this.buttons.length) {
        if (!this.fabricCanvas) {
          this.fabricCanvas = new fabric.Canvas('gameCanvas');
          window.addEventListener('resize', this.resizeCanvas, false);
          this.resizeCanvas();
          this.draw(true);
          if (callback) {
            callback();
          }
        }
      }
    }

    const onBackgroundLoaded = () => {
      ++bgLoadCount;
      checkIfReady();
    }
    const onImageLoaded = () => {
      ++imageLoadCount;
      checkIfReady();
    };
    const onButtonLoaded = () => {
      ++buttonLoadCount;
      checkIfReady();
    }

    this.activity = this.pageData.activity_name;
    this.sprites = this.sp.getAllSprites(this.activity);
    this.buttons = this.sp.getAllButtons(this.pageId);

    this.bgImages = this.pageData.backgrounds.map(v => {
      let image = new Image();
      image.onload = onBackgroundLoaded;
      image.src = v.src;
      return image;
    });

    this.sprites = this.sprites.map(v => {
      v.images = [];
      totalImages += v.looks.length;
      for (let i = 0; i < v.looks.length; i++) {
        let image = new Image();
        image.onload = onImageLoaded;
        image.src = v.looks[i];
        v.images.push(image);
      }
      return v;
    });
    this.buttons = this.buttons.map(v => {
      v.images = [];
      for (let i = 0; i < v.looks.length; i++) {
        let image = new Image();
        image.onload = onButtonLoaded;
        image.src = v.looks[i];
        v.images.push(image);
      }
      return v;
    });
  }

  drawBackground = (isReset = false) => {
    const index = (!isReset && this.pageData.hasOwnProperty('currentBackgroundIdx')) ? this.pageData.currentBackgroundIdx : this.pageData.initialBackgroundIdx;
    const bgImage = this.bgImages[index];
    this.fabricCanvas.remove(this.bgImgInstance);
    this.bgImgInstance = new fabric.Image(bgImage, {
      left: 0,
      top: 0,
      scaleX: this.fabricCanvas.width / bgImage.width,
      scaleY: this.fabricCanvas.height / bgImage.height,
      selectable: false,
      hoverCursor: 'default'
    });
    this.fabricCanvas.add(this.bgImgInstance);
    this.bgImgInstance.moveTo(0);
  }

  drawButtons = () => {
    let left, top;
    this.buttons.forEach(v => {
      left = v.offset.x;
      top = v.offset.y;
      if (!v.height) {
        v.height = v.width / v.aspect_ratio;
      }
      left = left - (v.width / 2);
      top = top + (v.height / 2);
      left = ((this.totalX / 2) + left) * this.xAxisUnit;
      top = ((this.totalY / 2) - top) * this.yAxisUnit;
      v.instance = new fabric.Image(v.images[v.buttonLookIdx], {
        left,
        top,
        scaleX: v.width ? v.width * this.xAxisUnit / v.images[v.buttonLookIdx].width : 1,
        scaleY: v.height ? v.height * this.yAxisUnit / v.images[v.buttonLookIdx].height : 1,
        selectable: false,
        hoverCursor: 'pointer'
      });
      if (v.initialVisibility) {
        this.fabricCanvas.add(v.instance);
      }
    });
  }

  draw(isReset = false) {
    if (!this.fabricCanvas) return;
    this.fabricCanvas.clear();

    this.drawBackground(isReset);

    this.xAxisUnit = this.fabricCanvas.width / this.totalX;
    this.yAxisUnit = this.fabricCanvas.height / this.totalY;
    let left, top;
    let imgArr = [];
    this.sprites.forEach(v => {
      left = ((!isReset && v.currentOffset) ? v.currentOffset.x : v.initialOffset.x);
      top = ((!isReset && v.currentOffset) ? v.currentOffset.y : v.initialOffset.y);
      if (!v.height) {
        v.height = v.width / v.aspect_ratio;
      }
      left = parseInt(left) - (v.width / 2);
      top = parseInt(top) + (v.height / 2);
      left = ((this.totalX / 2) + left) * this.xAxisUnit;
      top = ((this.totalY / 2) - top) * this.yAxisUnit;
      const index = isReset ? v.initialLookIdx : v.currentLookIdx;
      v.instance = new fabric.Image(v.images[index], {
        left,
        top,
        scaleX: v.width ? v.width * this.xAxisUnit / v.images[index].width : 1,
        scaleY: v.height ? v.height * this.yAxisUnit / v.images[index].height : 1,
        selectable: false,
        hoverCursor: 'default'
      });
      v.isHidden = !v.initialVisibility;
      if (v.initialVisibility) {
        imgArr.push(v);
      }
      if (isReset) {
        v.currentOffset = { ...v.initialOffset };
        v.currentLookIdx = v.initialLookIdx;
      }
    });
    imgArr.sort((a, b) => {
      return a.zIndex - b.zIndex;
    });
    imgArr.forEach(v => {
      this.fabricCanvas.add(v.instance);
      const kk = parseInt(v.zIndex) + 113;
      v.instance.moveTo(kk);
      v.isHidden = false;
    });
    this.drawButtons();
    this.showVariables();
  }

  drawGrid() {
    this.showGrid = !this.showGrid;
    if (this.showGrid) {
      let points = [];
      for (let i = 1; i <= this.totalX; i++) {
        points = [i * this.xAxisUnit, 0, i * this.xAxisUnit, this.fabricCanvas.height];
        let line = new fabric.Line(points, {
          strokeWidth: 1,
          stroke: "white",
          opacity: 0.4,
          selectable: false,
          hoverCursor: 'default'
        });
        this.fabricCanvas.add(line);
        line.moveTo(i);
      }
      for (let i = 1; i <= this.totalY; i++) {
        points = [0, i * this.yAxisUnit, this.fabricCanvas.width, i * this.yAxisUnit];
        let line = new fabric.Line(points, {
          strokeWidth: 1,
          stroke: "white",
          opacity: 0.4,
          selectable: false,
          hoverCursor: 'default'
        });
        this.fabricCanvas.add(line);
        line.moveTo(i + this.totalX);
      }
    } else {
      this.draw();
    }
  }

  drawSpeechBubble(index = 0, text = 'Hello there', duration) {
    let isOnRight = false;
    let top = this.sprites[index].instance.top;
    let left = this.sprites[index].instance.left;
    let imageWidth = (this.sprites[index].instance.width * this.sprites[index].instance.scaleX);
    let length = text.length ? text.length : 1;

    const onLoadBubble = () => {
      if (length > 16) {
        let str = text.split(' ');
        text = '';
        let strLength = 0;
        for (let i = 0; i < str.length; i++) {
          if ((strLength + str[i].length) > 16) {
            text += '\n';
            strLength = 0;
          }
          text += str[i] + ' ';
          strLength += str[i].length + 1;
        }
      }
      let line = text.split('\n');
      var textObj = new fabric.Text(text, {
        fontSize: 20
      });
      if (!isOnRight) {
        left -= textObj.width + 30;
        left = left > 0 ? left : 0;
      }
      top -= textObj.height * 1.5;
      top = top > 10 ? top : 10;
      textObj.set('left', left);
      textObj.set('top', top);
      const speechBubbleInstance = new fabric.Image(speechBubble, {
        top : top > 10 ? top - 10 : 0,
        left: left > 30 ? left - 30 : 0,
        scaleX: (textObj.width + 60) / speechBubble.width,
        scaleY: (textObj.height * 2)/ speechBubble.height,
        selectable: false,
        hoverCursor: 'default'
      });
      this.fabricCanvas.add(speechBubbleInstance);
      this.fabricCanvas.add(textObj);
      this.spriteStatusList.push({ say: text });
      setTimeout(() => {
        this.fabricCanvas.remove(speechBubbleInstance, textObj);
      }, duration);
    }
    
    const speechBubble = new Image();
    speechBubble.onload = onLoadBubble;
    if (left > (10 * this.xAxisUnit)) {
      speechBubble.src = './../../../assets/images/speechbubble-left.png';
    } else {
      speechBubble.src = './../../../assets/images/speechbubble-right.png';
      left += imageWidth;
      isOnRight = true;
    }
  }

  moveToObject(index = 0, x, y, releaseBlock, speed = null) {
    let xSign = '+';
    let ySign = '+';
    if (x) {
      if (x < 0) xSign = '-';
    }
    if (y) {
      ySign = '+';
      if (y < 0) ySign = '-';
    }
    const json = {
      left: `${xSign}=${Math.abs(x) * this.xAxisUnit}`,
      top: `${ySign}=${Math.abs(y) * this.yAxisUnit}`,
    }
    speed = speed ? speed : 1;
    let duration = Math.max(Math.abs(x), Math.abs(y)) * 30 / speed;
    this.sprites[index].instance.animate(json, {
      onChange: this.fabricCanvas.renderAll.bind(this.fabricCanvas),
      duration: duration,
      onComplete: () => {
        const currentPosition = { ...this.sp.setSpriteOffsets(this.activity, { left: x, top: y }, index) };
        this.spriteStatusList.push({
          name: this.sprites[index].name,
          action: 'moveObject',
          timestamp: Date.now(),
          currentPosition
        });
        releaseBlock();
        this.sprites = this.sp.getAllSprites(this.activity);
        try {
          this.sprites[index].instance.moveTo(this.sprites[index].zIndex);
        } catch (e) { }
      }
    });
  }

  goToObject(index = 0, x, y, hasAnimation, releaseBlock) {
    x = parseInt(x);
    y = parseInt(y);
    const sprite = this.sprites[index];
    if (hasAnimation) {
      let offset = sprite.currentOffset ? sprite.currentOffset : sprite.initialOffset;
      this.moveToObject(index, x - offset.x, offset.y - y, releaseBlock);
      return;
    }
    let left = ((x + this.totalX / 2) - sprite.width/2) * this.xAxisUnit;
    let top = (Math.abs(y - this.totalY / 2) - sprite.height / 2) * this.yAxisUnit;
    sprite.instance.set('left', left);
    sprite.instance.set('top', top);
    const currentPosition = this.sp.setSpriteOffsets(this.activity, { x, y }, index);
    this.spriteStatusList.push({
      name: sprite.name,
      action: 'moveObject',
      timestamp: Date.now(),
      currentPosition
    });
    setTimeout(() => {
      releaseBlock();
    }, 0);
    this.sprites = this.sp.getAllSprites(this.activity);
    try {
      this.sprites[index].instance.moveTo(this.sprites[index].zIndex);
    } catch (e) { }
    this.fabricCanvas.renderAll();
  }

  showCoords(index = 0, duration) {
    const sprite = this.sprites[index];
    let top = sprite.instance.top - 50;
    let left = sprite.instance.left + sprite.width;
    if (top <= 0) {
      left -= top;
      top = 0;
    }
    if (left <= 0) {
      left = 0;
    }
    const rect = new fabric.Rect({
      top,
      left,
      fill: 'black',
      width: 100,
      height: 40,
      selectable: false
    })
    this.fabricCanvas.add(rect);
    const x = sprite.currentOffset ? sprite.currentOffset.x : sprite.initialOffset.x;
    const y = sprite.currentOffset ? sprite.currentOffset.y : sprite.initialOffset.y;
    let textObj = new fabric.Text(`(${x}, ${y})`, {
      left: left + 10,
      top: top + 10,
      fontSize: 20,
      fill: 'white'
    });
    this.fabricCanvas.add(textObj);
    this.spriteStatusList.push({ showCoordinates: { x, y } });
    setTimeout(() => {
      this.fabricCanvas.remove(rect, textObj);
    }, duration);
  }

  visibilityToggle(obj) {
    if (obj.hasOwnProperty('spriteIndex')) {
      if (obj.visibility) {
        if (this.sprites[obj.spriteIndex].isHidden) {
          try {
            this.sprites[obj.spriteIndex].instance.moveTo(this.sprites[obj.spriteIndex].zIndex);
          } catch(e) {}  
          this.fabricCanvas.add(this.sprites[obj.spriteIndex].instance);
          this.sprites[obj.spriteIndex].instance.moveTo(this.sprites[obj.spriteIndex].zIndex);
          this.sprites[obj.spriteIndex].isHidden = false;
        }
      } else {
        this.fabricCanvas.remove(this.sprites[obj.spriteIndex].instance);
        this.sprites[obj.spriteIndex].isHidden = true;
      }
      if (this.spriteStatusList) {
        this.spriteStatusList.push({
          name: this.sprites[obj.spriteIndex].name,
          action: 'visibility', 
          visibility: obj.visibility ? true: false
        });
      }
    } else if (obj.hasOwnProperty('buttonIndex')) {
      if (obj.visibility) {
        if (this.buttons[obj.buttonIndex].isHidden || !this.buttons[obj.buttonIndex].initialVisibility) {
          this.fabricCanvas.add(this.buttons[obj.buttonIndex].instance);
          this.buttons[obj.buttonIndex].isHidden = false;
        }
      } else {
        this.fabricCanvas.remove(this.buttons[obj.buttonIndex].instance);
        this.buttons[obj.buttonIndex].isHidden = true;
      }
    } else if (obj.allButtons) {
      if (obj.visibility) {
        this.buttons.forEach(v => {
          if (v.isHidden || !v.initialVisibility) {
            this.fabricCanvas.add(v.instance);
            v.isHidden = false;
          }
        });
      } else {
        this.buttons.forEach(v => {
          this.fabricCanvas.remove(v.instance);
          v.isHidden = true;
        });
      }
    } else {
      if (obj.visibility) {
        this.sprites.forEach(v => {
          if (v.isHidden || !v.initialVisibility) {
            this.fabricCanvas.add(v.instance);
            const kk = parseInt(v.zIndex);// + 113;
            v.instance.moveTo(kk);
            v.isHidden = false;
          }
        });
      } else {
        this.sprites.forEach(v => {
          this.fabricCanvas.remove(v.instance);
          v.isHidden = true;
        });
      }
      this.spriteStatusList.push({ visibility: { allSprite: true, visibility: obj.visibility } });
    }
  }

  changeBackground(index) {
    this.spriteStatusList.push({ previousBackgroundSrc: this.pageData.backgrounds[this.pageData.currentBackgroundIdx] });
    this.pageData.currentBackgroundIdx = index;
    this.drawBackground();
    if (this.returnControl) {
      this.returnControl();
    }  
  }

  changeSpriteAvatar(obj) {
    const sprite = this.sprites[obj.spriteIndex];
    this.spriteStatusList.push({
      name: sprite.name,
      action: 'changeLook',
      timestamp: Date.now(),
      lookIdx: obj.avatarIndex ? parseInt(obj.avatarIndex) : sprite.currentLookIdx ? parseInt(sprite.currentLookIdx) + 1 : 1,
      previousLook: sprite.looks[sprite.currentLookIdx]
    });
    let avatar = new Image();
    const drawSprite = (index) => {
      this.fabricCanvas.remove(sprite.instance);
      sprite.instance = new fabric.Image(sprite.images[index], {
        left: sprite.instance.left,
        top: sprite.instance.top,
        scaleX: sprite.width ? sprite.width * this.xAxisUnit / sprite.images[index].width : 1,
        scaleY: sprite.height ? sprite.height * this.xAxisUnit / sprite.images[index].height : 1,
        selectable: false,
        hoverCursor: 'default'
      })
      this.fabricCanvas.add(sprite.instance);
      sprite.instance.moveTo(sprite.zIndex);
    }
    if (obj.hasOwnProperty('avatarIndex')) {
      if (obj.avatarIndex == -1) return;
      drawSprite(obj.avatarIndex);
      sprite.currentLookIdx = obj.avatarIndex;
    } else {
      let index = parseInt(sprite.currentLookIdx ? sprite.currentLookIdx : 0);
      if (index === sprite.looks.length - 1) {
        index = -1;
      }
      drawSprite(index + 1);
      sprite.currentLookIdx = index + 1;
    }
  }

  rotateSprite(obj) {
    this.sprites[obj.spriteIndex].instance.rotate(parseInt(obj.degree));
    this.fabricCanvas.renderAll();
  }

  flipSprite(obj) {
    this.sprites[obj.spriteIndex].instance.set('flipX', true);
    this.fabricCanvas.renderAll();
  }

  changeButtonAvatar(obj) {
    const button = this.buttons[obj.buttonIndex];
    this.spriteStatusList.push({ previousLookSrc: this.pageData.buttons[obj.buttonIndex].currentLookIdx });
    let avatar = new Image();
    avatar.onload = () => {
      this.fabricCanvas.remove(button.instance);
      button.instance = new fabric.Image(avatar, {
        left: button.instance.left,
        top: button.instance.top,
        scaleX: button.instance.scaleX,
        scaleY: button.instance.scaleY,
        selectable: false,
        hoverCursor: 'pointer'
      })
      this.fabricCanvas.add(button.instance);
    }
    avatar.src = button.looks[obj.looksIndex];
    button.looksIndex = obj.looksIndex;
  }

  showVariables = (isReset = false) => {
    let top = 10;
    this.variableBoxes = [];
    let rect, text;
    Object.keys(variableList).forEach(v => {
      if (isReset) {
        this.fabricCanvas.remove(variableList[v].rect, variableList[v].text);
        variableList[v].isHidden = false;
      }
      if (variableList[v] && !variableList[v].isHidden) {
        if (variableList[v].rect) {
          variableList[v].text.set('text', `${v} = ${variableList[v].value}`);
          top += 50;
          this.fabricCanvas.renderAll();
        } else {
          let length = v.length + (variableList[v].value + '').length + 3;
          const left = this.fabricCanvas.width - 15;
          text = new fabric.Text(`${v} = ${variableList[v].value}`, {
            left: left,
            top: top + 8,
            originX: 'right',
            fontFamily: 'Quicksand',
            fontSize: 20,
            selectable: false
          })
          
          rect = new fabric.Rect({
            top,
            left: left - text.width - 25,
            fill: '#dfdfdf',
            width: text.width + 35,
            rx: 20,
            height: 40,
            selectable: false,
            hoverCursor: 'default'
          })
          this.fabricCanvas.add(rect);
          this.fabricCanvas.add(text);
          variableList[v].rect = rect;
          variableList[v].text = text;
          top += 50;
        }  
      } else {
        this.fabricCanvas.remove(variableList[v].rect, variableList[v].text);
        delete variableList[v].rect;
        delete variableList[v].text;
      }
    })
  }

  resetVariables() {
    Object.keys(variableList).forEach(v => {
      variableList[v].value = variableList[v].initValue;
      variableList[v].isHidden = false;
    });
  }

  resizeCanvas = () => {
    const width = document.getElementById('canvas-holder').offsetWidth;
    const height = width * 3 / 5;
    this.fabricCanvas.setHeight(height);
    this.fabricCanvas.setWidth(width);
    this.draw();
  }

  runCode = (code, feedbackCall = null, callback = null) => {
    const coordinatesJson = {
      xAxisUnit: this.xAxisUnit,
      yAxisUnit: this.yAxisUnit,
      totalX: this.totalX,
      totalY: this.totalY
    }
    this.interpreter.runCode(code, this.sprites, this.buttons, coordinatesJson, feedbackCall, json => {
      const { name, data } = json;
      // console.log(name, performance.now());
      switch (name) {
        case 'say':
          this.drawSpeechBubble(data.spriteIndex, data.text, data.duration);
          break;
        case 'showCoordinates':
          this.showCoords(data.spriteIndex, data.duration);
          break;
        case 'goTo':
        case 'moveTo':
          this.goToObject(data.spriteIndex, data.x, data.y, data.hasAnimation, data.callback);
          break;
        case 'moveBy':
          this.moveToObject(data.spriteIndex, data.x, data.y, data.callback);
          break;
        case 'moveWithSpeed':
          this.moveToObject(data.spriteIndex, data.x, data.y, data.callback, data.speed);
          break;
        case 'show':
        case 'allHideShow':
        case 'allHideShowButtons':
          this.visibilityToggle(data);
          break;
        case 'changeBG':
          this.changeBackground(data.backgroundIndex);
          break;
        case 'changeLook':
        case 'nextLook':
          this.changeSpriteAvatar(data);
          break;
        case 'changeButton':
          this.changeButtonAvatar(data);
          break;
        case 'rotateSprite':
          this.rotateSprite(data);
          break;
        case 'flipSprite':
          this.flipSprite(data);
          break;
        case 'setVar':
        case 'changeVar':
        case 'hideShowVar':  
          this.showVariables();
          break;
        default:
          this.draw();
      }
      if (callback) callback();
    });
  }

  resetStage = () => {
    this.draw(true);
    this.resetVariables();
    this.showVariables(true);
  }

  stopExecution() {
    this.interpreter.stopExecution();
  }

  getMouseCoordinates = e => {
    return {
      x: Math.round((e.offsetX / this.xAxisUnit) - (this.totalX / 2)),
      y: Math.round((this.totalY / 2) - (e.offsetY / this.yAxisUnit))
    }
  }

}
