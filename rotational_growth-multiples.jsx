//
// by JK Keller, dilettante coder, use at your own risk
// https://jk-keller.com/o__o/rotational_growth
//
// 2022_07_18
//

// var nonlethal_angle = parseFloat(prompt("Degrees per rotation?\r\r0–360, (0, 90, 180, 270, 360 do nothing tho)", "5"));
// var nonlethal_revolutions = parseInt(prompt("How many revolutions?\r\rGreater than 2, but probably should keep this fairly low at first", "20"));
// var nonlethal_interpolation = prompt("Rotation Interpolation?\r\rMust be one of these four (bicubicSharper is my fave):\rbicubic\rbicubicSharper\rbicubicSmoother\rnearestNeighbor", "bicubicSharper");

var nonlethal_degrees = 0;
var nonlethal_angle = 0.500000;
var nonlethal_steps = Math.ceil(360/Math.abs(nonlethal_angle));
var nonlethal_revolutions = 60;
var nonlethal_interpolation = "bicubicSharper";


// multiples

for (var nl_k=7; nl_k<13; nl_k++) {
    var nonlethal_angle = parseFloat(nl_k);
    var nonlethal_steps = Math.ceil(360/Math.abs(nonlethal_angle));
    var nonlethal_revolutions = 120;
    var nonlethal_interpolation = "bicubicSharper";


    // =======================================================
    var idopen = stringIDToTypeID( "open" );
        var desc5143 = new ActionDescriptor();
        var iddontRecord = stringIDToTypeID( "dontRecord" );
        desc5143.putBoolean( iddontRecord, false );
        var idforceNotify = stringIDToTypeID( "forceNotify" );
        desc5143.putBoolean( idforceNotify, true );
        var idnull = stringIDToTypeID( "null" );
        desc5143.putPath( idnull, new File( "/Users/jkkeller/Desktop/grey_gradient-rgb-1920x1080.psb" ) );
        var iddocumentID = stringIDToTypeID( "documentID" );
        desc5143.putInteger( iddocumentID, 71123 );
    executeAction( idopen, desc5143, DialogModes.NO );


    var nonlethal_rotate_layer = app.activeDocument.activeLayer;
    // check name to see if continuing previous repeats
    if ( nonlethal_rotate_layer.name.slice(0,8) == "rotated " && nonlethal_rotate_layer.name.slice(-1) == "°" ) {
        nonlethal_degrees = nonlethal_rotate_layer.name.slice(8,-1);
        alert("Continuing from " + nonlethal_degrees + "°…");
    }
    nonlethal_rotate_layer.name = "rotating me…";


    // run first two revolutions
    for (var nl_i=0; nl_i<2; nl_i++) {

        // how many times to run change angle for full rotation?
        for (var nl_j=0; nl_j<nonlethal_steps; nl_j++) {

            // =======================================================
            // duplicate layer, rename new layer, then selct the rotating layer again
            var nl_new_layer = nonlethal_rotate_layer.duplicate();
            var nl_degrees = parseInt(nl_i * 360) + parseInt(nl_j * parseInt(360/nonlethal_steps)) + parseInt(nonlethal_degrees);
            nl_new_layer.name = "rotated " + nl_degrees + "°";
            app.activeDocument.activeLayer = nonlethal_rotate_layer;

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



    // how many times to run full rotation?
    for (var nl_i=2; nl_i<nonlethal_revolutions; nl_i++) {


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
    var nl_degrees = parseInt(nonlethal_revolutions * 360) + parseInt(nonlethal_degrees);
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




    // =======================================================
    // save as new file
    var nl_fileneame = "/Users/jkkeller/Desktop/grey_gradient-rgb-" + nonlethal_angle + "deg-" + nonlethal_interpolation + ".psb";

    var idsave = stringIDToTypeID( "save" );
        var desc5162 = new ActionDescriptor();
        var idas = stringIDToTypeID( "as" );
            var desc5163 = new ActionDescriptor();
            var idmaximizeCompatibility = stringIDToTypeID( "maximizeCompatibility" );
            desc5163.putBoolean( idmaximizeCompatibility, true );
        var idlargeDocumentFormat = stringIDToTypeID( "largeDocumentFormat" );
        desc5162.putObject( idas, idlargeDocumentFormat, desc5163 );
        var idin = stringIDToTypeID( "in" );
        desc5162.putPath( idin, new File( nl_fileneame ) );
        var iddocumentID = stringIDToTypeID( "documentID" );
        desc5162.putInteger( iddocumentID, 71123 );
        var idlowerCase = stringIDToTypeID( "lowerCase" );
        desc5162.putBoolean( idlowerCase, true );
        var idsaveStage = stringIDToTypeID( "saveStage" );
        var idsaveStageType = stringIDToTypeID( "saveStageType" );
        var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
        desc5162.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
    executeAction( idsave, desc5162, DialogModes.NO );


    // =======================================================
    // close file
    var idclose = stringIDToTypeID( "close" );
        var desc7196 = new ActionDescriptor();
        var iddocumentID = stringIDToTypeID( "documentID" );
        desc7196.putInteger( iddocumentID, 71123 );
        var idforceNotify = stringIDToTypeID( "forceNotify" );
        desc7196.putBoolean( idforceNotify, true );
    executeAction( idclose, desc7196, DialogModes.NO );


} // end multiples loop
