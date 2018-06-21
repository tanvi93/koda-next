const xmls = {
    show_hide_all: `<block type="show_hide_all" ></block>`,
    arithmetic_operators: `<block type="arithmetic_operators">
      <value name="input1">
        <shadow type="number"></shadow>
      </value>
      <value name="input2">
        <shadow type="number"></shadow>
      </value>
    </block>`,
    boolean_value: `<block type="boolean_value"></block>`,
    button_click_event: `<block type="button_click_event" id="button_click_event"></block>`,
    change_background: `<block type="change_background" > </block>`,
    change_look: `<block id="change_look" type = "change_look"> </block>`,
    change_look_button: `<block id="change_look_button" type = "change_look_button" > </block>`,
    change_xy_by: `<block type="change_xy_by" id="change_xy_by">
                  <value name="steps">
                    <shadow type="number"></shadow>
                  </value>
                </block>`,
    click_event: `<block type="click_event" id="click_event"></block>`,
    go_to: `<block type = "go_to" id = "go_to" >
                    <value name="input_x" >
                        <shadow type="number"></shadow>
                    </value>
                    <value name = "input_y" >
                        <shadow type="number"></shadow>
                    </value>
                </block>`,
    show_hide_button: `<block type="show_hide_button" ></block>`,
    controls_if: `<block type="controls_if"></block>`,
    when_key_pressed: `<block type="when_key_pressed" id="when_key_pressed"></block>`,
    logical_operators: `<block type="logical_operators" id="logical_operators"></block>`,
    mouse_click_event: `<block type="mouse_click_event" id="mouse_click_event"></block>`,
    move_by: `<block type = "move_by" id = "move_by" >
                    <value name="steps" >
                        <shadow type="number" > </shadow>
                    </value>
                </block>`,
    move_to: `<block type="move_to" id="move_to">
        <value name="input_x">
           <shadow type="number" > </shadow>
        </value>
        <value name="input_y">
           <shadow type="number" > </shadow>
        </value>
      </block>`,
    next_look: `<block type="next_look" > </block>`,
    not_operator: `<block type="not_operator" id="not_operator"></block>`,
    random_number: `<block type="random_number" id="random_number">
      <value name="from">
        <shadow type="number"></shadow>
      </value>
      <value name="to">
        <shadow type="number"></shadow>
      </value>
    </block>`,
    relational_operators: `<block type="relational_operators" id="relational_operators"></block>`,
    controls_repeat_forever: `<block type = "controls_repeat_forever"> </block>`,
    controls_repeat_ext: `<block type = "controls_repeat_ext" colour="70">
                    <value name="TIMES" >
                      <shadow type="number"></shadow>
                    </value>
                </block>`,
    say: `<block type="say" id="say"></block>`,
    show_coords: `<block type="show_coords" id="showCoords"> </block>`,
    show_hide: `<block type="show_hide" ></block>`,
    get_coordinates: `<block type="get_coordinates" id="get_coordinates"></block>`,
    wait: `<block type="wait" id="wait" ></block>`
}