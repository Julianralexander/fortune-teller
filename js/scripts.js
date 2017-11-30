var cliff = 0;
var murder = 0;
var peaceful = 0;
var hamsters = 0;

var pets = [];

function fortune(array) {
  for(i=0; i<array.length; i++) {
    if(array[i] === "dog") {
      peaceful += 1;
    } else if(array[i] === "cat") {
      cliff += 1;
    } else if(array[i] === "bird") {
      murder += 1;
    } else if(array[i] === "hamster") {
      hamsters += 1;
    } else if(array[i] === "hamsters") {
      hamsters += 2;
    } else  if(array[i] === "none"){
      murder += 1;
    }
  }
};

$(document).ready(function() {
  $("#fortune-teller").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=pet]:checked").each(function(){
      pets.push($(this).val());
    })
    fortune(pets);
    console.log(cliff);
    console.log(murder);
    console.log(peaceful);
    console.log(hamsters);
  });
});
