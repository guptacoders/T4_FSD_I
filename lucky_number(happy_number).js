<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script language="javascript" type="text/javascript">
      function lucky(num) {
        while (num > 9) {
          let sum = 0;
          while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
          }
          num = sum;
        }

        if (num === 1) {
          return "Lucky Number";
        } else {
          return "Not a Lucky Number";
        }
      }

      document.write(lucky(7777) + "<br>");
    
    </script>
  </body>
</html>
