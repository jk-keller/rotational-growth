//
// by JK Keller, dilettante coder, use at your own risk
// https://jk-keller.com/o__o/rotational_growth
//
// 2022_07_18
//

var nonlethal_degree_per = parseFloat(prompt("Degrees per rotation?\r\r0–360, (0, 90, 180, 270, 360 do nothing tho)", "5"));
var nonlethal_revolutions = parseInt(prompt("How many revolutions?\r\rGreater than 2, but probably should keep this fairly low at first", "5"));
var nonlethal_interpolation = prompt("Rotation Interpolation?\r\rMust be one of these four (bicubicSharper is my fave):\rbicubic\rbicubicSharper\rbicubicSmoother\rnearestNeighbor", "bicubicSharper");

var nonlethal_iterations = 0; // the number of times the image is rotated
var nonlethal_steps_per = Math.ceil(360/Math.abs(nonlethal_degree_per)); // ~ how many iterations per 360° (1 revolution)
var nonlethal_degrees = 0; // the current amount of degree rotation

var nonlethal_layer = app.activeDocument.activeLayer;

// check name to see if continuing previous repeats
var nl_split = nonlethal_layer.name.split(" ");
if ( nl_split[2] == "iterations" ) {
    nonlethal_iterations = nl_split[1];
    nonlethal_degrees = nl_split[6].slice(0,-1);
    alert("Continuing from " + nonlethal_iterations + " iterations and " + nonlethal_degrees + "°…");

    nonlethal_layer.name = "rotating me…";

} else {

    // =======================================================
    // save as new file
    var nl_path = app.activeDocument.path;
    var nonlethal_filename = nl_path + "/Rotated--" + nonlethal_degree_per + "deg-" + nonlethal_interpolation + ".psb";

    var idsave = stringIDToTypeID( "save" );
        var desc5162 = new ActionDescriptor();
        var idas = stringIDToTypeID( "as" );
            var desc5163 = new ActionDescriptor();
            var idmaximizeCompatibility = stringIDToTypeID( "maximizeCompatibility" );
            desc5163.putBoolean( idmaximizeCompatibility, true );
        var idlargeDocumentFormat = stringIDToTypeID( "largeDocumentFormat" );
        desc5162.putObject( idas, idlargeDocumentFormat, desc5163 );
        var idin = stringIDToTypeID( "in" );
        desc5162.putPath( idin, new File( nonlethal_filename ) );
        var iddocumentID = stringIDToTypeID( "documentID" );
        desc5162.putInteger( iddocumentID, 71123 );
        var idlowerCase = stringIDToTypeID( "lowerCase" );
        desc5162.putBoolean( idlowerCase, true );
        var idsaveStage = stringIDToTypeID( "saveStage" );
        var idsaveStageType = stringIDToTypeID( "saveStageType" );
        var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
        desc5162.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
    executeAction( idsave, desc5162, DialogModes.NO );

    nonlethal_layer.name = "rotating me…";

    // run first two revolutions
    for (var nl_i=0; nl_i<2; nl_i++) {

        // how many times to run change angle for full rotation?
        for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {

            // =======================================================
            // duplicate layer, rename new layer, then selct the rotating layer again
            var nl_new_layer = nonlethal_layer.duplicate();
            nl_new_layer.name = "rotated " + nonlethal_iterations + " iterations of " + nonlethal_degree_per + "° equals " + (nonlethal_iterations * nonlethal_degree_per) + "°";
            app.activeDocument.activeLayer = nonlethal_layer;

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

        } // end loop to make full rotation


    } // end loop for repeat rotations

} // end if not continuing


// how many times to run full rotation?
for (var nl_i=2; nl_i<nonlethal_revolutions; nl_i++) {


    // =======================================================
    // duplicate layer, rename new layer, then selct the rotating layer again
    var nl_new_layer = nonlethal_layer.duplicate();
    nl_new_layer.name = "rotated " + nonlethal_iterations + " iterations of " + nonlethal_degree_per + "° equals " + (nonlethal_iterations * nonlethal_degree_per) + "°";
    app.activeDocument.activeLayer = nonlethal_layer;


    // how many times to run change angle for full rotation?
    for (var nl_j=0; nl_j<nonlethal_steps_per; nl_j++) {


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


    } // end loop to make full rotation


} // end loop for repeat rotations


// rename last layer
nonlethal_layer.name = "rotated " + nonlethal_iterations + " iterations of " + nonlethal_degree_per + "° equals " + (nonlethal_iterations * nonlethal_degree_per) + "°";


// set up animation

// =======================================================
// make sure it’s frame animation
var idmakeFrameAnimation = stringIDToTypeID( "makeFrameAnimation" );
executeAction( idmakeFrameAnimation, undefined, DialogModes.NO );

// =======================================================
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

// =======================================================
// select all animation frames
var idanimationSelectAll = stringIDToTypeID( "animationSelectAll" );
    var desc88 = new ActionDescriptor();
executeAction( idanimationSelectAll, desc88, DialogModes.NO );

// =======================================================
// reverse animation frames
var idreverse = stringIDToTypeID( "reverse" );
    var desc888 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref8888 = new ActionReference();
        var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref8888.putEnumerated( idanimationFrameClass, idordinal, idtargetEnum );
    desc888.putReference( idnull, ref8888 );
executeAction( idreverse, desc888, DialogModes.NO );


// save the file
app.activeDocument.save();
