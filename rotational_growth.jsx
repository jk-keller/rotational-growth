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
    dialog.text = "Turning into Turing"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

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

var interpgroup1 = interpolationpanel.add("group", undefined, {name: "interpgroup1"}); 
    interpgroup1.orientation = "column"; 
    interpgroup1.alignChildren = ["left","top"]; 
    interpgroup1.spacing = 10; 

var radiobutton1 = interpgroup1.add("radiobutton", undefined, undefined, {name: "radiobutton1"}); 
    radiobutton1.text = "bicubic"; 
    radiobutton1.value = true; 

var radiobutton2 = interpgroup1.add("radiobutton", undefined, undefined, {name: "radiobutton2"}); 
    radiobutton2.text = "bicubicSharper"; 

var radiobutton3 = interpgroup1.add("radiobutton", undefined, undefined, {name: "radiobutton3"}); 
    radiobutton3.text = "bicubicSmoother"; 

var statictext2 = interpolationpanel.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "These don’t make Turing patterns:"; 

var interpgroup2 = interpolationpanel.add("group", undefined, {name: "interpgroup2"}); 
    interpgroup2.orientation = "column"; 
    interpgroup2.alignChildren = ["left","top"]; 
    interpgroup2.spacing = 10; 

var radiobutton4 = interpgroup2.add("radiobutton", undefined, undefined, {name: "radiobutton4"}); 
    radiobutton4.text = "bilinear"; 

var radiobutton5 = interpgroup2.add("radiobutton", undefined, undefined, {name: "radiobutton5"}); 
    radiobutton5.text = "nearestNeighbor"; 

interpgroup1.addEventListener ("click", function () {
    for (var i = 0; i < 2; i++) {
        interpgroup2.children[i].value = false;
    }
});
interpgroup2.addEventListener ("click", function () {
    for (var i = 0; i < 3; i++) {
        interpgroup1.children[i].value = false;
    }
});

// anchorpanel
// ======
var anchorpanel = group2.add("panel", undefined, undefined, {name: "anchorpanel"}); 
    anchorpanel.text = "Anchor Point"; 
    anchorpanel.orientation = "column"; 
    anchorpanel.alignment = "fill"; 
    anchorpanel.alignChildren = ["center","top"]; 
    anchorpanel.spacing = 10; 
    anchorpanel.margins = 16; 
    anchorpanel.helpTip = "What point should image rotate around";

