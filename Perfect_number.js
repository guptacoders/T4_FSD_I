<html>
  <head>
    <script>
      function getval() {
        var n = prompt("Enter Value: ");

        function isPerfect(n) {
          let sum = 0;
          let i = 1;
          while (i < n) {
            if (n % i === 0) {
              sum += i;
            }
            i++;
          }
          if (sum == n) {
            document.write(n + " is a perfect number.");
          } else {
            document.write(n + " is not a perfect number.");
          }
        }

        isPerfect(n);
      }
    </script>
  </head>
  <body>
    <input type="button" onclick="getval()" value="OK" />
  </body>
</html>
