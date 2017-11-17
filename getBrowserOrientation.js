var getBrowserOrientation = (function(){
    
    'use strict';

    var innerOrientation = function(){

        var windowWidth     = window.innerWidth,
            windowHeight    = window.innerHeight,
            orientation     = '';

        if (windowWidth <= windowHeight) {

            orientation = 'portrait';

        } else {

            orientation = 'landscape';

        }

        return orientation;

    }
    
    var outerOrientation = function(){
        
        var windowWidth     = window.outerWidth,
            windowHeight    = window.outerHeight,
            orientation     = '';

        if (windowWidth <= windowHeight) {

            orientation = 'portrait';

        } else {

            orientation = 'landscape';

        }

        return orientation;

    }
    
    return {
    
    	innerOrientation: innerOrientation,
        outerOrientation: outerOrientation
    
    }

})();