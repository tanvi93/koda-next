export const quiz = {
    "mm2_1_q1": {
        "instructionBarContent": "The Stage is set and the characters are waiting for your commands.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg":"#13BCE4",
        "mediaType": "video",
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif",
        "question": "What's the first thing that happens after the player clicks on the Play button ?",
        "options": [
            {
                "option": "The monkey moves to a new position across the tree and throws the fruit.",
                "isCorrect": true
            },
            {
                "option": "The monkey throws the fruit from its initial position.",
                "msg": "That's not right. The monkey moves. Check the video.",
                "isCorrect": false
            },
            {
                "option": "The monkey moves to a position above the cap and throws the fruit down.",
                "msg": "Are you sure? Check the video on the left again.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "As soon as the game begins, the monkey moves to a new position across the tree and throws a fruit.",
        "popupMascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_thumbs_up_head.png",
        "actionButtonText": 'Continue'
    },
    "mm2_1_q2": {
        "instructionBarContent": "You'll get to play around with Code Blocks shortly. Just one quick thing before that.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_without_play.gif",
        "hint": ['X along the decks.','Y to the sky.'],
        "question": "Remember how coordinates are used to represent position? Now observe the monkey's motion and infer how its coordinates change.",
        "options": [
            {
                "option": "Both its X and Y coordinates change.",
                "msg": "That's not right. The monkey moves only across, not up and down.",
                "isCorrect": false
            },
            {
                "option": "Only its Y coordinate changes.",
                "msg": "Remember, Y axis is vertical but the monkey doesn't move vertically in the video. So this can't be true.",
                "isCorrect": false
            },
            {
                "option": "Only its X coordinate changes.",
                "isCorrect": true
            },
            {
                "option": "None of the above.",
                "msg": "The monkey moves! So this can't be true.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "You got it!",
        "successPopupText": "Let's use code blocks to make the monkey move to a new position by changing its X coordinate.",
        "actionButtonText": 'Continue'
    },
    "mm2_1_q3": {
        "instructionBarContent": "The monkey is moving to a new position. But hey, it left its fruit behind!",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_without_play.gif",
        "question": "Where should the fruit be after the monkey moves to a new position?",
        "options": [
            {
                "option": "Fruit should be in the cap.",
                "msg": "The fruit does not jump into the cap! Check the video on the left again.",
                "isCorrect": false
            },
            {
                "option": "Fruit should be in the monkey's hand.",
                "isCorrect": true
            },
            {
                "option": "Fruit should be back on the tree.",
                "msg": "That doesn't seem right. Check the video on the left again.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "Let's put the fruit in monkey's hand using code blocks.",
        "actionButtonText": 'Continue'
    },
    "mm2_1_q4": {
        "instructionBarContent": "We are almost done with the second step of the algorithm! Just one little thing left.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_without_play.gif",
        "question": "What exactly do we have to do to make the monkey throw the fruit it's holding?",
        "options": [
            {
                "option": "Make the fruit fall.",
                "isCorrect": true
            },
            {
                "option": "Move the monkey with the fruit to the ground.",
                "msg": "The monkey keeps hanging on the tree. Check the video.",
                "isCorrect": false
            },
            {
                "option": "Move the cap below the monkey.",
                "msg": "How does moving the cap help the monkey throw the fruit? Try again.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "Let's make the fruit fall using code blocks!",
        "actionButtonText": 'Continue'
    },
    "mm2_2_q1": {
        "instructionBarContent": "Here’s your code again. Run your code repeatedly by clicking Run and observe the monkey’s movement.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_without_play.gif",
        "question": "Where does the monkey move to for throwing the fruit?",
        "options": [
            {
                "option": "To a new position across the tree in every run",
                "msg": "It doesn't look that way. Run the code and try again.",
                "isCorrect": false
            },
            {
                "option": "To the left or right edge of the Stage in every run",
                "msg": "The monkey goes to the coordinates mentioned in the code blocks. Try again.",
                "isCorrect": false
            },
            {
                "option": "To the same position in every run",
                "isCorrect": true
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "The monkey goes to the same position everytime you run the code.",
        "successPopupHeading2": "That seems very boring!To keep things interesting for the player, let's move the monkey to a new position in every run.",
        "actionButtonText": 'Continue'
    },
    "mm2_6_q1": {
        "instructionBarContent": "We’ve made the monkey throw a fruit from a random position. Let's make the monkey throw some more fruits.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "image",
        
        "mediaLink": "",
        "question": "Which of the codes below needs to be used 5 times to throw 5 fruits, each from a random position?",
        "options": [
            {
                "option": "<img width='80%' height='70%' src= './../assets/misc_images/mm2_6_q1_opt1.png'>",
                "msg": "The monkey wouldn't throw any fruits if this code was used, since the code for the fruit to fall down is missing.",
                "isCorrect": false
            },
            {
                "option": "<img width='80%' height='70%' src='./../assets/misc_images/mm2_6_q1_opt2.png'>",
                "isCorrect": true
            },
            {
                "option": "<img width='80%' height='70%' src='./../assets/misc_images/mm2_6_q1_opt3.png'>",
                "msg": "This code will keep moving the fruit down from its first position, since the fruit doesn't move back to monkey's hand each time the monkey moves.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "Perfect!",
        "successPopupText": "These blocks need to be used 5 times for 5 fruits to fall.",
        "actionButtonText": 'Continue'
    },
    "mm2_6_q2": {
        "instructionBarContent": "Can you help me pick a block that will simplify my code?",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "image",
        
        "mediaLink": "./../assets/misc_images/mm2_6_q2_ref_img.png",
        "question": "Which one of these blocks will simplify the code?",
        "options": [
            {
                "option": "<img src='./../assets/misc_images/mm2_6_q2_opt1.png'>",
                "isCorrect": true
            },
            {
                "option": "<img src='./../assets/misc_images/mm2_6_q2_opt2.png'>",
                "msg": "This block gives the monkey's current X or Y coordinate. How would it make the repetitive code simpler?",
                "isCorrect": false
            },
            {
                "option": "<img src='./../assets/misc_images/mm2_6_q2_opt3.png'>",
                "msg": "This block generates a random number. How would it simplify the repetitive code?",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "You are right!",
        "successPopupText": "As its name suggests, the repeat block should help us repeat instructions easily. Let's try it out!",
        "actionButtonText": 'Continue'
    },
    "mm3_1_q2": {
        "instructionBarContent": "Now that you know how to instruct the cap, answer the question below.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "",
        
        "mediaLink": "",
        "question": "In what ways can the <img src='./../assets/misc_images/mm3_1_q2_quest_img1.png'> and <img src='./../assets/misc_images/mm3_1_q2_quest_img2.png'> blocks be connected to other blocks?",
        "options": [
            {
                "option": "Below a block like <img src='./../assets/misc_images/mm3_1_q2_opt1.png'>",
                "msg": "Observe the shape of these blocks. They don't have a notch at the top that can let them be connected below other blocks.",
                "isCorrect": false
            },
            {
                "option": "Not below any other block",
                "isCorrect": true
            },
            {
                "option": "Inside a block like <img src='./../assets/misc_images/mm3_1_q2_opt3.png'>",
                "msg": "Observe the shape of these blocks. They don't have a notch at the top that can let them be connected inside a loop block.",
                "isCorrect": false
            },
            {
                "option": "Inside a block like <img src='./../assets/misc_images/mm3_1_q2_opt4.png'> as an input",
                "msg": "Observe the shape of these blocks. They don't have a connector on the left that could let them be connected as inputs to other blocks.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "Event blocks cannot be connected below any other block as they don't have a notch at the top.",
        "actionButtonText": 'Continue'
    },
    "mm3_1_q3": {
        "instructionBarContent": "Here you have your code for moving the cap and the monkey throwing fruits. Run the code and answer the question based on the output.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "image",
        
        "mediaLink": "./../assets/misc_images/mm3_1_q3_ref_img.png",
        "question": "When does the code under the <img src: './../assets/misc_images/mm3_1_q3_quest_img1.png'> get executed?",
        "options": [
            {
                "option": "After the execution of the code for monkey throwing fruits",
                "msg": "Are you sure? The monkey keeps throwing fruits forever! The code for monkey throwing fruits never stops running.",
                "isCorrect": false
            },
            {
                "option": "As soon as you run the code",
                "msg": "That doesn't seem right. The cap doesn't start moving when the Run button is clicked. Click Run and see it for yourself.",
                "isCorrect": false
            },
            {
                "option": "Whenever the left arrow key is pressed",
                "isCorrect": true
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "The code for moving the cap left is executed whenever the left arrow key is pressed.",
        "actionButtonText": 'Continue'
    },
    "mm4_1_q1": {
        "instructionBarContent": "Let’s recall the scoring rule of Monkey Menace.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/preview_with_play.gif",
        "question": "How does the player score points in Monkey Menace?",
        "options": [
            {
                "option": "+10 points if the fruit is caught by the cap.",
                "isCorrect": true
            },
            {
                "option": "-10 points if the fruit is missed by the cap.",
                "msg": "There is no negative scoring in this game. Look at the video and observe carefully.",
                "isCorrect": false
            },
            {
                "option": "+10 points if the fruit goes to monkey’s hand.",
                "msg": "The fruit goes back to the monkey's hand by itself. The player has nothing to do with it!",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "Excellent",
        "successPopupText": "The player scores 10 points for every fruit caught in the cap.",
        "actionButtonText": 'Continue'
    },
    "mm5_1_q1": {
        "instructionBarContent": "Every game you play has to end at a certain point. Did you notice when this game ends?",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/preview_with_play.gif",
        "question": "Select the correct condition for the game of Monkey Menace to end.",
        "options": [
            {
                "option": "When 10 fruits have been caught",
                "msg": "Game doesn't end when fruits are caught!",
                "isCorrect": false
            },
            {
                "option": "When 5 fruits are missed",
                "isCorrect": true
            },
            {
                "option": "When the cap touches the left or right edge of the screen",
                "msg": "No! That's not the reason for the game to end.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "The game ends when the player misses 5 fruits.",
        "actionButtonText": 'Continue'
    },
    "mm5_1_q2": {
        "instructionBarContent": "You need to update the missed fruits variable whenever a fruit is missed by the cap.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/preview_with_play.gif",
        "question": "How will you detect if a fruit is missed by the cap?",
        "options": [
            {
                "option": "If the monkey moves to a new position to throw another fruit.",
                "msg": "Monkey moves to another position even when the fruit is caught.",
                "isCorrect": false
            },
            {
                "option": "If the player doesn't move the cap.",
                "msg": "That doesn't seem right! Few fruits are caught by the cap even when the player doesn't move the cap.",
                "isCorrect": false
            },
            {
                "option": "If the fruit doesn’t touch the cap after it falls down.",
                "isCorrect": true
            }
        ],
        "successPopupHeading": "Excellent",
        "successPopupText": "Let's use code blocks to add this condition.",
        "actionButtonText": 'Continue'
    },
    "mm5_2_q1": {
        "instructionBarContent": "That was really fantastic! Now another challenge awaits you.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "image",
        
        "mediaLink": "./../assets/misc_images/mm5_2_q1_ref_img.png",
        "question": "Did you notice the two if blocks in your code? What can you infer from them?",
        "options": [
            {
                "option": "For a given fruit, if the condition of one if blocks is true, the condition for the other one must be false.",
                "isCorrect": true
            },
            {
                "option": "If the player doesn't move the cap.",
                "msg": "Any fruit thrown by the monkey must either touch the cap or not. This means at least one of the conditions must be true. Try again.",
                "isCorrect": false
            },
            {
                "option": "If the fruit doesn’t touch the cap after it falls down.",
                "msg": "Can the same fruit touch as well as not touch the cap? Try again.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "That's right!",
        "successPopupText": "If the condition for only one of the if blocks can be true at any time, it is an ideal case for using an if-else block!",
        "actionButtonText": 'Continue'
    },
    "packaging_milk_quiz1": {
        "instructionBarContent": "Our team came up with a few possible options for the code for the milk dispenser and the capping machine.",
        "mascotImage": "./../assets/images/activities/packaging_milk/mascot_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "image",
        
        "mediaLink": "./../assets/images/activities/packaging_milk/packaging1/packaging_milk_q1_image.png",
        "preview": "./../assets/images/activities/packaging_milk/preview.gif",
        "question": "Which of these will be the correct code for the bottle to be filled with milk in 3 installments and then be capped as shown in the video on the left?",
        "options": [
            {
                "option": "Code A",
                "isCorrect": true
            },
            {
                "option": "Code B",
                "msg": "If we use this code, the milk dispenser will be left on forever and the milk bottle will not get filled completely.",
                "isCorrect": false
            },
            {
                "option": "Code C",
                "msg": "This code does not fill the bottle completely. We need bottles that are full with milk.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "This code works perfectly!",
        "successPopupText": "We get fully filled bottles that are capped at the end.",
        "actionButtonText": 'Continue'
    },
    "packaging_milk_quiz2": {
        "instructionBarContent": "Here's your code for the packaging conveyor belt.",
        "mascotImage": "./../assets/images/activities/packaging_milk/mascot_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "image",
        
        "mediaLink": "./../assets/images/activities/packaging_milk/packaging_quiz2.png",
        "question": "What would happen if we change the input to the 'repeat 2 times' block from 2 to 1 for the milk dispenser's code?",
        "options": [
            {
                "option": "We get an empty bottle.",
                "msg": "The milk dispenser's code runs once, which means the dispenser is definitely turned on to fill the bottle.",
                "isCorrect": false
            },
            {
                "option": "We get a capped bottle only 1/3rd full of milk.",
                "isCorrect": true
            },
            {
                "option": "We get a uncapped bottle full of milk.",
                "msg": "This code does not fill the bottle completely. We need bottles that are full with milk.",
                "isCorrect": false
            },
            {
                "option": "A lot of milk is wasted.",
                "msg": "This code does not fill the bottle completely. We need bottles that are full with milk.",
                "isCorrect": false
            }
        ],
        "successPopupHeading": "That's correct!",
        "successPopupText": "If we repeat the dispenser's code just once, the milk bottles will not be full.",
        "actionButtonText": 'Continue'
    },
    "identical_twins_q1": {
        "instructionBarContent": "Let us check if you can answer some questions about the twins.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/mascot_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/preview.gif",
        "question": "Abby was crying one day. What could have made her cry?",
        "options": [
            {
                "option": "Someone fed Abby a grape.",
                "isCorrect": true
            },
            {
                "option": "Someone fed Betty a grape.",
                "msg": "Abby doesn't mind if Betty eats the grape.",
                "isCorrect": false
            },
            {
                "option": "Betty sneezed.",
                "msg": "Betty sneezing doesn't trouble Abby at all.",
                "isCorrect": false
            }
        ],
        "hintText": "Eating a grape makes Abby sneeze.<br>Abby sneezing makes Betty cry.<br>Abby cries when Betty cries.<br>Abby crying makes Betty sneeze.",
        "successPopupHeading": "That's right!",
        "successPopupText": "When Abby eats a grape it leads to series of events that end up making Abby cry.",
        "actionButtonText": 'Continue'
    },
    "identical_twins_q2": {
        "instructionBarContent": "Let us check if you can answer some questions about the twins.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/mascot_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/preview.gif",
        "question": "What would happen if Betty sneezes?",
        "options": [
            {
                "option": "Abby cries.",
                "msg": "Betty sneezing has no effect on Abby.",
                "isCorrect": false
            },
            {
                "option": "Nothing happens.",
                "isCorrect": true
            },
            {
                "option": "Abby sneezes.",
                "msg": "Betty sneezing does not make Abby sneeze.",
                "isCorrect": false
            }
        ],
        "hintText": "Eating a grape makes Abby sneeze.<br>Abby sneezing makes Betty cry.<br>Abby cries when Betty cries.<br>Abby crying makes Betty sneeze.",
        "successPopupHeading": "You're right!",
        "successPopupText": "Betty sneezing does not trigger any response.",
        "actionButtonText": 'Continue'
    },
    "identical_twins_q3": {
        "instructionBarContent": "Let us check if you can answer some questions about the twins.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/mascot_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/preview.gif",
        "question": "Abby ate a grape. What would be the series of things that happen in the correct sequence?",
        "options": [
            {
                "option": "Abby sneezes. Betty cries. Betty sneezes. Abby cries.",
                "msg": "Betty does not sneeze when she cries.",
                "isCorrect": false
            },
            {
                "option": "Abby cries. Betty sneezes. Abby sneezes. Betty cries.",
                "msg": "Are you sure? Grapes don't make Abby cry.",
                "isCorrect": false
            },
            {
                "option": "Abby sneezes. Betty cries. Abby cries. Betty sneezes.",
                "isCorrect": true
            }
        ],
        "hintText": "Eating a grape makes Abby sneeze.<br>Abby sneezing makes Betty cry.<br>Abby cries when Betty cries.<br>Abby crying makes Betty sneeze.",
        "successPopupHeading": "You're right!",
        "successPopupText": "You've identified the sequence of events and responses correctly.",
        "actionButtonText": 'Continue'
    },
    "identical_twins_q4": {
        "instructionBarContent": "Check your understanding of events and responses.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/mascot_head.png",
        "mascotBg": "#13BCE4",
        "mediaType": "video",
        
        "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/activities/identical_twins/preview.gif",
        "question": "When Betty cries, is it an event or a response?",
        "options": [
            {
                "option": "Event",
                "msg": "Abby sneezing makes Betty cry. Would this be an event?",
                "isCorrect": false
            },
            {
                "option": "Response",
                "msg": "When Betty cries, Abby also cries. Would this be a response?",
                "isCorrect": false
            },
            {
                "option": "Both and event and a response",
                "isCorrect": true
            }
        ],
        "hintText": "Eating a grape makes Abby sneeze.<br>Abby sneezing makes Betty cry.<br>Abby cries when Betty cries.<br>Abby crying makes Betty sneeze.",
        "successPopupHeading": "You're right!",
        "successPopupText": "Betty crying is both an event and a response.",
        "actionButtonText": 'Continue'
    }
};