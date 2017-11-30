//Back End
function Object(cliff,murder,peaceful,hamsters) {
  this.cliff = cliff;
  this.murder = murder;
  this.peaceful = peaceful;
  this.hamsters = hamsters;
}

var results = new Object(0,0,0,0);

var pets = [];
var activities = [];
var beverages = [];

Object.prototype.fate = function () {
  if (this.cliff >= this.murder && this.cliff >= this.peaceful && this.cliff >= this.hamsters) {
    return "You will Fall to your death off a cliff "
  } else if (this.hamsters >= this.murder && this.hamsters >= this.peaceful) {
    return "You will be eaten alive by a swarm of bloodthirsty hamster"
  } else if (this.murder >= this.peaceful) {
    return "You will be strangled to death by your closest friend"
  } else {
    return "You will die peacefully at the ripe age of 110, with your loved ones beside you"
  }
  };

function fortune(array, array2, array3) {
  for(i=0; i<array.length; i++) {
    if(array[i] === "dog") {
      results.peaceful += 1;
    } else if(array[i] === "cat") {
      results.cliff += 1;
    } else if(array[i] === "bird") {
      results.murder += 1;
    } else if(array[i] === "hamster") {
      results.hamsters += 1;
    } else if(array[i] === "hamsters") {
      results.hamsters += 2;
    } else  if(array[i] === "none"){
      results.murder += 1;
    }
  }
  for(i=0; i<array2.length; i++) {
    if(array2[i] === "cliff") {
      results.cliff += 1;
    } else if(array2[i] === "rubix") {
      results.peaceful += 1;
    } else if(array2[i] === "eating") {
      results.hamsters += 1;
    } else if(array2[i] === "pranks") {
      results.murder += 1;
    } else if(array2[i] === "museums") {
      results.hamsters += 1;
    }
  }
  for(i=0; i<array3.length; i++) {
    if(array3[i] === "water") {
      results.peaceful += 1;
    } else if(array3[i] === "beer") {
      results.cliff += 1;
    } else if(array3[i] === "wine") {
      results.cliff += 1;
    } else if(array3[i] === "lean") {
      results.murder += 1;
    } else if(array3[i] === "bobba") {
      results.hamsters += 1;
    }
  }
};
//Front End

$(document).ready(function() {
  $("#fortune-teller").submit(function(event){
    results.peaceful = 0;
    results.cliff = 0;
    results.murder= 0;
    results.hamsters = 0;
    var pets = [];
    var activities = [];
    var beverages = [];

    event.preventDefault();
    $("#results").empty();

    $("input:checkbox[name=pet]:checked").each(function(){
      pets.push($(this).val());
    });
    $("input:checkbox[name=activity]:checked").each(function(){
      activities.push($(this).val());
    });
    $("input:checkbox[name=beverage]:checked").each(function(){
      beverages.push($(this).val());
    });
    fortune(pets,activities,beverages);


    $("#results").append(results.fate());
    console.log(results);

  });
});
