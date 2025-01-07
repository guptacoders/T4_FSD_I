<!-- WAP in JS to print first 5 Odd Numbers divisible by 7  -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script language="javascript" type="text/javascript">
      var i = 1;
      var count = 0;
      while (count < 5) {
        if (i % 7 == 0) {
          document.write(i + "<br>");
          count++;
        }
        i += 2;
      }
    </script>
  </body>
</html>
