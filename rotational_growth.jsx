// °× ← here to force unicode characters to work. Thanks Justin T!
// https://community.adobe.com/t5/after-effects-discussions/utf-encoding-unicode-in-script-ui-extendscript/td-p/11511596
//
// by JK Keller, dilettante coder, use at your own risk
// https://jk-keller.com/o__o/rotational_growth
//
// 2022_07_18
//


// Thanks for dialog builder!
// https://scriptui.joonas.me

var dialog = new Window("dialog"); 
	dialog.text = "Turning into Turing"; 
	dialog.orientation = "column"; 
	dialog.alignChildren = ["center","top"]; 
	dialog.spacing = 10; 
	dialog.margins = 16; 

// MAIN INPUT FIELDS GROUP - so can have two columns
// ======
var inputFieldsGroup = dialog.add("group", undefined, {name: "inputFieldsGroup"}); 
	inputFieldsGroup.orientation = "row"; 
	inputFieldsGroup.alignChildren = ["left","top"]; 
	inputFieldsGroup.spacing = 10; 
	inputFieldsGroup.margins = 0; 

// LEFT INPUT COLUMN GROUP
// ======
var leftInputColumn = inputFieldsGroup.add("group", undefined, {name: "leftInputColumn"}); 
	leftInputColumn.orientation = "column"; 
	leftInputColumn.alignChildren = ["left","center"]; 
	leftInputColumn.spacing = 10; 
	leftInputColumn.margins = 0; 


// INTERPOLATION PANEL
// ======
var interpolationPanel = leftInputColumn.add("panel", undefined, undefined, {name: "interpolationPanel"}); 
	interpolationPanel.text = "Interpolation Method"; 
	interpolationPanel.orientation = "column"; 
	interpolationPanel.alignChildren = ["left","top"]; 
	interpolationPanel.spacing = 10; 
	interpolationPanel.margins = 16; 

// BICUBIC GROUP - have to make these and other two interpolations a group so I can turn on/off radios and only have one interpolation value
var interpolationBicubic = interpolationPanel.add("group", undefined, {name: "interpolationBicubic"}); 
	interpolationBicubic.orientation = "column"; 
	interpolationBicubic.alignChildren = ["left","top"]; 
	interpolationBicubic.spacing = 10; 

var radioBicubicOnly = interpolationBicubic.add("radiobutton", undefined, undefined, {name: "radioBicubicOnly"}); 
	radioBicubicOnly.text = "bicubic"; 
	radioBicubicOnly.value = true; 

var radioBicubicSharper = interpolationBicubic.add("radiobutton", undefined, undefined, {name: "radioBicubicSharper"}); 
	radioBicubicSharper.text = "bicubicSharper"; 

var radioBicubicSmoother = interpolationBicubic.add("radiobutton", undefined, undefined, {name: "radioBicubicSmoother"}); 
	radioBicubicSmoother.text = "bicubicSmoother"; 

var staticInterpolation = interpolationPanel.add("statictext", undefined, undefined, {name: "staticInterpolation"}); 
	staticInterpolation.text = "These don’t make Turing patterns:"; 

// NOT BICUBIC GROUP - have to also make these a group so I can turn on/off radios and only have one interpolation value
var interpolationOthers = interpolationPanel.add("group", undefined, {name: "interpolationOthers"}); 
	interpolationOthers.orientation = "column"; 
	interpolationOthers.alignChildren = ["left","top"]; 
	interpolationOthers.spacing = 10; 

var radioBilinear = interpolationOthers.add("radiobutton", undefined, undefined, {name: "radioBilinear"}); 
	radioBilinear.text = "bilinear"; 

var radioNearest = interpolationOthers.add("radiobutton", undefined, undefined, {name: "radioNearest"}); 
	radioNearest.text = "nearestNeighbor"; 

// BICUBIC RADIO BUTTONS CLICK - because ScriptUI didn't allow radio buttons to be separated by static text
interpolationBicubic.addEventListener ("click", function () {
	for (var i = 0; i < 2; i++) {
		interpolationOthers.children[i].value = false;
	}
});
interpolationOthers.addEventListener ("click", function () {
	for (var i = 0; i < 3; i++) {
		interpolationBicubic.children[i].value = false;
	}
});


// ANCHOR POINTS PANEL
// ======
var anchorPanel = leftInputColumn.add("panel", undefined, undefined, {name: "anchorPanel"}); 
	anchorPanel.text = "Anchor Point"; 
	anchorPanel.orientation = "column"; 
	anchorPanel.alignment = "fill"; 
	anchorPanel.alignChildren = ["center","top"]; 
	anchorPanel.spacing = 10; 
	anchorPanel.margins = 16; 
	anchorPanel.helpTip = "What point should image rotate around";

