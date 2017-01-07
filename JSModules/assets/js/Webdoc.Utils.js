

Webdoc = (function (webdoc) {

    webdoc.mod3 = function () {
        // added method...
        console.info('==mod3==')
    };

    webdoc.useCore = function () {
        console.info('==uses core==')
    }

    return webdoc;

}(Webdoc || {}));