// GROUP3
// ======
var group3 = anchorpanel.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["center","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var radiobutton6 = group3.add("radiobutton", undefined, undefined, {name: "radiobutton6"}); 
var radiobutton7 = group3.add("radiobutton", undefined, undefined, {name: "radiobutton7"}); 
var radiobutton8 = group3.add("radiobutton", undefined, undefined, {name: "radiobutton8"}); 

// GROUP4
// ======
var group4 = anchorpanel.add("group", undefined, {name: "group4"}); 
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
var group5 = anchorpanel.add("group", undefined, {name: "group5"}); 
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
    degreestext.text = "= " + ( Math.round (36000 / Number (stepsvalue.text)) / 100 ) + "° per step         "; 

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
    iterationstext.text = "= " + Math.ceil (Number (stepsvalue.text) * Number (revsvalue.text)) + " total iterations       "; 
    iterationstext.helpTip = "Photoshop will hate you if this is too high.";

// PANEL3
// ======
var divider3 = panel3.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.alignment = "fill"; 

var statictext7 = panel3.add("group"); 
    statictext7.orientation = "column"; 
    statictext7.alignChildren = ["left","center"]; 
    statictext7.spacing = 0; 

    statictext7.add("statictext", undefined, "Number of revolutions to show all steps", {name: "statictext72"}); 

var showrotationvalue = panel3.add('edittext {properties: {name: "showrotationvalue"}}'); 
    showrotationvalue.text = "1"; 
    showrotationvalue.preferredSize.width = 50; 
    showrotationvalue.helpTip = "A layer will be created for every iteration of these revolutions.";

var limitMod = 30; // also change in limitLayers.onchanging
var limitlayers = panel3.add("checkbox", undefined, undefined, {name: "limitlayers"}); 
    limitlayers.text = "Limit new layers to every "+limitMod+" steps"; 
    limitlayers.value = true; 

var divider5 = panel3.add("panel", undefined, undefined, {name: "divider5"}); 
    divider5.alignment = "fill"; 

var layerstext = panel3.add("statictext", undefined, undefined, {name: "layerstext"}); 
    layerstext.text = "Will result in " + Math.ceil (Number (stepsvalue.text) * Number (showrotationvalue.text) + Number (revsvalue.text)) + " new layers.     "; 
    layerstext.graphics.font = ScriptUI.newFont("Arial","BOLD",13);

var divider2 = panel3.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

var counterclockwise = panel3.add("checkbox", undefined, undefined, {name: "counterclockwise"}); 
    counterclockwise.text = "Counter-clockwise"; 

var backandforth = panel3.add("checkbox", undefined, undefined, {name: "backandforth"}); 
    backandforth.text = "Back and forth revolutions"; 


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



function numOfIterations() {
    iterationstext.text = "= " + Math.ceil (Number (stepsvalue.text) * Number (revsvalue.text)) + " total iterations";
}
numOfIterations();
function numOfLayers() {
    layerstext.text = "Will result in " + Math.ceil ( ((Number (stepsvalue.text) * Number (showrotationvalue.text)) / 30) + Number (revsvalue.text) ) + " new layers!!";
}
numOfLayers();

limitlayers.onChinging = function () {
    if (limitlayers.value == true) {
        limitMod = 30;
    } else {
        limitMod = 1;
    }
    numOfLayers();
}
revsvalue.onChanging = function () {
    numOfIterations();
    numOfLayers();
};
stepsvalue.onChanging = function () {
    degreestext.text = "= " + ( Math.round (36000 / Number (stepsvalue.text)) / 100 ) + "° per step";
    numOfIterations();
    numOfLayers();
};
showrotationvalue.onChanging = function () {
    numOfLayers();
};


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

function selected_interpolation(agroup) {
    for (var i = 0; i < interpgroup1.children.length; i++) {
        if (interpgroup1.children[i].value == true) { return interpgroup1.children[i].text;}
    }
    for (var j = 0; j < interpgroup2.children.length; j++) {
        if (interpgroup2.children[j].value == true) { return interpgroup2.children[j].text;}
    }
}
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

if (dialog.show() == 1) {
    var nonlethal_steps_per = Number(stepsvalue.text);
    var nonlethal_degree_per = 360 / Number(stepsvalue.text);
    var nonlethal_revolutions = Number(revsvalue.text);
    var nonlethal_interpolation = selected_interpolation(interpolationpanel);

    var nonlethal_show_all = Number(showrotationvalue.text);
    var nonlethal_anchorpoint = selected_anchorpoint(anchorpanel);
    var nonlethal_anchorpointname = selected_anchorpointname(anchorpanel);
    if (counterclockwise.value == true) {
        nonlethal_degree_per *= -1;
    }

    // initialize variables
    var nonlethal_iterations = 0;  // the current number of times the image is rotated
    var nonlethal_degrees = 0;     // the current amount of degree rotation
    var nonlethal_backforth = "";   // add backforth to layer name if that's what it's doing
    if (backandforth.value == true) {
        nonlethal_backforth = " - backforth";
    }

    app.activeDocument.activeLayer.name = "start layer - " + nonlethal_interpolation + " - " + nonlethal_anchorpointname + nonlethal_backforth;

    // show the first few revolutions’ rotation
    if ( nonlethal_show_all > 0 ) {

        // loop for first few revolutions
        for (var nl_i=0; nl_i<nonlethal_show_all; nl_i++) {

            if (backandforth.value == true) {
                if (nl_i > 0) {
                    nonlethal_degree_per *= -1;
                }
            }

            // loop for single revolution
            for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {

                if (limitlayers.value == true) {
                    if (nl_j % 30 == 0) {
                        // =======================================================
                        // duplicate layer and select it
                        var nl_new_layer = app.activeDocument.activeLayer.duplicate();
                        app.activeDocument.activeLayer = nl_new_layer;
                        // app.refresh();
                    }
                } else {
                    // =======================================================
                    // duplicate layer and select it
                    var nl_new_layer = app.activeDocument.activeLayer.duplicate();
                    app.activeDocument.activeLayer = nl_new_layer;
                    // app.refresh();
                }

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
                    var idQCSAverage = stringIDToTypeID( nonlethal_anchorpoint );
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

                nl_new_layer.name = "rotated " + nonlethal_iterations + " iterations of " + (Math.round(nonlethal_degree_per*100)/100) + "° equals " + (Math.round((nonlethal_iterations * nonlethal_degree_per)*100)/100) + "°";

            } // end loop for single revolution

        } // end loop for first few revolutions

    } // end if show the first few revolutions’ rotation


    // loop for number of revolutions
    for (var nl_i=nonlethal_show_all; nl_i<nonlethal_revolutions; nl_i++) {

        if (backandforth.value == true) {
            if (nl_i > nonlethal_show_all) {
                nonlethal_degree_per *= -1;
            }
        }

        if (nl_i % 10 == 0) {
            app.activeDocument.save();
        }

        // =======================================================
        // duplicate layer and select it
        var nl_new_layer = app.activeDocument.activeLayer.duplicate();
        app.activeDocument.activeLayer = nl_new_layer;


        // loop for single revolution
        for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {

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
                var idQCSAverage = stringIDToTypeID( nonlethal_anchorpoint );
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

            nl_new_layer.name = "rotated " + nonlethal_iterations + " iterations of " + (Math.round(nonlethal_degree_per*100)/100) + "° equals " + (Math.round((nonlethal_iterations * nonlethal_degree_per)*100)/100) + "°";

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


dialog.close();
// dialog.show();
// dialog.close();

app.activeDocument.save();
