<!-- 1 + x/1! + x2/2! + x3/3!+... -->

<html>
  <head>
    <script>
      function getval() {
        var n = prompt("Enter Value For Series You want to continue: ");
        function fact(n) {
          if (n == 1) {
            return 1;
          } else {
            return n * fact(n - 1);
          }
        }

        let x = 2;
        let sum = 0;
        for (i = 1; i <= n; i++) {
          sum += Math.pow(x, n) / fact(n);
        }

        document.write(1 + sum);
      }
    </script>
  </head>

  <body>
    <input type="button" onclick="getval()" value="OK" />
  </body>
</html>
