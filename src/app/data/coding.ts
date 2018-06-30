export const blocksData: any = {
	mad_king: {
        "activity_name": "mad_king",
        "instructionBarContent": "Write any code here!",
        "mascotImage": "./../assets/images/mad_king/mascot_head.png",
        "mascotBgColor": '#ECD452',
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "rotateSprite", "flipSprite", "changeBG", "goTo", "moveBy", "moveWithSpeed", "moveTo", "characterTouch", "coordinates", "showHideAllChar", "showHideButton", "showHideAllButtons"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": `<xml>
            <block type="when_key_pressed" id="when_key_pressed" x="10" y="20"><field name="keys">32</field>
                <statement name="when_key_pressed">
                    <block type="change_look"><field name="sprite">0</field><field name="avatar">13</field>
                        <next>
                        <block type="move_by" id="move_by"><field name="sprite">0</field><field name="direction">L</field><value name="steps"><shadow type="number"><field name="n">18</field></shadow></value>
                            <next>
                            <block type="change_look"><field name="sprite">0</field><field name="avatar">7</field></block>
                            </next>
                        </block>
                        </next>
                    </block>
                </statement>
            </block>
            <block type="button_click_event" id="button_click_event" x="110" y="110"><field name="button">0</field>
                <statement name="button_clicked">
                    <block type="show_hide_button"><field name="button">0</field><field name="visibility_status">0</field>
                        <next>
                            <block type="controls_repeat_ext" x="20" y="30"><value name="TIMES"><shadow type="number"><field name="n">30</field></shadow></value>
                                <statement name="DO">
                                    <block type="change_look" id="change_look"><field name="sprite">0</field><field name="avatar">0</field>
                                        <next>
                                            <block type="change_look"><field name="sprite">0</field><field name="avatar">1</field>
                                                <next>
                                                    <block type="change_look"><field name="sprite">0</field><field name="avatar">2</field>
                                                        <next>
        <block type="change_look"><field name="sprite">0</field><field name="avatar">3</field>
        <next>
        <block type="change_look"><field name="sprite">0</field><field name="avatar">4</field>
        <next>
        <block type="change_look"><field name="sprite">0</field><field name="avatar">5</field>
        </block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></statement></block></xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "heading": "",
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Instructions",
                "src": "./../assets/images/mad_king/bg_instructions.jpg"
            },
            {
                "name": "Infinite Towers",
                "src": "./../assets/images/mad_king/bg_hills.jpg"
            },
            {
                "name": "Game_Over",
                "src": "./../assets/images/mad_king/bg_game_over.jpg"
            }
        ],
        "initialBackgroundIdx": 1,
        "currentBackgroundIdx": 1,
        "buttons": [{
            "name": "Play",
            "looks": ["./../assets/images/mad_king/play.png",
                      "./../assets/images/mad_king/replay.png"
            ],
            "buttonLookIdx": 0,
            "offset": {
                "x": 0,
                "y": 0
            },
            "width": 14,
            "height": 7,
            "initialVisibility": true
        }],
        "isParallel": true
    }, //end of  mad_king

    mm_play: {
        "activity_name": "monkey_menace_final_code",
        "instructionBarContent": "Write the complete code for Monkey Menace here!",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "mascotBgColor": '#00bae2',
        "backgrounds": [
            {
                "name": "Instructions",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_instructions.jpg"
            },
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.jpg"
            }
        ],
        "gameScript": `var score, missed_fruits;
buttonClickEventBind('0', "ICBjaGFuZ2VCRygneyJiYWNrZ3JvdW5kSW5kZXgiOiIxIn0nKTsKICB2aXNpYmxpdHlUb2dnbGVGb3JBbGwoJ3sidmlzaWJpbGl0eSI6MX0nKTsKICBidXR0b25WaXNpYmxpdHlUb2dnbGUoJ3siYnV0dG9uSW5kZXgiOiIwIiwidmlzaWJpbGl0eSI6MH0nKTsKICBzZXRWYXIoJ3Njb3JlJywgMCk7CiAgc2V0VmFyKCdtaXNzZWRfZnJ1aXRzJywgMCk7CiAgd2FpdCgneyJ3YWl0X3NlY3MiOiIxIn0nKTsKICB3aGlsZSh0cnVlKSB7ICBnb1RvKCd7ImNoaWxkSnNvbiI6W3sibmFtZSI6InJhbmRvbV9udW1iZXIiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOi0yNX0seyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOjI1fV19LHsibmFtZSI6ImdldF9jb29yZGluYXRlcyJ9LHsibmFtZSI6ImdvX3RvIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6ImFyaXRobWV0aWNfb3BlcmF0b3JzIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6ImdldF9jb29yZGluYXRlcyJ9LHsibmFtZSI6Im51bWJlciIsInZhbHVlIjo1fV19LHsibmFtZSI6ImFyaXRobWV0aWNfb3BlcmF0b3JzIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6ImdldF9jb29yZGluYXRlcyJ9LHsibmFtZSI6Im51bWJlciIsInZhbHVlIjo1fV19LHsibmFtZSI6ImNvbnRyb2xzX2lmIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6InNob3dfaGlkZSIsInZhbHVlIjpudWxsfSx7Im5hbWUiOiJtb3ZlX3dpdGhfc3BlZWQiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOjIyfSx7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6MC42NX0seyJuYW1lIjoiY29udHJvbHNfaWZfZWxzZSIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJ0b3VjaCJ9LHsibmFtZSI6InNob3dfaGlkZSIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJjaGFuZ2VfdmFyIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6Im51bWJlciIsInZhbHVlIjoxMH1dfV19LHsibmFtZSI6ImNvbnRyb2xzX2lmIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6InJlbGF0aW9uYWxfb3BlcmF0b3JzIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6Im51bWJlciIsInZhbHVlIjo1fSx7Im5hbWUiOiJnZXRfdmFyIn1dfSx7Im5hbWUiOiJzaG93X2hpZGVfdmFyIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6ImNoYW5nZV9iYWNrZ3JvdW5kIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6InNob3dfaGlkZV9hbGwiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoic2hvd19oaWRlX2J1dHRvbiIsInZhbHVlIjpudWxsfV19XX1dfV19LHsibmFtZSI6ImNoYW5nZV92YXIiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOjF9XX1dfV19LHsibmFtZSI6InJlbGF0aW9uYWxfb3BlcmF0b3JzIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6ImdldF92YXIifSx7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6NX1dfV19XX1dLCJ4IjoiZ2V0UmFuZG9tTnVtYmVyKC0yNSwgMjUpIiwieSI6ImdldENvb3JkaW5hdGUoMCwgMSkiLCJzcHJpdGVJbmRleCI6IjAifScpOwogICAgZ29UbygneyJjaGlsZEpzb24iOlt7Im5hbWUiOiJhcml0aG1ldGljX29wZXJhdG9ycyIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJnZXRfY29vcmRpbmF0ZXMifSx7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6NX1dfSx7Im5hbWUiOiJhcml0aG1ldGljX29wZXJhdG9ycyIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJnZXRfY29vcmRpbmF0ZXMifSx7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6NX1dfSx7Im5hbWUiOiJjb250cm9sc19pZiIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJzaG93X2hpZGUiLCJ2YWx1ZSI6bnVsbH0seyJuYW1lIjoibW92ZV93aXRoX3NwZWVkIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6Im51bWJlciIsInZhbHVlIjoyMn0seyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOjAuNjV9LHsibmFtZSI6ImNvbnRyb2xzX2lmX2Vsc2UiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoidG91Y2gifSx7Im5hbWUiOiJzaG93X2hpZGUiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoiY2hhbmdlX3ZhciIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6MTB9XX1dfSx7Im5hbWUiOiJjb250cm9sc19pZiIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJyZWxhdGlvbmFsX29wZXJhdG9ycyIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6NX0seyJuYW1lIjoiZ2V0X3ZhciJ9XX0seyJuYW1lIjoic2hvd19oaWRlX3ZhciIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJjaGFuZ2VfYmFja2dyb3VuZCIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJzaG93X2hpZGVfYWxsIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6InNob3dfaGlkZV9idXR0b24iLCJ2YWx1ZSI6bnVsbH1dfV19XX1dfSx7Im5hbWUiOiJjaGFuZ2VfdmFyIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6Im51bWJlciIsInZhbHVlIjoxfV19XX1dfSx7Im5hbWUiOiJyZWxhdGlvbmFsX29wZXJhdG9ycyIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJnZXRfdmFyIn0seyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOjV9XX1dfV0sIngiOiJnZXRBcml0aG1ldGljUmVzdWx0KGdldENvb3JkaW5hdGUoMCwgMCksIDUsIDEpIiwieSI6ImdldEFyaXRobWV0aWNSZXN1bHQoZ2V0Q29vcmRpbmF0ZSgwLCAxKSwgNSwgMSkiLCJzcHJpdGVJbmRleCI6IjEifScpOwogICAga29kYUlmKGdldFJlbGF0aW9uYWxSZXN1bHQoZ2V0VmFsdWVPZlZhcmlhYmxlKCdtaXNzZWRfZnJ1aXRzJyksIDUsIDIpLCAiSUNCMmFYTnBZbXhwZEhsVWIyZG5iR1VvSjNzaWMzQnlhWFJsU1c1a1pYZ2lPaUl4SWl3aWRtbHphV0pwYkdsMGVTSTZNWDBuS1RzSyIpOwogICAgbW92ZVdpdGhTcGVlZCgneyJjaGlsZEpzb24iOlt7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6MjJ9LHsibmFtZSI6Im51bWJlciIsInZhbHVlIjowLjY1fSx7Im5hbWUiOiJjb250cm9sc19pZl9lbHNlIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6InRvdWNoIn0seyJuYW1lIjoic2hvd19oaWRlIiwidmFsdWUiOm51bGwsImNoaWxkSnNvbiI6W3sibmFtZSI6ImNoYW5nZV92YXIiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOjEwfV19XX0seyJuYW1lIjoiY29udHJvbHNfaWYiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoicmVsYXRpb25hbF9vcGVyYXRvcnMiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoibnVtYmVyIiwidmFsdWUiOjV9LHsibmFtZSI6ImdldF92YXIifV19LHsibmFtZSI6InNob3dfaGlkZV92YXIiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoiY2hhbmdlX2JhY2tncm91bmQiLCJ2YWx1ZSI6bnVsbCwiY2hpbGRKc29uIjpbeyJuYW1lIjoic2hvd19oaWRlX2FsbCIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJzaG93X2hpZGVfYnV0dG9uIiwidmFsdWUiOm51bGx9XX1dfV19XX0seyJuYW1lIjoiY2hhbmdlX3ZhciIsInZhbHVlIjpudWxsLCJjaGlsZEpzb24iOlt7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6MX1dfV19XSwic3ByaXRlSW5kZXgiOiIxIiwiZGlyZWN0aW9uIjoiRCIsInNwZWVkIjoiMC42NSIsImhhc0FuaW1hdGlvbiI6dHJ1ZSwieCI6MCwieSI6MjIsImlucHV0QmxvY2siOm51bGx9Jyk7CiAgICBrb2RhSWZFbHNlKGhhc0NoYXJUb3VjaGVkKCd7InNwcml0ZTFJbmRleCI6IjEiLCJzcHJpdGUySW5kZXgiOiIyIn0nKSwgIklDQjJhWE5wWW14cGRIbFViMmRuYkdVb0ozc2ljM0J5YVhSbFNXNWtaWGdpT2lJeElpd2lkbWx6YVdKcGJHbDBlU0k2TUgwbktUc0tJQ0JqYUdGdVoyVldZWElvSjNOamIzSmxKeXdnTVRBcE93bz0iLCAiSUNCamFHRnVaMlZXWVhJb0oyMXBjM05sWkY5bWNuVnBkSE1uTENBeEtUc0siKTsKICAgIGtvZGFJZihnZXRSZWxhdGlvbmFsUmVzdWx0KGdldFZhbHVlT2ZWYXJpYWJsZSgnbWlzc2VkX2ZydWl0cycpLCA1LCAwKSwgIklDQjJZWEpwWVdKc1pVUnBjM0JzWVhsVWIyZG5iR1VvSjIxcGMzTmxaRjltY25WcGRITW5MQ0FuYUdsa1pTY3BPd29nSUdOb1lXNW5aVUpIS0NkN0ltSmhZMnRuY205MWJtUkpibVJsZUNJNklqSWlmU2NwT3dvZ0lIWnBjMmxpYkdsMGVWUnZaMmRzWlVadmNrRnNiQ2duZXlKMmFYTnBZbWxzYVhSNUlqb3dmU2NwT3dvZ0lHSjFkSFJ2YmxacGMybGliR2wwZVZSdloyZHNaU2duZXlKaWRYUjBiMjVKYm1SbGVDSTZJakVpTENKMmFYTnBZbWxzYVhSNUlqb3hmU2NwT3dvPSIpOwogIH07Cg==");

keydownEventBind('37', "ICBtb3ZlV2l0aFNwZWVkKCd7ImNoaWxkSnNvbiI6W3sibmFtZSI6Im51bWJlciIsInZhbHVlIjoyfSx7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6Mn1dLCJzcHJpdGVJbmRleCI6IjIiLCJkaXJlY3Rpb24iOiJMIiwic3BlZWQiOiIyIiwiaGFzQW5pbWF0aW9uIjp0cnVlLCJ4IjotMiwieSI6MCwiaW5wdXRCbG9jayI6bnVsbH0nKTsK");

keydownEventBind('39', "ICBtb3ZlV2l0aFNwZWVkKCd7ImNoaWxkSnNvbiI6W3sibmFtZSI6Im51bWJlciIsInZhbHVlIjoyfSx7Im5hbWUiOiJudW1iZXIiLCJ2YWx1ZSI6Mn1dLCJzcHJpdGVJbmRleCI6IjIiLCJkaXJlY3Rpb24iOiJSIiwic3BlZWQiOiIyIiwiaGFzQW5pbWF0aW9uIjp0cnVlLCJ4IjoyLCJ5IjowLCJpbnB1dEJsb2NrIjpudWxsfScpOwo=");

buttonClickEventBind('1', "ICBjaGFuZ2VCRygneyJiYWNrZ3JvdW5kSW5kZXgiOiIxIn0nKTsKICB2aXNpYmxpdHlUb2dnbGVGb3JBbGwoJ3sidmlzaWJpbGl0eSI6MX0nKTsKICBidXR0b25WaXNpYmxpdHlUb2dnbGUoJ3siYnV0dG9uSW5kZXgiOiIxIiwidmlzaWJpbGl0eSI6MH0nKTsKICBzZXRWYXIoJ3Njb3JlJywgMCk7CiAgc2V0VmFyKCdtaXNzZWRfZnJ1aXRzJywgMCk7CiAgdmFyaWFibGVEaXNwbGF5VG9nZ2xlKCdtaXNzZWRfZnJ1aXRzJywgJ3Nob3cnKTsK");
`,        
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [{
            "name": "Play",
            "looks": ["http://dqfevutdn6sxd.cloudfront.net/monkey_menace/play.png"],
            "buttonLookIdx": 0,
            "offset": {
                "x": 0,
                "y": -15
            },
            "width": 10,
            "height": 4,
            "initialVisibility": true
        }, {
                "name": "Replay",
                "looks": ["http://dqfevutdn6sxd.cloudfront.net/monkey_menace/replay.png"],
                "buttonLookIdx": 0,
                "offset": {
                    "x": 0,
                    "y": -15
                },
                "width": 10,
                "height": 4,
                "initialVisibility": false
            }]
    },

    code_mm: {
        "activity_name": "monkey_menace_final_code",
        "instructionBarContent": "Write the complete code for Monkey Menace here!",
        "mascotBgColor": '#00bae2',
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "showHideAllChar", "changeLook", "nextLook", "showHideButton", "showHideAllButtons", "changeBG", "goTo", "moveBy", "moveWithSpeed", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "ifElseBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
            }],
        "initialCode": `<xml xmlns="http://www.w3.org/1999/xhtml">
  <variables></variables>
  <block type="button_click_event" id="button_click_event" x="30" y="50">
    <field name="button">0</field>
    <statement name="button_clicked">
      <block type="change_background" id="=rYS6OOGi9WqB$X!#g0M">
        <field name="background">1</field>
        <next>
          <block type="show_hide_all" id="_Co[+:cqYYV$O01q}6CC">
            <field name="visibility_status">1</field>
            <next>
              <block type="show_hide_button" id="Qb]J~#q67,3+d#a[wK(I">
                <field name="button">0</field>
                <field name="visibility_status">0</field>
                <next>
                  <block type="controls_repeat_forever" id="1zG*wB#@LI$yU8xIvE7w">
                    <statement name="in_forever_loop">
                      <block type="go_to" id="go_to">
                        <field name="sprite">0</field>
                        <value name="input_x">
                          <shadow type="number" id="5SHlEdqlxuI/^GmO-:D~">
                            <field name="n">0</field>
                          </shadow>
                          <block type="random_number" id="random_number">
                            <value name="from">
                              <shadow type="number" id="{Md=HgGiBm.eS7WDgav*">
                                <field name="n">-25</field>
                              </shadow>
                            </value>
                            <value name="to">
                              <shadow type="number" id="MI60|xr8*Z7A1YcEr^O3">
                                <field name="n">25</field>
                              </shadow>
                            </value>
                          </block>
                        </value>
                        <value name="input_y">
                          <shadow type="number" id=";0?10t7mPk$m(J1KepuL">
                            <field name="n">0</field>
                          </shadow>
                          <block type="get_coordinates" id="get_coordinates">
                            <field name="sprite">0</field>
                            <field name="axis">1</field>
                          </block>
                        </value>
                        <next>
                          <block type="go_to" id="ij.H5_kUG[9m*!+,pAac">
                            <field name="sprite">1</field>
                            <value name="input_x">
                              <shadow type="number" id=";p(]lihwLfQFRMc|CG.~">
                                <field name="n">0</field>
                              </shadow>
                              <block type="arithmetic_operators" id="oOr.IEVLN)l(Ms=BCnMM">
                                <field name="operator">1</field>
                                <value name="input1">
                                  <shadow type="number" id="E.j^R,+E2ys2.8wAdXkZ">
                                    <field name="n">0</field>
                                  </shadow>
                                  <block type="get_coordinates" id="KoK;=#ccbb?X!.?!5j}T">
                                    <field name="sprite">0</field>
                                    <field name="axis">0</field>
                                  </block>
                                </value>
                                <value name="input2">
                                  <shadow type="number" id="sCQD#15huB(2nG%4J+0u">
                                    <field name="n">5</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <value name="input_y">
                              <shadow type="number" id="BA~a_xX,9]aylVY|ft53">
                                <field name="n">0</field>
                              </shadow>
                              <block type="arithmetic_operators" id="30sDWG)UTH;df?h|2%QR">
                                <field name="operator">1</field>
                                <value name="input1">
                                  <shadow type="number" id="E.j^R,+E2ys2.8wAdXkZ">
                                    <field name="n">0</field>
                                  </shadow>
                                  <block type="get_coordinates" id="K:Fv69JEjLSAL/zJxOGc">
                                    <field name="sprite">0</field>
                                    <field name="axis">1</field>
                                  </block>
                                </value>
                                <value name="input2">
                                  <shadow type="number" id="_jo:neC!Ku9YhE-OddLA">
                                    <field name="n">5</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="show_hide" id="uPwD8|T#9F?w56xRMy2-">
                                <field name="sprite">1</field>
                                <field name="visibility_status">1</field>
                                <next>
                                  <block type="move_with_speed" id="move_with_speed">
                                    <field name="sprite">1</field>
                                    <field name="direction">D</field>
                                    <value name="steps">
                                      <shadow type="number" id="m/Ga3F#}6:xbBGD,}$Au">
                                        <field name="n">22</field>
                                      </shadow>
                                    </value>
                                    <value name="speed">
                                      <shadow type="number" id="F^[#7}#;o{R]3h=+I_~?">
                                        <field name="n">0.65</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="when_key_pressed" id="when_key_pressed" x="360" y="50">
    <field name="keys">37</field>
    <statement name="when_key_pressed">
      <block type="move_with_speed" id="o[IMYxS)]+-fJ**:g#Hh">
        <field name="sprite">2</field>
        <field name="direction">L</field>
        <value name="steps">
          <shadow type="number" id="y%XaQsfH1e-@bW;}pit=">
            <field name="n">2</field>
          </shadow>
        </value>
        <value name="speed">
          <shadow type="number" id="^~FiD~+wjL5i/r}c9%3G">
            <field name="n">2</field>
          </shadow>
        </value>
      </block>
    </statement>
  </block>
  <block type="when_key_pressed" id="cL|Ad9_joKNu!KrKj+,s" x="380" y="144">
    <field name="keys">39</field>
    <statement name="when_key_pressed">
      <block type="move_with_speed" id="MgV%%tVE!zH)4~Az(3E]">
        <field name="sprite">2</field>
        <field name="direction">R</field>
        <value name="steps">
          <shadow type="number" id="Eop5ymLW+oO/Hg-QJ*:}">
            <field name="n">2</field>
          </shadow>
        </value>
        <value name="speed">
          <shadow type="number" id="N[ML)[a5wiibtrcmv3pA">
            <field name="n">2</field>
          </shadow>
        </value>
      </block>
    </statement>
  </block>
  <block type="button_click_event" x="30" y="450">
            <field name="button">0</field>
        <statement name="button_clicked">
            <block type="controls_repeat_forever" id = "M}eG?)KhUr?RYB=0Eoqg">
                <statement name="in_forever_loop">
                    <block type="controls_if_else" id = "controls_if_else">
                        <value name="condition">
                            <block type="touch" id = "yuly8=Zr_=5zOYxV8nEy">
                                <field name="character1">1</field>
                                    <field name="character2">2</field>
                                    </block>
                                    </value>
                                    <statement name="in_if">
                                    <block type="show_hide" id = "D8@$/pF/gY4ta-(O5[L2">
                                        <field name="sprite">1</field>
                                            <field name="visibility_status">0</field>
                                            </block>
                                            </statement>
                                            <next>
                                            <block type="controls_if" id = "fa=+OKB#e^CVxSO1i|Lo">
                                                <statement name="in_if">
                                                    <block type="change_background" id = "K6tB(:bnl~5HeTAh/B#=">
                                                        <field name="background">2</field>
                                                            <next>
                                                            <block type="show_hide_all" id = "P}G03Zu+C^RNzaeg7S(4">
                                                                <field name="visibility_status">0</field>
                                                                    <next>
                                                                    <block type="show_hide_button" id = "Y9r?ue1H,IczD$R-_=FE">
                                                                        <field name="button">1</field>
                                                                            <field name="visibility_status">1</field>
                                                                            </block>
                                                                            </next>
                                                                            </block>
                                                                            </next>
                                                                            </block>
                                                                            </statement>
                                                                            </block>
                                                                            </next>
                                                                            </block>
                                                                            </statement>
                                                                            </block>
                                                                            </statement>
                                                                            </block>
                                                                            </xml>`,
        "initialCode1": `<xml xmlns="http://www.w3.org/1999/xhtml">
          <variables></variables>
          <block type="button_click_event" id="button_click_event" x="30" y="50">
            <field name="button">0</field>
            <statement name="button_clicked">
              <block type="change_background" id="=rYS6OOGi9WqB$X!#g0M">
                <field name="background">1</field>
                <next>
                  <block type="show_hide_all" id="_Co[+:cqYYV$O01q}6CC">
                    <field name="visibility_status">1</field>
                    <next>
                      <block type="show_hide_button" id="Qb]J~#q67,3+d#a[wK(I">
                        <field name="button">0</field>
                        <field name="visibility_status">0</field>
                        <next>
                          <block type="controls_repeat_forever" id="1zG*wB#@LI$yU8xIvE7w">
                            <statement name="in_forever_loop">
                              <block type="go_to" id="go_to">
                                <field name="sprite">0</field>
                                <value name="input_x">
                                  <shadow type="number" id="5SHlEdqlxuI/^GmO-:D~">
                                    <field name="n">0</field>
                                  </shadow>
                                  <block type="random_number" id="random_number">
                                    <value name="from">
                                      <shadow type="number" id="{Md=HgGiBm.eS7WDgav*">
                                        <field name="n">-25</field>
                                      </shadow>
                                    </value>
                                    <value name="to">
                                      <shadow type="number" id="MI60|xr8*Z7A1YcEr^O3">
                                        <field name="n">25</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                                <value name="input_y">
                                  <shadow type="number" id=";0?10t7mPk$m(J1KepuL">
                                    <field name="n">0</field>
                                  </shadow>
                                  <block type="get_coordinates" id="get_coordinates">
                                    <field name="sprite">0</field>
                                    <field name="axis">1</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="go_to" id="ij.H5_kUG[9m*!+,pAac">
                                    <field name="sprite">1</field>
                                    <value name="input_x">
                                      <shadow type="number" id=";p(]lihwLfQFRMc|CG.~">
                                        <field name="n">0</field>
                                      </shadow>
                                      <block type="arithmetic_operators" id="oOr.IEVLN)l(Ms=BCnMM">
                                        <field name="operator">1</field>
                                        <value name="input1">
                                          <shadow type="number" id="E.j^R,+E2ys2.8wAdXkZ">
                                            <field name="n">0</field>
                                          </shadow>
                                          <block type="get_coordinates" id="KoK;=#ccbb?X!.?!5j}T">
                                            <field name="sprite">0</field>
                                            <field name="axis">0</field>
                                          </block>
                                        </value>
                                        <value name="input2">
                                          <shadow type="number" id="sCQD#15huB(2nG%4J+0u">
                                            <field name="n">5</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="input_y">
                                      <shadow type="number" id="BA~a_xX,9]aylVY|ft53">
                                        <field name="n">0</field>
                                      </shadow>
                                      <block type="arithmetic_operators" id="30sDWG)UTH;df?h|2%QR">
                                        <field name="operator">1</field>
                                        <value name="input1">
                                          <shadow type="number" id="E.j^R,+E2ys2.8wAdXkZ">
                                            <field name="n">0</field>
                                          </shadow>
                                          <block type="get_coordinates" id="K:Fv69JEjLSAL/zJxOGc">
                                            <field name="sprite">0</field>
                                            <field name="axis">1</field>
                                          </block>
                                        </value>
                                        <value name="input2">
                                          <shadow type="number" id="_jo:neC!Ku9YhE-OddLA">
                                            <field name="n">5</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="show_hide" id="uPwD8|T#9F?w56xRMy2-">
                                        <field name="sprite">1</field>
                                        <field name="visibility_status">1</field>
                                        <next>
                                          <block type="move_with_speed" id="move_with_speed">
                                            <field name="sprite">1</field>
                                            <field name="direction">D</field>
                                            <value name="steps">
                                              <shadow type="number" id="m/Ga3F#}6:xbBGD,}$Au">
                                                <field name="n">22</field>
                                              </shadow>
                                            </value>
                                            <value name="speed">
                                              <shadow type="number" id="F^[#7}#;o{R]3h=+I_~?">
                                                <field name="n">0.65</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="controls_if" id="controls_if">
                                                <value name="condition">
                                                  <block type="touch" id="touch">
                                                    <field name="character1">1</field>
                                                    <field name="character2">2</field>
                                                  </block>
                                                </value>
                                                <statement name="in_if">
                                                  <block type="show_hide" id="z:{YKRE{mFF6xVPo!#o0">
                                                    <field name="sprite">1</field>
                                                    <field name="visibility_status">0</field>
                                                  </block>
                                                </statement>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
          <block type="when_key_pressed" id="when_key_pressed" x="360" y="50">
            <field name="keys">37</field>
            <statement name="when_key_pressed">
              <block type="move_with_speed" id="o[IMYxS)]+-fJ**:g#Hh">
                <field name="sprite">2</field>
                <field name="direction">L</field>
                <value name="steps">
                  <shadow type="number" id="y%XaQsfH1e-@bW;}pit=">
                    <field name="n">2</field>
                  </shadow>
                </value>
                <value name="speed">
                  <shadow type="number" id="^~FiD~+wjL5i/r}c9%3G">
                    <field name="n">2</field>
                  </shadow>
                </value>
              </block>
            </statement>
          </block>
          <block type="when_key_pressed" id="cL|Ad9_joKNu!KrKj+,s" x="380" y="144">
            <field name="keys">39</field>
            <statement name="when_key_pressed">
              <block type="move_with_speed" id="MgV%%tVE!zH)4~Az(3E]">
                <field name="sprite">2</field>
                <field name="direction">R</field>
                <value name="steps">
                  <shadow type="number" id="Eop5ymLW+oO/Hg-QJ*:}">
                    <field name="n">2</field>
                  </shadow>
                </value>
                <value name="speed">
                  <shadow type="number">
                <field name="n">2</field>
            </shadow>
            </value>
            </block>
        </statement>
        </block>
        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "heading": "",
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Instructions",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_instructions.jpg"
            },
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [{
            "name": "Play",
            "looks": ["http://dqfevutdn6sxd.cloudfront.net/monkey_menace/play.png",
                "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/replay.png"
            ],
            "buttonLookIdx": 0,
            "offset": {
                "x": 0,
                "y": -15
            },
            "width": 10,
            "height": 4,
            "initialVisibility": true
        }, {
                "name": "Replay",
                "looks": ["http://dqfevutdn6sxd.cloudfront.net/monkey_menace/replay.png"],
                "buttonLookIdx": 0,
                "offset": {
                    "x": 0,
                    "y": -15
                },
                "width": 10,
                "height": 4,
                "initialVisibility": false
            }],
        "isParallel": true
    }, //end of  code_MM
    
    all_blocks: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Write any code here!",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "moveWithSpeed", "characterTouch", "coordinates", "showHideAllChar", "showHideButton", "showHideAllButtons"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "ifElseBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": `<xml xmlns="http://www.w3.org/1999/xhtml">
  <variables></variables>
  <block type="say" id="say" x="190" y="90">
    <field name="sprite">0</field>
    <field name="message">Where are you?</field>
    <next>
      <block type="show_coords" id="showCoords">
        <field name="sprite">2</field>
        <next>
          <block type="say" id="H$|6~$~AI5{^Zr!r#w1f">
            <field name="sprite">0</field>
            <field name="message">Ok</field>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,       
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "heading": "",
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game_Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.jpg"
            },
            {
                "name": "Instruction_MM",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_instructions.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [{
            "name": "Play",
            "looks": [
                        "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/play.png",
                        "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/replay.png"
            ],
            "buttonLookIdx": 0,
            "offset": {
                "x": 30,
                "y": -18
            },
            "width": 7,
            "height": 3,
            "initialVisibility": true
        }, {
                "name": "Replay",
                "looks": [
                    "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/replay.png"
                ],
                "buttonLookIdx": 0,
                "offset": {
                    "x": -30,
                    "y": -18
                },
                "width": 7,
                "height": 3,
                "initialVisibility": true
            }],
        "isParallel": true
    }, //end of  all_blocks
    
    mm2_1_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Do you see any block that can be used to make the monkey go to a new X coordinate? Drag it to the Code Zone, give it suitable values, and click Run.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "goTo", "moveBy"],
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position the background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'noBlockOnWorkspace': 'First add a block to the Code Zone to make the monkey move to a new position across the tree. Then click Run.',
        'actionButtonText': 'Continue'
    }, //end of mm2_1_c1

    mm2_1_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Just like you moved the monkey, add a block to move the fruit to monkey's hand.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "goTo", "moveBy"],
        }],
        "initialCode": '<xml><block type="go_to" id="go_to" x="60" y="100"><field name="sprite">0</field><value name="input_x"><shadow type="number"><field name="n">10</field></shadow></value><value name="input_y"><shadow type="number"><field name="n">13</field></shadow></value></block></xml>',
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of mm2_1_c2

    mm2_1_c3: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Do you see any block that can be used to make the fruit fall on the ground? Add it to your code and hit Run. Don’t change the existing blocks in your Code Zone!",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "goTo", "moveBy"],
        }],
        "initialCode": '<xml>'
            + '<block type="go_to" id="go_to" x="10" y="20">'
            + '<field name="sprite">0</field>'
            + '<value name="input_x"><shadow type="number"><field name="n">10</field></shadow></value>'
            + '<value name="input_y"><shadow type="number"><field name="n">13</field></shadow></value>'
            + '<next>'
            + '<block type="go_to">'
            + '<field name="sprite">1</field>'
            + '<value name="input_x"><shadow type="number"><field name="n">7</field></shadow></value>'
            + '<value name="input_y"><shadow type="number"><field name="n">8</field></shadow></value>'
            + '</block>'
            + '</next>'
            + '</block>'
            + '</xml>',
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        "actionButtonText": 'Continue'
    }, //end of mm2_1_c3

    mm2_2_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Let's first make the monkey throw a fruit from the left end of the Stage (such that it still remains completely visible). No need to add any new blocks. Just change the inputs to the existing blocks.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "goTo", "moveBy", "arithmeticOperator"],
        }],        
        "initialCode": `<xml><block type="go_to" id="go_to" x="10" y="20">
                        <field name="sprite">0</field>
                        <value name="input_x"><shadow type="number"><field name="n">10</field></shadow></value>
                        <value name="input_y"><shadow type="number"><field name="n">13</field></shadow></value>
                        <next>
                        <block type="go_to"><field name="sprite">1</field>
                        <value name="input_x"><shadow type="number"><field name="n">7</field></shadow></value>
                        <value name="input_y"><shadow type="number"><field name="n">8</field></shadow></value>
                        <next>
                        <block type="move_by" id="move_by"><field name="sprite">1</field>
                        <field name="direction">D</field>
                        <value name="steps"><shadow type="number"><field name="n">22</field></shadow></value>
                        </block></next></block></next></block>
                        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of mm2_2_c1

    mm2_2_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Similarly, now change your code to make the monkey throw the fruit from the right end of the Stage. Don't add any new blocks!",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "goTo", "moveBy", "arithmeticOperator"],
        }],
        "initialCode": "<xml>"
            + "<block type='go_to' id='go_to' x='10' y='20'>"
            + "<field name='sprite'>0</field>"
            + "<value name='input_x'><shadow type='number'><field name='n'>-31</field></shadow></value><value name='input_y'><shadow type='number'><field name='n'>13</field></shadow></value>"
            + "<next>"
            + "<block type='go_to'><field name='sprite'>1</field>"
            + "<value name='input_x'><shadow type='number'><field name='n'>-34</field></shadow></value><value name='input_y'><shadow type='number'><field name='n'>8</field></shadow></value>"
            + "<next>"
            + "<block type='move_by' id='move_by'><field name='sprite'>1</field>"
            + "<field name='direction'>D</field><value name='steps'><shadow type='number'><field name='n'>22</field></shadow></value>"
            + "</block></next></block></next></block>"
            + "</xml>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of mm2_2_c2

    mm2_2_c3: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Look for a block that randomly picks a different x-coordinate for the monkey to move to every time. Drag it to the Code Zone.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "goTo", "moveBy", "arithmeticOperator", "randomNumber"],
        }],
        "initialCode": "<xml>"
            + "<block type='go_to' id='go_to' x='10' y='20'>"
            + "<field name='sprite'>0</field>"
            + "<value name='input_x'><shadow type='number'><field name='n'>30</field></shadow></value><value name='input_y'><shadow type='number'><field name='n'>13</field></shadow></value>"
            + "<next>"
            + "<block type='go_to'><field name='sprite'>1</field>"
            + "<value name='input_x'><shadow type='number'><field name='n'>27</field></shadow></value><value name='input_y'><shadow type='number'><field name='n'>8</field></shadow></value>"
            + "<next>"
            + "<block type='move_by' id='move_by'><field name='sprite'>1</field>"
            + "<field name='direction'>D</field><value name='steps'><shadow type='number'><field name='n'>22</field></shadow></value>"
            + "</block></next></block></next></block>"
            + "</xml>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of mm2_2_c3

    mm2_2_c4: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Now use this logic to move the fruit back to monkey's hand irrespective of the monkey's position.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "goTo", "moveBy", "arithmeticOperator", "randomNumber"],
        }],
        "initialCode": `<xml>
                        <block type="go_to" id="go_to" x="10" y="20"><field name="sprite">0</field>
                        <value name="input_x"><shadow type="number"><field name="n">0</field></shadow>
                        <block type="random_number" id="random_number">
                        <value name="from"><shadow type="number"><field name="n">-31</field></shadow></value>
                        <value name="to"><shadow type="number"><field name="n">30</field></shadow></value>
                        </block></value>
                        <value name="input_y"><shadow type="number"><field name="n">13</field></shadow></value>
                        <next>
                        <block type="go_to"><field name="sprite">1</field>
                        <value name="input_x"><shadow type="number"><field name="n">27</field></shadow></value>
                        <value name="input_y"><shadow type="number"><field name="n">8</field></shadow></value>
                        <next>
                        <block type="move_by" id="move_by"><field name="sprite">1</field>
                        <field name="direction">D</field>
                        <value name="steps"><shadow type="number"><field name="n">22</field></shadow></value>
                        </block></next></block></next></block>
                        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of mm2_2_c4

    venus_flytrap_coding: {
        "activity_name": "venus_flytrap",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "For my science project, I am making an animation to show this process of how a carnivorous plant gobbles up an insect. Help me write the code for it.",
        "mascotImage": "./../assets/images/activities/venus_flytrap/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "arithmeticOperator", "randomNumber", "wait"],
        }],
        "initialCode": ``,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/venus_flytrap/Venus flytrap.gif"
        }, {
            "name": "hint",
            "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/venus_flytrap/venus_hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/venus_flytrap/venus_hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/venus_flytrap/venus_hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "assets/images/activities/venus_flytrap/venus_hint1.png"
        }],
        "backgrounds": [
            {
                "name": "bg_greenery",
                "src": "./../assets/images/activities/venus_flytrap/bg.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        // "noBlockOnWorkspace": "You need to add a block that makes the insect fly and sit on the open leaf of the plant.",
        'actionButtonText': 'Continue'
    }, //end of venus_flytrap_coding

    magical_cave_coding: {
        "activity_name": "magical_cave",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": `Here’s a short code to make me reach the lamp and say the magical words "Petros Mobilios!" so that the rock moves aside to release the genie. But nothing seems to be going according to plan! Can you check my code and fix it?`,
        "mascotImage": "./../assets/images/activities/magical_cave/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "arithmeticOperator", "randomNumber", "wait"],
        }],
        "initialCode": `<xml>
                        <block type="say" id="say" x="10" y="20">
                        <field name="sprite">0</field>
                        <field name="message">Petros!</field>
                        <next>
                        <block type="move_to" id="move_to">
                        <field name="sprite">0</field>
                        <value name="input_x"><shadow type="number"><field name="n">-27</field></shadow></value>
                        <value name="input_y"><shadow type="number"><field name="n">8</field></shadow></value>
                        <next>
                        <block type="move_by" id="move_by">
                        <field name="sprite">1</field>
                        <field name="direction">R</field><value name="steps">
                        <shadow type="number"><field name="n">5</field></shadow></value>
                        <next>
                        <block type="say">
                        <field name="sprite">1</field>
                        <field name="message">Thank you!</field>
                        </block></next></block></next></block></next></block>
                        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/magical_cave/Magical Cave.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/magical_cave/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/magical_cave/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/magical_cave/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "assets/images/activities/magical_cave/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "bg_cave",
                "src": "./../assets/images/activities/magical_cave/bg.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of magical_cave_coding
    
    landmine_detonator_coding1_challenge: {
        "activity_name": "landmine_detonator",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "We have coded for the drone to scan for the mine. Now help it reach the mine as seen in the preview. Once it reaches the mine, it should drop a detonator and move back up. The mine then gets detonated with an explosion.",
        "mascot": '#ECD452',
        "mascotImage": "./../assets/images/activities/landmine_detonator/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "randomNumber", "arithmeticOperator", "wait"],
        }],
        "initialCode": 
        `<xml>
        <block type="move_by" id = "move_by" x="10" y="20">
        <field name="sprite">0</field>
        <field name="direction">R</field>
        <value name="steps"><shadow type="number"><field name="n">50</field></shadow></value>
        <next>
        <block type="move_by">
        <field name="sprite">0</field>
        <field name="direction">L</field>
        <value name="steps"><shadow type="number"><field name="n">50</field></shadow></value>
        </block></next></block>
        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": ["Drone hovers over the minefield and scans it.", "Drone moves to the landmine and places a detonator on it.", "Drone moves up to a safe distance from the landmine.", "The landmine is detonated."]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/landmine_detonator/Landmine_1.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/landmine_detonator/landmine1/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/landmine_detonator/landmine1/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/landmine_detonator/landmine1/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "assets/images/activities/landmine_detonator/landmine1/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "Minefield",
                "src": "./../assets/images/activities/landmine_detonator/bg_minefield.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        "actionButtonText": 'Continue'
    }, //end of landmine_detonator_coding1
    
    landmine_detonator_coding2_challenge: {
        "activity_name": "landmine_detonator",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "Add code to make the landmine appear at a different random location in the dummy minefield each time you run the code. Then make sure that your code for the drone is still able to detonate the mine irrespective of where the landmine is.",
        "mascotImage": "./../assets/images/activities/landmine_detonator/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "randomNumber", "arithmeticOperator", "wait"],
        }],
        "initialCode": `<xml>
  <block type="move_by" id="move_by" x="0" y="0">
    <field name="sprite">0</field>
    <field name="direction">R</field>
    <value name="steps">
      <shadow type="number">
        <field name="n">50</field>
      </shadow>
    </value>
    <next>
      <block type="move_by">
        <field name="sprite">0</field>
        <field name="direction">L</field>
        <value name="steps">
          <shadow type="number">
            <field name="n">50</field>
          </shadow>
        </value>
        <next>
          <block type="move_to">
            <field name="sprite">0</field>
            <value name="input_x">
              <shadow type="number">
                <field name="n">9</field>
              </shadow>
            </value>
            <value name="input_y">
              <shadow type="number">
                <field name="n">0</field>
              </shadow>
            </value>
            <next>
              <block type="go_to">
                <field name="sprite">2</field>
                <value name="input_x">
                  <shadow type="number">
                    <field name="n">9</field>
                  </shadow>
                </value>
                <value name="input_y">
                  <shadow type="number">
                    <field name="n">-11</field>
                  </shadow>
                </value>
                <next>
                  <block type="show_hide">
                    <field name="sprite">2</field>
                    <field name="visibility_status">1</field>
                    <next>
                      <block type="change_look">
                        <field name="sprite">0</field>
                        <field name="avatar">1</field>
                        <next>
                          <block type="move_by">
                            <field name="sprite">0</field>
                            <field name="direction">U</field>
                            <value name="steps">
                              <shadow type="number">
                                <field name="n">11</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="wait">
                                <field name="wait_time">1</field>
                                <next>
                                  <block type="go_to">
                                    <field name="sprite">3</field>
                                    <value name="input_x">
                                      <shadow type="number">
                                        <field name="n">9</field>
                                      </shadow>
                                    </value>
                                    <value name="input_y">
                                      <shadow type="number">
                                        <field name="n">-11</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="show_hide">
                                        <field name="sprite">3</field>
                                        <field name="visibility_status">1</field>
                                        <next>
                                          <block type="show_hide">
                                            <field name="sprite">2</field>
                                            <field name="visibility_status">0</field>
                                            <next>
                                              <block type="show_hide">
                                                <field name="sprite">1</field>
                                                <field name="visibility_status">0</field>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
                       </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": ["Drone hovers over the minefield and scans it.", "Drone moves to the landmine and places a detonator on it.", "Drone moves up to a safe distance from the landmine.", "The landmine is detonated."]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/landmine_detonator/Landmine_2.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/landmine_detonator/landmine2/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/landmine_detonator/landmine2/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/landmine_detonator/landmine2/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "assets/images/activities/landmine_detonator/landmine2/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "bg_minefield",
                "src": "./../assets/images/activities/landmine_detonator/bg_minefield.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        "actionButtonText": 'Continue'
    }, //end of landmine_detonator_coding2
    
    mm2_6_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Here's your Monkey Menace code for throwing one fruit from a random position. Use your new knowledge to make the monkey throw 5 fruits from 5 random positions.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showHideChar", "wait", "moveTo", "changeLook", "showCoordinates", "coordinates", "goTo", "moveBy", "arithmeticOperator", "randomNumber", "repeat"],
        }],
        "initialCode": `<xml>
                        <block type="go_to" id="go_to" x="50" y="120">
                        <field name="sprite">0</field>
                        <value name="input_x"><shadow type="number"><field name="n">0</field></shadow>
                        <block type="random_number" id="random_number">
                        <value name="from"><shadow type="number"><field name="n">-31</field></shadow></value>
                        <value name="to"><shadow type="number"><field name="n">30</field></shadow></value>
                        </block></value>
                        <value name="input_y"><shadow type="number"><field name="n">13</field></shadow>
                        </value><next><block type="go_to"><field name="sprite">1</field>
                        <value name="input_x"><shadow type="number"><field name="n">0</field></shadow>
                        <block type="arithmetic_operators"><field name="operator">1</field>
                        <value name="input1"><shadow type="number"><field name="n">0</field></shadow>
                        <block type="get_coordinates" id="get_coordinates">
                        <field name="sprite">0</field>
                        <field name="axis">0</field>
                        </block></value>
                        <value name="input2"><shadow type="number"><field name="n">3</field></shadow></value>
                        </block></value>
                        <value name="input_y"><shadow type="number"><field name="n">8</field></shadow>
                        <block type="arithmetic_operators"><field name="operator">1</field>
                        <value name="input1"><shadow type="number"><field name="n">0</field></shadow>
                        <block type="get_coordinates"><field name="sprite">0</field>
                        <field name="axis">1</field>
                        </block></value>
                        <value name="input2"><shadow type="number"><field name="n">5</field></shadow></value>
                        </block></value>
                        <next>
                        <block type="move_by" id="move_by">
                        <field name="sprite">1</field>
                        <field name="direction">D</field>
                        <value name="steps"><shadow type="number"><field name="n">22</field></shadow></value>
                        </block></next></block></next></block>
                        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of mm2_6_c1

    mm2_6_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Try replacing <img src='assets/images/block_images/repeat_n_times_block.png' style='height: 12px!important'> with something that can be used to throw fruits forever.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showHideChar", "wait", "moveTo", "changeLook", "showCoordinates", "coordinates", "goTo", "moveBy", "arithmeticOperator", "randomNumber", "repeat", "repeatForever"],
        }],
        "initialCode": `<xml><block type="controls_repeat_ext" id="repeat_n_times" x="10" y="20"><value name="TIMES"><shadow type="number"><field name="n">5</field></shadow></value><statement name="DO">
                            <block type="go_to" id="go_to">
                                <field name="sprite">0</field>
                                <value name="input_x"><shadow type="number"><field name="n">0</field></shadow>
                                    <block type="random_number" id="random_number">
                                        <value name="from"><shadow type="number"><field name="n">-31</field></shadow></value>
                                        <value name="to"><shadow type="number"><field name="n">30</field></shadow></value>
                                    </block>
                                </value>
                                <value name="input_y"><shadow type="number"><field name="n">13</field></shadow>
                                </value>
                                <next>
                                <block type="go_to" id="go_to">
                                    <field name="sprite">1</field>
                                    <value name="input_x"><shadow type="number"><field name="n">0</field></shadow>
                                        <block type="arithmetic_operators">
                                            <field name="operator">1</field>
                                            <value name="input1"><shadow type="number"><field name="n">0</field></shadow>
                                                <block type="get_coordinates" id="get_coordinates">
                                                    <field name="sprite">0</field>
                                                    <field name="axis">0</field>
                                                </block>
                                            </value>
                                            <value name="input2"><shadow type="number"><field name="n">3</field></shadow>
                                            </value>
                                        </block>
                                    </value>
                                    <value name="input_y"><shadow type="number"><field name="n">8</field></shadow>
                                        <block type="arithmetic_operators">
                                            <field name="operator">1</field>
                                            <value name="input1"><shadow type="number"><field name="n">0</field></shadow>
                                                <block type="get_coordinates">
                                                    <field name="sprite">0</field>
                                                    <field name="axis">1</field>
                                                </block>
                                            </value>
                                            <value name="input2"><shadow type="number"><field name="n">5</field></shadow>
                                            </value>
                                        </block>
                                    </value>
                                    <next>
                                    <block type="move_by" id="move_by">
                                        <field name="sprite">1</field>
                                        <field name="direction">D</field>
                                        <value name="steps"><shadow type="number"><field name="n">22</field></shadow></value>
                                        </block></next></block></next></block></statement></block>
                                        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "activeIndex": 1,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "buttons": [],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        'actionButtonText': 'Continue'
    }, //end of mm2_6_c2
    
    disco_lights_coding: {
        "activity_name": "disco_lights",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "Could you help me code a light just like the disco light I saw at the party? Here's some code to get you started with.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook","repeat" , "repeatForever", "randomNumber", "arithmeticOperator", "wait"],
        }],
        "initialCode": `<xml>
                        <block type="controls_repeat_ext" id="repeat_n_times" x="10" y="20">
                        <value name="TIMES"><shadow type="number"><field name="n">3</field></shadow></value>
                        <statement name="DO">
                        <block type="wait" id="wait"><field name="wait_time">0.5</field>
                        <next>
                        <block type="change_look" id="change_look">
                        <field name="sprite">0</field>
                        <field name="avatar">0</field>
                        </block></next></block></statement></block>
                        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/disco_lights_preview.gif"
            }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "Club",
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/disco_lights/bg_coding.png"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of disco_lights_coding
    
    naptime_coding: {
        "activity_name": "naptime",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "I have written some code to make this job easier. But it doesn't seem to work. Grace and Roxy need 2 pats each. Oreo needs 3 pats.",
        "mascotImage": "./../assets/images/activities/naptime/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "repeat", "repeatForever", "randomNumber", "arithmeticOperator", "wait"],
        }],
        "initialCode": `<xml>
                        <block type="go_to" id="go_to" x="70" y="70">
                        <field name="sprite">3</field>
                        <value name="input_x">
                        <shadow type="number">
                        <field name="n">-29</field>
                        </shadow>
                        </value>
                        <value name="input_y">
                        <shadow type="number">
                        <field name="n">19</field>
                        </shadow>
                        </value>
                        <next>
                        <block type="move_by" id="move_by">
                        <field name="sprite">3</field>
                        <field name="direction">D</field>
                        <value name="steps">
                        <shadow type="number">
                        <field name="n">3</field>
                        </shadow>
                        </value>
                        <next>
                        <block type="move_by">
                        <field name="sprite">3</field>
                        <field name="direction">U</field>
                        <value name="steps">
                        <shadow type="number">
                        <field name="n">3</field>
                        </shadow>
                        </value>
                        </block>
                        </next>
                        </block>
                        </next>
                        </block>
                        </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/naptime/Naptime.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/naptime/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/naptime/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/naptime/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "assets/images/activities/naptime/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "Living Room",
                "src": "./../assets/images/activities/naptime/bg_coding.png"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of naptime_coding
    
     packaging_milk_coding1_challenge: {
         "activity_name": "packaging_milk",
         "mascotBgColor": '#ECD452',
        "instructionBarContent": "We have the code for the bottle to get cleaned. But the code needs some inputs in its blocks to work fine. Check the preview if required.",
        "mascotImage": "./../assets/images/activities/packaging_milk/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "repeat", "repeatForever", "randomNumber", "arithmeticOperator", "wait"],
        }],
        "initialCode": `<xml>
                <block type="move_to" id="move_to" x="10" y="20">
                    <field name="sprite">0</field>
                    <value name="input_x"><shadow type="number"><field name="n">0</field></shadow></value>
                    <value name="input_y"><shadow type="number"><field name="n">0</field></shadow>
                        <block type="get_coordinates" id="get_coordinates">
                            <field name="sprite">0</field>
                            <field name="axis">1</field>
                        </block>
                    </value>
                <next>
                <block type="controls_repeat_ext" id="controls_repeat_ext">
                    <value name="TIMES"><shadow type="number"><field name="n">0</field></shadow></value>
                    <statement name="DO">
                      <block type="wait" id="wait">
                        <field name="wait_time">0.5</field>
                      <next>
                      <block type="next_look" id="next_look"><field name="sprite">1</field></block>
                </next></block></statement></block></next></block>
            </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/packaging_milk/Packaging _1.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/packaging_milk/packaging1/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/packaging_milk/packaging1/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/packaging_milk/packaging1/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "assets/images/activities/packaging_milk/packaging1/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "Conveyor Belt",
                "src": "./../assets/images/activities/packaging_milk/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
         "buttons": [],
         'actionButtonText': 'Continue'
    }, //end of packaging_milk_coding1
    
    packaging_milk_coding2_challenge: {
        "activity_name": "packaging_milk",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "Now that the bottle is clean, code for it to move under the labeller. The bottle needs to get labelled and then move to the milk dispensing spot.",
        "mascotImage": "./../assets/images/activities/packaging_milk/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "repeat", "repeatForever", "randomNumber", "arithmeticOperator", "wait"],
        }],
        "initialCode": `<xml>
              <block type="move_to" id="move_to" x="10" y="20">
              <field name="sprite">0</field>
              <value name="input_x"><shadow type="number"><field name="n">0</field></shadow>
              <block type="get_coordinates"><field name="sprite">1</field><field name="axis">0</field></block></value>
              <value name="input_y"><shadow type="number"><field name="n">0</field></shadow>
              <block type="get_coordinates" id="get_coordinates">
              <field name="sprite">0</field>
              <field name="axis">1</field>
              </block>
              </value>
              <next>
              <block type="controls_repeat_ext">
              <value name="TIMES"><shadow type="number"><field name="n">2</field></shadow></value>
              <statement name="DO">
              <block type="wait" id="wait"><field name="wait_time">0.5</field>
              <next>
              <block type="next_look"><field name="sprite">1</field></block>
              </next></block></statement></block></next></block>
              </xml>`,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/packaging_milk/Packaging_2.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/packaging_milk/packaging2/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/packaging_milk/packaging2/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'assets/images/activities/packaging_milk/packaging2/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "assets/images/activities/packaging_milk/packaging2/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "Conveyor Belt",
                "src": "./../assets/images/activities/packaging_milk/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        'actionButtonText': 'Continue'
    }, //end of packaging_milk_coding2

    mm3_1_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Can you find a block that can detect when the left arrow key is pressed?",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showHideChar", "showCoordinates", "coordinates", "goTo", "moveBy", "changeLook", "arithmeticOperator", "randomNumber", "repeat", "repeatForever", "moveTo", "wait", "whenKeyPressed"],
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm3_1_c1

    mm3_1_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Great! Now, make the cap move 2 steps to the right when the player presses the right arrow key.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showHideChar", "showCoordinates", "coordinates", "goTo", "moveBy", "changeLook", "arithmeticOperator", "randomNumber", "repeat", "repeatForever", "moveTo", "wait", "whenKeyPressed"],
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm3_1_c2

    lambent_app_coding: {
        "activity_name": "lambent_app",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "That's a great app Dad showed me! I think we can code an animation and show my class how the app can be useful to our school as well. Help me with the code.",
        "mascotImage": "./../assets/images/activities/lambent_app/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "repeat", "repeatForever", "randomNumber", "arithmeticOperator", "wait", "whenKeyPressed", "whenButtonClicked"],
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/lambent_app/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Lit Bedroom",
                "src": "./../assets/images/activities/lambent_app/bg_bedroom_lit.jpg"
            },
            {
                "name": "Dark Bedroom",
                "src": "./../assets/images/activities/lambent_app/bg_bedroom_dark.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of lambent_app_coding
    
    eclipse_coding: {
        "activity_name": "eclipse",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "I have coded an animation showing how solar and lunar eclipses occur. But a few bugs still remain in my code. I want it to work as it is in the preview. Can you take a look and help me fix it before the class?",
        "mascotImage": "./../assets/images/activities/eclipse/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "repeat", "repeatForever", "randomNumber", "arithmeticOperator", "wait", "whenKeyPressed", "whenButtonClicked"],
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/eclipse/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Space",
                "src": "./../assets/images/activities/eclipse/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [
            // {
            //     "name": "Solar Eclipse Button",
            //     "src": "./../assets/images/activities/eclipse/solar_eclipse_button.png",
            //     "initialOffset": {
            //         "x": -15,
            //         "y": -15
            //     },
            //     "aspect_ratio": 3.742,
            //     "width": 10
            // },
            // {
            //     "name": "Lunar Eclipse Button",
            //     "src": "./../assets/images/activities/eclipse/lunar_eclipse_button.png",
            //     "initialOffset": {
            //         "x": 15,
            //         "y": -15
            //     },
            //     "aspect_ratio": 3.734,
            //     "width": 10
            // } 
           ]
    }, //end of eclipse_coding
    
     fire_extinguisher_coding1: {
         "activity_name": "fire_extinguisher1",
         "mascotBgColor": '#ECD452',
        "instructionBarContent": "I have already coded to show how a fire extinguisher works but something seems to be going wrong. Help me correct my code. You can refer to the algorithm and preview.",
        "mascotImage": "./../assets/images/activities/fire_extinguisher/mascot_head.png",
       "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/fire_extinguisher/preview1.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "BG1",
                "src": "./../assets/images/activities/fire_extinguisher/bg_coding1.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of fire_extinguisher_coding1
    
    fire_extinguisher_coding2: {
        "mascotBgColor": '#ECD452',
        "activity_name": "fire_extinguisher2",
        "instructionBarContent": "Now code for the animation to work just like I showed you. Refer to the algorithm and preview if needed.",
        "mascotImage": "./../assets/images/activities/fire_extinguisher/mascot_head.png",
       "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/fire_extinguisher/preview2.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "BG2",
                "src": "./../assets/images/activities/fire_extinguisher/bg_coding2.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of fire_extinguisher_coding2

    mm3_5_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Look for a block that helps you in doing something only if a condition happens. Drag it to the Code Zone.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": '<xml>'
            + '<block type="when_key_pressed" id="when_key_pressed" y="100" x="100">'
            + '<field name="keys">37</field>'
            + '<statement name="when_key_pressed">'
            + '<block type="move_by" id="move_by">'
            + '<field name="sprite">2</field>'
            + '<field name="direction">L</field>'
            + '<value name="steps">'
            + '<shadow type="number">'
            + '<field name="n">2</field>'
            + '</shadow>'
            + '</value>'
            + '</block>'
            + '</statement>'
            + '</block>'
            + '</xml>',
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm3_5_c1

    mm3_5_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Similarly, add code that lets the cap move 2 steps right only if cap’s X coordinate <= 32.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm3_5_c2

    mm3_5_c3: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Now test your code to ensure that the cap never moves out of the Stage.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm3_5_c3
    
    talking_parrot_coding: {
        "activity_name": "talking_parrot",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "I have written a small piece of code to animate what my parrot should say at which position. Can you complete it so that my parrot says \"I'm on the floor\", \"I'm on the bed\", and \"Oh no! I'm on the edge!\" correctly?",
        "mascotImage": "./../assets/images/activities/talking_parrot/mascot_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/talking_parrot/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "bg_coding",
                "src": "./../assets/images/activities/talking_parrot/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of talking_parrot_coding
    
    seasons_coding: {
        "activity_name": "seasons",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "I'm trying to code for tomorrow's class and I'm stuck. Can you help me? <br> If you click on the earth's orbit, it should tell you what season it would be if the earth was in that position.",
        "mascotImage": "./../assets/images/activities/seasons/mascot_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/seasons/preview.gif"
        }, {
            "name": "hint",
            "isVisible": true,
            "content": "./../assets/images/activities/seasons/hint.jpg"
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Space",
                "src": "./../assets/images/activities/seasons/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of seasons_coding
    
     medicine_box_coding1: {
         "activity_name": "medicine_box",
         "mascotBgColor": '#ECD452',
        "instructionBarContent": "As of now the medicine box measures Grandma's health vitals. Complete the code so that Grandma can take the right medicines (by clicking Check Health).",
        "mascotImage": "./../assets/images/activities/medicine_box/mascot_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/medicine_box/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Medicine Box Display",
                "src": "./../assets/images/activities/medicine_box/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of medicine_box_coding1
    
     medicine_box_coding2: {
         "activity_name": "medicine_box",
         "mascotBgColor": '#ECD452',
        "instructionBarContent": "Grandma revisited the doctor this month and he has now given some new instructions. Make changes to the code such that this device now works as per the new instructions.",
        "mascotImage": "./../assets/images/activities/medicine_box/mascot_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/medicine_box/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Medicine Box Display",
                "src": "./../assets/images/activities/medicine_box/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of medicine_box_coding2
    
    mm4_1_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "To keep track of score, we will be using a variable. A variable is something whose value can change. Look for a way to create a variable and name it ‘Score’.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "variables": [{"name": "score", "value": 0, msg: 'Alert, Your not allowed to do that'}],
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [],
        "actionButtonText": 'Continue'
    }, //end of  mm4_1_c1

    mm4_1_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Now add a condition such that the score gets updated only if the fruit has been caught by the cap. You know how to do this. Go ahead!",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": true,
            "content": "Use <img src='./../assets/misc_images/mm4_1_c2_hint_if.png'> \n and <img src='./../assets/misc_images/mm4_1_c2_hint_captouchescap.png'>>"
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm4_1_c2

    mm4_1_c3: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Finally, attach this score updation condition at the correct place in your code and run it to check if the score gets updated correctly.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": true,
            "content": "The fruit can touch the cap only after it has fallen down."
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm4_1_c3

    bear_count_coding: {
        "activity_name": "bear_count",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "Code for this device to display the number of cub pugmarks, adult bear pugmarks and the total pugmarks.<br>The green button turns it on and the red one turns it off. Even if you switch the device off the count is not reset.",
        "mascotImage": "./../assets/images/activities/bear_count/mascot_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/bear_count/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "bg_coding",
                "src": "./../assets/images/activities/bear_count/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of bear_count_coding
    
    concert_tickets_coding: {
        "activity_name": "concert_tickets",
        "mascotBgColor": '#ECD452',
        "instructionBarContent": "I have created an app which tells whether the customer can join the party or not. This is the code below. But it seems something is wrong with the code. Can you please fix this up? My customers are waiting in queue.",
        "mascotImage": "./../assets/images/activities/concert_tickets/mascot_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/concert_tickets/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "bg_coding",
                "src": "./../assets/images/activities/concert_tickets/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of concert_tickets_coding
    
     air_conditioner_coding: {
         "activity_name": "air_conditioner",
         "mascotBgColor": '#ECD452',
        "instructionBarContent": "I now know the working of the Air Conditioner. Help me complete the code for it. This is what I have as of now.",
        "mascotImage": "./../assets/images/activities/air_conditioner/mascot_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "./../assets/images/activities/air_conditioner/preview.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "bg_coding",
                "src": "./../assets/images/activities/air_conditioner/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of air_conditioner_coding
    
    mm5_1_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "How will you keep track of missed fruits? (Pssst… remember what you did to keep track of score?)",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": true,
            "content": "Create a variable for missed fruits."
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_1_c1

    mm5_1_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Write code to update the Missed fruit variable only \"If the fruit doesn't touch the cap after it falls down\".",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": true,
            "content": "Use <img src='./../assets/misc_images/mm5_1_c2_hint_not.png'>"
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_1_c2

    mm5_1_c3: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Now let's attach this condition for updating the missed fruits at the correct place in your code. Click Run to see the result.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": true,
            "content": "Whether a fruit has been missed or not can be decided only after it has fallen down."
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_1_c3

    mm5_2_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Replace the two if blocks with an if-else block now.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_2_c1

    mm5_3_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "According to our checklist, we first need to change the background.To do that, a new background first needs to be added to the Background Tray. Go ahead and do that..",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "heading": "To show the player that the game has ended:",
            "content": [{ str: "The background can change to <img src='./../assets/misc_images/Game_over.png'>", isChecked: false }, 
                        { str: "All the characters should disappear", isChecked: false }, 
                        { str: "<img src='./../assets/misc_images/Replay.png'> should appear", isChecked: false}]
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_3_c1

    mm5_3_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Super! Now the second thing - add a block to hide all the characters from Stage.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "activeIndex": 1,
            "heading": "To show the player that the game has ended:",
                "content": [{ str: "The background can change to <img src='./../assets/misc_images/Game_over.png'>", isChecked: true}, { str: "All the characters should disappear", isChecked: false}, { str: "<img src='./../assets/misc_images/Replay.png'> should appear", isChecked: false}]
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game_Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.png"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_3_c2

    mm5_3_c3: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "We’ll take care of the Replay button just a tiny bit later.For now add the condition such that these two things happen only when 5 fruits are missed.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": true,
            "content": "Use <if then image>"
        }, {
            "name": "checklist",
            "isVisible": true,
            "heading": "To show the player that the game has ended:",
            "content": [{ str: "The background can change to <img src='./../assets/misc_images/Game_over.png'>", isChecked: true}, { str: "All the characters should disappear", isChecked: true}, { str: "<img src='./../assets/misc_images/Replay.png'> should appear", isChecked: false}]
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game_Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.png"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_3_c3

    mm5_3_c4: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Now attach this code snippet at the right place in the code.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "heading": "",
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game_Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.png"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm5_3_c4

    mm6_1_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "The instructions can be treated as part of the background since they don't move and the player doesn't interact with them. You know how to add a new background. Go ahead and add it.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "heading": "",
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game_Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.png"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": []
    }, //end of  mm6_1_c1

    mm6_1_c2: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Find a block to detect when the player clicks <PLAY image> Then add code such that the highlighted points in the checklist happen only when <PLAY image> is clicked.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": true,
            "heading": "",
            "content": [{ str: "The score and missed fruits should be set to 0.", isChecked: false}, { str: "The score and missed fruits should become visible on Stage.", isChecked: false}, { str: "The monkey, cap and fruit should show up on the Stage.", isChecked: false}, { str: "Play button should disappear from the Stage.", isChecked: false}, { str: "The background should change to the jungle background.", isChecked: false}, { str: "The monkey should start throwing fruits.", isChecked: false}]
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game_Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.jpg"
            },
            {
                "name": "Instruction_MM",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_instructions.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [{
            "name": "Play",
            "src": "./../assets/misc_images/Play.png"
        }]
    }, //end of  mm6_1_c2

    mm6_2_c1: {
        "mascotBgColor": '#00bae2',
        "activity_name": "monkey_menace",
        "instructionBarContent": "Instead of adding a new button to our game, let's simply change the look of the PLAY button to REPLAY. Add a new look by clicking on PLAY in the Button Tray.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "Game Elements",
            "colour": "#800080",
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "goTo", "moveBy", "moveTo", "characterTouch", "coordinates"],
        }, {
            "name": "Events",
            "colour": "#F69D16",
            "block_list": ["whenKeyPressed", "whenCharacterClicked", "whenMouseClicked", "whenButtonClicked"],
        }, {
            "name": "Loops",
            "colour": "#6bbd53",
            "block_list": ["repeat", "repeatForever", "repeatUntil"],
        }, {
            "name": "Conditions",
            "colour": "210",
            "block_list": ["ifBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Variables",
            "colour": "0",
            "block_list": ["createVariable"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
        }],
        "initialCode": "<some XML>",
        "icons": [{
            "name": "algo",
            "isVisible": true,
            "content": ["Select and position background and characters",
                "Make the monkey throw fruits",
                "Make the hat move when player presses the keys",
                "Increase the score if player catches a fruit",
                "End game if player misses more than five fruits"]
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/MM_With Play.gif"
        }, {
            "name": "hint",
            "isVisible": false,
            "content": ""
        }, {
            "name": "checklist",
            "isVisible": false,
            "heading": "",
            "content": []
        }],
        "backgrounds": [
            {
                "name": "Jungle",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_jungle1.jpg",
                "groundLevel": {
                    "lowerLimit": -20,
                    "upperLimit": -5
                }
            },
            {
                "name": "Game_Over",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_game_over.jpg"
            },
            {
                "name": "Instruction_MM",
                "src": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/bg_instructions.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [{
            "name": "Play",
            "src": "./../assets/misc_images/Play.png"
        }]
    }, //end of  mm6_2_c1
};