export const dragonCaptureContent = {
    instructionBarContent: 'Over centuries, many adventurers have come and gone. Their collective wisdom points to a list of locations where we may find tools to help us with our quest.',
    inputTextHeader: [
        'Here\'s the first one. Can you point out on the map where it is? The red tree will guide you.',
        'And now the second one. This should be easier now that the compass is helping us.',
        'One last tool remains to be found.'
    ],
    mascotImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
    mascotHead: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
    BackgroundColor: '#ecd45c',
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
    ],
    dragonImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/dragon.png',
    flaskImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/flask_large.png',
    errorMsg: 'That\'s not right. Try again.',
    initialMsgPos: { 'msgLeft': '14%', 'msgTop': '60%', 'msgTailTop': '30%', 'msgTailLeft': '6%' },
    xGridCoord: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
    yGridCoord: [2, 1, 0, -1, -2, -3],
    xGridPerUnitScale: 9.08,
    yGridPerUnitScale: 15,
    xLowerLimitValue: -2,
    xHigherLimitValue: 7,
    yLowerLimitValue: -3,
    yHigherLimitValue: 2,
    successPopupHeading: 'Excellent!',
    successPopupText: 'We have narrowed down our search for the flask to three locations! But we don’t know which location is THE location yet.',
    popupMascotImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/dragon_capture/mascot_head.png',
    actionButtonText: 'Let\'s find out!'
}