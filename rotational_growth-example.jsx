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

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

var statictext1 = dialog.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Turning into Turing"; 
    statictext1.justify = "center"; 
    statictext1.graphics.font = ScriptUI.newFont("Arial","BOLD",28);
    statictext1.preferredSize.height = 48; 


// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","top"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

// GROUP2
// ======
var group2 = group1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "column"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

// interpolationpanel
// ======
var interpolationpanel = group2.add("panel", undefined, undefined, {name: "interpolationpanel"}); 
    interpolationpanel.text = "Interpolation Method"; 
    interpolationpanel.orientation = "column"; 
    interpolationpanel.alignChildren = ["left","top"]; 
    interpolationpanel.spacing = 10; 
    interpolationpanel.margins = 16; 

var radiobutton1 = interpolationpanel.add("radiobutton", undefined, undefined, {name: "radiobutton1"}); 
    radiobutton1.text = "bicubic"; 
    radiobutton1.value = true; 

var radiobutton2 = interpolationpanel.add("radiobutton", undefined, undefined, {name: "radiobutton2"}); 
    radiobutton2.text = "bicubicSharper"; 

var radiobutton3 = interpolationpanel.add("radiobutton", undefined, undefined, {name: "radiobutton3"}); 
    radiobutton3.text = "bicubicSmoother"; 

var divider1 = interpolationpanel.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

var statictext2 = interpolationpanel.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "These two do not make Turing patterns:"; 

var radiobutton4 = interpolationpanel.add("radiobutton", undefined, undefined, {name: "radiobutton4"}); 
    radiobutton4.text = "bilinear"; 

var radiobutton5 = interpolationpanel.add("radiobutton", undefined, undefined, {name: "radiobutton5"}); 
    radiobutton5.text = "nearestNeighbor"; 

