let cityValue=document.querySelector("#search_bar");
let searchbtn=document.querySelector("#search_tool");
let invalidwdet=document.querySelector("#invalidwdet");
let g="";

const URL1=("https://api.weatherapi.com/v1/forecast.json?key=0aa66dc4810e4eaaafc115049251112&q=cityname&days=1&aqi=no&alerts=no");

const getWDet=async(city)=>{
    const URL2=`https://api.weatherapi.com/v1/forecast.json?key=0aa66dc4810e4eaaafc115049251112&q=${city}&days=1&aqi=no&alerts=no`;
    try{
        let WApi=await fetch(URL2);
        let response=await WApi.json();
        console.log(response);
        if((response.location.name).toLowerCase()===city.toLowerCase()){
            document.querySelector("#wdet1").innerHTML=`<li><b>Location:</b> ${response.location.name},&nbsp${response.location.region},&nbsp${response.location.country} &nbsp&nbsp&nbsp<b>Current Date:</b> ${response.forecast.forecastday[0].date}</li>`;
            document.querySelector("#wdet2").innerHTML=`<li><b>Temperature:</b> ${response.current.temp_c}</li>`;
            document.querySelector("#wdet3").innerHTML=`<li><b>Current Weather:</b> ${response.current.condition.text}</li>`; 
            document.querySelector("#wimg").innerHTML=`<img src="https:${response.current.condition.icon}">`;
            //document.querySelector("#wdetcurr").innerHTML=`<li><b>Current Weather:</b> ${response.current.condition.text} &nbsp&nbsp&nbsp <img src="https${response.current.condition.icon}"></li>`;
            //console.log(response.current.condition.icon);
            /*const getIcon=async(icon)=>{
                let  wicon=await fetch(icon);
                let promise=await wicon.json();
                document.querySelector("#image").innerHTML=`${promise}`;
            }*/
            document.querySelector("#wdet4").innerHTML=`<li><b>Humidity:</b> ${response.current.humidity}%</li>`;
            document.querySelector("#wdet5").innerHTML=`<li><b>Wind Speed:</b> ${response.current.wind_kph} kph</li>`;
            document.querySelector("#wdet6").innerHTML=`<li><b>Atmospheric Pressure:</b> ${response.current.pressure_mb} x 100 Pa</li>`;
            invalidwdet.innerHTML="";
        }
        else{
            invalidwdet.innerHTML="<i><b>City not found. Please enter a valid city name.</b></i>";
            document.querySelector("#wdet1").innerHTML="";
            document.querySelector("#wdet2").innerHTML="";
            document.querySelector("#wdet3").innerHTML="";
            document.querySelector("#wimg").innerHTML="";
            document.querySelector("#wdet4").innerHTML="";
            document.querySelector("#wdet5").innerHTML="";
            document.querySelector("#wdet6").innerHTML="";
        }
    }
    catch{
        console.log("Error");
        invalidwdet.innerHTML="<i><b>City not found. Please enter a valid city name.</b></i>";
    }
}

searchbtn.addEventListener("click",()=>{
    if(cityValue.value.trim()!=""){
        getWDet(cityValue.value);
        console.log(cityValue.value);
        cityValue.value="";//removes the city name from the search bar
        cityValue.blur();//removes the cursor from the search bar
    }
});

cityValue.addEventListener("keydown",(event)=>{
    if(event.key==="Enter" && cityValue.value.trim()!=""){
        getWDet(cityValue.value);
        console.log(cityValue.value)
        cityValue.value="";
        cityValue.blur();
    }
})

function myFunction(){
    let x=document.querySelector("#nav_bar1");
    if(x.style.display==="flex"){
        x.style.display="none";
        x.style.transition="0.2s ease-out";
    }
    else{
        x.style.display="flex";
        x.style.transition="0.2s ease-in";
    }
}


const scrollTopBtn = document.querySelector("scrollToTopBtn");
window.onscroll=function(){scrollFunction()};

function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
      } else{
        scrollTopBtn.style.display= "none";
      }
    }

function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
    

/*URL.then((res)=>{
    return res.json();
    })
    .then((data)=>{
        data.forEach((user)=>{
            let markup=`<li>${user.name}</li><br>`;
            document.querySelector("ul").insertAdjacentHTML("beforeend",markup);
        });
    })
    .catch((error)=>{
        console.log(error);
    });*/