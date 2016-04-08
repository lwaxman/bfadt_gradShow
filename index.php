<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>supertranspositions</title>
        <style>
        @import url(https://fonts.googleapis.com/css?family=Roboto:400,900,100,300);
        body{
        	margin: 0;
        	background: #000;
        }
        #canvasIdentity{
            margin: 0 auto;
        }
        canvas{
            text-align: center;
        	/*background: blue;*/
        }
        </style>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,100,900' rel='stylesheet' type='text/css'>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.min.js"></script>
    </head>
    <body>
        <div id="canvasIdentity"></div>
        <script src='js/base.js'></script>
        <?php 
            echo "<script src='js/sketch_0.js'></script>"
            // $choose = rand(0, 4);
            // if($choose<1){
            //     echo "<script src='js/sketch_0.js'></script>"
            // }else if($choose>=1 && $choose<2){
            //     echo "<script src='js/sketch_1.js'></script>"
            // }else if($choose>=2 && $choose<3){
            //     echo "<script src='js/sketch_2.js'></script>"
            // }else if($choose>=3 && $choose<4){
            //     echo "<script src='js/sketch_3.js'></script>"
            // }
        ?>
    </body>
</html>