export const dragonCaptureContent = {
    headerContent: {
        'activity1': 'Over centuries, many adventurers have come and gone. Their collective wisdom points to a list of locations where we may find tools to help us with our quest.',
        'activity2': 'Now that we know the 3 possible locations, let\'s quickly check where the dragon is hiding.'
    },
    inputTextHeader: {
        'activity1': [
            'Here\'s the first one. Can you point out on the map where it is? The red tree will guide you.',
            'And now the second one. This should be easier now that the compass is helping us.',
            'One last tool remains to be found.'
        ],
        'activity2': 'Tell me the directions and the number of steps to move so that I can quickly reach the flask.'
    },
    inputParaContent1: 'Change X by',
    inputParaContent2: 'Change Y by',
    mascotImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
    actionbutton: 'assets/images/move_button.png',
    BackgroundColor: '#ecd45c',
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
    coordinates: [
        {
            id: 0,
            image: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/compass.png',
            message: 'Ah! A compass! It\'ll help me find my way in this forest.',
            x: 2,
            y: -1,
            hiddenFlag: false
        },
        {
            id: 1,
            image: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/dragon_tooth.png',
            message: 'A dragon tooth - a most rare find! Let me keep it safely. I\'m sure it\'ll come in handy during my journey.',
            x: 3,
            y: 2,
            hiddenFlag: true
        },
        {
            id: 2,
            image: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/wand.png',
            message: 'A magic wand! Show me where the flask is, please!',
            x: -2,
            y: 0,
            hiddenFlag: true
        }
    ],
    xInitialValue: 0, // mascot x value
    yInitialValue: 2, // mascot y value
    correctMark: 'assets/images/done_icon.png',
    correctMarkChecklist: [false, false, false],
    mascotTopView: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_top_view.png',
    backgroundImage: [
        'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/bg_activity1.jpg',
        'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/bg_activity1_labelled.jpg',
        'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/bg_activity2.jpg',
    ],
    // gridImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/grid.png',
    dragonImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/dragon.png',
    flaskImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/flask_large.png',
    contentElementFlag: [false, true, false, true],
    errorMsg: {
        'activity1': 'That\'s not right. Try again.',
        'activity2': [
            'These inputs don\'t tell me anything about the directions and the number of steps I should take.', // when both inputs are 0
            'Please help me with the direction and the number of steps I need to take.', // when blank input has been provided or one of the input is 0 and the other one  blank
            'These inputs will move me out of the forest. I will not leave till my mission is done!', // when the mascot going beyond boundary
            'The flask isn\'t present here!', // when wrong gems has been explored
            'I have already visited this location.', // when visited the place already
            'It won\'t be wise to approach the dragon without the magic flask!' // when try to be nearer to dragon
        ]
    },
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
            y: [-2,-3]
        }
    ,
    modalSuccess: [
                {
                    'successPopupHeading': 'Excellent!',
                    'successPopupText': 'We have narrowed down our search for the flask to three locations! But we don’t know which location is THE location yet.',
                    'BackgroundColor': '#ecd45c',
                    'popupMascotImage': 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
                    'actionButtonText': 'Let\'s find out!'
                },
                {
                    'successPopupHeading': 'You did what no one else could do.',
                    'successPopupText': 'You saved the world from the dragon!',
                    'BackgroundColor': '#ecd45c',
                    'popupMascotImage': 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
                    'actionButtonText': 'Continue'
                }
    ]
};