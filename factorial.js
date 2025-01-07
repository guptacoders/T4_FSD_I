<!-- WAP In JS to find factorial of 5 using recursion -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script language="javascript" type="text/javascript">
      var factorial;
      function fact(n) {
        if (n == 1) {
          return 1;
        } else {
          factorial = n * fact(n - 1);
          return factorial;
        }
      }

      function showFactorial() {
        
        var result = fact(5);
        alert("Factorial of 5 is: " + result); // Show result using an alert
      }
    </script>
  </head>
  <body>
    <input type="button" value="say hello" onclick="showFactorial()" />
  </body>
</html>
