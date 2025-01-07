<!-- Write a JS for given digit:23 Divide it into 2 parts ; 2 & 3 . Find 2 raise to 3 -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script language="javascript" type="text/javascript">
      var factorial;
      function ff(n) {
        var part1;
        part1 = Math.floor(n / 10);
        part2 = n % 10;

        var result;
        result = Math.pow(part1, part2);
        document.write(result);
      }
    </script>
  </head>
  <body>
    <input type="button" value="say hello" onclick="ff(23)" />
  </body>
</html>
