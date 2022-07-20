//
// by JK Keller, dilettante coder, use at your own risk
// https://jk-keller.com/o__o/rotational_growth
//
// 2022_07_18
//

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
nonlethal_rotate_layer.name = "rotating me…";

// with help from: https://stackoverflow.com/questions/63774170/get-layer-id-from-photoshop-layer
// var ref = new ActionReference();
// ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt')); // reference is active layer
// var layerDesc = executeActionGet(ref);
// var nonlethal_rotate_layer_id = layerDesc.getInteger(stringIDToTypeID('layerID'));


// how many times to run full rotation?
for (var nl_i=0; nl_i<nonlethal_repeat; nl_i++) {


    // =======================================================
    // duplicate layer & rename it
    var nl_new_layer = nonlethal_rotate_layer.duplicate();
    nl_new_layer.name = "rotated " + ( nl_i * 360 ) + "°";
    // var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
    // executeAction( idcopyToLayer, undefined, DialogModes.NO );

    // =======================================================
    // select layer to rotate
    app.activeDocument.activeLayer = nonlethal_rotate_layer;
    // var idselect = stringIDToTypeID( "select" );
    //     var desc945 = new ActionDescriptor();
    //     var idnull = stringIDToTypeID( "null" );
    //         var ref7 = new ActionReference();
    //         var idlayer = stringIDToTypeID( "layer" );
    //         ref7.putName( idlayer, nonlethal_rotate_layer_name );
    //     desc945.putReference( idnull, ref7 );
    //     var idmakeVisible = stringIDToTypeID( "makeVisible" );
    //     desc945.putBoolean( idmakeVisible, false );
    //     var idlayerID = stringIDToTypeID( "layerID" );
    //         var list11 = new ActionList();
    //         list11.putInteger( nonlethal_rotate_layer_id );
    //     desc945.putList( idlayerID, list11 );
    // executeAction( idselect, desc945, DialogModes.NO );


    // how many times to run change angle for full rotation?
    for (var nl_j=0; nl_j<nonlethal_steps; nl_j++) {


        // =======================================================
        // rotate
        // nonlethal_rotate_layer.rotate(6.000000);
        var idtransform = stringIDToTypeID( "transform" );
            var desc415 = new ActionDescriptor();
            var idnull = stringIDToTypeID( "null" );
                var ref3 = new ActionReference();
                var idlayer = stringIDToTypeID( "layer" );
                var idordinal = stringIDToTypeID( "ordinal" );
                var idtargetEnum = stringIDToTypeID( "targetEnum" );
                ref3.putEnumerated( idlayer, idordinal, idtargetEnum );
            desc415.putReference( idnull, ref3 );
            var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
            var idquadCenterState = stringIDToTypeID( "quadCenterState" );
            var idQCSAverage = stringIDToTypeID( "QCSAverage" );
            desc415.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
            var idoffset = stringIDToTypeID( "offset" );
                var desc416 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc416.putUnitDouble( idhorizontal, idpixelsUnit, 0.000000 );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc416.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
            var idoffset = stringIDToTypeID( "offset" );
            desc415.putObject( idoffset, idoffset, desc416 );
            var idangle = stringIDToTypeID( "angle" );
            var idangleUnit = stringIDToTypeID( "angleUnit" );
            desc415.putUnitDouble( idangle, idangleUnit, nonlethal_angle );
            var idlinked = stringIDToTypeID( "linked" );
            desc415.putBoolean( idlinked, true );
            var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
            var idinterpolationType = stringIDToTypeID( "interpolationType" );
            var idbicubicSharper = stringIDToTypeID( nonlethal_interpolation );
            desc415.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubicSharper );
        executeAction( idtransform, desc415, DialogModes.NO );


    } // end loop to make full rotation


} // end loop for repeat rotations


// rename last layer
nonlethal_rotate_layer.name = "rotated " + ( nonlethal_repeat * 360 ) + "°";


// =======================================================
// make sure it’s frame animation
var idmakeFrameAnimation = stringIDToTypeID( "makeFrameAnimation" );
executeAction( idmakeFrameAnimation, undefined, DialogModes.NO );

// =======================================================
// make animation from all layers
var idanimationFramesFromLayers = stringIDToTypeID( "animationFramesFromLayers" );
    var desc999 = new ActionDescriptor();
executeAction( idanimationFramesFromLayers, desc999, DialogModes.NO );

// =======================================================
// select all animation frames
var idanimationSelectAll = stringIDToTypeID( "animationSelectAll" );
    var desc1004 = new ActionDescriptor();
executeAction( idanimationSelectAll, desc1004, DialogModes.NO );

// =======================================================
// reverse animation frames
var idreverse = stringIDToTypeID( "reverse" );
    var desc1002 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref24 = new ActionReference();
        var idanimationFrameClass = stringIDToTypeID( "animationFrameClass" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref24.putEnumerated( idanimationFrameClass, idordinal, idtargetEnum );
    desc1002.putReference( idnull, ref24 );
executeAction( idreverse, desc1002, DialogModes.NO );

