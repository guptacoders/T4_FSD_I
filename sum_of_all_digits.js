<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script language="javascript" type="text/javascript">
      var a = 1234;
      var sum = 0;
      for (a = 0; a < 5; a++) {
        a = a % 10;
        sum += a;
      }
      document.write(sum);
    </script>
  </body>
</html>
