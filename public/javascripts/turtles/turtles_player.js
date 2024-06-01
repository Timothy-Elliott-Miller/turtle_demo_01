
var phaser_frame = document.getElementById('phaser_frame');
var editor = document.getElementById('blocklyDiv');
var edit_toggle_btn = document.getElementById('edit_toggle_btn');
var speed_range = document.getElementById('speed_range')
var speed_range = document.getElementById('speed_range')
var draw_bool = document.getElementById('draw_checkbox')

var phaser_loaded = false;
var loadedAll = false;
var blocklyWorkspace;
var blocklySave;
// colors = ["red","purple","green"];

function run(){
	// loadWorkspace(currentTurtleBtn);
	save();
	let speed = speed_range.value;
	let draw = draw_checkbox.checked;
	console.log("+++++++++ draw +++++++++: ", draw);
    // resetPhaser(currentButton);
	if(phaser_loaded == true){
		let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
		let data = {type: 'turtle code', code: code, speed : speed, draw : draw}
		console.log("data: ", data);
		// feed the code to the current phaser frame
		phaser_frame.contentWindow.postMessage(data, "*");
		// if not "loaded then check what is returned"
	} 
}
                                


function save() {
    blocklySave = Blockly.serialization.workspaces.save(blocklyWorkspace);
  }


function loadWorkspace() {
	console.log("======== loading local =========")
    if (blocklySave) {
    	console.log(blocklySave);
    	Blockly.serialization.workspaces.load(blocklySave, blocklyWorkspace);

    } else {
      blocklyWorkspace.clear();
    }
  }


function closeWorkspace(){
	save();
	console.log("close editor and save");
	// enableMainMode();
}

function resetPhaser(){
	if(phaser_loaded == true){
		// feed the code to the current phaser frame
		phaser_frame.contentWindow.postMessage("reset", "*");
		// if not "loaded then check what is returned"
	} 
}

function editor_toggle(){
	if(editor.style.display === "none"){
		editor.style.display = "block";
		edit_toggle_btn.innerHTML = "HIDE EDITOR";
	} else{
		editor.style.display = "none";
		edit_toggle_btn.innerHTML = "SHOW EDITOR";
	}
}

window.addEventListener("message", function(e){
	if(e.data == "phaser_loaded"){
		console.log("phaser loaded");
		phaser_loaded = true;
		loadingSequence();
		loadedAll = true;
	}
})

function blocklyWorkspaceLoad(){
	blocklyWorkspace = Blockly.inject('blocklyDiv', {
	toolbox: toolbox,
	scrollbars: false,
	horizontalLayout: true,
	toolboxPosition: "end",
	media: '/node_modules/blockly/media/'
	});
}

function loadingSequence(){
	blocklyWorkspaceLoad();
	editor_toggle();
}

