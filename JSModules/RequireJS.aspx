<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RequireJS.aspx.cs" Inherits="JSModules.RequireJS" %>

<!DOCTYPE html>

<html>
<head>
    <title>RequireJS</title>
    <script data-main="/assets/js/Webdoc.js" src="Scripts/require.js"></script>

    <script>

        require(["Webdoc"], function (webdoc) {


            webdoc.Init();



        });



    </script>

</head>
<body>
    <div></div>
</body>
</html>
