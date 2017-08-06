$(document).ready(function(){ // waiting for page loading
    $("#preloader #image").fadeOut(); // delete the load graphic
    $("#preloader").delay(350).fadeOut("slow"); // remove the div overriding the page
    
// connect with  api and retrieve data for header tile

    var url = "http://api.openweathermap.org/data/2.5/weather?q=Warsaw  ";
    url += '&' + $.param({
        'APPID': "321753327427fb741a08d0e91a17c231",
        'units': "metric",
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
    // defining the necessary variables
        var name = result.name,
        img = result.weather["0"].icon,
        temp = result.main.temp.toFixed(1),
        press = result.main.pressure,
        humi = result.main.humidity;
        main = document.querySelector(".main"),
        right = document.querySelector(".right"),
        rightP = document.createElement("p"),
        rightP1 = document.createElement("p"),
        rightP2 = document.createElement("p"),
        rightP3 = document.createElement("p"),
        h1 = main.querySelector("h1"),
        wimg = "http://openweathermap.org/img/w/"+img+".png",
        searchPic =  document.createElement( "img");
        searchPic.src = wimg;
        text = result.weather["0"].description,   
        text1 = document.createTextNode("pressure: " + press+ " hPa");
        text2 = document.createTextNode("humidity: " + humi + " %");

// Adding variables

        h1.appendChild(document.createTextNode(name));
        h1.appendChild(searchPic);
        right.appendChild(rightP);
        rightP.appendChild(document.createTextNode(temp+ "'C "));
        right.appendChild(rightP1);
        rightP1.appendChild(document.createTextNode(text));
        right.appendChild(rightP2);
        rightP2.appendChild(text1);
        right.appendChild(rightP3);
        rightP3.appendChild(text2);

// Generate six cities

        var cityTable = ['London', 'Birmingham', 'Paris', 'Berlin', 'Moscow', 'Prague'];


        for (var i=0; i<cityTable.length; i++) {
            input.value = cityTable[i].toString();
            addCities();
            input.value = null;
        };

    }).fail(function(err) {
      throw err;
    });


// defining the necessary variables
    var lAdd = document.querySelector(".locationAdd"),
        i = document.querySelector("i"),
        form = document.querySelector("#cityForm"),
        input = form.querySelector("input"),
        btn = form.querySelector("button");

   // Wait for click on form btn & animation

    btn.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();
        if (input.value !== ""){
            cityname = input.value;  
            addNew();
            form.classList.add("hidden");
            i.classList.remove("hidden");
            input.value = null;
            e.preventDefault();
            e.stopImmediatePropagation();
        }
        else{
            
            alert("Enter city name please.");
            e.preventDefault();
        
        }

}, false);


   // Wait for click on + & animation

    i.addEventListener("click", function (e) {
    i.classList.add("hidden");
    form.classList.remove("hidden");

}, false);

// connect with  api and retrieve data for new tiles adding by user
function addNew() {

    cityname = input.value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    url = url + cityname;
    url += '&' + $.param({
        'APPID': "321753327427fb741a08d0e91a17c231",
        'units': "metric",
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {

        var name = result.name,
        img = result.weather["0"].icon,
        temp = result.main.temp.toFixed(1),
        press = result.main.pressure,
        humi = result.main.humidity,
        wimg = "http://openweathermap.org/img/w/"+img+".png",
        searchPic =  document.createElement( "img"),
        row = document.querySelector(".row"),
        plusTile = $("div:nth-child(7)"),
        div =  document.createElement("div"),
        div1 =  document.createElement("div"),
        divHeader =  document.createElement("header"),
        h1 = document.createElement("h1"),
        divHeaderText =  name,
        divP =  document.createElement( "p"),
        ul =  document.createElement( "ul"),
        li =  document.createElement( "li"),
        li1 =  document.createElement( "li"),
        li2 =  document.createElement( "li"),
        divPSpan =  document.createElement( "span"),
        divFooterTextText = result.weather["0"].description,   
        divFooter =  document.createElement("footer"),
        divFooterText = document.createTextNode(divFooterTextText);
        divFooterText1 = document.createTextNode("pressure: " + press+ " hPa");
        divFooterText2 = document.createTextNode("humidity: " + humi + " %");

        card = row.insertBefore(div1, row.querySelector("div:nth-child(7)"));
// card - Difference between function addCities and function addNew
        div1.classList.add("col-md-4");
        div1.appendChild(div);
        div.classList.add("location");
        div.appendChild(divHeader);
        div.appendChild(divHeader);
        divHeader.appendChild(h1);
        h1.appendChild(document.createTextNode(name));
        divHeader.appendChild(searchPic);
        searchPic.src = wimg;
        div.appendChild(divP);
        divP.appendChild(divPSpan);
            divPSpan.appendChild(document.createTextNode(temp + "'C "));
        div.appendChild(divFooter);
        divFooter.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(divFooterText);
        ul.appendChild(li1);
        li1.appendChild(divFooterText1);
        ul.appendChild(li2);
        li2.appendChild(divFooterText2);

}).fail(function(err) {
    alert("Oops ... Sorry but city was not found. Try again.");
  throw err;
});
// connect with  api and retrieve data for tiles in main section

}
function addCities() {

    cityname = input.value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    url = url + cityname;
    url += '&' + $.param({
        'APPID': "321753327427fb741a08d0e91a17c231",
        'units': "metric",
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {

        var name = result.name,
        img = result.weather["0"].icon,
        temp = result.main.temp.toFixed(1),
        press = result.main.pressure,
        humi = result.main.humidity,
        wimg = "http://openweathermap.org/img/w/"+img+".png",
        searchPic =  document.createElement( "img"),
        row = document.querySelector(".row"),
        plusTile = $("div:nth-child(7)"),
        div =  document.createElement("div"),
        div1 =  document.createElement("div"),
        divHeader =  document.createElement("header"),
        h1 = document.createElement("h1"),
        divHeaderText =  name,
        divP =  document.createElement( "p"),
        ul =  document.createElement( "ul"),
        li =  document.createElement( "li"),
        li1 =  document.createElement( "li"),
        li2 =  document.createElement( "li"),
        divPSpan =  document.createElement( "span"),
        divFooterTextText = result.weather["0"].description,   
        divFooter =  document.createElement("footer"),
        divFooterText = document.createTextNode(divFooterTextText);
        divFooterText1 = document.createTextNode("pressure: " + press+ " hPa");
        divFooterText2 = document.createTextNode("humidity: " + humi + " %");

        card = row.insertBefore(div1, row.querySelector("div:nth-child(1)"));
        div1.classList.add("col-md-4");
        div1.appendChild(div);
        div.classList.add("location");
        div.appendChild(divHeader);
        div.appendChild(divHeader);
        divHeader.appendChild(h1);
        h1.appendChild(document.createTextNode(name));
        divHeader.appendChild(searchPic);
        searchPic.src = wimg;
        div.appendChild(divP);
        divP.appendChild(divPSpan);
        divPSpan.appendChild(document.createTextNode(temp + "'C "));
        div.appendChild(divFooter);
        divFooter.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(divFooterText);
        ul.appendChild(li1);
        li1.appendChild(divFooterText1);
        ul.appendChild(li2);
        li2.appendChild(divFooterText2);

}).fail(function(err) {
  throw err;
});


}


});