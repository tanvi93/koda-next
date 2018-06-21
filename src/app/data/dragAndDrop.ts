export const algoStep = {
    "mm0_1_q2": {
        "instructionBarContent": "On the left are the steps for building the Monkey Menace game, but in a jumbled order. Drag and drop them on the right in the correct sequence.",
        "mascotImage": "./../assets/images/monkey_menace/mascot_arms_folded_head.png",
        "steps": [
            {
                "incorrectOrder": "1",
                "order": "2",
                "altOrder": "3",
                "step": "Make the monkey throw fruits",
                "icon": "./assets/images/monkey_menace/make_the_monkey_throw_fruits.png"
                
            },
            {
                "incorrectOrder": "2",
                "order": "1",
                "step": "Select and position the background and characters",
                "icon": "./assets/images/monkey_menace/step1.png"
            },
            {
                "incorrectOrder": "3",
                "order": "5",
                "altOrder": "4",
                "step": "End game if the player misses more than five fruits",
                "icon": "./assets/images/monkey_menace/game_over.png"
               
            },
            {
                "incorrectOrder": "4",
                "order": "3",
                "altOrder": "2",
                "step": "Make the cap move when player presses the arrow keys",
                "icon": "./assets/images/monkey_menace/make_the_cap_move.png"
            },
            {
                "incorrectOrder": "5",
                "order": "4",
                "altOrder": "5",
                "step": "Increase the score if the player catches a fruit",
                "icon": "./assets/images/monkey_menace/step4.png"                
            },

        ],
        "buttonText": "Check",

        // Message when no step dragged to the right
        // "allEmptyHeading": "Something is missing!",
        "allEmpty": "Something is missing! Drag and drop all the steps to the right in the correct sequence.",

        // Message when at least one but not all steps dragged to the right
        // "anyEmptyHeading": "Something is missing!",
        "anyEmpty": "Something is missing! Are you sure you have dragged all the steps to the right?",

        // Message when Step 1 is not Selecting & Positioning Characters
        // "step1WrongHeading": "Something doesn't seem quite right.",
        "step1WrongText": "Something doesn't seem quite right. We need the backgrounds and characters of our game before we can do anything else with them!",

        // Message when Increase score is placed before Monkey throwing fruits OR before Move cap
        // "increaseScoreBeforeMoveHeading": "Recheck your sequence.",
        "increaseScoreBeforeMoveText": "Recheck your sequence. The score should be updated only when the monkey can throw fruits and the player can move the cap to catch them.",

        // Message when End game is placed before Monkey throwing fruits OR before Move cap: 
        // "endGameBeforeMoveHeading": "That doesn't look right!",
        "endGameBeforeMoveText": "That doesn't look right! We have no game if it ends before the monkey could throw fruits and player could catch them! Recheck your sequence.",

        "successPopupHeading": "Hurrah! You got it right!",
        "successPopupText": "Following the steps of this algorithm will help us build our game correctly.",
        'actionButtonText': 'Continue',
        "popupMascotImage": "./../assets/images/monkey_menace/mascot_thumbs_up_head.png",
    }, // End of mm_0_1_q2 (MM algorithm)
    
    "to_the_hills_q1": {
        "instructionBarContent": "We need to leave for the hill station after breakfast and our car is low on fuel. Just to be on the safer side I made myself a checklist with all the important steps to reach there. But I have to rearrange them to get the right order.",
        "question": "Drag the correct steps from below and place them in the correct sequence in my checklist.",
        "mascotImage": "./../assets/images/activities/to_the_hills/mascot_head.png",
        "popupMascotImage": "./../assets/images/activities/to_the_hills/mascot_head.png",
        "BackgroundColor": "#ecd45c",
        "steps": [
            {
                // "order": "0",
                "incorrectOrder": "1",
                "step": "Clean the garage",
                "icon": "./../assets/images/activities/to_the_hills/clean_garage.png",
                // Message when 'Clean the garage' step is dragged to the right
                "msg": "The checklist is missing some important steps. The garage will take an entire day to be cleaned. We can do that some other day."
            },
            {
                "order": "3",
                "incorrectOrder": "2",
                "step": "Get the car refueled",
                "icon": "./../assets/images/activities/to_the_hills/car_fuel.png"
            },
            {
                // "order": "0",
                "incorrectOrder": "3",
                "step": "Stop to have breakfast",
                "icon": "./../assets/images/activities/to_the_hills/breakfast.png",
                // Message when 'Breakfast included' step is dragged to the right
                "msg": "We already had our breakfast before leaving. We don't need another one!"
            },
            {
                "order": "4",
                "altOrder": "5",
                "incorrectOrder": "4",
                "step": "Reach the hill station",
                "icon": "./../assets/images/activities/to_the_hills/reach_hill_station.png"
            },
            {
                "order": "1",
                "altOrder": "2",
                "incorrectOrder": "5",
                "step": "Put the bags in the car",
                "icon": "./../assets/images/activities/to_the_hills/put_bags_in_car.png"
            },
            {
                "order": "2",
                "altOrder": "1",
                "incorrectOrder": "6",
                "step": "Turn off all lights at home",
                "icon": "./../assets/images/activities/to_the_hills/switch_off_lights.png"
            },
            {
                // "order": "0",
                "incorrectOrder": "7",
                "step": "Turn the shower on",
                "icon": "./../assets/images/activities/to_the_hills/turn_on_shower.png",
                // Message when 'Shower included' step is dragged to the right
                "msg": "We shouldn't leave the shower on while we are away on a trip. Water is precious."
            },
            {
                "order": "5",
                "altOrder": "4",
                "incorrectOrder": "8",
                "step": "Check in at the hotel",
                "icon": "./../assets/images/activities/to_the_hills/check_in_hotel.png"
            }
        ],
        "buttonText": "DONE",

        // Message when all steps on the right are empty
        "allEmpty": "Drag and drop the required steps to the right in the correct sequence.",

        // Message when atleast one step on the right is unfilled
        "anyEmpty": "My checklist has 5 important steps. Looks like you haven't filled some spots.",

        // Message when 'Put the bags in the car' step is placed below Fuel/Hill/Hotel on the right
        "bagsAfterLeavingHome": "We need to put our bags in the car before we leave for the hill station. Recheck the sequence of steps in the checklist.",

        // Message when 'Turn of all lights at home' step is placed below Fuel/Hill/Hotel on the right
        "lightsAfterLeavingHome": "Going back home to turn the lights off will be a waste of time. Why not do it before? Recheck the sequence of steps in the checklist.",

        // Message when 'Reach the hill station' step is placed below 'Check in at the hotel' on the right
        "hillAfterReachingHotel": "How can we check in at our hotel before reaching our destination? Recheck the sequence of steps in the checklist.",

        // Message when 'Get the car refueled' step is placed below Hill/Hotel on the right
        "fuelAfterHillOrHotel": "Our car doesn't have enough fuel to reach the hill. Recheck the sequence of steps in the checklist.",

        "successPopupHeading": "Perfect!",
        "successPopupText": "For any activity, it is important to follow the right steps and in the right sequence.",
        'actionButtonText': 'Continue'
    } // End of To the Hills activity
};