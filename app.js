
var month = document.querySelector("#month");
var outputDiv = document.querySelector('#output');
var outputName = document.querySelector('#name');
var outputDate = document.querySelector('#date');

var jan = document.getElementById('#jan');

var month = 1;
var exp = 0;

function clickHandler() {
    if(month === 1) {
      exp = 1;
    }

//error handler
function errorHandler(error) {
  console.log("error occured", error);
}

    //processing
    var url = `https://holidayapi.com/v1/holidays?pretty&key=dcd8ac63-9540-4145-ba83-2e93fca1ff50&country=IN&year=2019&month=${exp}`;
    fetch(url)
    .then(response => response.json())
    .then(json => {
        
        var holidayArray = json.holidays;

        for (var i = 0; i < holidayArray.length; i++) {
            outputName.innerText += `${holidayArray[i].name}\n`;
          }
          for (var i = 0; i < holidayArray.length; i++) {
            outputDate.innerText += `${holidayArray[i].date}\n`;
          }   
    })
    
    .catch(errorHandler)

    //output 
};
//click function

//var month = ["jan", "feb", "march","apr","may","jun","jul","aug","sep","oct","nov","dec"];
month.addEventListener("change", clickHandler);