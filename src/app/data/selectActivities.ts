export const selectActivityContent = {
    coordinates: {
        instructions: 'Complete all activities to earn your badge.',
        mascotImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
        mascotBgColor: '#ffe655',
        activities: [
            {
                id: 0,
                name: 'storyline/fox_n_grapes',
                title: 'Fox and Grape',
                activityImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/fox_and_grapes/setting_reference.jpg',
                status: {
                    lock: {
                        imageStatus: false,
                        imageData: './assets/images/lock_icon.png'
                    },
                    unlock: {
                        imageStatus: true,
                        imageData: '',
                    },
                    complete: {
                        imageStatus: false,
                        imageData: './assets/images/done_icon.png'
                    }

                }
            },
            {
                id: 1,
                name: 'storyline/treasure_hunt',
                title: 'Treasure Hunt',
                activityImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/treasure_hunt/island-bg.jpg',
                status: {
                    lock: {
                        imageStatus: true,
                        imageData: './assets/images/lock_icon.png'
                    },
                    unlock: {
                        imageStatus: false,
                        imageData: '',
                    },
                    complete: {
                        imageStatus: false,
                        imageData: './assets/images/done_icon.png'
                    }

                }
            },
            {
                id: 2,
                name: 'storyline/mars_rover',
                title: 'Mars Rover',
                activityImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/mars_rover/mars_rover_bg.png',
                status: {
                    lock: {
                        imageStatus: true,
                        imageData: './assets/images/lock_icon.png'
                    },
                    unlock: {
                        imageStatus: false,
                        imageData: '',
                    },
                    complete: {
                        imageStatus: false,
                        imageData: './assets/images/done_icon.png'
                    }

                }
            }
        ]
    },
    sequencing: {
        instructions: 'Complete all activities to earn your badge.',
        mascotImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
        mascotBgColor: '#ffe655',
        activities: [{
            id: 0,
            name: 'storyline/to-the-hills-storyline',
            title: 'To the hills',
            activityImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/to_the_hills/bg_storyline.jpg',
            status: {
                lock: {
                    imageStatus: false,
                    imageData: './assets/images/lock_icon.png'
                },
                unlock: {
                    imageStatus: true,
                    imageData: '',
                },
                complete: {
                    imageStatus: false,
                    imageData: './assets/images/done_icon.png'
                }

            }
        },
        {
            id: 1,
            name: 'venus-fly-trap',
            title: 'Venus Flytrap',
            activityImage: './assets/images/activities/venus_flytrap/venus_flytrap_bg.png',
            status: {
                lock: {
                    imageStatus: true,
                    imageData: './assets/images/lock_icon.png'
                },
                unlock: {
                    imageStatus: false,
                    imageData: '',
                },
                complete: {
                    imageStatus: false,
                    imageData: './assets/images/done_icon.png'
                }

            }
        },
        {
            id: 2,
            name: 'storyline/magical_cave',
            title: 'Magical Cave',
            activityImage: './assets/images/activities/magical_cave/bg.jpg',
            status: {
                lock: {
                    imageStatus: true,
                    imageData: './assets/images/lock_icon.png'
                },
                unlock: {
                    imageStatus: false,
                    imageData: '',
                },
                complete: {
                    imageStatus: false,
                    imageData: './assets/images/done_icon.png'
                }

            }
        }]
    },
    loops: {
        instructions: 'Complete all activities to earn your badge.',
        mascotImage: 'http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png',
        mascotBgColor: '#ffe655',
        activities: [{
            id: 0,
            name: 'storyline/captcha',
            title: 'Captcha',
            activityImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/captcha/captcha-with-pattern.png',
            status: {
                lock: {
                    imageStatus: false,
                    imageData: './assets/images/lock_icon.png'
                },
                unlock: {
                    imageStatus: true,
                    imageData: '',
                },
                complete: {
                    imageStatus: false,
                    imageData: './assets/images/done_icon.png'
                }

            }
        },
        {
            id: 1,
            name: 'storyline/disco_light',
            title: 'Disco Lights',
            activityImage: 'http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/disco_lights_bg.png',
            status: {
                lock: {
                    imageStatus: true,
                    imageData: './assets/images/lock_icon.png'
                },
                unlock: {
                    imageStatus: false,
                    imageData: '',
                },
                complete: {
                    imageStatus: false,
                    imageData: './assets/images/done_icon.png'
                }

            }
        },
        {
            id: 2,
            name: 'storyline/naptime',
            title: 'Nap Time',
            activityImage: './assets/images/activities/naptime/naptime_bg.png',
            status: {
                lock: {
                    imageStatus: true,
                    imageData: './assets/images/lock_icon.png'
                },
                unlock: {
                    imageStatus: false,
                    imageData: '',
                },
                complete: {
                    imageStatus: false,
                    imageData: './assets/images/done_icon.png'
                }

            }
        }]
    }
};

