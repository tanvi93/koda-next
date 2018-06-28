export const gameElements = {
    "instructionBarContent": "Now based on how the Monkey Menace game is played, try answering these questions.",
    "mascotImage": "./../assets/images/monkey_menace/mascot_arms_folded_head.png",
    "mascotBg": "#13BCE4",
    'images': {
        'img1': './../assets/images/monkey_menace/monkey3.png',
        'img2': './../assets/images/monkey_menace/fruit_demo.png',
        'img3': './../assets/images/monkey_menace/cap_demo.png',
        'background': './../assets/images/monkey_menace/bg_jungle_demo.jpg'
    },
    'previewVideo': "./../assets/images/monkey_menace/preview_with_play.gif",
    'validation': [
        {
            'Question': 'Click on all the three characters of the Monkey Menace game.',
            'options': [
                {
                    'option': 'img1',
                    'errorMsg': `You already identified me as a character. Click on other characters of the game.`,
                    'correctMsg': 'Yes! You are right.',
                    'isCorrect': true
                },
                {
                    'option': 'img2',
                    'errorMsg': `You already identified me as a character. Click on other characters of the game.`,
                    'correctMsg': `That's awesome!`,
                    'isCorrect': true
                },
                {
                    'option': 'img3',
                    'errorMsg': `You already identified me as a character. Click on other characters of the game.`,
                    'correctMsg': `That's perfect!`,
                    'isCorrect': true
                },
                {
                    'option': 'background',
                    'errorMsg': `Do I look like a character? I stay still and don't do anything!`,
                    'isCorrect': false
                }
            ]
        },
        {
            'Question': `Click on the background of the game.`,
            'options': [
                {
                    'option': 'img1',
                    'errorMsg': `I don't stay still and silent like the game background! I love jumping around!`,
                    'isCorrect': false
                },
                {
                    'option': 'img2',
                    'errorMsg': `I don't stay still and silent like the game background! You selected me as a character, remember?`,
                    'isCorrect': false
                },
                {
                    'option': 'img3',
                    'errorMsg': `I don't stay still and silent like the game background! You selected me as a character, remember?`,
                    'isCorrect': false
                },
                {
                    'option': 'background',
                    'errorMsg': '',
                    'correctMsg': `Champ, you are doing pretty well.`,
                    'isCorrect': true
                }
            ]
        },
        {
            'Question': `Select the correct scoring rule for the game.`,
            'options': [
                {
                    'option': '+10 points for throwing a fruit',
                    'errorMsg': `That doesn't seem right. There are no points for throwing a fruit.`,
                    'isCorrect': false
                },
                {
                    'option': '-10 points for missing a fruit',
                    'errorMsg': `The score doesn't reduce at all in the game. Try again!`,
                    'isCorrect': false
                },
                {
                    'option': '+10 points for catching a fruit',
                    'correctMsg': `You're flawless`,
                    'isCorrect': true
                },
                {
                    'option': `+10 points for moving the monkey`,
                    'errorMsg': `The monkey moves on its own. You didn't get any points for that!`,
                    'isCorrect': false
                }
            ]
        },
        {
            'Question': `Finally, select the correct game over rule. The game ends when: `,
            'options': [
                {
                    'option': '5 fruits are caught',
                    'errorMsg': `That doesn't seem right. The game is all about catching as many fruits as possible, remember?`,
                    'isCorrect': false
                },
                {
                    'option': '5 fruits are missed',
                    'isCorrect': true
                },
                {
                    'option': 'the cap goes out of the screen',
                    'errorMsg': `The player can never move the cap out of the screen. Try again!`,
                    'isCorrect': false
                },
                {
                    'option': `5 fruits have been thrown by the monkey`,
                    'errorMsg': `The monkey keeps throwing fruits until the player loses. So this can't be right!`,
                    'isCorrect': false
                }
            ]
        }
    ],
    'successMsg': `Whoa! You've mastered the game elements!`,
    "popupMascotImage": "./../assets/images/monkey_menace/mascot_thumbs_up_head.png",
    "actionButtonText": "Continue"
};