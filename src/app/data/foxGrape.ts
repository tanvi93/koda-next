
export const foxGrapeContent = {
    headerContent: 'Help me reach the grapes by telling me exactly how many steps to take.',
    inputTextHeader: 'Type in the number of steps that I should move.',
    inputParaContent1: 'Number of steps to the right of origin',
    inputParaContent2: 'Number of steps up from origin',
    foxHead: 'assets/images/foxHead.png',
    popupMascotImage: 'assets/images/foxHead.png',
    actionbutton: 'assets/images/move_button.png',
    BackgroundColor: '#ecd45c',
    foxImage: [
        'assets/images/foxSit.png',
        'assets/images/foxStand.png',
        'assets/images/foxLookup.png',
        'assets/images/foxJump.png',
        'assets/images/foxStare.png'
    ],
    grapeImage: 'assets/images/grapes.png',
    backgroundImage: 'assets/images/foxBg1.png',
    contentElementFlag: [false, true, false, true],
    topShiftRange: ['64%', '53%', '29%', '0%'],
    initialTopShiftValue: '0%',
    initialLeftShiftValue: '0%',
    defaultTransitionTime: '0s',
    actualTransitionTime: '1s',
    finalGrapeTopShiftPos: '67%',
    initialMsgLeftValue: '14%',
    sideTailMsgTopPosition: '60%',
    sideTailMsgTailTopPosition: '30%',
    sideTailMsgTailLeftPositon: '6%',
    downTailMsgTopPosition: '45%',
    downTailMsgTailLeftPosition: '75%',
    downTailMsgTailTopPositon: '70%',
    xBoundaryCondition: 6,
    yBoundaryCondition: 3,
    errorMsg: [
        'I am already sitting at (0,0).',
        'Tell me how many steps right and up to move by.',
        'Not quite there! Try again.',
        'I can\'t move out of my territory.Try again.',
        'I need to jump up as well to reach the grapes.Try again.',
        'I need to move right as well to reach the grapes.Try again.',
        'The steps I should move by need to be positive numbers.Try again.'
    ],
    initialMsgPos: {'msgLeft': '14%', 'msgTop': '60%', 'msgTailTop': '30%', 'msgTailLeft': '6%'},
    CorrectCoordinate: {
        xValue: 4,
        yValue: 3
    },
    successPopupHeading: 'Wow, thank you!',
    successPopupText: 'These grapes are yum!',
    actionButtonText: 'Continue'
};
