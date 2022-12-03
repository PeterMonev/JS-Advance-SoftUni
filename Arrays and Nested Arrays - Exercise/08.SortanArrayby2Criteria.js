function sortAnArraBy2Criteria(array) {
    'use strict';

     array.sort((a,b)=> 
        a.length - b.length || a.localeCompare(b)
    )

   return array.join('\n');
   
}
sortAnArraBy2Criteria(["alpha", "beta", "gamma"]);
