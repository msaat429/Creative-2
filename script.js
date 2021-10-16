
document.getElementById("mediaSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("mediaInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "https://cors-anywhere.herokuapp.com/tastedive.com/api/similar?q=" + value;
  fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";

      if(json.Similar.Results.length > 0){
      results += "<h2>Showing recommendations based on " + value + " (" + json.Similar.Info[0].Type + ")</h2>";
      for(let i = 0; i < json.Similar.Results.length; i++){
        results += "<div class='media'><p>"
        results += json.Similar.Results[i].Name + " - ";
        results += json.Similar.Results[i].Type;

        results += "</div></p>";
      }
    }
      else{
        results += "<h2>Sorry, there are no results for " + value + "</h2>";
      }

    
      document.getElementById("mediaResults").innerHTML = results;
    });
         
});
