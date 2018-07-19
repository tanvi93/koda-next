export const CaptchaActivityContent = {
    "pattern1": {
        "pattern": 0,
        "patternScreenImage": 'http://dqfevutdn6sxd.cloudfront.net/activities/captcha/captcha1.jpg',
        "correctSequence": 'xkxrxkxrxkxr',
        "repetitivePattern": 'xkxr',
        "repetitionTimes": '3',
        "successPopupHeading": 'Perfect!',
        "successPopupText": 'Let\'s try another one.',
        "BackgroundColor": '#ecd464',
        "popupMascotImage": 'http://dqfevutdn6sxd.cloudfront.net/activities/captcha/mascot_head.png',
        "actionButtonText": 'Continue',
        "inputValue": ['', '', ''],
        "textDisableFlag": [false, false, false]
    },
    "pattern2": {
        "pattern": 1,
        "patternScreenImage": 'http://dqfevutdn6sxd.cloudfront.net/activities/captcha/captcha2.jpg',
        "correctSequence": 'babbababba',
        "repetitivePattern": 'babba',
        "repetitionTimes": '2',
        "successPopupHeading": 'Congratulations!',
        "successPopupText": 'You have successfully logged in.',
        "BackgroundColor": '#ecd464',
        "popupMascotImage": 'http://dqfevutdn6sxd.cloudfront.net/activities/captcha/mascot_head.png',
        "actionButtonText": 'Continue',
        "inputValue": ['', '', ''],
        "textDisableFlag": [false, false, false]
    },
    instructionBarContent: 'Let\'s see if you can solve some of these captchas. You need to identify the pattern being repeated and the number of times it\'s repeated to form the whole captcha.',
    inputTextHeader: 'Fill in the fields below as per the captcha (the wavy text displayed on the computer screen) on the right.',
    inputParaContent: [
        'Type the letters in the captcha on the right',
        'Type the pattern that is repeated to form the whole captcha',
        'Number of times the pattern is repeated'
    ],
    mascotHead: 'http://dqfevutdn6sxd.cloudfront.net/activities/captcha/mascot_head.png',
    BackgroundColor: '#ecd45c',
    mascotBg: '#ecd45c',
    backgroundImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/captcha/bg_activity_screen.jpg',
    errorMsg: [
        'The captcha typed by you is incorrect. Recheck the captcha on the right and try again.', // incorrect input
        'There\'s something wrong with the repetitive pattern you identified. Try again.', // correct captcha but incorrect input
        'Carefully check the captcha and see how many times the pattern is being repeated.', // correct captcha and pattern but incorrect number of times code repeated
        'Some of your inputs are empty. Fill every field and then click DONE.' // if any input is kept blank
    ],
    question: 'Fill in the fields below as per the captcha (the wavy text displayed on the computer screen) on the right.'
}