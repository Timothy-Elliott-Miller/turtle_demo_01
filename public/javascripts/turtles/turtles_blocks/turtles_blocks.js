Blockly.common.defineBlocksWithJsonArray([
  {
    "type": "turtle_forward",
    "lastDummyAlign0": "RIGHT",
    "message0": "step",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "message0": "turn %1",
    "type": "turtle_turn",
    "previousStatement": null,
    "nextStatement": null,
      // "previousStatement": null,
      // "nextStatement": null,
      "colour": 230,
    "args0":[
    {
      "type": "field_number",
      "name": "degrees",
      "value": 0,
      "min": -359,
      "max": 359,
      // "precision": 10
    }
    ]
  },
  // {
  //   "type": "turtle_turn_right",
  //   "message0": "turn_right",
  //   "previousStatement": null,
  //   "nextStatement": null,
  //   "colour": 230,
  //   "tooltip": "",
  //   "helpUrl": ""
  // }
  ]);

// // TURTLE based functions, call the objects addNewOrder
// function add_forward(turtle){
//   turtle.addNewOrder('forward');
// }

// function add_turn_left(turtle){
//   turtle.addNewOrder('turn_left');
// }

// function add_turn_right(turtle){
//   turtle.addNewOrder('turn_right');
// }



  Blockly.JavaScript['turtle_forward'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'turtle_current.addNewOrder({command : "frwd"});';
    return code;
  };

  Blockly.JavaScript['turtle_turn'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    // console.log("DEGREESS");
    // console.log(block.getInput("degrees"));
        
    var degree = block.getFieldValue("degrees");
    let turnString = "turn"+ degree;
    var code = 'turtle_current.addNewOrder({command : "turn", degrees : '+ degree + '});';
    console.log("turn code:" ,code);
    return code;
  };

  Blockly.JavaScript['turtle_turn_right'] = function(block) {
    var code = 'turtle_current.addNewOrder("turn_right");';
    return code;
  };