$(document).ready(function() {
  $("form#vowels").submit(function(event) {
    event.preventDefault();

    //function getVowels(word_phrase) {

      var vowelCount = 0;

      var string = $("#word_phrase").val().toLowerCase();
      for (var i = 0; i <= string.length -1; i++) {

       if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "u" || string.charAt(i) === "o") {
         vowelCount += 1;
         string.toString();
        }
      }
      alert(vowelCount);
  });
});
