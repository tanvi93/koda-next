export const checklistMCQ = {
    "mm3_1_q4": {
    "instructionBarContent": "Here's another one for you.",
    'mascotImage': 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
    "mediaType": "stage and code zone",
    "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mm_image.png",

    "question": 'Run your code again and then keep the right arrow key pressed. Which of the following happens? Select all the correct options.',
    "mascotBg": '#13BCE4',
    "answer": [
        {
            "option": 'The cap keeps moving right and the monkey keeps throwing fruits.',
            // Message for the case when only this option is selected.
            "only_this_selected_msg": "You're right. Is there anything else that happens?",
            "isCorrect": true
        },
        {
            "option": 'The cap moves right only after the monkey has thrown a fruit.',
            // Message for the case when only this option is selected.
            "only_this_selected_msg": "Run the code and try moving the cap again. Aren't you able to move the cap before a fruit has fallen down?",
            // Message for the case at least one correct and one wrong option is selected.
            "right_and_this_selected_msg": "You're partly correct. Run your code again and observe carefully if the cap's movement gets affected by the monkey at all.",
            "isCorrect": false
        },
        {
            "option": 'The cap moves right only after the monkey has moved to a new position.',
            "only_this_selected_msg": "Run the code and try moving the cap again. Aren't you able to move it even when the monkey hasn't moved?",
            "right_and_this_selected_msg": "You're partly correct. Run your code again and observe carefully if the cap's movement gets affected by the monkey at all.",
            "isCorrect": false
        },
        {
            "option": 'The cap keeps moving right irrespective of what the monkey is doing.',
            "only_this_selected_msg": "You're right. Is there anything else that happens?",
            "isCorrect": true
        }
    ],
    
    // Message for no option selected
    "no_option_selected_msg": "Select at least one option.",
    
    // Message for the case when multiple wrong options and no correct option are selected.
    "all_wrong_msg": "That doesn't seem right. Observe carefully what happens when you run your code and keep the right arrow key pressed.",
    "correct_but_not_all_msg": "You're right. Is there anything else that happens?",
    "successPopupHeading": "You're right!",
        "successPopupText": "The cap's movement does not get affected by the monkey's position or code at all. The cap moves whenever the left or right arrow keys are pressed.",
        "actionButtonText": 'Continue'
    }, // end of mm3_1_q4
    
    "air_conditioner_q1": {
    "instructionBarContent": "Now that I have understood how the thermostat in an air conditioner works, help me in deciding the variables for this.",
    'mascotImage': './assets/images/activities/air_conditioner/mascot_head.png',
    "mediaType": "",
    "mediaLink": "",

    'question': 'Which of these are variables, i.e., their value is not fixed?',
    'answer': [
        {
            'option': 'The temperature of the room at the moment',
            // Message for the case when only this option is selected.
            'only_this_selected_msg': "You're right. Do we need any more variables?",
            'isCorrect': true
        },
        {
            'option': "My air conditioner's brand name",
            'only_this_selected_msg': "The brand name of a given air conditioner will not change. Is it a variable then?",
            "right_and_this_selected_msg": "You're partly correct. But the brand name of a given air conditioner will not change. Is it a variable then?",
            'isCorrect': false
        },
        {
            'option': 'The size of my air conditioner',
            'only_this_selected_msg': "The size of a given air conditioner doesn't change. Is it a variable then?",
            "right_and_this_selected_msg": "You're partly correct. But the size of a given air conditioner will not change. Is it a variable then?",
            'isCorrect': false
        },
        {
            'option': 'The temperature at which the room should be',
            'only_this_selected_msg': "You're right. Do we need any more variables?",
            'isCorrect': true
        }
    ],
    
     // Message for when no option is selected.
    "no_option_selected_msg": "We need atleast one variable to make the air conditioner work. Select the ones you think are required.",
    
    // Message for the case when multiple wrong options and no correct option are selected.
    "all_wrong_msg": "That doesn't look right. For a given air conditioner, its size and brand name are fixed and not variables.",
    "correct_but_not_all_msg": "You're right. Do we need any more variables?",
    "successPopupHeading": "That's right!",
        "successPopupText": "We need just two variables for our setup: 'The temperature of the room at the moment' and 'The temperature at which the room should be'.",
        "actionButtonText": 'Continue'
    }, // end of air_conditioner_q1
    
    "mm5_3_q1": {
    "instructionBarContent": "So now you have a way to track missed fruits. The game ends when the player misses 5 fruits.",
    'mascotImage': 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
    "mediaType": "gif",
    "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/preview_end_game.gif",
    "mascotBg": '#13BCE4',
    'question': 'How does the player know that the game has ended? Select all the valid options.',
    'answer': [
        {
            'option': "The background changes to <img width='50px' src='http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.png'>",
            // Message for the case when only this option is selected.
            'only_this_selected_msg': "You're right. Is there anything else that happens when the game ends?",
            'isCorrect': true
        },
        {
            'option': 'The score vanishes.',
            'only_this_selected_msg': "The player needs to know how much he/she has scored. It is not hidden when the game ends.",
            "right_and_this_selected_msg": "You're partly right. But the player needs to know how much he/she has scored when the game ends. Check the video again.",
            'isCorrect': false
        },
        {
            'option': "The monkey jumps up and down.",
            'only_this_selected_msg': "The monkey never moves up and down in the game.",
            "right_and_this_selected_msg": "You're partly right. But the monkey never moves up and down in the game. Check the video again.",
            'isCorrect': false
        },
        {
            'option': 'All the characters disappear.',
            'only_this_selected_msg': "You're right. Is there anything else that happens when the game ends?",
            'isCorrect': true
        },
        {
            'option': "<img width='50px' src='http://dqfevutdn6sxd.cloudfront.net/monkey_menace/replay.png'> appears.",
            'only_this_selected_msg': "You're right. Is there anything else that happens when the game ends?",
            'isCorrect': true
        }
    ],
    // Message for when no option is selected.
    "no_option_selected_msg": "Select at least one of the options.",
    
    // Message for the case when multiple wrong options and no correct option are selected.
    "all_wrong_msg": "That doesn't seem right. Check the video again carefully and observe the things that happen when the game ends.",
    
    // Message when only correct options are selected but not all of them
    "correct_but_not_all_msg": "You're right. Is there anything else that happens when the game ends?",
    
    'successPopupHeading': "That's perfect! Let's code for all these things.",
        "successPopupText": "<ul><li>The background changes to <img width='50px' src='http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.png'></li> <li>All the characters disappear.</li> <li><img width='50px' src='http://dqfevutdn6sxd.cloudfront.net/monkey_menace/replay.png'> appears.</li></ul>",
        "actionButtonText": 'Continue'
    }, // end of mm5_3_q1
    
    "mm6_1_q1": {
    "instructionBarContent": "Now that we have the PLAY button on Stage, let's see what it needs to do.",
    'mascotImage': 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
    "mediaType": "game",
    "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/preview_with_play.gif",
    "mascotBg": '#13BCE4',
    'question': 'What should happen on click of the PLAY button?',
    'answer': [
        {
            'option': "The monkey should go to the right end of Stage.",
            // Message for the case when only this option is selected.
            'only_this_selected_msg': "The monkey appears at a random position on the Stage, not necessarily at the right end.",
            "right_and_this_selected_msg": "You're partly right. But the monkey appears at a random position on the Stage, not necessarily at the right end.",
            'isCorrect': false
        },
        {
            'option': 'The score and missed fruits should be set to 0.',
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "The missed fruits variable should become visible on Stage.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Replay. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': 'All characters should show up on the Stage.',
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "All the characters should be hidden.",
            'only_this_selected_msg': "The player wouldn't be able to play the game if the characters are not seen on the Stage.",
            "right_and_this_selected_msg": "You're partly right. But the player wouldn't be able to play the game if the characters are not seen on the Stage.",
            'isCorrect': false
        },
        {
            'option': "PLAY button should disappear from Stage.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "The background should change to the jungle background.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "The monkey should start throwing fruits.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        }
    ],
    // Message for when no option is selected.
    "no_option_selected_msg": "Select the options that apply.",
    
    // Message when only correct options are selected but not all of them
    "correct_but_not_all_msg": "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
    
    // Message for the case when multiple wrong options and no correct option are selected.
    "all_wrong_msg": "That doesn't seem right. Play the game on the left again and carefully observe the things that happen when PLAY is clicked.",
    
    "successPopupHeading": "That's right!",
    "successPopupText": "<ul><li>The score and missed fruits should be set to 0.</li><li>The missed fruits variable should become visible on Stage.</li><li>All characters should show up on the Stage.</li><li>PLAY button should disappear from Stage.</li><li>The background should change to the jungle background.</li><li>The monkey should start throwing fruits.</li></ul>",
        "expandedSuccessPopupText": "In short, the whole game should run from the beginning when the PLAY button is clicked.<br><br>You will find it simple to code these. Let's do it!",
        "actionButtonText": 'Continue'
    }, // end of mm6_1_q1
    
    "mm6_2_q1": {
    "instructionBarContent": "Finally, let's take care of that Replay button that we had been avoiding!",
    'mascotImage': 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
    "mediaType": "gif",
    "mediaLink": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/preview_end_game.gif",
    "mascotBg": '#13BCE4',
    'question': 'We know that when the game ends, a REPLAY appears. What should happen on clicking it?',
     'answer': [
        {
            'option': "The monkey should go to the right end of Stage.",
            // Message for the case when only this option is selected.
            'only_this_selected_msg': "The monkey appears at a random position on the Stage, not necessarily at the right end.",
            "right_and_this_selected_msg": "You're partly right. But the monkey appears at a random position on the Stage, not necessarily at the right end.",
            'isCorrect': false
        },
        {
            'option': 'The score and missed fruits should be set to 0.',
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "The missed fruits variable should become visible on Stage.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Replay. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': 'All characters should show up on the Stage.',
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "All the characters should be hidden.",
            'only_this_selected_msg': "The player wouldn't be able to play the game if the characters are not seen on the Stage.",
            "right_and_this_selected_msg": "You're partly right. But the player wouldn't be able to play the game if the characters are not seen on the Stage.",
            'isCorrect': false
        },
        {
            'option': "PLAY button should disappear from Stage.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "The background should change to the jungle background.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        },
        {
            'option': "The monkey should start throwing fruits.",
            'only_this_selected_msg': "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
            'isCorrect': true
        }
    ],
    // Message for when no option is selected.
    "no_option_selected_msg": "Select the options that apply.",
 
    // Message when only correct options are selected but not all of them
    "correct_but_not_all_msg": "You're right. There are some more things that should happen on clicking Play. Check the preview again.",
    
    // Message for the case when multiple wrong options and no correct option are selected.
    "all_wrong_msg": "That doesn't seem right. Check the preview again carefully and observe the things that happen when Replay is clicked.",
    
    "successPopupHeading": "You're right!",
    "successPopupText": "<ul><li>The score and missed fruits should be set to 0.</li><li>The missed fruits variable should become visible on Stage.</li><li>All characters should show up on the Stage.</li><li>PLAY button should disappear from Stage.</li><li>The background should change to the jungle background.</li><li>The monkey should start throwing fruits.</li></ul>",
        "expandedSuccessPopupText": "Did you notice? The Replay button behaves exactly like the Play button!",
        "actionButtonText": 'Continue'
    } // end of mm6_2_q1
};