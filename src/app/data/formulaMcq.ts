export const quiz = {
    "mm2_2_q2": {
        "instructionBarContent": "So the fruit is always at the same distance from the monkey when the monkey is holding it.",
        "mascotBg": "#13BCE4",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mediaType": "video",
        //"mediaLink": "https://s3.bucket.com/koda/567"
        "mediaLink": "assets/images/monkey_menace/screen-for-formula-for-relative.png",
        "question": 'Here are the examples again:<br>When monkey is at(0, 13), the fruit is at(-5, 8),<br> When monkey is at(15, 13), the fruit is at(10, 8).<br><br>What can you conclude from these examples?',
        "options": [
            {
                "question": "Fruit\'s X coordinate = Monkey\'s X coordinates",
                "options": [
                    {
                        "value": "",
                        "msg": "Missing input! Choose the correct operator and enter a number to complete the formula for the fruit\'s X coordinate in terms of monkey\'s X coordinate.",
                        "isCorrect": false
                    },
                    {
                        "value": "-5",
                        "msg": "Good! You got the formula for fruit\'s X coordinate right!",
                        "isCorrect": true
                    },
                    {
                        "value": "5",
                        "msg": "Hmm... try using monkey\'s X coordinate from the two examples in your formula. Do you get the correct X coordinate for the fruit? Recheck the operator in your formula.",
                        "isCorrect": false
                    }
                ],
                "otherOption": "That doesn\'t look right. Compare the two examples given and find the constant relation between the X coordinates of the fruit and the monkey."
            },
            {
                "question": "Fruit\'s Y coordinate = Monkey\'s Y coordinates",
                "options": [
                    {
                        "value": "",
                        "msg": "Missing input! Choose the correct operator and enter a number to complete the formula for the fruit\'s Y coordinate in terms of monkey\'s Y coordinate.",
                        "isCorrect": false
                    },
                    {
                        "value": "-5",
                        "msg": "Good! You got the formula for fruit\'s Y coordinate right!",
                        "isCorrect": true
                    },
                    {
                        "value": "5",
                        "msg": "Hmm... try using monkey\'s Y coordinate from the two examples in your formula. Do you get the correct Y coordinate for the fruit? Recheck the operator in your formula.",
                        "isCorrect": false
                    }
                ],
                "otherOption": "That doesn\'t look right. Compare the two examples given and find the constant relation between the Y coordinates of the fruit and the monkey."
            }
        ],

        "successPopupHeading": "Excellent!",
        "successPopupText": "Let\'s use these formulas to make the fruit appear in monkey\'s hand irrespective of where the monkey moves to.",
        "popupMascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_thumbs_up_head.png",
        "actionButtonText": 'Continue'
    }, // end of mm2_2_q2

   
};