var anchorRowTop = anchorPanel.add("group", undefined, {name: "anchorRowTop"}); 
	anchorRowTop.orientation = "row"; 
	anchorRowTop.alignChildren = ["center","center"]; 
	anchorRowTop.spacing = 10; 
	anchorRowTop.margins = 0; 

var radioTopLeft = anchorRowTop.add("radiobutton", undefined, undefined, {name: "radioTopLeft"}); 
var radioTopMid = anchorRowTop.add("radiobutton", undefined, undefined, {name: "radioTopMid"}); 
var radioTopRight = anchorRowTop.add("radiobutton", undefined, undefined, {name: "radioTopRight"}); 

var anchorRowMid = anchorPanel.add("group", undefined, {name: "anchorRowMid"}); 
	anchorRowMid.orientation = "row"; 
	anchorRowMid.alignChildren = ["center","center"]; 
	anchorRowMid.spacing = 10; 
	anchorRowMid.margins = 0; 

var radioMidLeft = anchorRowMid.add("radiobutton", undefined, undefined, {name: "radioMidLeft"}); 
var radioMidMid = anchorRowMid.add("radiobutton", undefined, undefined, {name: "radioMidMid"}); 
	radioMidMid.value = true; 
var radioMidRight = anchorRowMid.add("radiobutton", undefined, undefined, {name: "radioTopRight"}); 

var anchorRowBot = anchorPanel.add("group", undefined, {name: "anchorRowBot"}); 
	anchorRowBot.orientation = "row"; 
	anchorRowBot.alignChildren = ["center","center"]; 
	anchorRowBot.spacing = 10; 
	anchorRowBot.margins = 0; 

var radioBotLeft = anchorRowBot.add("radiobutton", undefined, undefined, {name: "radioBotLeft"}); 
var radioBotMid = anchorRowBot.add("radiobutton", undefined, undefined, {name: "radioBotMid"}); 
var radioBotRight = anchorRowBot.add("radiobutton", undefined, undefined, {name: "radioBotRight"}); 

// ANCHOR POINT BUTTONS CLICK - because I had to group by rows
anchorRowTop.addEventListener ("click", function () {
	for (var i = 0; i < 3; i++) {
		anchorRowMid.children[i].value = false;
		anchorRowBot.children[i].value = false;
	}
});
anchorRowMid.addEventListener ("click", function () {
	for (var i = 0; i < 3; i++) {
		anchorRowTop.children[i].value = false;
		anchorRowBot.children[i].value = false;
	}
});
anchorRowBot.addEventListener ("click", function () {
	for (var i = 0; i < 3; i++) {
		anchorRowTop.children[i].value = false;
		anchorRowMid.children[i].value = false;
	}
});


// RIGHT INPUT COLUMN GROUP
// ======
var rightInputColumn = inputFieldsGroup.add("panel", undefined, undefined, {name: "rightInputColumn"}); 
	rightInputColumn.text = "Number of Iterations"; 
	rightInputColumn.orientation = "column"; 
	rightInputColumn.alignChildren = ["left","top"]; 
	rightInputColumn.spacing = 10; 
	rightInputColumn.margins = 16; 

var staticNumStepsPer = rightInputColumn.add("statictext", undefined, undefined, {name: "staticNumStepsPer"}); 
	staticNumStepsPer.text = "Number of steps per revolution"; 

var rowStepsDegrees = rightInputColumn.add("group", undefined, {name: "rowStepsDegrees"}); 
	rowStepsDegrees.orientation = "row"; 
	rowStepsDegrees.alignChildren = ["left","center"]; 
	rowStepsDegrees.spacing = 10; 
	rowStepsDegrees.margins = 0; 

var inputStepsValue = rowStepsDegrees.add('edittext {properties: {name: "inputStepsValue"}}'); 
	inputStepsValue.text = "72"; 
	inputStepsValue.preferredSize.width = 50; 
	inputStepsValue.helpTip = "0, 1, 2, 4 do nothing tho.";

var dynamicDegrees = rowStepsDegrees.add("statictext", undefined, undefined, {name: "dynamicDegrees"});
	// text defined in function later

var staticNumberRevs = rightInputColumn.add("statictext", undefined, undefined, {name: "staticNumberRevs"}); 
	staticNumberRevs.text = "× Number of revolutions"; 

