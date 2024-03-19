let ip1=document.querySelector("#inputip");
let btn=document.querySelector("#btn");
let btn1=document.getElementById("btn1");
let card=document.getElementsByClassName("card");
let cardBody=document.getElementsByClassName("card-body");
let cardContainer1=document.getElementById("cardContainer");
let ihtml="";
function handleApp(){
  if(ip1.value==""){
    alert("No value entered")
    return;
  }
    console.log(ip1.value)
    let  fetch1=fetch(`https://ipapi.co/${ip1.value}/json/ `)
    fetch1.then((val)=>{
    return val.json()
    }).then((val)=>{
      ihtml=`  <div class="card my-5" style="width: 18rem;">
           
      <div class="card-body">
      <h4><b>Result:</b></h4>
      <p id="ipaddress1"><b>IP Address : </b>${val.ip}</p>
      <p id="network"><b>Network : </b>${val.network}</p>
      <p id="version"><b>Version : </b>${val.version}</p>
      <p id="city"><b>City : </b>${val.city}</p>
      <p id="country"><b>Country : </b>${val.country}</p>
      <p id="region"><b>Region : </b>${val.region}</p>
      <p id="regioncode"><b>Region Code : </b>${val.region_code}</p>
      <p id="cname"><b>Country Name : </b>${val.country_name}</p>
      <p id="ccode"><b>Country Code : </b>${val.country_code}</p>
      </div>
      </div>`  
      cardContainer1.innerHTML+=ihtml;
    })
    
    ip1.value="" ;
}
    btn.addEventListener("click",()=>{
        console.log("clicked")
        handleApp()
    })
    btn1.addEventListener("click",()=>{
    cardContainer1.innerHTML=" ";

    })
