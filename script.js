var i = 0;
function check() {
  var query = document.getElementById("qn").value;
  if (query == "") {
    window.alert("enter keyword");
  }
  let url =
    "https://api.edamam.com/search?q=" +
    query +
    "&app_id=70707282&app_key=72b95ab4b72f53bf8f3dd78d8c07275c&from=0&to=3";

  if (i >= 1) {
    var list = document.getElementById("d");
    j = 0;
    while (list.hasChildNodes()) {
      list.removeChild(list.childNodes[j]);
      j++;
    }
    if (list.hasChildNodes) {
      list.removeChild(list.childNodes[0]);
    }
      window.location.reset();
  }
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
        ol.appendChild(li);
        ol.appendChild(img);
      }
    });
  document.getElementById("qn").value = "";
  i++;
}
