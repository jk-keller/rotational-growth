//
// by JK Keller, dilettante coder, use at your own risk
// https://jk-keller.com/o__o/rotational_growth
//
// 2022_07_18
//

var nonlethal_degrees = 0;
var nonlethal_angle = 6.000000;
var nonlethal_steps = 60;
var nonlethal_repeat = 5;
var nonlethal_interpolation = "bicubicSharper";
// automatic ?
// bicubic
// bicubicAutomatic
// bicubicSharper
// bicubicSmoother
// nearestNeighbor
// none?
// preserveDetails?

var nonlethal_rotate_layer = app.activeDocument.activeLayer;
// check name to see if continuing previous repeats
if ( nonlethal_rotate_layer.name.slice(0,8) == "rotated " && nonlethal_rotate_layer.name.slice(-1) == "°" ) {
    nonlethal_degrees = nonlethal_rotate_layer.name.slice(8,-1);
    alert("Continuing from " + nonlethal_degrees + "°…");
}
nonlethal_rotate_layer.name = "rotating me…";


// how many times to run full rotation?
for (var nl_i=0; nl_i<nonlethal_repeat; nl_i++) {


    // =======================================================
    // duplicate layer, rename new layer, then selct the rotating layer again
    var nl_new_layer = nonlethal_rotate_layer.duplicate();
    var nl_degrees = parseInt(nl_i * 360) + parseInt(nonlethal_degrees);
    nl_new_layer.name = "rotated " + nl_degrees + "°";
    app.activeDocument.activeLayer = nonlethal_rotate_layer;


    // how many times to run change angle for full rotation?
    for (var nl_j=0; nl_j<nonlethal_steps; nl_j++) {


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
            desc7.putUnitDouble( idangle, idangleUnit, nonlethal_angle );
            var idlinked = stringIDToTypeID( "linked" );
            desc7.putBoolean( idlinked, true );
            var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
            var idinterpolationType = stringIDToTypeID( "interpolationType" );
            var idbicubicSharper = stringIDToTypeID( nonlethal_interpolation );
            desc7.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubicSharper );
        executeAction( idtransform, desc7, DialogModes.NO );


    } // end loop to make full rotation


} // end loop for repeat rotations


// rename last layer
var nl_degrees = parseInt(nonlethal_repeat * 360) + parseInt(nonlethal_degrees);
nonlethal_rotate_layer.name = "rotated " + nl_degrees + "°";



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

