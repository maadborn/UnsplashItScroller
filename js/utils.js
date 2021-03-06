/*
    Optimized scroll event
    https://developer.mozilla.org/en-US/docs/Web/Events/scroll
*/

'use strict';

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        
        var running = false;
        
        var func = function() {
            if (running) { 
                return; 
            }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        
        obj.addEventListener(type, func);
    };

    throttle ('scroll', 'optimizedScroll');
})();