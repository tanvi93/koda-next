export const quiz = {
   
    mm0_1_q1: {
        "instructionBarContent": "Let's begin by getting to know the characters of this game.",
        "mascotHead": "./../assets/monkey_menace/mascot_arms_folded_head.png",
        "mascotImage": "./../assets/images/monkey_menace/mascot_arms_folded_head.png",
        "mediaType": "game",
        "mediaLink": "/assets/images/monkey_menace/mm_image.png",
        "mascotBg": "#13BCE4",
        "question": "Select the type of character that each of these is.",
        "options": [
            {
                "question": "Monkey is",
                "options": [
                    {
                        "option": "a player controlled character",
                        "msg": "The monkey does not move as and when the player wants it to move. It has a mind of its own!",
                        "isCorrect": false
                    },
                    {
                        "option": "an uncontrollable character",
                        "msg": "You are right! The monkey jumps to where it wants and cannot be controlled by the player.",
                        "isCorrect": true
                    }
                ],
                "ifEmpty": "What type of character is the monkey in this game?"
            },
            {
                "question": "Fruit is",
                "options": [
                     {
                        "option": "a player controlled character",
                        "msg": "The monkey decides where to throw the fruit from. Can the player control the fruit's movement at all?",
                        "isCorrect": false
                    },
                    {
                        "option": "an uncontrollable character",
                        "msg": "You are right! The fruit falls down from wherever the monkey is. The player cannot control it.",
                        "isCorrect": true
                    }
                ],
                "ifEmpty": "Select whether the fruit is controlled by the player in the game or not."
            },
            {
                "question": "Cap is",
                "options": [
                     {
                        "option": "a player controlled character",
                        "msg": "",
                        "isCorrect": true
                    },
                    {
                        "option": "an uncontrollable character",
                        "msg": "Does the cap move on its own in the game? Who controls its movement?",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "What kind of character is the cap?"
            }
        ],
        
        "successPopupHeading": "Give yourself a pat on the back!",
        "successPopupText": "You have correctly identified the types of characters in this game.",
        "immediateValidation": true,
        "buttonText": "",
        "actionButtonText": 'Continue'
    }, //end of mm0_1_q1
    
     mm3_1_q1: {
        "instructionBarContent": "To make the cap move when the player presses a key, you have to know the actions performed by each of the keys used in the game.",
        "mascotHead": "./../assets/monkey_menace/mascot_arms_folded_head.png",
         "mascotImage": "./../assets/images/monkey_menace/mascot_arms_folded_head.png",
        "mediaType": "game",
         "mascotBg": "#13BCE4",
         "mediaLink": "assets/images/monkey_menace/mm_image.png",
        "question": "Play Monkey Menace again on your left and select what happens when each of the keys below is pressed.",
        "options": [
            {
                "question": "When right arrow key is pressed",
                "options": [
                    {
                        "option": "Cap doesn't move",
                        "msg": "Are you sure that the cap doesn't move on pressing the right arrow key? Play the game again and try it out.",
                        "isCorrect": false
                    },
                    {
                        "option": "Cap moves left",
                        "msg": "That doesn't seem right. Play the game again and try it out.",
                        "isCorrect": false
                    },
                    {
                        "option": "Cap moves right",
                        "msg": "Correct! The cap moves right when the player presses the right arrow key in the game.",
                        "isCorrect": true
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            },
            {
                "question": "When up arrow key is pressed",
                "options": [
                    {
                        "option": "Cap doesn't move",
                        "msg": "Exactly! The cap doesn't move at all in the game on pressing the up arrow key.",
                        "isCorrect": true
                    },
                    {
                        "option": "Cap moves left",
                        "msg": "That doesn't seem right. Play the game again and try pressing the up arrow key.",
                        "isCorrect": false
                    },
                    {
                        "option": "Cap moves right",
                        "msg": "That doesn't seem right. Play the game again and try pressing the up arrow key.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            },
            {
                "question": "When left arrow key is pressed",
                "options": [
                    {
                        "option": "Cap doesn't move",
                        "msg": "Are you sure that the cap doesn't move on pressing the left arrow key? Play the game again and try it out.",
                        "isCorrect": false
                    },
                    {
                        "option": "Cap moves left",
                        "msg": "",
                        "isCorrect": true
                    },
                    {
                        "option": "Cap moves right",
                        "msg": "That doesn't seem right. Play the game again and try it out.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            }
        ],
        
        "successPopupHeading": "Bingo!",
        "successPopupText": "The left arrow key makes the cap move left, while the right arrow key makes it move right in the game.",
        "immediateValidation": true,
         "buttonText": "",
         "actionButtonText": 'Continue'
    }, //end of mm3_1_q1
    
     mm3_5_q2: {
        "instructionBarContent": "You discovered that the cap's X coordinate should stay between -38 and 38 for it to remain visible on Stage. Let's use these to keep the cap on Stage throughout the game.",
        "mascotHead": "./../assets/monkey_menace/mascot_arms_folded_head.png",
         "mascotImage": "./../assets/images/monkey_menace/mascot_arms_folded_head.png",
        "mediaType": "image",
        "mediaLink": "",
         "mascotBg": "#13BCE4",
        "question": "Choose the correct options that will restrict the movement of the cap within the Stage.",
        "options": [
            {
                "question": "When should the cap be moved 2 steps left on pressing the left arrow key?",
                "options": [
                    {
                        "option": "If cap's X coordinate >= -36",
                        "msg": "Correct! With this condition, even if the cap is at the leftmost end of the Stage and the player presses the left arrow key, the cap remains completely visible on the Stage.",
                        "isCorrect": true
                    },
                    {
                        "option": "If cap's X coordinate >= -38",
                        "msg": ">= -38 means that the cap's X coordinate could also be -37 or -38. If it is moved 2 steps left from these coordinates, it will partly go out of the Stage.",
                        "isCorrect": false
                    },
                    {
                        "option": "If cap's X coordinate < -38",
                        "msg": "If the cap's X is less than -38, it means that the cap is already out of the stage.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            },
            {
                "question": "When should the cap be moved 2 steps left on pressing the left arrow key?",
                "options": [
                    {
                        "option": "If cap's X coordinate > 38",
                        "msg": "If the cap's X is greater than 38, it means that the cap is already out of the stage.",
                        "isCorrect": true
                    },
                    {
                        "option": "If cap's X coordinate <= 36",
                        "msg": "Perfect! With this condition, even if the cap is at the rightmost end of the Stage and the player presses the right arrow key, the cap remains completely visible on the Stage.",
                        "isCorrect": false
                    },
                    {
                        "option": "If cap's X coordinate <= 38",
                        "msg": "<= 38 means that the cap's X coordinate could also be 37 or 38. If it is moved 2 steps right from these coordinates, it will partly go out of the Stage.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            }
        ],
        
        "successPopupHeading": "You got it!",
        "successPopupText": "With these conditions, the cap will always remain fully visible on Stage.",
        "immediateValidation": true,
         "buttonText": "",
         "actionButtonText": 'Continue'
    }, //end of mm3_5_q2
    
    ride_scanner_q1: {
        "instructionBarContent": "Help me decide which people to allow on the roller coaster according to the rules mentioned.",
        "mascotHead": "./../assets/images/activities/ride_scanner/mascot_head.png",
        "mediaType": "image",
        "mediaLink": "./../assets/images/activities/ride_scanner/left_image.png",
        "question": "Choose the right option from the dropdown based on the person's description.",
        "options": [
            {
                "question": "If the person is taller than the point marked and carrying accessories",
                "options": [
                    {
                        "option": "Allow the person",
                        "msg": "See the first rule. Riders are not allowed to carry accessories with them.",
                        "isCorrect": false
                    },
                    {
                        "option": "Do not allow the person",
                        "msg": "Correct! The person is carrying accessories, so the person shouldn't be allowed according to the second rule.",
                        "isCorrect": true
                    },
                    {
                        "option": "Check for accessories",
                        "msg": "We already know that the person is carrying accessories.",
                        "isCorrect": false
                    },
                    {
                        "option": "Check for height",
                        "msg": "We already know that the person is taller than the red mark.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            },
            {
                "question": "If the person is taller than the red mark",
                "options": [
                    {
                        "option": "Allow the person",
                        "msg": "Recheck the rules. The person satisfies the second requirement. How about the first rule?",
                        "isCorrect": false
                    },
                    {
                        "option": "Do not allow the person",
                        "msg": "Recheck the rules. Does this person break any of them?",
                        "isCorrect": false
                    },
                    {
                        "option": "Check for accessories",
                        "msg": "Right! We need to make sure that the first rule is also obeyed, so the presence of accessories should be checked.",
                        "isCorrect": true
                    },
                    {
                        "option": "Check for height",
                        "msg": "We already know that the person is taller than the red mark.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            },
            {
                "question": "If the person has no accessories",
                "options": [
                    {
                        "option": "Allow the person",
                        "msg": "Recheck the rules. The person satisfies the first requirement. How about the second rule?",
                        "isCorrect": false
                    },
                    {
                        "option": "Do not allow the person",
                        "msg": "Recheck the rules. Does this person break any of them?",
                        "isCorrect": false
                    },
                    {
                        "option": "Check for accessories",
                        "msg": "We already know that the person is not carrying any accessories.",
                        "isCorrect": false
                    },
                    {
                        "option": "Check for height",
                        "msg": "Right! We need to make sure that the second rule is also obeyed, so the person's height should be checked.",
                        "isCorrect": true
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            },
            {
                "question": "If the person is shorter than the red mark",
                "options": [
                    {
                        "option": "Allow the person",
                        "msg": "Recheck the rules. Does this person break any of them?",
                        "isCorrect": false
                    },
                    {
                        "option": "Do not allow the person",
                        "msg": "Yes! The person breaks the second rule, so the person shouldn't be allowed.",
                        "isCorrect": true
                    },
                    {
                        "option": "Check for accessories",
                        "msg": "This person breaks the second rule. Do we then need to check for accessories at all?",
                        "isCorrect": false
                    },
                    {
                        "option": "Check for height",
                        "msg": "We already know that the person is shorter than the red mark.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            },
            {
                "question": "If the person is taller than the point marked and carrying no accessories",
                "options": [
                    {
                        "option": "Allow the person",
                        "msg": "Yes! The person satisfies both the requirements and should be allowed to enjoy the roller coaster",
                        "isCorrect": true
                    },
                    {
                        "option": "Do not allow the person",
                        "msg": "Recheck the rules. Does this person break any of them?",
                        "isCorrect": false
                    },
                    {
                        "option": "Check for accessories",
                        "msg": "We already know that the person is not carrying any accessories.",
                        "isCorrect": false
                    },
                    {
                        "option": "Check for height",
                        "msg": "We already know that the person is taller than the red mark.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select the correct option from the dropdown."
            }
        ],
        
        "successPopupHeading": "Great going!",
        "successPopupText": "With you around, nobody would be able to sneak past.",
        "immediateValidation": true,
        "buttonText": "",
        "actionButtonText": 'Continue'
    }, // end of ride_scanner_q1
    
    medicine_box_q1: {
        "instructionBarContent": "Let's see what we can find out about Grandma's vitals based on the tablets she took.",
        "mascotHead": "./../assets/images/activities/medicine_box/mascot_head.png",
        "mediaType": "image",
        "mediaLink": "./../assets/images/activities/medicine_box/final_code2.png",
        "question": "Last Friday, Grandma had tablet 2 along with some other tablets. This means that:",
        "options": [
            {
                "question": "Her temperature",
                "options": [
                    {
                        "option": "was higher than 100 degrees",
                        "msg": "If Grandma has a high temperature, she takes tablet 1, not tablet 2.",
                        "isCorrect": false
                    },
                    {
                        "option": "was lower than 100 degrees",
                        "msg": "Well done. You figured it out!",
                        "isCorrect": true
                    },
                    {
                        "option": "cannot be determined from the given information",
                        "msg": "Grandma can take tablet 2 only when her body temperature satisfies a specific condition. Check the code to find out what that specific condition is.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "What do you think Grandma's temperature was? Select an option from the dropdown."
            }, {
                "question": "Her sugar",
                "options": [
                    {
                        "option": "was higher than 130",
                        "msg": "That's right!",
                        "isCorrect": true
                    },
                    {
                        "option": "was lower than 130",
                        "msg": "Does Grandma need to take any medicines if her blood sugar is lesser than 130? Refer to the code again.",
                        "isCorrect": false
                    },
                    {
                        "option": "cannot be determined from the given information",
                        "msg": "Grandma needs to take tablet 2 for a specific blood sugar level. Check the code and see specifically when she needs to take it.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "What do you think Grandma's blood sugar was? Select an option from the dropdown."
            }, {
                "question": "Her BP",
                "options": [
                    {
                        "option": "was higher than 140/90",
                        "msg": "We don't know the tablets she had for her BP that day. Can you be certain about how her BP was?",
                        "isCorrect": false
                    },
                    {
                        "option": "was lower than 140/90",
                        "msg": "We don't know the tablets she had for her BP that day. Can you be certain about how her BP was?",
                        "isCorrect": false
                    },
                    {
                        "option": "cannot be determined from the given information",
                        "msg": "That's right!",
                        "isCorrect": true
                    }
                ],
                "ifEmpty": "What do you think Grandma's BP was? Select an option from the dropdown."
            }
        ],
        
        "successPopupHeading": "You're doing great!",
        "successPopupText": "Let's do another one.",
        "immediateValidation": true,
        "buttonText": "",
        "actionButtonText": 'Continue'
    }, // end of medicine_box_q1
    
    medicine_box_q2: {
        "instructionBarContent": "Let's see what we can find out about Grandma's vitals based on the tablets she took.",
        "mascotHead": "./../assets/images/activities/medicine_box/mascot_head.png",
        "mediaType": "image",
        "mediaLink": "./../assets/images/activities/medicine_box/final_code2.png",
        "question": "The next day Grandma had just tablet 4 and tablet 5. This means that:",
        "options": [
            {
                "question": "Her temperature",
                "options": [
                    {
                        "option": "was higher than 100 degrees",
                        "msg": "If Grandma has a high temperature, she takes tablet 1. Did she take tablet 1?",
                        "isCorrect": false
                    },
                    {
                        "option": "was lower than 100 degrees",
                        "msg": "Good job!",
                        "isCorrect": true
                    },
                    {
                        "option": "cannot be determined from the given information",
                        "msg": "Grandma needs to take tablet 1 for a high temperature, which she didn't take that day. What does that indicate about her temperature?",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "What do you think Grandma's temperature was? Select an option from the dropdown."
            }, {
                "question": "Her sugar",
                "options": [
                    {
                        "option": "was higher than 130",
                        "msg": "Grandma needs to take tablet 2 for high sugar. Did she take tablet 2 that day?",
                        "isCorrect": false
                    },
                    {
                        "option": "was lower than 130",
                        "msg": "Bingo!",
                        "isCorrect": true
                    },
                    {
                        "option": "cannot be determined from the given information",
                        "msg": "Grandma needs to take tablet 2 for high sugar, which she didn't take that day. What does that indicate about her sugar level?",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "What do you think Grandma's blood sugar was? Select an option from the dropdown."
            }, {
                "question": "Her BP",
                "options": [
                    {
                        "option": "was higher than 140/90",
                        "msg": "Grandma takes tablet 4 only when she has a specific BP condition. Check the code on the left again and find out what that BP condition is.",
                        "isCorrect": false
                    },
                    {
                        "option": "was lower than 140/90",
                        "msg": "Perfect!",
                        "isCorrect": true
                    },
                    {
                        "option": "cannot be determined from the given information",
                        "msg": "Grandma takes tablet 4 only when she has a specific BP condition. Check the code on the left again and find out what that BP condition is.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "What do you think Grandma's BP was? Select an option from the dropdown."
            }
        ],
        
        "successPopupHeading": "Great work!",
        "successPopupText": "It takes a sharp mind to analyse code like you did.",
        "immediateValidation": true,
        "buttonText": "",
        "actionButtonText": 'Continue'
    }, // end of medicine_box_q2
    
    "air_conditioner_q2": {
        "instructionBarContent": "We need to give appropriate names to these variables to make it easier to use them.",
        "mascotHead": "./../assets/images/activities/air_conditioner/mascot_head.png",
        "mediaType": "",
        //"mediaLink": "./../assets/images/activities/air_conditioner/preview.gif",
        "mediaLink": "",
        "question": "Select an appropriate name for these variables.",
        "options": [
            {
                "question": "The temperature of the room at the moment",
                "options": [
                    {
                        "option": "The temperature of the room at the moment.",
                        "msg": "This name is too long. Variable names should be concise and understandable.",
                        "isCorrect": false
                    },
                    {
                        "option": "Current Temperature",
                        "msg": "Good! You have chosen an appropriate name for the first variable.",
                        "isCorrect": true
                    },
                    {
                        "option": "At the moment",
                        "msg": "This name doesn't say much about what the variable stores.",
                        "isCorrect": false
                    },
                    {
                        "option": "Present Temperature",
                        "msg": "Good! You have chosen an appropriate name for the first variable.",
                        "isCorrect": true
                    },
                    {
                        "option": "Temperature",
                        "msg": "This name is unclear. It does not say much about what temperature it is.",
                        "isCorrect": false
                    },
                    {
                        "option": "Room Temperature",
                        "msg": "Good! You have chosen an appropriate name for the first variable.",
                        "isCorrect": true
                    }
                ],
                "ifEmpty": "Select an appropriate name for this variable from the dropdown list."
            },
            {
                "question": "The temperature at which the room should be",
                "options": [
                    {
                        "option": "Desired Temperature",
                        //"msg": "Good! You have chosen an appropriate name for the second variable.",
                        "msg": "",
                        "isCorrect": true
                    },
                    {
                        "option": "Should be Temperature",
                        "msg": "'Should be temperature' does not clearly state what the variable is for.",
                        "isCorrect": false
                    },
                    {
                        "option": "Future Temperature",
                        "msg": "'Future Temperature' does not clearly mean the temperature that the user wants the room to be at.",
                        "isCorrect": false
                    },
                    {
                        "option": "Temperature",
                        "msg": "This name is unclear. It does not say much about what temperature it is.",
                        "isCorrect": false
                    },
                    {
                        "option": "Chosen Temperature",
                        //"msg": "Good! You have chosen an appropriate name for the second variable.",
                        "msg": "",
                        "isCorrect": true
                    },
                    {
                        "option": "The temperature at which the room should be",
                        "msg": "The name for the second variable is too long. Variable names should be concise and understandable.",
                        "isCorrect": false
                    }
                ],
                "ifEmpty": "Select an appropriate name for this variable from the dropdown list."
            },
         ],  
        "successPopupHeading": "Perfect!",
        "successPopupText": "'{{Chosen variable name 1}}' and '{{Chosen variable name 2}}' are good names for the variables. Easily understandable and apt.",
        "immediateValidation": true,
        "actionButtonText": 'Continue'
    }, // end of air_conditioner_q2
    
    "air_conditioner_q3": {
        "instructionBarContent": "Help me fill this so that I can understand this better.",
        "mascotHead": "./../assets/images/activities/air_conditioner/mascot_head.png",
        "mediaType": "gif",
        "mediaLink": "./../assets/images/activities/air_conditioner/preview.gif",
        "question": "The room temperature is 28 right now and I want it to be 16.",
        "options": [
            {
                "question": "{{Chosen variable name 1}} is",
                "options": [ 
                    {
                        "option": "28",
                        "isCorrect": true
                    }, 
                    {
                        "option": "16",
                        "isCorrect": false,
                        // Message when the input for 'Current Temperature' is wrong
                        "msg": "The {{chosen variable name 1}} doesn't look right."
                    }
                ]
            }, {
                "question": "{{Chosen variable name 2}} is",
                "options": [ 
                    {
                        "option": "28",
                        "isCorrect": false,
                        "msg": "The {{chosen variable name 2}} doesn't look right."
                    }, 
                    {
                        "option": "16",
                        "isCorrect": true
                    }
                ]
            }, {
                "question": "So the {{Chosen variable name 1}} needs to be",
                "options": [ 
                    {
                        "option": "increased",
                        "isCorrect": false,
                        "msg": "The {{chosen variable name 2}} is less than the {{chosen variable name 1}}. Would increasing the temperature help?"
                    }, 
                    {
                        "option": "decreased",
                        "isCorrect": true
                    }
                ]
            }, {
                "question": "until",
                "options": [ 
                    {
                        "option": "{{Chosen variable name 1}} = {{Chosen variable name 2}}",
                        "isCorrect": true
                    }, 
                    {
                        "option": "{{Chosen variable name 1}} < {{Chosen variable name 2}}",
                        "isCorrect": false,
                        "msg": "You want the room to reach the {{chosen variable name 2}}. Till when would would you decrease the {{chosen variable name 1}}?"
                    }, 
                    {
                        "option": "{{Chosen variable name 1}} > {{Chosen variable name 2}}",
                        "isCorrect": false,
                        "msg": "You want the room to reach the {{chosen variable name 2}}. Till when would would you decrease the {{chosen variable name 1}}?"
                    }
                ]
            }
        ],
        "buttonText": "Done",
        
        // Message when all fields are empty
        "allEmpty": "Make sure you have filled all the required details.",
        
        // Message when some fields are empty
        "someEmpty": "Looks like you missed filling out some inputs.",
        
        "successPopupHeading": "Perfect!",
        "successPopupText": "Seems like you have understood this well.",
        //"applaudButtonText": "Continue",
        
        "immediateValidation": false,
        "actionButtonText": 'Continue'
    }, // end of air_conditioner_q3
    
     "air_conditioner_q4": {
        "instructionBarContent": "Help me fill this so that I can understand this better.",
        "mascotHead": "./../assets/images/activities/air_conditioner/mascot_head.png",
        "mediaType": "gif",
        "mediaLink": "./../assets/images/activities/air_conditioner/preview.gif",
        "question": "Now the room temperature is 16 and I want it to be 23.",
        "options": [
            {
                "question": "{{Chosen variable name 1}} is",
                "options": [ 
                    {
                        "option": "23",
                        "isCorrect": false,
                        "msg": "The {{chosen variable name 1}} doesn't look right."
                    }, 
                    {
                        "option": "16",
                        "isCorrect": true
                    }
                ]
            }, {
                "question": "{{Chosen variable name 2}} is",
                "options": [ 
                    {
                        "option": "23",
                        "isCorrect": true
                    }, 
                    {
                        "option": "16",
                        "isCorrect": false,
                        "msg": "The {{chosen variable name 2}} doesn't look right."
                    }
                ]
            }, {
                "question": "So the {{Chosen variable name 1}} needs to be",
                "options": [ 
                    {
                        "option": "increased",
                        "isCorrect": true
                    }, 
                    {
                        "option": "decreased",
                        "isCorrect": false,
                        "msg": "The {{chosen variable name 2}} is more than the {{chosen variable name 1}}. Would decreasing the temperature help?"
                    }
                ]
            }, {
                "question": "until",
                "options": [ 
                    {
                        "option": "{{Chosen variable name 1}} = {{Chosen variable name 2}}",
                        "isCorrect": true
                    }, 
                    {
                        "option": "{{Chosen variable name 1}} < {{Chosen variable name 2}}",
                        "isCorrect": false,
                        "msg": "You want the room to reach the {{chosen variable name 2}}. Till when would would you increase the {{chosen variable name 1}}?"
                    }, 
                    {
                        "option": "{{Chosen variable name 1}} > {{Chosen variable name 2}}",
                        "isCorrect": false,
                        "msg": "You want the room to reach the {{chosen variable name 2}}. Till when would would you increase the {{chosen variable name 1}}?"
                    }
                ]
            }
        ],
        "buttonText": "Done",
        
        // Message when all fields are empty
        "allEmpty": "Make sure you have filled all the required details.",
        
        // Message when some fields are empty
        "someEmpty": "Looks like you missed filling out some inputs.",
        
        "successPopupHeading": "Super!",
        "successPopupText": "Whether the {{chosen variable name 1}} is higher than the {{chosen variable name 2}} or lower, always change the {{chosen variable name 1}} till it reaches the {{chosen variable name 2}}.",
        //"applaudButtonText": "Continue",
        
         "immediateValidation": false,
         "actionButtonText": 'Continue'
    } // end of air_conditioner_q4
};