export const marsContent = {
    header: 'I\'m Mocky. Use the control panel to tell me how many steps I should move to reach the water spots.',
    mapImage: '/assets/images/activities/mars_rover/bg_mars.jpg',
    roverImage: ['/assets/images/activities/mars_rover/rover_standing.png', '/assets/images/activities/mars_rover/rover_sitting.png'],
    mascotHead: '/assets/images/activities/mars_rover/rover_head.png',
    popupMascotImage: '/assets/images/activities/mars_rover/rover_standing.png',
    waterImage: '/assets/images/activities/mars_rover/water.png',
    BackgroundColor: '#ecd45c',
    defaultTransitionTime: '0s',
    actualTransitionTime: '1s',
    inputTextHeader: 'Type the inputs for me to move and click on the MOVE button.',
    waterSourceFlag: [false, false, false],
    paraContent: ['Change Mocky\'s X coordinate by', 'Change Mocky\'s Y coordinate by'],
    contentElementFlag: [false, true, false, true],
    errorMsg: [
        'Sorry, I can\'t go beyond my boundaries!',// out of stage
        'You need to change my coordinates by a non-zero number to make me move!' //when both are 0
    ],
    waterSourceCoordinates: [
        {
            id: 0,
            top: 4,
            left: 0
        },
        {
            id: 1,
            top : 3,
            left: 9
        },
        {
            id: 2,
            top: 5,
            left: 5
        }
    ],
    xInitialValue: 4, // mars x value
    yInitialValue: 3, // mars y value
    xPerUnitValue: 9,
    yPerUnitValue: 15,
    noOfXLine: 9,
    noOfYLine: 5,
    xTotalArea: 81.8,
    yTotalArea: 76,
    xLowerLimitValue: 0,
    xHigherLimitValue: 9,
    yLowerLimitValue: 0,
    yHigherLimitValue: 5,
    initialMsgPos: { 'msgLeft': '50%', 'msgTop': '45%', 'msgTailTop': '30%', 'msgTailLeft': '7%' },
    successPopupHeading: 'Mission completed!',
    successPopupText: 'These samples will be immensely useful to the space scientists back on Earth.',
    actionButtonText: 'Continue'
 };
