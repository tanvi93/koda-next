export const dragonCaptureContent2 = {
    instructionBarContent: 'Now that we know the 3 possible locations, let\'s quickly check where the dragon is hiding.',
    question: 'Tell me the directions and the number of steps to move so that I can quickly reach the flask.',
    inputParaContent1: 'Change X by',
    inputParaContent2: 'Change Y by',
    mascotImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
    mascotHead: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
    actionbutton: 'assets/images/move_button.png',
    BackgroundColor: '#ecd45c',
    mascotBg: '#ecd45c',
    defaultTransitionTime: '0s',
    actualTransitionTime: '1s',
    gemsImage: [
        'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/to_explore.png',
        'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/explored.png'
    ],
    gemsCoordData: [
        {
            x: -2,
            y: 1,
            flag: false,
            flaskJar: false
        },
        {
            x: 5,
            y: 1,
            flag: false,
            flaskJar: false
        },
        {
            x: 6,
            y: -2,
            flag: false,
            flaskJar: true
        }
    ],
    xInitialValue: 0, // mascot x value
    yInitialValue: 2, // mascot y value
    correctMark: 'assets/images/done_icon.png',
    correctMarkChecklist: [false, false, false],
    mascotTopView: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_top_view.png',
    backgroundImage:      
        'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/bg_activity1_labelled.jpg',
    // gridImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/grid.png',
    dragonImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/dragon.png',
    flaskImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/flask_large.png',
    contentElementFlag: [false, true, false, true],
    errorMsg: [
            'These inputs don\'t tell me anything about the directions and the number of steps I should take.', // when both inputs are 0
            'Please help me with the direction and the number of steps I need to take.', // when blank input has been provided or one of the input is 0 and the other one  blank
            'These inputs will move me out of the forest. I will not leave till my mission is done!', // when the mascot going beyond boundary
            'The flask isn\'t present here!', // when wrong gems has been explored
            'I have already visited this location.', // when visited the place already
            'It won\'t be wise to approach the dragon without the magic flask!' // when try to be nearer to dragon
        ],
    initialMsgPos: { 'msgLeft': '14%', 'msgTop': '60%', 'msgTailTop': '30%', 'msgTailLeft': '6%' },
    xGridCoord: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
    yGridCoord: [2, 1, 0, -1, -2, -3],
    xGridPerUnitScale: 9.08,
    yGridPerUnitScale: 15,
    xLowerLimitValue: -2,
    xHigherLimitValue: 7,
    yLowerLimitValue: -3,
    yHigherLimitValue: 2,
    dragonProximityCoord: {
        x: [0, -1, -2],
        y: [-2, -3]
    },
    successPopupHeading: 'You did what no one else could do.',
    successPopupText: 'You saved the world from the dragon!',
    popupMascotImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
    actionButtonText: 'Continue'
};