var rowRevsTotalIterations = rightInputColumn.add("group", undefined, {name: "rowRevsTotalIterations"}); 
	rowRevsTotalIterations.orientation = "row"; 
	rowRevsTotalIterations.alignChildren = ["left","center"]; 
	rowRevsTotalIterations.spacing = 10; 
	rowRevsTotalIterations.margins = 0; 

var inputRevsValue = rowRevsTotalIterations.add('edittext {properties: {name: "inputRevsValue"}}'); 
	inputRevsValue.text = "5"; 
	inputRevsValue.preferredSize.width = 50; 
	inputRevsValue.helpTip = "A layer will be created for every revolution.\nKeep it within reason.";

var dynamicTotalIterations = rowRevsTotalIterations.add("statictext", undefined, undefined, {name: "dynamicTotalIterations"}); 
	// text defined in function later
	dynamicTotalIterations.helpTip = "Photoshop will hate you if this is too high.";

var dividerA = rightInputColumn.add("panel", undefined, undefined, {name: "dividerA"}); 
	dividerA.alignment = "fill"; 

var rowNumShowAll = rightInputColumn.add("group"); 
	rowNumShowAll.orientation = "column"; 
	rowNumShowAll.alignChildren = ["left","center"]; 
	rowNumShowAll.spacing = 0; 
	rowNumShowAll.margins = 0; 

var staticNumShowAll = rowNumShowAll.add("statictext", undefined, undefined, {name: "staticNumShowAll2"}); 
	staticNumShowAll.text = "Number of revolutions to show all steps"; 

var inputShowRotationValue = rightInputColumn.add('edittext {properties: {name: "inputShowRotationValue"}}'); 
	inputShowRotationValue.text = "1"; 
	inputShowRotationValue.preferredSize.width = 50; 
	inputShowRotationValue.helpTip = "A layer will be created for every iteration of these revolutions.";

var limitModStart = 30;
var limitMod = 1;
var boolLimitLayers = rightInputColumn.add("checkbox", undefined, undefined, {name: "boolLimitLayers"}); 
	boolLimitLayers.text = "Limit new layers to every "+limitModStart+" steps"; 

var dividerB = rightInputColumn.add("panel", undefined, undefined, {name: "dividerB"}); 
	dividerB.alignment = "fill"; 

var dynamicNewLayers = rightInputColumn.add("statictext", undefined, undefined, {name: "dynamicNewLayers"}); 
	dynamicNewLayers.graphics.font = ScriptUI.newFont("Arial","BOLD",13);
	// text defined in function later

var dividerC = rightInputColumn.add("panel", undefined, undefined, {name: "dividerC"}); 
	dividerC.alignment = "fill"; 

var boolCounterClockwise = rightInputColumn.add("checkbox", undefined, undefined, {name: "boolCounterClockwise"}); 
	boolCounterClockwise.text = "Counter-clockwise"; 

var boolBackAndForth = rightInputColumn.add("checkbox", undefined, undefined, {name: "boolBackAndForth"}); 
	boolBackAndForth.text = "Back and forth revolutions"; 


// DIALOG BUTTONS
// ======
var dividerD = dialog.add("panel", undefined, undefined, {name: "dividerD"}); 
	dividerD.alignment = "fill"; 

var rowDialogButtons = dialog.add("group", undefined, {name: "rowDialogButtons"}); 
	rowDialogButtons.orientation = "row"; 
	rowDialogButtons.alignChildren = ["left","center"]; 
	rowDialogButtons.spacing = 10; 
	rowDialogButtons.margins = 9; 

var buttonCancel = rowDialogButtons.add("button", undefined, "Cancel", {name: "cancel"}); 

var buttonRotate = rowDialogButtons.add("button", undefined, "Rotate!", {name: "ok"}); 


// ======
// END DIALOG


// =======================================================
// FUNCTIONS FOR CHANGING TEXT BASED ON INPUT FIELDS
function set_degrees_text() {
	dynamicDegrees.text = "= " + ( Math.round (36000 / Number (inputStepsValue.text)) / 100 ) + "° per step";
}
set_degrees_text();

function set_iterations_text() {
	dynamicTotalIterations.text = "= " + Math.ceil (Number (inputStepsValue.text) * Number (inputRevsValue.text)) + " total iterations";
}
set_iterations_text();

function set_layers_text() {
	dynamicNewLayers.text = "Will result in " + Math.ceil ( ((Number (inputStepsValue.text) * Number (inputShowRotationValue.text)) / limitMod) + Number (inputRevsValue.text) ) + " new layers!!";
}
set_layers_text();

