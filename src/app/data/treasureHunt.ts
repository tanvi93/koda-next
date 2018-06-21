export const treasureContent = {
    header: 'Help me unearth the treasures in the order by clicking on the coordinates that are on the scroll on the left.',
    pirateHead: 'assets/images/activities/treasure_hunt/mascot_head.png',
    popupMascotImage: 'assets/images/activities/treasure_hunt/mascot_head.png',
    BackgroundColor: '#ecd45c',
    characterImage: 'assets/images/activities/treasure_hunt/pirate.png',
    backgroundImage: 'assets/images/activities/treasure_hunt/bg_island.jpg',
    treasureChest: 'assets/images/activities/treasure_hunt/treasure.png',
    treasureMap: 'assets/images/activities/treasure_hunt/bg_island.jpg',
    treasureScrollImage: 'assets/images/activities/treasure_hunt/pirate_todo_scroll.png',
    correctAnswerImage: 'assets/images/activities/treasure_hunt/tick.png',
    errorMsg: [
        'Shiver me timbers! There\'s no treasure here.',
        'Shiver me timbers! We dont want to move  outside map guideline.'
    ],
    hintData: [
        'X is across, Y to the sky!',
        'Remember X always comes before Y.'
    ],
    treasureChestVisited: 'Blimey! We\'ve already found this booty!',
    treasureChestSuccess: [
        'Aye, matey! Two more booties to go!',
        'Arrr! One more to go. Heave ho!',
        'Yo ho ho! There\'s a good lad!'
    ],
    xScaleValue: 14,
    yScaleValue: 8,
    normalizeXValue: 6,
    normalizeYValue: 4,
    totalEffectXArea: 88,
    totalEffectYArea: 83,
    taskCompletion: [false, false, false],
    initialMsgPos: { 'msgLeft': '55%', 'msgTop': '22%', 'msgTailTop': '68%', 'msgTailLeft': '85%' },
    taskList: [
        {
            id: 0,
            xCoord: 4,
            yCoord: -2,
            containerImage: 'assets/images/activities/treasure_hunt/treasure.png'
        },
        {
            id: 1,
            xCoord: 8,
            yCoord: 1,
            containerImage: 'assets/images/activities/treasure_hunt/treasure.png'
        },
        {
            id: 2,
            xCoord: -3,
            yCoord: 3,
            containerImage: 'assets/images/activities/treasure_hunt/treasure.png'
        }
    ],
    successPopupHeading: 'Thanks, matey!',
    successPopupText: 'You\'ve helped me get a lot of gold!',
    actionButtonText: 'Continue'
};
