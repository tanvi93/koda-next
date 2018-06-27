export const positionCharacterContent = {
    instructionBarContent: 'Here are your chosen characters again. Drag and drop them where you would like them to be on the Stage when the game begins. Follow the checklist guidelines. Click DONE when you are happy with your Stage setup.',
    mascotImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_thumbs_up_head.png',
    actionButton: 'assets/images/done.png',
    backgroundImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle4.jpg',
    monkeyImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/monkey2.png',
    fruitImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/fruit2.png',
    capImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/cap2.png',
    zoomboxImage: 'assets/icons/enter_full_screen.svg',
    gridImage: 'assets/icons/grid_toggle.svg',
    lockIcon: 'assets/icons/locked_activity.png',
    addIcon: 'assets/icons/add-icon.svg',
    checkedIcon: 'assets/icons/green_tick.svg',
    errorMsgStatment: 'Make sure you have positioned all your characters as per the checklist.',
    mascotHead: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
    successPopupHeading: 'Your Stage is ready and <br>it looks great!',
    successPopupText: 'Time to dig a bit deeper into the Stage setup.',
    monkeyWidthInUnit: 3,
    dragImageContent: [
        {
            className: 'monkey-position',
            imageName: 'monkeyImage',
            imagePath: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/monkey1.png',
             imageList: [
                {
                    name: 'monkey1',
                    path: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/monkey1.png',
                    hand: {
                        left: {
                            min: -4,
                            max: -1
                        }, // from its center
                        top: {
                            min: 2,
                            max: 4
                        },  // from its center
                    }
                },
                {
                    name: 'monkey2',
                    path: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/monkey2.png',
                    hand: {
                        left: {
                            min: 3,
                            max: 5
                        }, // from its center
                        top: {
                            min: 2,
                            max: 4
                        },  // from its center
                    }
                },
                {
                    name: 'monkey3',
                    path: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/monkey3.png',
                    hand: {
                        left: {
                            min: 2,
                            max: 4
                        }, // from its center
                        top: {
                            min: 2,
                            max: 4
                        },  // from its center
                    }
                },
                {
                    name: 'monkey4',
                    path: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/monkey4.png',
                    hand: {
                        left: {
                            min: -4,
                            max: -1
                        }, // from its center
                        top: {
                            min: 1,
                            max: 4
                        },  // from its center
                    }
                }
            ],
            topPos: {
                minValue: 9,
                maxValue: 21
            }
        },
        {
            className: 'fruit-position',
            imageName: 'fruitImage',
            imagePath: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/fruit1.png',
            topPos: {
                minValue: null,
                maxValue: null
            }
        },
        {
            className: 'cap-position',
            imageName: 'capImage',
            imagePath: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/cap1.png',
            topPos: {
                minValue: -16,
                maxValue: 21
            }
        }
    ],
    imageTray: [{
            id: 0,
            characterName: 'background-Image',
            imageList: ['http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg']
        },
        {
            id: 1,
            characterName: 'character-Image',
            imageList: [
                'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/monkey2.png',
                'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/fruit1.png',
                'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/cap1.png'
            ]
        },
        {
            id: 2,
            characterName: 'button-Image',
            imageList: []
         }
    ],
    checklist: [
        {
            id: 0,
            characterName: 'MONKEY',
            characterMsg: 'On the top part of the Stage?',
            checkListFlag: false
        },
        {
            id: 1,
            characterName: 'FRUIT',
            characterMsg: 'In the monkey\'s hand?',
            checkListFlag: false
        },
        {
            id: 2,
            characterName: 'CAP',
            characterMsg: 'On the bottom part of the Stage?',
            checkListFlag: true
        },
        {
            id: 3,
            characterName: 'CAP',
            characterMsg: 'Not exactly below the monkey?',
            checkListFlag: false
        }
    ],
    actionButtonText: 'Continue'
};