// LISTENING FOR CHANGING INPUT FIELDS
boolLimitLayers.onClick = function () {
	if (limitMod == 1) {
		limitMod = limitModStart;
	} else {
		limitMod = 1;
	}
	set_layers_text();
}
inputRevsValue.onChanging = function () {
	set_iterations_text();
	set_layers_text();
};
inputStepsValue.onChanging = function () {
	set_degrees_text();
	set_iterations_text();
	set_layers_text();
};
inputShowRotationValue.onChanging = function () {
	set_layers_text();
};


// =======================================================
// GET VALUES FOR INTERPOLATION AND ANCHORPOINT RADIOS
function selected_interpolation(agroup) {
	for (var i = 0; i < interpolationBicubic.children.length; i++) {
		if (interpolationBicubic.children[i].value == true) { return interpolationBicubic.children[i].text;}
	}
	for (var j = 0; j < interpolationOthers.children.length; j++) {
		if (interpolationOthers.children[j].value == true) { return interpolationOthers.children[j].text;}
	}
}
var anchorsarray = [
	["QCSCorner0","QCSSide0","QCSCorner1"],
	["QCSSide3","QCSAverage","QCSSide1"],
	["QCSCorner3","QCSSide2","QCSCorner2"]
];
var anchorsnamesarray = [
	["Top Left","Top","Top Right"],
	["Left","Center","Right"],
	["Bottom Left","Bottom","Bottom Right"]
];
function selected_anchorpoint(agroup) {
	for (var i = 0; i < agroup.children.length; i++) {
		for (var j = 0; j < 3; j++) {
			if (agroup.children[i].children[j].value == true) { return anchorsarray[i][j]; }
		}
	}
}
function selected_anchorpointname(agroup) {
	for (var i = 0; i < agroup.children.length; i++) {
		for (var j = 0; j < 3; j++) {
			if (agroup.children[i].children[j].value == true) { return anchorsnamesarray[i][j]; }
		}
	}
}


// =======================================================
// LAYER FUNCTIONS
function rotate_layer(a_degree_per, a_anchorpoint, a_interpolation) {
	var idtransform = stringIDToTypeID( "transform" );
		var desc7 = new ActionDescriptor();
		var idnull = stringIDToTypeID( "null" );
			var ref11 = new ActionReference();
			var idlayer = stringIDToTypeID( "layer" );
			var idordinal = stringIDToTypeID( "ordinal" );
			var idtargetEnum = stringIDToTypeID( "targetEnum" );
			ref11.putEnumerated( idlayer, idordinal, idtargetEnum );
		desc7.putReference( idnull, ref11 );
		var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
		var idquadCenterState = stringIDToTypeID( "quadCenterState" );
		var idQCSAverage = stringIDToTypeID( a_anchorpoint );
		desc7.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
		var idoffset = stringIDToTypeID( "offset" );
			var desc23 = new ActionDescriptor();
			var idhorizontal = stringIDToTypeID( "horizontal" );
			var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
			desc23.putUnitDouble( idhorizontal, idpixelsUnit, 0.000000 );
			var idvertical = stringIDToTypeID( "vertical" );
			var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
			desc23.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
		var idoffset = stringIDToTypeID( "offset" );
		desc7.putObject( idoffset, idoffset, desc23 );
		var idangle = stringIDToTypeID( "angle" );
		var idangleUnit = stringIDToTypeID( "angleUnit" );
		desc7.putUnitDouble( idangle, idangleUnit, a_degree_per );
		var idlinked = stringIDToTypeID( "linked" );
		desc7.putBoolean( idlinked, true );
		var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
		var idinterpolationType = stringIDToTypeID( "interpolationType" );
		var idbicubicSharper = stringIDToTypeID( a_interpolation );
		desc7.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubicSharper );
	executeAction( idtransform, desc7, DialogModes.NO );
};

function write_layer_name(a_new_layer, a_degree_per, a_iterations) {
	a_new_layer.name = "rotated " + a_iterations + " iterations of " + (Math.round(a_degree_per*100)/100) + "° equals " + (Math.round((a_iterations * a_degree_per)*100)/100) + "°";
}

function dupe_select_layer() {
	nl_new_layer = app.activeDocument.activeLayer.duplicate();
	app.activeDocument.activeLayer = nl_new_layer;
}



