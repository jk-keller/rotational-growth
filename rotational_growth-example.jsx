//
// by JK Keller, dilettante coder, use at your own risk
// https://jk-keller.com/o__o/rotational_growth
//
// 2022_07_18
//


// prompt the user for settings
var nonlethal_degree_per = parseFloat(prompt("Degrees per rotation?\r\r0–360, (0, 90, 180, 270, 360 do nothing tho)", "5"));
var nonlethal_revolutions = parseInt(prompt("How many revolutions?\r\rGreater than 2, but probably should keep this fairly low at first", "5"));
var nonlethal_interpolation = prompt("Rotation Interpolation?\r\rMust be one of these four (bicubicSharper is my fave):\rbilinear\rbicubic\rbicubicSharper\rbicubicSmoother\rnearestNeighbor", "bicubicSharper");
var nonlethal_show_all = parseInt(prompt("Show rotation for the first how many revolutions?\r\rProbably want to keep small small", "0"));

// initialize variables
var nonlethal_iterations = 0;                                            // the number of times the image is rotated
var nonlethal_steps_per = Math.ceil(360/Math.abs(nonlethal_degree_per)); // ~ how many iterations per 360° (1 revolution)
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

    // =======================================================
    // duplicate layer and select it
    var nl_new_layer = app.activeDocument.activeLayer.duplicate();
    app.activeDocument.activeLayer = nl_new_layer;


    // loop for single revolution
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

        nl_new_layer.name = "rotated " + nonlethal_iterations + " iterations of " + nonlethal_degree_per + "° equals " + (nonlethal_iterations * nonlethal_degree_per) + "°";

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

