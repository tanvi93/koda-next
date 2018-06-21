export const FormulaForRelativeContent = {
    headerContent: 'So the fruit is always at the same distance from the monkey when the monkey is holding it.',
    meerkatMascot: 'assets/images/monkey_menace/mascot_arms_folded_head.png',
    actionbutton: 'assets/images/move_button.png',
    backgroundImage: 'assets/images/monkey_menace/screen-for-formula-for-relative.png',
    errorMsg: [
        'Missing input! Choose the correct operator and enter a number to complete the formula for the fruit\'s X coordinate in terms of monkey\'s X coordinate.', // blank input for x coord
        'That doesn\'t look right. Compare the two examples given and find the constant relation between the X coordinates of the fruit and the monkey.', // incorrect X input
        'Hmm... try using monkey\'s X coordinate from the two examples in your formula. Do you get the correct X coordinate for the fruit? Recheck the operator in your formula.', // correct input but wrong dropdown for X
        'Missing input! Choose the correct operator and enter a number to complete the formula for the fruit\'s Y coordinate in terms of monkey\'s Y coordinate.', // blank input for y coord
        'That doesn\'t look right. Compare the two examples given and find the constant relation between the Y coordinates of the fruit and the monkey.', // incorrect Y input
        'Hmm... try using monkey\'s Y coordinate from the two examples in your formula. Do you get the correct Y coordinate for the fruit? Recheck the operator in your formula.', // correct input but wrong dropdown for Y
        'Good! You got the formula for fruit\'s X coordinate right! Similarly, complete the formula for fruit\'s Y coordinate in terms of monkey\'s Y coordinate.' // correct input
    ],
    quizContent: ['Fruit\'s X coordinate = Monkey\'s X coordinate', 'Fruit\'s Y coordinate = Monkey\'s Y coordinate'],
    question: 'Here are the examples again:<br>When monkey is at(0, 13), the fruit is at(-5, 8),<br>When monkey is at(15, 13), the fruit is at(10, 8).<br><br>What can you conclude from these examples?',
    "successPopupHeading": 'Excellent!',
    "successPopupText": 'Let\'s use these formulas to make the fruit appear in monkey\'s hand irrespective of where the monkey moves to.',
    "mascotImage": 'assets/images/monkey_menace/mascot_thumbs_up_head.png',
    "actionButtonText": 'Continue',
}