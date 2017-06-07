$(document).ready(function() {
  $("form#vowels").submit(function(event) {
    event.preventDefault();

    function vowel_count(str1) {
      var vowel_list = 'aeiouAEIOU';
      var vcount = 0;


      $("#word_phrase").val();
      word_phrase.toString();

      for (var index = 0; x <str1.length; x++) {
        if (vowel_list.indexOf(str1[index]) !== -1) {
          vcount += 1;

          alert(vcount);
        };
      };
    };
  });
});