// PANEL2
// ======
var panel2 = group2.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "Anchor Point"; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["center","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 16; 
    panel2.helpTip = "What point should image rotate around";

// GROUP3
// ======
var group3 = panel2.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["center","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var radiobutton6 = group3.add("radiobutton", undefined, undefined, {name: "radiobutton6"}); 
var radiobutton7 = group3.add("radiobutton", undefined, undefined, {name: "radiobutton7"}); 
var radiobutton8 = group3.add("radiobutton", undefined, undefined, {name: "radiobutton8"}); 

// GROUP4
// ======
var group4 = panel2.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["center","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var radiobutton9 = group4.add("radiobutton", undefined, undefined, {name: "radiobutton9"}); 
var radiobutton10 = group4.add("radiobutton", undefined, undefined, {name: "radiobutton10"}); 
    radiobutton10.value = true; 
var radiobutton11 = group4.add("radiobutton", undefined, undefined, {name: "radiobutton11"}); 

// GROUP5
// ======
var group5 = panel2.add("group", undefined, {name: "group5"}); 
    group5.orientation = "row"; 
    group5.alignChildren = ["center","center"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

var radiobutton12 = group5.add("radiobutton", undefined, undefined, {name: "radiobutton12"}); 
var radiobutton13 = group5.add("radiobutton", undefined, undefined, {name: "radiobutton13"}); 
var radiobutton14 = group5.add("radiobutton", undefined, undefined, {name: "radiobutton14"}); 

group3.addEventListener ("click", function () {
    for (var i = 0; i < 3; i++) {
        group4.children[i].value = false;
        group5.children[i].value = false;
    }
});
group4.addEventListener ("click", function () {
    for (var i = 0; i < 3; i++) {
        group3.children[i].value = false;
        group5.children[i].value = false;
    }
});
group5.addEventListener ("click", function () {
    for (var i = 0; i < 3; i++) {
        group3.children[i].value = false;
        group4.children[i].value = false;
    }
});

// PANEL3
// ======
var panel3 = group1.add("panel", undefined, undefined, {name: "panel3"}); 
    panel3.text = "Number of Iterations"; 
    panel3.orientation = "column"; 
    panel3.alignChildren = ["left","top"]; 
    panel3.spacing = 10; 
    panel3.margins = 16; 

var statictext3 = panel3.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Number of steps per revolution"; 

// GROUP6
// ======
var group6 = panel3.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

var stepsvalue = group6.add('edittext {properties: {name: "stepsvalue"}}'); 
    stepsvalue.text = "72"; 
    stepsvalue.preferredSize.width = 50; 
    stepsvalue.helpTip = "0, 1, 2, 4 do nothing tho.";

var degreestext = group6.add("statictext", undefined, undefined, {name: "degreestext"}); 
    degreestext.text = "= 5° per step         "; 

// PANEL3
// ======
var statictext5 = panel3.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "× Number of revolutions"; 

// GROUP7
// ======
var group7 = panel3.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

var revsvalue = group7.add('edittext {properties: {name: "revsvalue"}}'); 
    revsvalue.text = "5"; 
    revsvalue.preferredSize.width = 50; 
    revsvalue.helpTip = "A layer will be created for every revolution.\nKeep it within reason.";

var iterationstext = group7.add("statictext", undefined, undefined, {name: "iterationstext"}); 
    iterationstext.text = "= 1800 total iterations  "; 
    iterationstext.helpTip = "Photoshop will hate you if this is too high.";

// PANEL3
// ======
var divider2 = panel3.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

var checkbox1 = panel3.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    checkbox1.text = "Counter-clockwise"; 

var divider3 = panel3.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.alignment = "fill"; 

var statictext7 = panel3.add("group"); 
    statictext7.orientation = "column"; 
    statictext7.alignChildren = ["left","center"]; 
    statictext7.spacing = 0; 

    statictext7.add("statictext", undefined, "Number of revolutions to", {name: "statictext7"}); 
    statictext7.add("statictext", undefined, "show all rotations", {name: "statictext72"}); 

var showrotationvalue = panel3.add('edittext {properties: {name: "showrotationvalue"}}'); 
    showrotationvalue.text = "1"; 
    showrotationvalue.preferredSize.width = 50; 
    showrotationvalue.helpTip = "A layer will be created for every iteration of these revolutions.";

var divider5 = panel3.add("panel", undefined, undefined, {name: "divider5"}); 
    divider5.alignment = "fill"; 

var layerstext = panel3.add("statictext", undefined, undefined, {name: "layerstext"}); 
    layerstext.text = "Will result in 77 new layers."; 


// DIALOG
// ======
var divider4 = dialog.add("panel", undefined, undefined, {name: "divider4"}); 
    divider4.alignment = "fill"; 

// GROUP8
// ======
var group8 = dialog.add("group", undefined, {name: "group8"}); 
    group8.orientation = "row"; 
    group8.alignChildren = ["left","center"]; 
    group8.spacing = 10; 
    group8.margins = 9; 

var button1 = group8.add("button", undefined, "Cancel", {name: "cancel"}); 

var button2 = group8.add("button", undefined, "Rotate!", {name: "ok"}); 


revsvalue.onChanging = function () {
    iterationstext.text = "= " + Math.ceil (Number (stepsvalue.text) * Number (revsvalue.text)) + " total iterations";
    layerstext.text = "Will result in " + Math.ceil (Number (stepsvalue.text) * Number (showrotationvalue.text) + Number (revsvalue.text)) + " new layers!!";
};
stepsvalue.onChanging = function () {
    degreestext.text = "= " + ( Math.round (36000 / Number (stepsvalue.text)) / 100 ) + "° per step";
    iterationstext.text = "= " + Math.ceil (Number (stepsvalue.text) * Number (revsvalue.text)) + " total iterations";
    layerstext.text = "Will result in " + Math.ceil (Number (stepsvalue.text) * Number (showrotationvalue.text) + Number (revsvalue.text)) + " new layers!!";
};
showrotationvalue.onChanging = function () {
    layerstext.text = "Will result in " + Math.ceil (Number (stepsvalue.text) * Number (showrotationvalue.text) + Number (revsvalue.text)) + " new layers";
};

function selected_rbutton (rbuttons) {
    for (var i = 0; i < rbuttons.children.length; i++) {
        if (rbuttons.children[i].value == true) { return rbuttons.children[i].text;}
    }
}

if (dialog.show() == 1) {
    var nonlethal_steps_per = stepsvalue.text;
    var nonlethal_degree_per = 360 / stepsvalue.text;
    var nonlethal_revolutions = revsvalue.text;
    var nonlethal_interpolation = selected_rbutton(interpolationpanel);
    var nonlethal_show_all = showrotationvalue.text;

    // initialize variables
    var nonlethal_iterations = 0;                                            // the current number of times the image is rotated
    // var nonlethal_steps_per = Math.ceil(360/Math.abs(nonlethal_degree_per)); // ~ how many iterations per 360° (1 revolution)
    var nonlethal_degrees = 0;                                               // the current amount of degree rotation


    // show the first few revolutions’ rotation
    if ( nonlethal_show_all > 0 ) {

        // loop for first few revolutions
        for (var nl_i=0; nl_i<nonlethal_show_all; nl_i++) {

            // loop for single revolution
            for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {

                // =======================================================
                // duplicate layer and select it
                var nl_new_layer = app.activeDocument.activeLayer.duplicate();
                app.activeDocument.activeLayer = nl_new_layer;

                // =======================================================
                // rotate
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
                    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
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
                    desc7.putUnitDouble( idangle, idangleUnit, nonlethal_degree_per );
                    var idlinked = stringIDToTypeID( "linked" );
                    desc7.putBoolean( idlinked, true );
                    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
                    var idinterpolationType = stringIDToTypeID( "interpolationType" );
                    var idbicubicSharper = stringIDToTypeID( nonlethal_interpolation );
                    desc7.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubicSharper );
                executeAction( idtransform, desc7, DialogModes.NO );

                nonlethal_iterations++;

                nl_new_layer.name = "rotated " + nonlethal_iterations + " iterations of " + nonlethal_degree_per + "° equals " + (nonlethal_iterations * nonlethal_degree_per) + "°";

            } // end loop for single revolution

        } // end loop for first few revolutions

    } // end if show the first few revolutions’ rotation


    // loop for number of revolutions
    for (var nl_i=nonlethal_show_all; nl_i<nonlethal_revolutions; nl_i++) {

        if (nl_i == nonlethal_show_all) {
            // =======================================================
            // duplicate layer and select it
            var nl_new_layer = app.activeDocument.activeLayer.duplicate();
            app.activeDocument.activeLayer = nl_new_layer;
        }


        // loop for single revolution
        for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {

            // keep track of the current revolution’s rotation
            var nl_rev_flag = false;
            var nl_temp_degrees = nonlethal_degrees + nonlethal_degree_per;
            if (nl_temp_degrees > 360) {
            alert (nl_temp_degrees);
                var nl_diff_degree_per = 360 - nonlethal_degrees;
                nonlethal_degrees -= 360;
                nl_rev_flag = true;
            } else if (nl_temp_degrees < -360) {
            alert (nl_temp_degrees);
                var nl_diff_degree_per = -360 - nonlethal_degrees;
                nonlethal_degrees += 360;
                nl_rev_flag = true;
            } else if ( nl_temp_degrees == 360 || nl_temp_degrees == -360 ) {
                nonlethal_degrees = 0;
                // duplicate layer and select it
                var nl_new_layer = app.activeDocument.activeLayer.duplicate();
                app.activeDocument.activeLayer = nl_new_layer;
            }

            if (nl_rev_flag == true) {
                // save current layer, then duplicate layer and select it
                var nl_prev_layer = app.activeDocument.activeLayer;
                var nl_diff_layer = app.activeDocument.activeLayer.duplicate();
                app.activeDocument.activeLayer = nl_diff_layer;

                // =======================================================
                // rotate
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
                    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
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
                    desc7.putUnitDouble( idangle, idangleUnit, nl_diff_degree_per );
                    var idlinked = stringIDToTypeID( "linked" );
                    desc7.putBoolean( idlinked, true );
                    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
                    var idinterpolationType = stringIDToTypeID( "interpolationType" );
                    var idbicubicSharper = stringIDToTypeID( nonlethal_interpolation );
                    desc7.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubicSharper );
                executeAction( idtransform, desc7, DialogModes.NO );

                nl_diff_layer.name = "between " + nonlethal_iterations + "/" + (nonlethal_iterations+1) + " iterations of " + nonlethal_degree_per + "° equals " + (nonlethal_iterations * nonlethal_degree_per + nl_diff_degree_per) + "°";

                app.activeDocument.activeLayer = nl_prev_layer;

                // =======================================================
                var idmove = stringIDToTypeID( "move" );
                    var desc259 = new ActionDescriptor();
                    var idnull = stringIDToTypeID( "null" );
                        var ref12 = new ActionReference();
                        var idlayer = stringIDToTypeID( "layer" );
                        var idordinal = stringIDToTypeID( "ordinal" );
                        var idtargetEnum = stringIDToTypeID( "targetEnum" );
                        ref12.putEnumerated( idlayer, idordinal, idtargetEnum );
                    desc259.putReference( idnull, ref12 );
                    var idto = stringIDToTypeID( "to" );
                        var ref13 = new ActionReference();
                        var idlayer = stringIDToTypeID( "layer" );
                        var idordinal = stringIDToTypeID( "ordinal" );
                        var idnext = stringIDToTypeID( "next" );
                        ref13.putEnumerated( idlayer, idordinal, idnext );
                    desc259.putReference( idto, ref13 );
                executeAction( idmove, desc259, DialogModes.NO );

                var nl_rev_flag = false;

            } else {

                nonlethal_degrees += nonlethal_degree_per;

                // =======================================================
                // rotate
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
                    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
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
                    desc7.putUnitDouble( idangle, idangleUnit, nonlethal_degree_per );
                    var idlinked = stringIDToTypeID( "linked" );
                    desc7.putBoolean( idlinked, true );
                    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
                    var idinterpolationType = stringIDToTypeID( "interpolationType" );
                    var idbicubicSharper = stringIDToTypeID( nonlethal_interpolation );
                    desc7.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubicSharper );
                executeAction( idtransform, desc7, DialogModes.NO );

                nonlethal_iterations++;

                nl_new_layer.name = "rotated " + nonlethal_iterations + " iterations of " + nonlethal_degree_per + "° equals " + (nonlethal_iterations * nonlethal_degree_per) + "°";

            } // end if we crossed 360 degrees

        } // end loop for single revolution

    } // end loop for number of revolutions


    // =======================================================
    // set up animation - clear what’s there, then frames from layers

    // =======================================================
    // make sure it’s frame animation
    var idmakeFrameAnimation = stringIDToTypeID( "makeFrameAnimation" );
    executeAction( idmakeFrameAnimation, undefined, DialogModes.NO );

    // =======================================================
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

    // =======================================================
    // select all animation frames
    var idanimationSelectAll = stringIDToTypeID( "animationSelectAll" );
        var desc88 = new ActionDescriptor();
    executeAction( idanimationSelectAll, desc88, DialogModes.NO );

    // =======================================================
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

    // =======================================================
    // make animation from all layers
    var idanimationFramesFromLayers = stringIDToTypeID( "animationFramesFromLayers" );
        var desc8 = new ActionDescriptor();
    executeAction( idanimationFramesFromLayers, desc8, DialogModes.NO );

} // end show dialog
