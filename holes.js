var prompt = require("prompt");

var prompt_attributes = [{ name: "length" }, { name: "holes" }];

prompt.start();

prompt.get(prompt_attributes, function(err, result) {
  if (err) {
    console.log(err);
    return 1;
  } else {
    var length = Number(result.length);
    var holes = Number(result.holes);
    var sections = holes + 1;

    //CalculateSpace starts here
    function calculateSpace() {
      console.clear();
      console.log("Total length = "+length+"cm\nNumber of holes = "+holes+"\n");
      for (i = 1; i <= holes; i++) {
        var newMark = i * (length / sections);
        console.log("Mark " + i + " = " + newMark.toFixed(2) + "cm");
      }

      var marksSpacing = length / sections;
      console.log(
          "\nNumber of sections = " + sections +
          "\nSections length = " + marksSpacing.toFixed(2) +"cm\n"
      );
    }

    if (holes == 1) {
      console.clear();
      console.log("There is only one mark at " + length / sections + "cm\n");
    } else {
      calculateSpace();
    }
    //CalculateSpace ends here
  }
});
