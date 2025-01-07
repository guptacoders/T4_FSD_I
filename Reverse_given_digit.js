<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script language="javascript" type="text/javascript">
      var num = 1234;
      var rev = "";
      var temp = num;

      for (var i = 0; temp > 0; i++) {
        rev += temp % 10;
        temp = Math.floor(temp / 10);
      }

      document.write("Reversed number: " + rev);
    </script>
  </body>
</html>