// =======================================================
// OK, THE DIALOG IS SUBMITTED
if (dialog.show() == 1) {

	// initialize variables
	var nonlethal_steps_per = Number(inputStepsValue.text);
	var nonlethal_degree_per = 360 / Number(inputStepsValue.text);
	if (boolCounterClockwise.value == true) {
		nonlethal_degree_per *= -1;
	}
	var nonlethal_revolutions = Number(inputRevsValue.text);
	var nonlethal_interpolation = selected_interpolation(interpolationPanel);
	var nonlethal_show_all = Number(inputShowRotationValue.text);
	var nonlethal_anchorpoint = selected_anchorpoint(anchorPanel);
	var nonlethal_anchorpointname = selected_anchorpointname(anchorPanel);
	var nonlethal_iterations = 0;  // the current number of times the image is rotated
	var nonlethal_degrees = 0;     // the current amount of degree rotation
	var nonlethal_backforth = "";  // add backforth to layer name if that's what it's doing
	if (boolBackAndForth.value == true) {
		nonlethal_backforth = " - backforth";
	}

	// set the initial layer name with info about settings
	app.activeDocument.activeLayer.name = "start layer - " + nonlethal_interpolation + " - " + nonlethal_anchorpointname + nonlethal_backforth;

	// if "show all steps per revolution" is set, create layers and rotate through each revolution
	if ( nonlethal_show_all > 0 ) {

		// loop for revolutions
		for (var nl_i=0; nl_i<nonlethal_show_all; nl_i++) {

			// flip pos/neg if doing back and forth
			if (boolBackAndForth.value == true && nl_i > 0) {
				nonlethal_degree_per *= -1;
			}

			// loop for steps
			for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {

				// dupe layers based on limit checkbox
				if (boolLimitLayers.value == true) {
					if (nl_j % limitMod == 0) {
						dupe_select_layer()
					}
				} else {
					dupe_select_layer()
				}

				rotate_layer(nonlethal_degree_per, nonlethal_anchorpoint, nonlethal_interpolation)

				nonlethal_iterations++;

				write_layer_name(nl_new_layer, nonlethal_degree_per, nonlethal_iterations)

			} // end loop steps

			app.activeDocument.save();

		} // end loop revolutions

	} // end if "show all steps per revolution"



	// loop for revolutions
	for (var nl_i=nonlethal_show_all; nl_i<nonlethal_revolutions; nl_i++) {

		if (boolBackAndForth.value == true && nl_i > nonlethal_show_all) {
			nonlethal_degree_per *= -1;
		}

		if (nl_i % 10 == 0) {
			app.activeDocument.save();
		}

		dupe_select_layer()

		// loop for steps
		for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {

			nonlethal_degrees += nonlethal_degree_per;

			rotate_layer(nonlethal_degree_per, nonlethal_anchorpoint, nonlethal_interpolation)

			nonlethal_iterations++;

			write_layer_name(nl_new_layer, nonlethal_degree_per, nonlethal_iterations)

		} // end loop for single revolution

	} // end loop for number of revolutions


	// =======================================================
	// set up animation - clear what’s there, then frames from layers

	// make sure it’s frame animation
	var idmakeFrameAnimation = stringIDToTypeID( "makeFrameAnimation" );
	executeAction( idmakeFrameAnimation, undefined, DialogModes.NO );

	// Needed to duplicate frame in order for the deletion to work
	var idduplicate = stringIDToTypeID( "duplicate" );
		var desc3196 = new ActionDescriptor();
		var idnull = stringIDToTypeID( "null" );
			var ref124 = new ActionReference();
			var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
			var idordinal = stringIDToTypeID( "ordinal" );
			var idtargetEnum = stringIDToTypeID( "targetEnum" );
			ref124.putEnumerated( idanimationFrameClass, idordinal, idtargetEnum );
		desc3196.putReference( idnull, ref124 );
	executeAction( idduplicate, desc3196, DialogModes.NO );

	// select all animation frames
	var idanimationSelectAll = stringIDToTypeID( "animationSelectAll" );
		var desc88 = new ActionDescriptor();
	executeAction( idanimationSelectAll, desc88, DialogModes.NO );

	// delete existing animation frames if need be
	var iddelete = stringIDToTypeID( "delete" );
		var desc77 = new ActionDescriptor();
		var idnull = stringIDToTypeID( "null" );
			var ref2323 = new ActionReference();
			var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
			var idordinal = stringIDToTypeID( "ordinal" );
			var idtargetEnum = stringIDToTypeID( "targetEnum" );
			ref2323.putEnumerated( idanimationFrameClass, idordinal, idtargetEnum );
		desc77.putReference( idnull, ref2323 );
	executeAction( iddelete, desc77, DialogModes.NO );

	// make animation from all layers
	var idanimationFramesFromLayers = stringIDToTypeID( "animationFramesFromLayers" );
		var desc8 = new ActionDescriptor();
	executeAction( idanimationFramesFromLayers, desc8, DialogModes.NO );


	app.activeDocument.save();

} // end show dialog


dialog.close();
