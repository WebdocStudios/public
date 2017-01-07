

Webdoc = (function (webdoc) {

    function internalFunction(input) {
        return input * 10;
    }

    webdoc.mod2 = function () {
        // added method...
        console.info('==mod2==')

        console.dir(internalFunction(5));

    };

    return webdoc;

}(Webdoc || {}));


//Webdoc = (function (webdoc) {
    

//    webdoc.internal = function() {
//        console.info('mod 3 initialized')
//    }

//    return {
//        Init2: webdoc.internal
//    }

//}(Webdoc));