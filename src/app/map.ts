export const map: any = [
    {
        id: 'dummy_flow',
        name: 'Dummy flow',
        modules: [
            {
                id: 'module_id_01',
                name: 'Module Monkey Menace, elements, algorithm',
                resources: [
                    {
                        name: 'Landing Page',
                        path: 'level-1/intro',
                        order: 0,
                        type: 'narration',
                    }, {
                        name: 'Choose Avatar',
                        path: 'level-1/choose-avatar',
                        order: 1,
                        type: 'narration',
                    }, {
                        name: 'meerkat introduces MM',
                        path: 'level-1/mascot-talking/intro_to_mm',
                        order: 2,
                        type: 'narration',
                    }, {
                        name: 'MM0_play',
                        path: 'coding/play/mm_play',
                        order: 3,
                        type: 'game',
                    }, {
                        name: 'Select game elements',
                        path: 'level-1/game-elements',
                        order: 4,
                        type: 'activity',
                    }, {
                        name: 'Summary game elements',
                        path: 'level-1/summary-game-elements',
                        order: 5,
                        type: 'narration'
                    }, {
                        name: 'Show algo',
                        path: 'level-1/mascot-talking/intro_to_algo',
                        order: 6,
                        type: 'narration'
                    }, {
                        name: 'MM0_1_Q2 (MM algorithm)',
                        path: 'level-1/drag-n-drop/mm0_1_q2',
                        order: 7,
                        type: 'activity'
                    }, {
                        name: 'Architect badge',
                        path: 'badge/architect',
                        order: 8,
                        type: 'badge'
                    }
                ]
            }
        ]
    }, {
        id: 'dummy_flow_level1',
        name: 'Dummy flow level1',
        modules: [
            {
                id: 'module_id_01',
                name: 'Module Monkey Menace, elements, algorithm',
                resources: [
                    {
                        name: 'MM_Algo_Step1',
                        path: 'algo-steps/1',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'MM1_1_Q1 (Selecting Characters)',
                        path: 'level-2/select-character',
                        order: 1,
                        type: 'activity',
                    }, {
                        name: 'Intro to Workspace',
                        path: 'learning/intro_to_workspace',
                        order: 2,
                        type: 'learning',
                    }, {
                        name: 'MM1_1_Q2 (Position Characters)',
                        path: 'level-2/position-character',
                        order: 3,
                        type: 'activity'
                    }, {
                        name: 'Intro to Coordinates',
                        path: 'learning/intro_to_coordinates',
                        order: 4,
                        type: 'learning',
                    }, {
                        name: 'MM1_Learn_Coordinates?',
                        path: 'continue/mm1_1_learn',
                        order: 6,
                        type: 'narration'
                    }
                ]
            }, {
                id: 'module_id_11',
                name: 'Module2: Learn Coordinates',
                resources: [
                    {
                        name: "Coordinates_Learning (Kate & Aareev)",
                        path: 'learning/kate_n_aareev',
                        order: 0,
                        type: 'learning'
                    }, {
                        name: "Coordinates activities or challenge",
                        path: 'fork/mm1_2_activities',
                        order: 1,
                        type: 'narration'
                    }
                ]
            }, {
                id: 'module_id_12',
                name: 'Module3: Coordinates Activities',
                resources: [
                    {
                        name: 'Coordinates activities gallery',
                        path: 'select-activity/coordinates',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Fox & Grapes_Storyline',
                        path: 'storyline/fox-grape',
                        order: 1,
                        image: './assets/images/activities/fox_and_grapes/setting_reference.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Fox & Grapes_Activity',
                        path: 'fox-grape-activity',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'Coordinates activities gallery',
                        path: 'select-activity/coordinates',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Treasure Hunt_Storyline',
                        path: 'storyline/treasure-hunt',
                        order: 3,
                        image: './assets/images/activities/treasure_hunt/bg_island.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Treasure Hunt_Activity',
                        path: 'treasure-hunt',
                        order: 4,
                        type: 'activity'
                    }, {
                        name: 'Coordinates activities gallery',
                        path: 'select-activity/coordinates',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Mars Rover_Storyline',
                        path: 'storyline/mars-rover',
                        order: 5,
                        image: './assets/images/activities/mars_rover/bg_mars.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Mars Rover_Activity',
                        path: 'mars-rover-activity',
                        order: 6,
                        type: 'activity'
                    }, {
                        name: 'Badge Coordinates - Path A',
                        path: 'badge/position_pundit_activity',
                        order: 7,
                        type: 'badge',
                        nextPage: 'algo-steps/2'
                    }
                ]
            }, {
                id: 'module_id_13',
                name: 'Module3: Coordinates Challenge',
                resources: [
                    {
                        name: 'Dragon Capture_Storyline',
                        path: 'storyline/challenge-dragon',
                        order: 0,
                        image: './assets/images/activities/dragon_capture/bg_intro1.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Dragon Capture_Activity1',
                        path: 'challenge-dragon-capture-activity',
                        order: 1,
                        type: 'challenge'
                    }, {
                        name: 'Dragon Capture_Activity2',
                        path: 'challenge-dragon-capture-activity1',
                        order: 2,
                        type: 'challenge'
                    }, {
                        name: 'Badge Coordinates - Path B',
                        path: 'badge/position_pundit_challenge',
                        order: 3,
                        type: 'badge'
                    }
                ]
            }
        ]
    },
    {
        id: 'level_id_223',
        name: 'level-2',
        modules: [
            {
                id: 'module_id_21',
                name: 'Module: throw one fruit',
                resources: [
                    {
                        name: 'MM_Algo_Step2',
                        path: 'algo-steps/2',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'mm2_1_q1 (Radio button MCQ)',
                        path: 'quiz/radio/mm2_1_q1',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Intro to blocks',
                        path: 'level-3/intro-to-blocks',
                        order: 1,
                        type: 'narration'
                    }, {
                        name: 'Blocks Box and Code Zone',
                        path: 'learning/blocks_box_and_code_zone',
                        order: 2,
                        type: 'narration'
                    }, {
                        name: 'Demo - Blocks',
                        path: 'learning/demo_blocks',
                        order: 3,
                        type: 'narration'
                    }, {
                        name: 'mm2_1_q2 (Radio button MCQ)',
                        path: 'quiz/radio/mm2_1_q2',
                        order: 4,
                        type: 'activity',
                    }, {
                        name: 'mm2_1_c1 (Move the Monkey)',
                        path: 'coding/game/mm2_1_c1',
                        order: 5,
                        type: 'game_coding'
                    }, {
                        name: 'mm2_1_q3 (Radio button MCQ)',
                        path: 'quiz/radio/mm2_1_q3',
                        order: 6,
                        type: 'activity'
                    }, {
                        name: 'mm2_1_c2 (Move fruit to Hand)',
                        path: 'coding/game/mm2_1_c2',
                        order: 7,
                        type: 'game_coding'
                    }, {
                        name: 'mm2_1_q4 (Radio button MCQ)',
                        path: 'quiz/radio/mm2_1_q4',
                        order: 8,
                        type: 'activity'
                    }, {
                        name: 'mm2_1_c3 (Drop the fruit)',
                        path: 'coding/game/mm2_1_c3',
                        order: 9,
                        type: 'game_coding'
                    }, {
                        name: 'First code badge',
                        path: 'badge/first_code',
                        order: 10,
                        type: 'badge'
                    }
                ]
            }, //End of Module 2.1
            {
                id: 'module_id_22',
                name: 'Module: throw one fruit from random position',
                resources: [
                    {
                        name: 'mm2_2_q1 (Radio button MCQ)',
                        path: 'quiz/radio/mm2_2_q1',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: "mm2_2_c1 (Monkey's left end)",
                        path: 'coding/game/mm2_2_c1',
                        order: 1,
                        type: 'game_coding'
                    }, {
                        name: "mm2_2_c2 (Monkey's right end)",
                        path: 'coding/game/mm2_2_c2',
                        order: 2,
                        type: 'game_coding'
                    }, {
                        name: 'mm2_2_c3 (Move monkey to random position)',
                        path: 'coding/game/mm2_2_c3',
                        order: 3,
                        type: 'game_coding'
                    }, {
                        name: 'Intro to relative positioning',
                        path: 'level-3/relative-positioning-learning',
                        order: 4,
                        type: 'narration'
                    }, {
                        name: 'mm2_2_q2 (input quiz for relative positioning)',
                        path: 'mm2_2_q2',
                        order: 5,
                        type: 'activity'
                    }, {
                        name: 'mm2_2_c4 (Throw fruit from random position)',
                        path: 'coding/game/mm2_2_c4',
                        order: 6,
                        type: 'game_coding'
                    }, {
                        name: 'relative positioning badge',
                        path: 'badge/relative_positioning',
                        order: 7,
                        type: 'badge'
                    }, {
                        name: 'MM2_Learn_Blocks?',
                        path: 'continue/mm2_2_learn',
                        order: 8,
                        type: 'narration'
                    }
                ]
            }, // End of Module 2.2
            {
                id: 'module_id_23',
                name: 'Module2: Learn Sequencing',
                resources: [
                    {
                        name: 'Sequencing_Learning (BODMAS)',
                        path: 'learning/sequencing_learning',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: "Sequencing activities or challenge",
                        path: 'fork/mm2_3_activities',
                        order: 1,
                        type: 'narration'
                    }
                ]
            }, // End of Module 2.3
            {
                id: 'module_id_24',
                name: 'Module: Sequencing activities',
                resources: [
                    {
                        name: 'Sequencing activities gallery - to be added',
                        path: 'select-activity/sequencing',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'To the hills storyline',
                        path: 'to-the-hills-storyline',
                        order: 1,
                        image: './assets/images/activities/to_the_hills/bg_storyline.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'To the hills activity',
                        path: 'drag-n-drop/to_the_hills_q1',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'Sequencing activities gallery - to be added',
                        path: 'select-activity/sequencing',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Venus flytrap storyline',
                        path: 'venus-fly-trap',
                        order: 3,
                        image: './assets/images/activities/venus_flytrap/venus-fly_bg-class.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Venus flytrap coding',
                        path: 'coding/game/venus_flytrap_coding',
                        order: 4,
                        type: 'activity_coding'
                    }, {
                        name: 'Sequencing activities gallery - to be added',
                        path: 'select-activity/sequencing',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Magical cave storyline',
                        path: 'storyline/magical_cave',
                        order: 5,
                        image: './assets/images/activities/magical_cave/storyline.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Magical cave coding',
                        path: 'coding/game/magical_cave_coding',
                        order: 6,
                        type: 'activity_coding',
                    }, {
                        name: 'Badge Sequencing - Path A',
                        path: 'badge/sequence_path_a',
                        order: 7,
                        type: 'badge',
                        nextPage: 'quiz/radio/mm2_6_q1'
                    }
                ]
            }, // End of Module 2.4
            {
                id: 'module_id_25',
                name: 'Module: Sequencing challenge',
                resources: [
                    {
                        name: 'Landmine detonator storyline',
                        path: 'storyline/landmine_detonator_challenge',
                        order: 0,
                        image: './assets/images/activities/landmine_detonator/storyline-img1.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Code1',
                        path: 'coding/game/landmine_detonator_coding1_challenge',
                        order: 1,
                        type: 'challenge_coding'
                    }, {
                        name: 'Code2',
                        path: 'coding/game/landmine_detonator_coding2_challenge',
                        order: 2,
                        type: 'challenge_coding'
                    }, {
                        name: 'Badge Sequencing - Path B',
                        path: 'badge/sequence_path_b',
                        order: 3,
                        type: 'badge'
                    }
                ]
            }, // End of Module 2.5
            {
                id: 'module_id_26',
                name: 'Module: throw fruits forever',
                resources: [
                    {
                        name: 'mm2_6_q1 (Radio button MCQ)',
                        path: 'quiz/radio/mm2_6_q1',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'mm2_6_RepetitiveCode',
                        path: 'mm2_6_RepetitiveCode',
                        order: 1,
                        type: 'narration'
                    }, {
                        name: 'mm2_6_q2 (Radio button MCQ)',
                        path: 'quiz/radio/mm2_6_q2',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: "mm2_6_c1 (Throw 5 fruits)",
                        path: 'coding/game/mm2_6_c1',
                        order: 3,
                        type: 'game_coding'
                    }, {
                        name: "mm2_6_c2 (Throw fruits forever)",
                        path: 'coding/game/mm2_6_c2',
                        order: 4,
                        type: 'game_coding'
                    }, {
                        name: 'Badge Uncontrollable',
                        path: 'badge/hypnotizer',
                        order: 5,
                        type: 'badge'
                    }, {
                        name: "MM2_Learn_Loops?",
                        path: 'continue/mm2_6_learn',
                        order: 6,
                        type: 'narration'
                    }
                ]
            }, // End of Module 2.6
            {
                id: 'module_id_27',
                name: 'Module2: Learn Loops',
                resources: [
                    {
                        name: 'Loops_Learning (The Band) (Not ready yet)',
                        path: 'learning/loops_learning',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: "Loops activities or challenge",
                        path: 'fork/mm2_7_activities',
                        order: 1,
                        type: 'narration'
                    }
                ]
            }, // End of Module 2.7
            {
                id: 'module_id_28',
                name: 'Module: Loops activities',
                resources: [
                    {
                        name: 'Loops activities gallery - to be added',
                        path: 'select-activity/loops',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Captcha storyline',
                        path: 'storyline/captcha',
                        order: 1,
                        image: './assets/images/activities/captcha/storyline-img1.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Captcha activity pattern1',
                        path: 'captcha-activity/pattern1',
                        order: 2,
                        type: 'activity_coding'
                    }, {
                        name: 'Captcha activity pattern2',
                        path: 'captcha-activity/pattern2',
                        order: 3,
                        type: 'activity_coding'
                    }, {
                        name: 'Loops activities gallery - to be added',
                        path: 'select-activity/loops',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Disco lights storyline',
                        path: 'storyline/disco_light',
                        order: 4,
                        image: './assets/images/activities/disco_lights/bg_disco.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Disco lights coding',
                        path: 'coding/game/disco_lights_coding',
                        order: 5,
                        type: 'activity_coding'
                    }, {
                        name: 'Loops activities gallery - to be added',
                        path: 'select-activity/loops',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Naptime storyline',
                        path: 'storyline/naptime',
                        order: 6,
                        image: './assets/images/activities/naptime/storyline-img1.jpg',
                        type: 'activity-narration'
                    }, {
                        name: 'Naptime coding',
                        path: 'coding/game/naptime_coding',
                        order: 7,
                        type: 'activity_coding',
                    }, {
                        name: 'Badge Loops - Path A',
                        path: 'badge/loops_path_a',
                        order: 8,
                        type: 'badge'
                    }
                ]
            }, // End of Module 2.8
            {
                id: 'module_id_29',
                name: 'Module: Loops challenge',
                resources: [
                    {
                        name: 'Packaging milk storyline',
                        path: 'storyline/packaging_milk_challenge',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'Code1',
                        path: 'coding/game/packaging_milk_coding1_challenge',
                        order: 1,
                        type: 'challenge_coding'
                    }, {
                        name: 'Code2',
                        path: 'coding/game/packaging_milk_coding2_challenge',
                        order: 2,
                        type: 'challenge_coding'
                    }, {
                        name: 'Radio button Quiz1',
                        path: 'quiz/packaging_milk_quiz1_challenge',
                        order: 3,
                        type: 'challenge'
                    }, {
                        name: 'Radio button Quiz2',
                        path: 'quiz/packaging_milk_quiz2_challenge',
                        order: 4,
                        type: 'challenge'
                    }, {
                        name: 'Badge Loops - Path B',
                        path: 'badge/loops_path_b',
                        order: 5,
                        type: 'badge'
                    }, {
                        name: 'Thank You Page',
                        path: 'thankyou-page',
                        order: 6,
                        type:'narration'
                    }
                ]
            } // End of Module 2.9
        ]
    }, {
        id: 'level_id_323',
        name: 'level-3',
        modules: [
            {
                id: 'module_id_31',
                name: 'Module: move the cap left and right',
                resources: [
                    {
                        name: 'MM_Algo_Step3 (Not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'mm3_1_q1 (dropdown quiz)',
                        path: 'dropdown-quiz/mm3_1_q1',
                        order: 1,
                        type: 'activity'
                    }, {
                        name: 'mm3_1_c1 (Move the cap left)',
                        path: 'coding/game/mm3_1_c1',
                        order: 2,
                        type: 'coding'
                    }, {
                        name: 'mm3_1_c2 (Move the cap right)',
                        path: 'coding/game/mm3_1_c2',
                        order: 3,
                        type: 'coding'
                    }, {
                        name: 'Intro to events (Not ready yet)',
                        path: 'learning_intro_to_events',
                        order: 4,
                        type: 'narration'
                    }, {
                        name: 'mm3_1_q2 (Radio button MCQ)',
                        path: 'quiz/radio/mm3_1_q2',
                        order: 5,
                        type: 'activity'
                    }, {
                        name: 'mm3_1_q3 (Radio button MCQ)',
                        path: 'quiz/radio/mm3_1_q3',
                        order: 6,
                        type: 'activity'
                    }, {
                        name: 'mm3_1_q4 (Checkbox MCQ)',
                        path: 'checklist-quiz/mm3_1_q4',
                        order: 7,
                        type: 'activity'
                    }, {
                        name: 'Badge Puppeteer (Not ready yet)',
                        path: '',
                        order: 8,
                        type: 'badge'
                    }, {
                        name: "MM2_Learn_Events?",
                        path: 'fork/mm3_1_learn',
                        order: 9,
                        type: 'narration'
                    }
                ]
            }, //End of module 3.1
            {
                id: 'module_id_32',
                name: 'Module2: Learn Events',
                resources: [
                    {
                        name: 'Events_Learning (Christmas Cupcakes) (Not ready yet)',
                        path: 'video/events_learning',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: "Events activities or challenge",
                        path: 'fork/mm3_2_activities',
                        order: 1,
                        type: 'narration'
                    }
                ]
            }, // End of Module 3.2
            {
                id: 'module_id_33',
                name: 'Module: Events activities',
                resources: [
                    {
                        name: 'Activities gallery (not ready yet)',
                        path: '',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Identical twins storyline (not ready yet)',
                        path: '',
                        order: 1,
                        type: 'narration'
                    }, {
                        name: 'Identical twins Q1',
                        path: 'quiz/identical_twins_q1',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'Identical twins Q2',
                        path: 'quiz/identical_twins_q2',
                        order: 3,
                        type: 'activity'
                    }, {
                        name: 'Identical twins Q3',
                        path: 'quiz/identical_twins_q3',
                        order: 4,
                        type: 'activity'
                    }, {
                        name: 'Identical twins Q4',
                        path: 'quiz/identical_twins_q4',
                        order: 5,
                        type: 'activity'
                    }, {
                        name: 'Lambent app storyline (not ready yet)',
                        path: '',
                        order: 6,
                        type: 'narration'
                    }, {
                        name: 'Lambent app coding',
                        path: 'coding/game/lambent_app_coding',
                        order: 7,
                        type: 'coding'
                    }, {
                        name: 'Eclipse storyline (not ready yet)',
                        path: '',
                        order: 8,
                        type: 'narration'
                    }, {
                        name: 'Eclipse coding',
                        path: 'coding/game/eclipse_coding',
                        order: 9,
                        type: 'coding',
                    }, {
                        name: 'Badge Events - Path A (Not ready yet)',
                        path: '',
                        order: 10,
                        type: 'badge'
                    }
                ]
            }, // End of Module 3.3
            {
                id: 'module_id_34',
                name: 'Module: Events challenge',
                resources: [
                    {
                        name: 'Fire extinguisher storyline1 (not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'Code1',
                        path: 'coding/game/fire_extinguisher_coding1',
                        order: 1,
                        type: 'coding'
                    }, {
                        name: 'Fire extinguisher storyline2 (not ready yet)',
                        path: '',
                        order: 2,
                        type: 'narration'
                    }, {
                        name: 'Code2',
                        path: 'coding/game/fire_extinguisher_coding2',
                        order: 3,
                        type: 'coding'
                    }, {
                        name: 'Badge Events - Path B (Not ready yet)',
                        path: '',
                        order: 4,
                        type: 'badge'
                    }
                ]
            }, // End of Module 3.4
            {
                id: 'module_id_35',
                name: 'Module: keep the cap on Stage',
                resources: [
                    {
                        name: 'Motivation (not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'mm3_5_q1 (Fox type quiz) - to be added',
                        path: 'mm3_5_q1',
                        order: 1,
                        type: 'activity'
                    }, {
                        name: 'mm3_5_q2 (Dropdown quiz)',
                        path: 'dropdown-quiz/mm3_5_q2',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'Add condition for left limit (mm3_5_c1)',
                        path: 'coding/game/mm3_5_c1',
                        order: 3,
                        type: 'coding'
                    }, {
                        name: 'mm3_5_c2 (Add condition for right limit)',
                        path: 'coding/game/mm3_5_c2',
                        order: 4,
                        type: 'coding'
                    }, {
                        name: 'mm3_5_c3 (Test the code)',
                        path: 'coding/game/mm3_5_c3',
                        order: 5,
                        type: 'coding'
                    }, {
                        name: 'Intro to conditionals (Not ready yet)',
                        path: 'learning_intro_to_events',
                        order: 6,
                        type: 'narration'
                    }, {
                        name: 'Badge Player-controlled (Not ready yet)',
                        path: '',
                        order: 7,
                        type: 'badge'
                    }, {
                        name: "MM2_Learn_Conditionals?",
                        path: 'fork/mm3_5_learn',
                        order: 8,
                        type: 'narration'
                    }
                ]
            }, // End of module 3.5
            {
                id: 'module_id_36',
                name: 'Module2: Learn Conditionals',
                resources: [
                    {
                        name: 'Conditionals_Learning (Paragliding) (Not ready yet)',
                        path: 'video/conditionals_learning',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: "Conditionals activities or challenge",
                        path: 'fork/mm3_6_activities',
                        order: 1,
                        type: 'narration'
                    }
                ]
            }, // End of Module 3.6
            {
                id: 'module_id_37',
                name: 'Module: Conditionals activities',
                resources: [
                    {
                        name: 'Activities gallery (not ready yet)',
                        path: '',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Ride scanner storyline (not ready yet)',
                        path: '',
                        order: 1,
                        type: 'narration'
                    }, {
                        name: 'Ride scanner activity',
                        path: 'dropdown-quiz/ride_scanner_q1',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'Talking parrot storyline (not ready yet)',
                        path: '',
                        order: 3,
                        type: 'narration'
                    }, {
                        name: 'Talking parrot coding',
                        path: 'coding/game/talking_parrot_coding',
                        order: 4,
                        type: 'coding'
                    }, {
                        name: 'Seasons storyline (not ready yet)',
                        path: '',
                        order: 5,
                        type: 'narration'
                    }, {
                        name: 'Seasons coding',
                        path: 'coding/game/seasons_coding',
                        order: 6,
                        type: 'coding',
                    }, {
                        name: 'Badge Conditionals - Path A (Not ready yet)',
                        path: '',
                        order: 7,
                        type: 'badge'
                    }
                ]
            }, // End of Module 3.7
            {
                id: 'module_id_38',
                name: 'Module: Conditionals challenge',
                resources: [
                    {
                        name: 'Medicine Box storyline1 (not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'Code1',
                        path: 'coding/game/medicine_box_coding1',
                        order: 1,
                        type: 'coding'
                    }, {
                        name: 'Code2',
                        path: 'coding/game/medicine_box_coding2',
                        order: 2,
                        type: 'coding'
                    }, {
                        name: 'Quiz1',
                        path: 'dropdown-quiz/medicine_box_q1',
                        order: 3,
                        type: 'activity'
                    }, {
                        name: 'Quiz2',
                        path: 'dropdown-quiz/medicine_box_q2',
                        order: 4,
                        type: 'activity'
                    }, {
                        name: 'Badge Conditionals - Path B (Not ready yet)',
                        path: '',
                        order: 5,
                        type: 'badge'
                    }
                ]
            } // End of Module 3.8
        ]
    }, // End of Level 3
    {
        id: 'level_id_423',
        name: 'level-4',
        modules: [
            {
                id: 'module_id_41',
                name: 'Module: use variable for scoring',
                resources: [
                    {
                        name: 'MM_Algo_Step4 (Not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'mm4_1_q1 (radio button MCQ)',
                        path: 'quiz/radio/mm4_1_q1',
                        order: 1,
                        type: 'activity'
                    }, {
                        name: 'mm4_1_c1 (Create variable score)',
                        path: 'coding/game/mm4_1_c1',
                        order: 2,
                        type: 'coding'
                    }, {
                        name: 'mm4_1_c2 (Add condition to update score)',
                        path: 'coding/game/mm4_1_c2',
                        order: 3,
                        type: 'coding'
                    }, {
                        name: 'mm4_1_c3 (Attach score updation)',
                        path: 'coding/game/mm4_1_c3',
                        order: 4,
                        type: 'coding'
                    }, {
                        name: 'Badge Variables (Not ready yet)',
                        path: '',
                        order: 5,
                        type: 'badge'
                    }, {
                        name: "MM2_Learn_Variables?",
                        path: 'fork/mm4_1_learn',
                        order: 6,
                        type: 'narration'
                    }
                ]
            }, //End of module 4.1
            {
                id: 'module_id_42',
                name: 'Module2: Learn Variables',
                resources: [
                    {
                        name: 'Variables_Learning (Metro Smart Card) (Not ready yet)',
                        path: 'video/variables_learning',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: "Variables activities or challenge",
                        path: 'fork/mm4_2_activities',
                        order: 1,
                        type: 'narration'
                    }
                ]
            }, // End of Module 4.2
            {
                id: 'module_id_43',
                name: 'Module: Variables activities',
                resources: [
                    {
                        name: 'Activities gallery (not ready yet)',
                        path: '',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Candy jar storyline (not ready yet)',
                        path: '',
                        order: 1,
                        type: 'narration'
                    }, {
                        name: 'Candy jar activity',
                        path: 'quiz/candy_jar_q1',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'Bear count storyline (not ready yet)',
                        path: '',
                        order: 3,
                        type: 'narration'
                    }, {
                        name: 'Bear count coding',
                        path: 'coding/game/bear_count_coding',
                        order: 4,
                        type: 'coding'
                    }, {
                        name: 'Concert tickets storyline (not ready yet)',
                        path: '',
                        order: 5,
                        type: 'narration'
                    }, {
                        name: 'Concert tickets coding',
                        path: 'coding/game/concert_tickets_coding',
                        order: 6,
                        type: 'coding',
                    }, {
                        name: 'Badge Variables - Path A (Not ready yet)',
                        path: '',
                        order: 7,
                        type: 'badge'
                    }
                ]
            }, // End of Module 4.3
            {
                id: 'module_id_44',
                name: 'Module: Variables challenge',
                resources: [
                    {
                        name: 'Air conditioner storyline1 (not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'Quiz1 (checkbox MCQ)',
                        path: 'checklist-quiz/air_conditioner_q1',
                        order: 1,
                        type: 'activity'
                    }, {
                        name: 'Quiz2 (dropdown quiz)',
                        path: 'dropdown-quiz/air_conditioner_q2',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'Quiz3 (dropdown quiz)',
                        path: 'dropdown-quiz/air_conditioner_q3',
                        order: 3,
                        type: 'activity'
                    }, {
                        name: 'Quiz4 (dropdown quiz)',
                        path: 'dropdown-quiz/air_conditioner_q4',
                        order: 3,
                        type: 'activity'
                    }, {
                        name: 'Code1',
                        path: 'coding/game/air_conditioner_coding1',
                        order: 4,
                        type: 'activity'
                    }, {
                        name: 'Badge Variables - Path B (Not ready yet)',
                        path: '',
                        order: 5,
                        type: 'badge'
                    }
                ]
            } // End of Module 4.4
        ]
    }, // End of Level 4
    {
        id: 'level_id_523',
        name: 'level-5',
        modules: [
            {
                id: 'module_id_51',
                name: 'Module: game over logic',
                resources: [
                    {
                        name: 'MM_Algo_Step5 (Not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'mm5_1_q1 (Radio button MCQ)',
                        path: 'quiz/radio/mm5_1_q1',
                        order: 1,
                        type: 'activity'
                    }, {
                        name: 'mm5_1_c1 (Create and update missed fruits variable)',
                        path: 'coding/game/mm5_1_c1',
                        order: 2,
                        type: 'coding'
                    }, {
                        name: 'mm5_1_q2 (Radio button MCQ)',
                        path: 'quiz/radio/mm5_1_q2',
                        order: 3,
                        type: 'activity'
                    }, {
                        name: 'mm5_1_c2 (Add condition for missing a fruit)',
                        path: 'coding/game/mm5_1_c2',
                        order: 4,
                        type: 'coding'
                    }, {
                        name: 'mm5_1_c3 (Attach condition to rest of the code)',
                        path: 'coding/game/mm5_1_c3',
                        order: 5,
                        type: 'coding'
                    }, {
                        name: 'Badge Finisher (Not ready yet)',
                        path: '',
                        order: 6,
                        type: 'badge'
                    }   
                ]
            }, //End of module 5.1
            {
                id: 'module_id_52',
                name: 'Module: clean and efficient code',
                resources: [
                    {
                        name: 'mm5_2_q1 (Radio button MCQ)',
                        path: 'quiz/radio/mm5_2_q1',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Demo - mutator (Not ready yet)',
                        path: '',
                        order: 1,
                        type: 'narration'
                    }, {
                        name: 'mm5_2_c1 (Replace two ifs by if-else)',
                        path: 'coding/game/mm5_2_c1',
                        order: 2,
                        type: 'coding'
                    }, {
                        name: 'mm5_2_badge (Not ready yet)',
                        path: '',
                        order: 3,
                        type: 'badge'
                    }
                ]
            }, //End of module 5.2
            {
                id: 'module_id_53',
                name: 'Module: end the game',
                resources: [
                    {
                        name: 'mm5_3_q1 (Checkbox MCQ)',
                        path: 'checklist-quiz/mm5_3_q1',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'mm5_3_c1 (Add game over BG to tray)',
                        path: 'coding/game/mm5_3_c1',
                        order: 1,
                        type: 'coding'
                    }, {
                        name: 'mm5_3_c2 (Add block to hide all characters)',
                        path: 'coding/game/mm5_3_c2',
                        order: 2,
                        type: 'coding'
                    }, {
                        name: 'mm5_3_c3 (Add condition)',
                        path: 'coding/game/mm5_3_c3',
                        order: 3,
                        type: 'coding'
                    }, {
                        name: 'mm5_3_c4 (Attach condition)',
                        path: 'coding/game/mm5_3_c4',
                        order: 4,
                        type: 'coding'
                    }, {
                        name: 'mm5_3_badge (Not ready yet)',
                        path: '',
                        order: 5,
                        type: 'badge'
                    }
                ]
            }, //End of module 5.3
        ]
    }, // End of Level 5
    {
        id: 'level_id_623',
        name: 'level-6',
        modules: [
            {
                id: 'module_id_61',
                name: 'Module: Play button',
                resources: [
                    {
                        name: 'Make the game more presentable (Not ready yet)',
                        path: '',
                        order: 0,
                        type: 'narration'
                    }, {
                        name: 'mm6_1_c1 (Add and position Play button)',
                        path: 'coding/game/mm6_1_c1',
                        order: 1,
                        type: 'coding'
                    }, {
                        name: 'mm6_1_q1 (Checkbox MCQ)',
                        path: 'checklist-quiz/mm6_1_q1',
                        order: 2,
                        type: 'activity'
                    }, {
                        name: 'mm6_1_c2 (Logic for Play)',
                        path: 'coding/game/mm6_1_c2',
                        order: 3,
                        type: 'coding'
                    }, {
                        name: 'mm6_1_badge (Not ready yet)',
                        path: '',
                        order: 4,
                        type: 'badge'
                    }
                ]
            }, //End of module 6.1
            {
                id: 'module_id_62',
                name: 'Module: Replay button',
                resources: [
                    {
                        name: 'mm6_2_q1 (Checkbox MCQ)',
                        path: 'checklist-quiz/mm6_2_q1',
                        order: 0,
                        type: 'activity'
                    }, {
                        name: 'Play and replay the same functionality (Not ready yet)',
                        path: '',
                        order: 1,
                        type: 'narration'
                    }, {
                        name: 'mm6_2_c1 (Logic for Replay)',
                        path: 'coding/game/mm6_2_c1',
                        order: 2,
                        type: 'coding'
                    }, {
                        name: 'mm6_2_badge (Not ready yet)',
                        path: '',
                        order: 3,
                        type: 'badge'
                    }
                ]
            } //End of module 6.2
        ]
    } // End of Level 6
]