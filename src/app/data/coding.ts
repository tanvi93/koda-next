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
        "gameScript": `var score, missed_fruit;

{"method":"buttonClickEventBind","type":"event","params":{"buttonIndex":"0","linesOfCode":"ICB7Im1ldGhvZCI6ImNoYW5nZUJHIiwicGFyYW1zIjp7ImJhY2tncm91bmRJbmRleCI6IjEifX07CiAgeyJtZXRob2QiOiJ2aXNpYmxpdHlUb2dnbGVGb3JBbGwiLCJwYXJhbXMiOnsidmlzaWJpbGl0eSI6MX19OwogIHsibWV0aG9kIjoiYnV0dG9uVmlzaWJsaXR5VG9nZ2xlIiwicGFyYW1zIjp7ImJ1dHRvbkluZGV4IjoiMCIsInZpc2liaWxpdHkiOjB9fTsKICB7Im1ldGhvZCI6InNldFZhciIsInBhcmFtcyI6eyJuYW1lT2ZWYXJpYWJsZSI6InNjb3JlIiwidmFsdWVPZlZhcmlhYmxlIjoiMCJ9fTsKICB7Im1ldGhvZCI6InNldFZhciIsInBhcmFtcyI6eyJuYW1lT2ZWYXJpYWJsZSI6Im1pc3NlZF9mcnVpdCIsInZhbHVlT2ZWYXJpYWJsZSI6IjAifX07CiAgeyJtZXRob2QiOiJyZXBlYXRGb3JldmVyIiwicGFyYW1zIjp7ImxpbmVzT2ZDb2RlIjoiSUNCN0ltMWxkR2h2WkNJNkltZHZWRzhpTENKd1lYSmhiWE1pT25zaVkyaHBiR1JLYzI5dUlqcGJleUp1WVcxbElqb2ljbUZ1Wkc5dFgyNTFiV0psY2lJc0luWmhiSFZsSWpwdWRXeHNMQ0pqYUdsc1pFcHpiMjRpT2x0N0ltNWhiV1VpT2lKdWRXMWlaWElpTENKMllXeDFaU0k2TFRJMWZTeDdJbTVoYldVaU9pSnVkVzFpWlhJaUxDSjJZV3gxWlNJNk1qVjlYWDBzZXlKdVlXMWxJam9pWjJWMFgyTnZiM0prYVc1aGRHVnpJbjBzZXlKdVlXMWxJam9pWjI5ZmRHOGlMQ0oyWVd4MVpTSTZiblZzYkN3aVkyaHBiR1JLYzI5dUlqcGJleUp1WVcxbElqb2lZWEpwZEdodFpYUnBZMTl2Y0dWeVlYUnZjbk1pTENKMllXeDFaU0k2Ym5Wc2JDd2lZMmhwYkdSS2MyOXVJanBiZXlKdVlXMWxJam9pWjJWMFgyTnZiM0prYVc1aGRHVnpJbjBzZXlKdVlXMWxJam9pYm5WdFltVnlJaXdpZG1Gc2RXVWlPalY5WFgwc2V5SnVZVzFsSWpvaVlYSnBkR2h0WlhScFkxOXZjR1Z5WVhSdmNuTWlMQ0oyWVd4MVpTSTZiblZzYkN3aVkyaHBiR1JLYzI5dUlqcGJleUp1WVcxbElqb2laMlYwWDJOdmIzSmthVzVoZEdWekluMHNleUp1WVcxbElqb2liblZ0WW1WeUlpd2lkbUZzZFdVaU9qVjlYWDBzZXlKdVlXMWxJam9pWTI5dWRISnZiSE5mYVdZaUxDSjJZV3gxWlNJNmJuVnNiQ3dpWTJocGJHUktjMjl1SWpwYmV5SnVZVzFsSWpvaWMyaHZkMTlvYVdSbElpd2lkbUZzZFdVaU9tNTFiR3g5TEhzaWJtRnRaU0k2SW0xdmRtVmZkMmwwYUY5emNHVmxaQ0lzSW5aaGJIVmxJanB1ZFd4c0xDSmphR2xzWkVwemIyNGlPbHQ3SW01aGJXVWlPaUp1ZFcxaVpYSWlMQ0oyWVd4MVpTSTZNako5TEhzaWJtRnRaU0k2SW1OdmJuUnliMnh6WDJsbVgyVnNjMlVpTENKMllXeDFaU0k2Ym5Wc2JDd2lZMmhwYkdSS2MyOXVJanBiZXlKdVlXMWxJam9pZEc5MVkyZ2lmU3g3SW01aGJXVWlPaUp6YUc5M1gyaHBaR1VpTENKMllXeDFaU0k2Ym5Wc2JDd2lZMmhwYkdSS2MyOXVJanBiZXlKdVlXMWxJam9pWTJoaGJtZGxYM1poY2lJc0luWmhiSFZsSWpwdWRXeHNMQ0pqYUdsc1pFcHpiMjRpT2x0N0ltNWhiV1VpT2lKdWRXMWlaWElpTENKMllXeDFaU0k2TVRCOVhYMWRmU3g3SW01aGJXVWlPaUpqYjI1MGNtOXNjMTlwWmlJc0luWmhiSFZsSWpwdWRXeHNMQ0pqYUdsc1pFcHpiMjRpT2x0N0ltNWhiV1VpT2lKeVpXeGhkR2x2Ym1Gc1gyOXdaWEpoZEc5eWN5SXNJblpoYkhWbElqcHVkV3hzTENKamFHbHNaRXB6YjI0aU9sdDdJbTVoYldVaU9pSnVkVzFpWlhJaUxDSjJZV3gxWlNJNk5YMHNleUp1WVcxbElqb2laMlYwWDNaaGNpSjlYWDBzZXlKdVlXMWxJam9pYzJodmQxOW9hV1JsWDNaaGNpSXNJblpoYkhWbElqcHVkV3hzTENKamFHbHNaRXB6YjI0aU9sdDdJbTVoYldVaU9pSmphR0Z1WjJWZlltRmphMmR5YjNWdVpDSXNJblpoYkhWbElqcHVkV3hzTENKamFHbHNaRXB6YjI0aU9sdDdJbTVoYldVaU9pSnphRzkzWDJocFpHVmZZV3hzSWl3aWRtRnNkV1VpT201MWJHd3NJbU5vYVd4a1NuTnZiaUk2VzNzaWJtRnRaU0k2SW5Ob2IzZGZhR2xrWlY5aWRYUjBiMjRpTENKMllXeDFaU0k2Ym5Wc2JIMWRmVjE5WFgxZGZTeDdJbTVoYldVaU9pSmphR0Z1WjJWZmRtRnlJaXdpZG1Gc2RXVWlPbTUxYkd3c0ltTm9hV3hrU25OdmJpSTZXM3NpYm1GdFpTSTZJbTUxYldKbGNpSXNJblpoYkhWbElqb3hmVjE5WFgxZGZTeDdJbTVoYldVaU9pSnlaV3hoZEdsdmJtRnNYMjl3WlhKaGRHOXljeUlzSW5aaGJIVmxJanB1ZFd4c0xDSmphR2xzWkVwemIyNGlPbHQ3SW01aGJXVWlPaUp1ZFcxaVpYSWlMQ0oyWVd4MVpTSTZOWDBzZXlKdVlXMWxJam9pWjJWMFgzWmhjaUo5WFgxZGZWMTlYU3dpZUNJNkludGNJbTFsZEdodlpGd2lPbHdpWjJWMFVtRnVaRzl0VG5WdFltVnlYQ0lzWENKMGVYQmxYQ0k2WENKcGJuQjFkRndpTEZ3aWNHRnlZVzF6WENJNmUxd2labkp2YlZ3aU9sd2lMVEkxWENJc1hDSjBiMXdpT2x3aU1qVmNJbjE5SWl3aWVTSTZJbnRjSW0xbGRHaHZaRndpT2x3aVoyVjBRMjl2Y21ScGJtRjBaVndpTEZ3aWRIbHdaVndpT2x3aWFXNXdkWFJjSWl4Y0luQmhjbUZ0YzF3aU9udGNJbk53Y21sMFpVbHVaR1Y0WENJNlhDSXdYQ0lzWENKaGVHbHpYQ0k2TVgxOUlpd2ljM0J5YVhSbFNXNWtaWGdpT2lJd0lpd2lZbXh2WTJ0SmJtUmxlQ0k2Tm4xOU93b2dJSHNpYldWMGFHOWtJam9pWjI5VWJ5SXNJbkJoY21GdGN5STZleUpqYUdsc1pFcHpiMjRpT2x0N0ltNWhiV1VpT2lKaGNtbDBhRzFsZEdsalgyOXdaWEpoZEc5eWN5SXNJblpoYkhWbElqcHVkV3hzTENKamFHbHNaRXB6YjI0aU9sdDdJbTVoYldVaU9pSm5aWFJmWTI5dmNtUnBibUYwWlhNaWZTeDdJbTVoYldVaU9pSnVkVzFpWlhJaUxDSjJZV3gxWlNJNk5YMWRmU3g3SW01aGJXVWlPaUpoY21sMGFHMWxkR2xqWDI5d1pYSmhkRzl5Y3lJc0luWmhiSFZsSWpwdWRXeHNMQ0pqYUdsc1pFcHpiMjRpT2x0N0ltNWhiV1VpT2lKblpYUmZZMjl2Y21ScGJtRjBaWE1pZlN4N0ltNWhiV1VpT2lKdWRXMWlaWElpTENKMllXeDFaU0k2TlgxZGZTeDdJbTVoYldVaU9pSmpiMjUwY205c2MxOXBaaUlzSW5aaGJIVmxJanB1ZFd4c0xDSmphR2xzWkVwemIyNGlPbHQ3SW01aGJXVWlPaUp6YUc5M1gyaHBaR1VpTENKMllXeDFaU0k2Ym5Wc2JIMHNleUp1WVcxbElqb2liVzkyWlY5M2FYUm9YM053WldWa0lpd2lkbUZzZFdVaU9tNTFiR3dzSW1Ob2FXeGtTbk52YmlJNlczc2libUZ0WlNJNkltNTFiV0psY2lJc0luWmhiSFZsSWpveU1uMHNleUp1WVcxbElqb2lZMjl1ZEhKdmJITmZhV1pmWld4elpTSXNJblpoYkhWbElqcHVkV3hzTENKamFHbHNaRXB6YjI0aU9sdDdJbTVoYldVaU9pSjBiM1ZqYUNKOUxIc2libUZ0WlNJNkluTm9iM2RmYUdsa1pTSXNJblpoYkhWbElqcHVkV3hzTENKamFHbHNaRXB6YjI0aU9sdDdJbTVoYldVaU9pSmphR0Z1WjJWZmRtRnlJaXdpZG1Gc2RXVWlPbTUxYkd3c0ltTm9hV3hrU25OdmJpSTZXM3NpYm1GdFpTSTZJbTUxYldKbGNpSXNJblpoYkhWbElqb3hNSDFkZlYxOUxIc2libUZ0WlNJNkltTnZiblJ5YjJ4elgybG1JaXdpZG1Gc2RXVWlPbTUxYkd3c0ltTm9hV3hrU25OdmJpSTZXM3NpYm1GdFpTSTZJbkpsYkdGMGFXOXVZV3hmYjNCbGNtRjBiM0p6SWl3aWRtRnNkV1VpT201MWJHd3NJbU5vYVd4a1NuTnZiaUk2VzNzaWJtRnRaU0k2SW01MWJXSmxjaUlzSW5aaGJIVmxJam8xZlN4N0ltNWhiV1VpT2lKblpYUmZkbUZ5SW4xZGZTeDdJbTVoYldVaU9pSnphRzkzWDJocFpHVmZkbUZ5SWl3aWRtRnNkV1VpT201MWJHd3NJbU5vYVd4a1NuTnZiaUk2VzNzaWJtRnRaU0k2SW1Ob1lXNW5aVjlpWVdOclozSnZkVzVrSWl3aWRtRnNkV1VpT201MWJHd3NJbU5vYVd4a1NuTnZiaUk2VzNzaWJtRnRaU0k2SW5Ob2IzZGZhR2xrWlY5aGJHd2lMQ0oyWVd4MVpTSTZiblZzYkN3aVkyaHBiR1JLYzI5dUlqcGJleUp1WVcxbElqb2ljMmh2ZDE5b2FXUmxYMkoxZEhSdmJpSXNJblpoYkhWbElqcHVkV3hzZlYxOVhYMWRmVjE5TEhzaWJtRnRaU0k2SW1Ob1lXNW5aVjkyWVhJaUxDSjJZV3gxWlNJNmJuVnNiQ3dpWTJocGJHUktjMjl1SWpwYmV5SnVZVzFsSWpvaWJuVnRZbVZ5SWl3aWRtRnNkV1VpT2pGOVhYMWRmVjE5TEhzaWJtRnRaU0k2SW5KbGJHRjBhVzl1WVd4ZmIzQmxjbUYwYjNKeklpd2lkbUZzZFdVaU9tNTFiR3dzSW1Ob2FXeGtTbk52YmlJNlczc2libUZ0WlNJNkltNTFiV0psY2lJc0luWmhiSFZsSWpvMWZTeDdJbTVoYldVaU9pSm5aWFJmZG1GeUluMWRmVjE5WFN3aWVDSTZJbnRjSW0xbGRHaHZaRndpT2x3aVoyVjBRWEpwZEdodFpYUnBZMUpsYzNWc2RGd2lMRndpZEhsd1pWd2lPbHdpYVc1d2RYUmNJaXhjSW5CaGNtRnRjMXdpT250Y0ltbHVjSFYwTVZ3aU9sd2llMXhjWENKdFpYUm9iMlJjWEZ3aU9seGNYQ0puWlhSRGIyOXlaR2x1WVhSbFhGeGNJaXhjWEZ3aWRIbHdaVnhjWENJNlhGeGNJbWx1Y0hWMFhGeGNJaXhjWEZ3aWNHRnlZVzF6WEZ4Y0lqcDdYRnhjSW5Od2NtbDBaVWx1WkdWNFhGeGNJanBjWEZ3aU1GeGNYQ0lzWEZ4Y0ltRjRhWE5jWEZ3aU9qQjlmVndpTEZ3aWFXNXdkWFF5WENJNlhDSTFYQ0lzWENKdmNHVnlZWFJ2Y2x3aU9sd2lNVndpZlgwaUxDSjVJam9pZTF3aWJXVjBhRzlrWENJNlhDSm5aWFJCY21sMGFHMWxkR2xqVW1WemRXeDBYQ0lzWENKMGVYQmxYQ0k2WENKcGJuQjFkRndpTEZ3aWNHRnlZVzF6WENJNmUxd2lhVzV3ZFhReFhDSTZYQ0o3WEZ4Y0ltMWxkR2h2WkZ4Y1hDSTZYRnhjSW1kbGRFTnZiM0prYVc1aGRHVmNYRndpTEZ4Y1hDSjBlWEJsWEZ4Y0lqcGNYRndpYVc1d2RYUmNYRndpTEZ4Y1hDSndZWEpoYlhOY1hGd2lPbnRjWEZ3aWMzQnlhWFJsU1c1a1pYaGNYRndpT2x4Y1hDSXdYRnhjSWl4Y1hGd2lZWGhwYzF4Y1hDSTZNWDE5WENJc1hDSnBibkIxZERKY0lqcGNJalZjSWl4Y0ltOXdaWEpoZEc5eVhDSTZYQ0l4WENKOWZTSXNJbk53Y21sMFpVbHVaR1Y0SWpvaU1TSXNJbUpzYjJOclNXNWtaWGdpT2pkOWZUc0tJQ0I3SW0xbGRHaHZaQ0k2SW10dlpHRkpaaUlzSW5CaGNtRnRjeUk2ZXlKamIyNWthWFJwYjI0aU9pSjdYQ0p0WlhSb2IyUmNJanBjSW1kbGRGSmxiR0YwYVc5dVlXeFNaWE4xYkhSY0lpeGNJblI1Y0dWY0lqcGNJbWx1Y0hWMFhDSXNYQ0p3WVhKaGJYTmNJanA3WENKcGJuQjFkREZjSWpwY0ludGNYRndpYldWMGFHOWtYRnhjSWpwY1hGd2laMlYwVm1Gc2RXVlBabFpoY21saFlteGxYRnhjSWl4Y1hGd2lkSGx3WlZ4Y1hDSTZYRnhjSW1sdWNIVjBYRnhjSWl4Y1hGd2ljR0Z5WVcxelhGeGNJanA3WEZ4Y0ltNWhiV1ZQWmxaaGNtbGhZbXhsWEZ4Y0lqcGNYRndpYldsemMyVmtYMlp5ZFdsMFhGeGNJbjE5WENJc1hDSnBibkIxZERKY0lqcGNJalZjSWl4Y0ltOXdaWEpoZEc5eVhDSTZYQ0l5WENKOWZTSXNJbXhwYm1WelQyWkRiMlJsSWpvaVNVTkNOMGx0TVd4a1IyaDJXa05KTmtsdVduQmpNbXhwWWtkc01HVldVblphTW1SeldsTkpjMGx1UW1oamJVWjBZM2xKTm1WNVNucGpTRXB3WkVkV1NtSnRVbXhsUTBrMlNXcEZhVXhEU2pKaFdFNXdXVzFzYzJGWVVqVkphbTk0Wmxnd04wTm5QVDBpZlgwN0NpQWdleUp0WlhSb2IyUWlPaUp0YjNabFYybDBhRk53WldWa0lpd2ljR0Z5WVcxeklqcDdJbU5vYVd4a1NuTnZiaUk2VzNzaWJtRnRaU0k2SW01MWJXSmxjaUlzSW5aaGJIVmxJam95TW4wc2V5SnVZVzFsSWpvaVkyOXVkSEp2YkhOZmFXWmZaV3h6WlNJc0luWmhiSFZsSWpwdWRXeHNMQ0pqYUdsc1pFcHpiMjRpT2x0N0ltNWhiV1VpT2lKMGIzVmphQ0o5TEhzaWJtRnRaU0k2SW5Ob2IzZGZhR2xrWlNJc0luWmhiSFZsSWpwdWRXeHNMQ0pqYUdsc1pFcHpiMjRpT2x0N0ltNWhiV1VpT2lKamFHRnVaMlZmZG1GeUlpd2lkbUZzZFdVaU9tNTFiR3dzSW1Ob2FXeGtTbk52YmlJNlczc2libUZ0WlNJNkltNTFiV0psY2lJc0luWmhiSFZsSWpveE1IMWRmVjE5TEhzaWJtRnRaU0k2SW1OdmJuUnliMnh6WDJsbUlpd2lkbUZzZFdVaU9tNTFiR3dzSW1Ob2FXeGtTbk52YmlJNlczc2libUZ0WlNJNkluSmxiR0YwYVc5dVlXeGZiM0JsY21GMGIzSnpJaXdpZG1Gc2RXVWlPbTUxYkd3c0ltTm9hV3hrU25OdmJpSTZXM3NpYm1GdFpTSTZJbTUxYldKbGNpSXNJblpoYkhWbElqbzFmU3g3SW01aGJXVWlPaUpuWlhSZmRtRnlJbjFkZlN4N0ltNWhiV1VpT2lKemFHOTNYMmhwWkdWZmRtRnlJaXdpZG1Gc2RXVWlPbTUxYkd3c0ltTm9hV3hrU25OdmJpSTZXM3NpYm1GdFpTSTZJbU5vWVc1blpWOWlZV05yWjNKdmRXNWtJaXdpZG1Gc2RXVWlPbTUxYkd3c0ltTm9hV3hrU25OdmJpSTZXM3NpYm1GdFpTSTZJbk5vYjNkZmFHbGtaVjloYkd3aUxDSjJZV3gxWlNJNmJuVnNiQ3dpWTJocGJHUktjMjl1SWpwYmV5SnVZVzFsSWpvaWMyaHZkMTlvYVdSbFgySjFkSFJ2YmlJc0luWmhiSFZsSWpwdWRXeHNmVjE5WFgxZGZWMTlMSHNpYm1GdFpTSTZJbU5vWVc1blpWOTJZWElpTENKMllXeDFaU0k2Ym5Wc2JDd2lZMmhwYkdSS2MyOXVJanBiZXlKdVlXMWxJam9pYm5WdFltVnlJaXdpZG1Gc2RXVWlPakY5WFgxZGZWMHNJbk53Y21sMFpVbHVaR1Y0SWpvaU1TSXNJbVJwY21WamRHbHZiaUk2SWtRaUxDSnpjR1ZsWkNJNk1DNDJMQ0pvWVhOQmJtbHRZWFJwYjI0aU9uUnlkV1VzSW5naU9qQXNJbmtpT2pJeUxDSnBibkIxZEVKc2IyTnJJanB1ZFd4c0xDSmliRzlqYTBsdVpHVjRJam81ZlgwN0NpQWdleUp0WlhSb2IyUWlPaUpyYjJSaFNXWkZiSE5sSWl3aWNHRnlZVzF6SWpwN0ltTnZibVJwZEdsdmJpSTZJbnRjSW0xbGRHaHZaRndpT2x3aWFHRnpRMmhoY2xSdmRXTm9aV1JjSWl4Y0luUjVjR1ZjSWpwY0ltbHVjSFYwWENJc1hDSndZWEpoYlhOY0lqcDdYQ0p6Y0hKcGRHVXhTVzVrWlhoY0lqcGNJakZjSWl4Y0luTndjbWwwWlRKSmJtUmxlRndpT2x3aU1sd2lmWDBpTENKcFprTnZaR1VpT2lKSlEwSTNTVzB4YkdSSGFIWmFRMGsyU1c1YWNHTXliR2xpUjJ3d1pWWlNkbG95WkhOYVUwbHpTVzVDYUdOdFJuUmplVWsyWlhsS2VtTklTbkJrUjFaS1ltMVNiR1ZEU1RaSmFrVnBURU5LTW1GWVRuQlpiV3h6WVZoU05VbHFiM2RtV0RBM1EybEJaMlY1U25SYVdGSnZZakpSYVU5cFNtcGhSMFoxV2pKV1YxbFlTV2xNUTBwM1dWaEthR0pZVFdsUGJuTnBZbTFHZEZwVk9XMVdiVVo1WVZkR2FXSkhWV2xQYVVwNldUSTVlVnBUU1hOSmJscG9Za2hXYkZReVdsZFpXRXB3V1ZkS2MxcFRTVFpKYWtWM1NXNHhPVTkzYnowaUxDSmxiSE5sUTI5a1pTSTZJa2xEUWpkSmJURnNaRWRvZGxwRFNUWkpiVTV2V1ZjMWJscFdXbWhqYVVselNXNUNhR050Um5SamVVazJaWGxLZFZsWE1XeFVNbHBYV1ZoS2NGbFhTbk5hVTBrMlNXMHhjR016VG14YVJqbHRZMjVXY0dSRFNYTkpibHBvWWtoV2JGUXlXbGRaV0Vwd1dWZEtjMXBUU1RaSmFrVnBabGd3TjBOblBUMGlmWDA3Q2lBZ2V5SnRaWFJvYjJRaU9pSnJiMlJoU1dZaUxDSndZWEpoYlhNaU9uc2lZMjl1WkdsMGFXOXVJam9pZTF3aWJXVjBhRzlrWENJNlhDSm5aWFJTWld4aGRHbHZibUZzVW1WemRXeDBYQ0lzWENKMGVYQmxYQ0k2WENKcGJuQjFkRndpTEZ3aWNHRnlZVzF6WENJNmUxd2lhVzV3ZFhReFhDSTZYQ0o3WEZ4Y0ltMWxkR2h2WkZ4Y1hDSTZYRnhjSW1kbGRGWmhiSFZsVDJaV1lYSnBZV0pzWlZ4Y1hDSXNYRnhjSW5SNWNHVmNYRndpT2x4Y1hDSnBibkIxZEZ4Y1hDSXNYRnhjSW5CaGNtRnRjMXhjWENJNmUxeGNYQ0p1WVcxbFQyWldZWEpwWVdKc1pWeGNYQ0k2WEZ4Y0ltMXBjM05sWkY5bWNuVnBkRnhjWENKOWZWd2lMRndpYVc1d2RYUXlYQ0k2WENJMVhDSXNYQ0p2Y0dWeVlYUnZjbHdpT2x3aU1Gd2lmWDBpTENKc2FXNWxjMDltUTI5a1pTSTZJa2xEUWpkSmJURnNaRWRvZGxwRFNUWkpibHBvWTIxc2FGbHRlR3hTUjJ4NlkwZDRhR1ZXVW5aYU1tUnpXbE5KYzBsdVFtaGpiVVowWTNsSk5tVjVTbnBhVjNoc1dUTlNiRnBHV21oamJXeG9XVzE0YkVscWIybGlWMng2WXpKV2ExZ3lXbmxrVjJ3d1NXbDNhV1J0YkhwaFYwcHdZa2RzTUdWVFNUWkpiV2h3V2tkVmFXWllNRGREYVVGblpYbEtkRnBZVW05aU1sRnBUMmxLYW1GSFJuVmFNbFpEVW5sSmMwbHVRbWhqYlVaMFkzbEpObVY1U21sWlYwNXlXak5LZG1SWE5XdFRWelZyV2xobmFVOXBTWGxKYmpFNVQzZHZaMGxJYzJsaVYxWXdZVWM1YTBscWIybGtiV3g2WVZkS2MyRllValZXUnpsdVdqSjRiRkp0T1hsUlYzaHpTV2wzYVdOSFJubFpWekY2U1dwd04wbHVXbkJqTW14cFlWZDRjR1JJYTJsUGFrSTVabFJ6UzBsRFFqZEpiVEZzWkVkb2RscERTVFpKYlVveFpFaFNkbUpzV25Cak1teHBZa2RzTUdWV1VuWmFNbVJ6V2xOSmMwbHVRbWhqYlVaMFkzbEpObVY1U21sa1dGSXdZakkxU21KdFVteGxRMGsyU1dwRmFVeERTakpoV0U1d1dXMXNjMkZZVWpWSmFtOTRabGd3TjBOblBUMGlmWDA3Q2c9PSJ9fTsK"}};

{"method":"keydownEventBind","type":"event","params":{"dropdown_keys":37,"linesOfCode":"ICB7Im1ldGhvZCI6ImtvZGFJZiIsInBhcmFtcyI6eyJjb25kaXRpb24iOiJ7XCJtZXRob2RcIjpcImdldFJlbGF0aW9uYWxSZXN1bHRcIixcInR5cGVcIjpcImlucHV0XCIsXCJwYXJhbXNcIjp7XCJpbnB1dDFcIjpcIntcXFwibWV0aG9kXFxcIjpcXFwiZ2V0Q29vcmRpbmF0ZVxcXCIsXFxcInR5cGVcXFwiOlxcXCJpbnB1dFxcXCIsXFxcInBhcmFtc1xcXCI6e1xcXCJzcHJpdGVJbmRleFxcXCI6XFxcIjJcXFwiLFxcXCJheGlzXFxcIjowfX1cIixcImlucHV0MlwiOlwiLTMzXCIsXCJvcGVyYXRvclwiOlwiNFwifX0iLCJsaW5lc09mQ29kZSI6IklDQjdJbTFsZEdodlpDSTZJbTF2ZG1WWGFYUm9VM0JsWldRaUxDSndZWEpoYlhNaU9uc2lZMmhwYkdSS2MyOXVJanBiZXlKdVlXMWxJam9pYm5WdFltVnlJaXdpZG1Gc2RXVWlPako5WFN3aWMzQnlhWFJsU1c1a1pYZ2lPaUl5SWl3aVpHbHlaV04wYVc5dUlqb2lUQ0lzSW5Od1pXVmtJam95TENKb1lYTkJibWx0WVhScGIyNGlPblJ5ZFdVc0luZ2lPaTB5TENKNUlqb3dMQ0pwYm5CMWRFSnNiMk5ySWpwdWRXeHNMQ0ppYkc5amEwbHVaR1Y0SWpveE1IMTlPd289In19Owo="}};

{"method":"keydownEventBind","type":"event","params":{"dropdown_keys":39,"linesOfCode":"ICB7Im1ldGhvZCI6ImtvZGFJZiIsInBhcmFtcyI6eyJjb25kaXRpb24iOiJ7XCJtZXRob2RcIjpcImdldFJlbGF0aW9uYWxSZXN1bHRcIixcInR5cGVcIjpcImlucHV0XCIsXCJwYXJhbXNcIjp7XCJpbnB1dDFcIjpcIntcXFwibWV0aG9kXFxcIjpcXFwiZ2V0Q29vcmRpbmF0ZVxcXCIsXFxcInR5cGVcXFwiOlxcXCJpbnB1dFxcXCIsXFxcInBhcmFtc1xcXCI6e1xcXCJzcHJpdGVJbmRleFxcXCI6XFxcIjJcXFwiLFxcXCJheGlzXFxcIjowfX1cIixcImlucHV0MlwiOlwiMzNcIixcIm9wZXJhdG9yXCI6XCIyXCJ9fSIsImxpbmVzT2ZDb2RlIjoiSUNCN0ltMWxkR2h2WkNJNkltMXZkbVZYYVhSb1UzQmxaV1FpTENKd1lYSmhiWE1pT25zaVkyaHBiR1JLYzI5dUlqcGJleUp1WVcxbElqb2liblZ0WW1WeUlpd2lkbUZzZFdVaU9qSjlYU3dpYzNCeWFYUmxTVzVrWlhnaU9pSXlJaXdpWkdseVpXTjBhVzl1SWpvaVVpSXNJbk53WldWa0lqb3lMQ0pvWVhOQmJtbHRZWFJwYjI0aU9uUnlkV1VzSW5naU9qSXNJbmtpT2pBc0ltbHVjSFYwUW14dlkyc2lPbTUxYkd3c0ltSnNiMk5yU1c1a1pYZ2lPakV4ZlgwN0NnPT0ifX07Cg=="}};

{"method":"buttonClickEventBind","type":"event","params":{"buttonIndex":"1","linesOfCode":"ICB7Im1ldGhvZCI6ImNoYW5nZUJHIiwicGFyYW1zIjp7ImJhY2tncm91bmRJbmRleCI6IjEifX07CiAgeyJtZXRob2QiOiJ2aXNpYmxpdHlUb2dnbGVGb3JBbGwiLCJwYXJhbXMiOnsidmlzaWJpbGl0eSI6MX19OwogIHsibWV0aG9kIjoiYnV0dG9uVmlzaWJsaXR5VG9nZ2xlIiwicGFyYW1zIjp7ImJ1dHRvbkluZGV4IjoiMSIsInZpc2liaWxpdHkiOjB9fTsKICB7Im1ldGhvZCI6InNldFZhciIsInBhcmFtcyI6eyJuYW1lT2ZWYXJpYWJsZSI6InNjb3JlIiwidmFsdWVPZlZhcmlhYmxlIjoiMCJ9fTsKICB7Im1ldGhvZCI6InNldFZhciIsInBhcmFtcyI6eyJuYW1lT2ZWYXJpYWJsZSI6Im1pc3NlZF9mcnVpdCIsInZhbHVlT2ZWYXJpYWJsZSI6IjAifX07CiAgeyJtZXRob2QiOiJ2YXJpYWJsZURpc3BsYXlUb2dnbGUiLCJwYXJhbXMiOnsic2VsZWN0ZWRWYXJpYWJsZSI6Im1pc3NlZF9mcnVpdCIsInZpc2liaWxpdHkiOiJzaG93In19Owo="}};
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
                                    <field name="speed">0.6</field>
                                    <value name="steps">
                                      <shadow type="number" id="m/Ga3F#}6:xbBGD,}$Au">
                                        <field name="n">22</field>
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
        <field name="speed">2</field>
        <value name="steps">
          <shadow type="number" id="y%XaQsfH1e-@bW;}pit=">
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
        <field name="speed">2</field>
        <value name="steps">
          <shadow type="number" id="Eop5ymLW+oO/Hg-QJ*:}">
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
            "block_list": ["say", "showHideChar", "showCoordinates", "changeLook", "nextLook", "changeBG", "rotateSprite", "flipSprite", "goTo", "moveBy", "moveTo", "moveWithSpeed", "characterTouch", "coordinates", "showHideAllChar", "showHideButton", "showHideAllButtons"],
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
  <block type="when_key_pressed" id="when_key_pressed" x="70" y="30">
    <field name="keys">39</field>
    <statement name="when_key_pressed">
      <block type="controls_if" id="controls_if">
        <value name="condition">
          <block type="relational_operators" id="relational_operators">
            <field name="operator">2</field>
            <value name="input1">
              <shadow type="number" id="BBZl0,P.OQf,vCMB3khR">
                <field name="n">0</field>
              </shadow>
              <block type="get_coordinates" id="get_coordinates">
                <field name="sprite">2</field>
                <field name="axis">0</field>
              </block>
            </value>
            <value name="input2">
              <shadow type="number" id="W78.G=fg!n+nj3lSf6/N">
                <field name="n">33</field>
              </shadow>
            </value>
          </block>
        </value>
        <statement name="in_if">
          <block type="move_with_speed" id="move_with_speed">
            <field name="sprite">2</field>
            <field name="direction">R</field>
            <field name="speed">2</field>
            <value name="steps">
              <shadow type="number" id="_j=E9OYNR1c^hx/Zi2%w">
                <field name="n">2</field>
              </shadow>
            </value>
          </block>
        </statement>
      </block>
    </statement>
  </block>
  <block type="when_key_pressed" id="y,JjgB~?2Z}gakY|,;2h" x="70" y="190">
    <field name="keys">37</field>
    <statement name="when_key_pressed">
      <block type="controls_if" id="L{Z4wk)XQlze%i-uENdc">
        <value name="condition">
          <block type="relational_operators" id="KY6iTs6=|XdQ_8e8*WH:">
            <field name="operator">4</field>
            <value name="input1">
              <shadow type="number" id="BBZl0,P.OQf,vCMB3khR">
                <field name="n">0</field>
              </shadow>
              <block type="get_coordinates" id="FktNEJ=!gV^V~0!=)-8=">
                <field name="sprite">2</field>
                <field name="axis">0</field>
              </block>
            </value>
            <value name="input2">
              <shadow type="number" id="zUjR{PS:)VJiO28UKvTO">
                <field name="n">-33</field>
              </shadow>
            </value>
          </block>
        </value>
        <statement name="in_if">
          <block type="move_with_speed" id="td}Y.u5|^?mdwh+!/[s]">
            <field name="sprite">2</field>
            <field name="direction">L</field>
            <field name="speed">2</field>
            <value name="steps">
              <shadow type="number" id="VySSIdGf}V|ChZEhq%=#">
                <field name="n">2</field>
              </shadow>
            </value>
          </block>
        </statement>
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
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/mascot_head.png",
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
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine1/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine1/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine1/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine1/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "Minefield",
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/bg_minefield.jpg"
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
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/mascot_head.png",
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
                "content": "http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/Landmine_2.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine2/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine2/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine2/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/landmine2/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "bg_minefield",
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/landmine_detonator/bg_minefield.jpg"
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
        "instructionBarContent": "Try replacing <img src='http://dqfevutdn6sxd.cloudfront.net/block_images/repeat_n_times_block.png' style='height: 12px!important'> with something that can be used to throw fruits forever.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/monkey_menace/mascot_arms_folded_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showHideChar", "wait", "moveTo", "changeLook", "showCoordinates", "coordinates", "goTo", "moveBy", "arithmeticOperator", "randomNumber", "repeat", "repeatForever"],
        }],
        "initialCode": `<xml><block type="controls_repeat_ext" id="repeat_n_times" x="10" y="20"><value name="times"><shadow type="number"><field name="n">5</field></shadow></value><statement name="in_loop">
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
                        <value name="times"><shadow type="number"><field name="n">3</field></shadow></value>
                        <statement name="in_loop">
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
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/naptime/mascot_head.png",
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
                "content": "http://dqfevutdn6sxd.cloudfront.net/activities/naptime/Naptime.gif"
        }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/naptime/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/naptime/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/naptime/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "http://dqfevutdn6sxd.cloudfront.net/activities/naptime/hint1.png"
        }],
        "backgrounds": [
            {
                "name": "Living Room",
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/naptime/bg_coding.png"
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
                    <value name="times"><shadow type="number"><field name="n">0</field></shadow></value>
                    <statement name="in_loop">
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
              <value name="times"><shadow type="number"><field name="n">2</field></shadow></value>
              <statement name="in_loop">
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
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/lambent_app/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "showHideChar", "goTo",
                "moveBy", "moveTo", //"changeLook", "nextLook", "repeat", "repeatForever", "randomNumber", "arithmeticOperator", "wait", "whenKeyPressed", "whenButtonClicked"
            ],
        }],
        "initialCode": "",
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/activities/lambent_app/preview.gif"
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
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/lambent_app/bg_bedroom_lit.jpg"
            },
            {
                "name": "Dark Bedroom",
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/lambent_app/bg_bedroom_dark.jpg"
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
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/mascot_head.png",
        "categories": [{
            "name": "",
            "colour": 0,
            "block_list": ["say", "showCoordinates", "coordinates", "goTo", "moveBy", "moveTo", "changeLook", "nextLook", "repeat", "repeatForever", "randomNumber", "arithmeticOperator", "wait", "whenKeyPressed", "whenButtonClicked"],
        }],
        "initialCode": `<xml xmlns="http://www.w3.org/1999/xhtml">
        <variables></variables>
        <block type="button_click_event" id="button_click_event" x="50" y="70">
            <field name="button">0</field>
            <statement name="button_clicked">
            <block type="say" id="say">
                <field name="sprite">0</field>
                <field name="message">It is Solar Eclipse!</field>
            </block>
            </statement>
        </block>
        </xml>`,
        "isParallel": true,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/preview.gif"
            }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/hint1.png"
            }],
        "backgrounds": [
            {
                "name": "Space",
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/bg_coding.jpg"
            }
        ],
        "initialBackgroundIdx": 0,
        "currentBackgroundIdx": 0,
        "buttons": [
            {
                "id": "solar_eclipse_button",
                "name": "Solar Eclipse Button",
                "looks": ["http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/solar_eclipse_button.png"],
                "buttonLookIdx": 0,
                "offset": {
                    "x": -25,
                    "y": -17
                },
                "aspect_ratio": 3.742,
                "width": 15,
                "initialVisibility": true
            },
            {
                "id": "lunar_eclipse_button",
                "name": "Lunar Eclipse Button",
                "looks": ["http://dqfevutdn6sxd.cloudfront.net/activities/eclipse/lunar_eclipse_button.png"],
                "buttonLookIdx": 0,
                "offset": {
                    "x": 25,
                    "y": -17
                },
                "aspect_ratio": 3.734,
                "width": 15,
                "initialVisibility": true
            } 
           ]
    }, //end of eclipse_coding
    
     fire_extinguisher_coding1: {
         "activity_name": "fire_extinguisher1",
         "mascotBgColor": '#ECD452',
        "instructionBarContent": "I have already coded to show how a fire extinguisher works but something seems to be going wrong. Help me correct my code. You can refer to the algorithm and preview.",
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/mascot_head.png",
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
         "initialCode": `<xml xmlns="http://www.w3.org/1999/xhtml">
  <variables></variables>
  <block type="change_look" id="change_look" x="38" y="36">
    <field name="sprite">1</field>
    <field name="avatar">1</field>
    <next>
      <block type="move_by" id="move_by">
        <field name="sprite">3</field>
        <field name="direction">D</field>
        <value name="steps">
          <shadow type="number" id="ZPi{uxhc!cTc^i}Q.l1">
            <field name="n">2</field>
          </shadow>
        </value>
        <next>
          <block type="change_look" id="@M%OTjUz9Fxp{WF:Jflk">
            <field name="sprite">2</field>
            <field name="avatar">1</field>
            <next>
              <block type="wait" id="wait">
                <field name="wait_time">0.5</field>
                <next>
                  <block type="change_look" id="14=$0x?1dy:U-#t6Kh{">
                    <field name="sprite">2</field>
                    <field name="avatar">2</field>
                    <next>
                      <block type="show_hide" id="0_LPoQj5~HPH(%5yF5z">
                        <field name="sprite">4</field>
                        <field name="visibility_status">0</field>
                        <next>
                          <block type="controls_repeat_ext" id="controls_repeat_ext">
                            <value name="times">
                              <shadow type="number" id="H{=m%82)G@I;610zJ^kN">
                                <field name="n">4</field>
                              </shadow>
                            </value>
                            <statement name="in_loop">
                              <block type="wait" id="Fb6zK@4-CFB3(G5GsiVp">
                                <field name="wait_time">0.5</field>
                                <next>
                                  <block type="next_look" id="next_look">
                                    <field name="sprite">5</field>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="show_hide" id="rpUEB6#zMznO3GmCFM?+">
                                <field name="sprite">4</field>
                                <field name="visibility_status">0</field>
                                <next>
                                  <block type="show_hide" id="vx3SA4gKF3*Z%Qj[ASC">
                                    <field name="sprite">5</field>
                                    <field name="visibility_status">1</field>
                                    <next>
                                      <block type="change_look" id="e#TK7*g1_0X*qE%u78?%">
                                        <field name="sprite">1</field>
                                        <field name="avatar">1</field>
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
  <block type="click_event" id="click_event" x="386" y="36">
    <field name="sprite">1</field>
    <statement name="sprite_clicked">
      <block type="move_to" id="move_to">
        <field name="sprite">0</field>
        <value name="input_x">
          <shadow type="number" id="oeH(hXo!a0nx}jll)81">
            <field name="n">-22</field>
          </shadow>
        </value>
        <value name="input_y">
          <shadow type="number" id="mOM|J!iJ;@G2:1LVTVE(">
            <field name="n">-15</field>
          </shadow>
        </value>
      </block>
    </statement>
  </block>
</xml>`,
         "isParallel": true,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/preview1.gif"
            }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/code1/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/code1/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/code1/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/code1/hint1.png"
            }],
        "backgrounds": [
            {
                "name": "BG1",
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/bg_coding1.jpg"
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
        "mascotImage": "http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/mascot_head.png",
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
        "isParallel": true,
        "icons": [{
            "name": "algo",
            "isVisible": false,
            "content": []
        }, {
            "name": "preview",
            "isVisible": true,
            "content": "http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/preview2.gif"
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
                "src": "http://dqfevutdn6sxd.cloudfront.net/activities/fire_extinguisher/bg_coding2.jpg"
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
                "block_list": ["ifBlock", "ifElseBlock", "relationalOperator", "logicalOperator", "notOperator", "trueFalse"],
        }, {
            "name": "Others",
            "colour": "#42b4bd",
            "block_list": ["randomNumber", "arithmeticOperator", "wait", "mouseCoordinates", "playSound"]
            }],
        "isParallel": true,
        "initialCode": `<xml xmlns="http://www.w3.org/1999/xhtml">
  <variables></variables>
  <block type="go_to" id="go_to" x="14" y="21">
    <field name="sprite">0</field>
    <value name="input_x">
      <shadow type="number" id="~BIp%YX-0tOu.bE,V^g/">
        <field name="n">0</field>
      </shadow>
      <block type="random_number" id="random_number">
        <value name="from">
          <shadow type="number" id="isH!L@CHDf[h-26@,rUD">
            <field name="n">0</field>
          </shadow>
        </value>
        <value name="to">
          <shadow type="number" id="B9#8tmkB{Ws-csLb7?h">
            <field name="n">0</field >
        </shadow>
        </value>
        </block>
        </value>
        <value name="input_y" >
        <shadow type="number" id = "Vo~_TJ/J6K{{lS+)!:d{" >
            <field name="n"> 0 </field>
                </shadow>
                <block type="random_number" id="1cTU@ZPiH#MWjvLU)DT" >
                <value name="from">
                    <shadow type="number" id = "Revd8r8/tJ^Ag|/}R;$" >
                        <field name="n"> 0 </field>
                            </shadow>
                            </value>
                            <value name="to">
                            <shadow type="number" id = "hX;H$S,%OtR!jx;[S}aM" >
                                <field name="n">0</field>
                                    </shadow>
                                    </value>
                                    </block>
                                    </value>
                                    <next>
                                    <block type="controls_if_else" id = "controls_if_else" >
                                        <value name="condition">
                                            <block type="relational_operators" id = "relational_operators">
                                                <field name="operator">2</field>
                                                    <value name="input1" >
                                                    <shadow type="number" id = "yR#v,WYbBIMd0HesSys" >
                                                        <field name="n"> 0 </field>
                                                            </shadow>
                                                            </value>
                                                            <value name="input2">
                                                            <shadow type="number" id = "Tmxz!YB3-/j$u^/16*Y5" >
                                                                <field name="n"> -1 </field>
                                                                    </shadow>
                                                                    </value>
                                                                    </block>
                                                                    </value>
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
            "content": "./../assets/images/activities/talking_parrot/preview.gif"
            }, {
                "name": "hint",
                "isVisible": true,
                "content": [
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/talking_parrot/hint1.png',
                        "hintActive": false,
                        "hintDisable": false
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/talking_parrot/hint2.png',
                        "hintActive": false,
                        "hintDisable": true
                    },
                    {
                        "lockText": 'Unlock for 25 points',
                        "unlockHint": 'http://dqfevutdn6sxd.cloudfront.net/activities/talking_parrot/hint3.png',
                        "hintActive": false,
                        "hintDisable": true
                    }
                ],
                "totalHintAvailable": 3,
                "currentHintValue": "http://dqfevutdn6sxd.cloudfront.net/activities/talking_parrot/hint1.png"
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
        "isParallel": true,
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
         "isParallel": true,
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
         "isParallel": true,
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