<!-- Write a JS that find that find position of 1st occurence and last occurence of vowel 'a' in the given word 'ajanta' also return the string between them -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script language="javascript" type="text/javascript">
      var word = "ajanta";
      var firstPos = word.indexOf("a");
      var lastPos = word.lastIndexOf("a");
      var between = word.substring(firstPos + 1, lastPos);
      document.write(firstPos + "<br>" + lastPos + "<br>" + between);
    </script>
  </head>
  <body></body>
</html>
