var i = 0;
var start_value = 0;
var end_value = 3;
var q;
document.getElementById("more").hidden = true;
function check() {
 // let o = document.getElementById("d");
  
  
  var query = document.getElementById("qn").value;
  q = query;
  if (query == "") {
    window.alert("enter keyword");
  }
  let url =
    "https://api.edamam.com/search?q=" +
    query +
    "&app_id=980128a6&app_key=7c13707892fb0523f22e6159b2257945&from=0&to=3";

  if (i >= 1) {
    var list = document.getElementById("d");
    j = 0;
    while (list.hasChildNodes()) {

      list.removeChild(list.childNodes[j]);
      
    }
   
      //window.location.reset();
  }
  /*
  if (i >= 1) {
    document.getElementById("d").hidden = true;
    i = 0;

  }
  document.getElementById("d").hidden = false;*/
  let rec;
  //console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      let d1 = data;
      console.log(d1.q);
      let ol = document.getElementById("d");
      for (var i = 0; i < 3; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(d1.hits[i].recipe.label));
        var img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = d1.hits[i].recipe.image;

        var ul = document.createElement("ul");
        var l11 = document.createElement("li");
        l11.appendChild(
          document.createTextNode(d1.hits[i].recipe.ingredientLines),
          
        );
        ul.appendChild(l11);
        li.appendChild(ul);
        li.appendChild(img);
        ol.appendChild(li);
        
      }
    });
  
  document.getElementById("more").hidden = false;
  document.getElementById("qn").value = "";
  i++;
}

function check1(start_val, end_val) {
  // let o = document.getElementById("d");

  /*var query = document.getElementById("qn").value;
  if (query == "") {
    window.alert("enter keyword");
  }*/
  var query = q;
  let url =
    "https://api.edamam.com/search?q=" +
    query +
    "&app_id=980128a6&app_key=7c13707892fb0523f22e6159b2257945&from="+`${start_val}`+"&to="+`${end_val}`;

 /* if (i >= 1) {
    var list = document.getElementById("d");
    j = 0;
    while (list.hasChildNodes()) {
      list.removeChild(list.childNodes[j]);
    }

    //window.location.reset();
  }
  /*
  if (i >= 1) {
    document.getElementById("d").hidden = true;
    i = 0;

  }
  document.getElementById("d").hidden = false;*/
  let rec;
  //console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      let d1 = data;
      console.log(d1.q);
      let ol = document.getElementById("d");
      for (var i = 0; i < 3; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(d1.hits[i].recipe.label));
        var img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = d1.hits[i].recipe.image;

        var ul = document.createElement("ul");
        var l11 = document.createElement("li");
        l11.appendChild(
          document.createTextNode(d1.hits[i].recipe.ingredientLines)
        );
        ul.appendChild(l11);
        li.appendChild(ul);
        li.appendChild(img);
        ol.appendChild(li);
      }
    });
  
  document.getElementById("more").hidden = false;
  document.getElementById("qn").value = "";
  i++;
}


function queryIncrease() {
  
  end_value += 3;
  start_value = end_value-3;
  check1(start_value, end_value);
}