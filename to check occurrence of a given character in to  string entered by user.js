<!-- Write java script program to check occurrence of a given character in to 
string entered by user. (For ex., If you check the number of occurrences of 'o' 
in the string 'school', the result is 2.) -->

<html>
  <head>
    <script>
      function getval() {
        count = 0;
        var str = prompt("Enter String: ", "");
        var x = prompt("Enter Search String: ", "");
        for (i = 0; i <= str.length; i++) {
          if (str[i] == x) {
            count++;
          }
        }
        document.write("occurence of " + count);
      }
    </script>
  </head>
  <body>
    <input type="button" onclick="getval()" value="OK" />
  </body>
</html>
