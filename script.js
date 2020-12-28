// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${K2-18b}</li>
   <li>Diameter: ${34500 km}</li>
   <li>Star: ${K2-18}</li>
   <li>Distance from Earth: ${110 light years from Earth}</li>
   <li>Number of Moons: ${unknown}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data **array #4**
         div.innerHTML = `
            <ul>
            <img src="${json[4].image}">
               <li>Name: ${json[4].name}</li>
               <li>Diameter: ${json[4].diameter}</li>
               <li>Star: ${json[4].star}</li>
               <li>Distance from Earth: ${json[4].distance}</li> 
               <li>Number of Moons: ${json[4].moons}</li>
            </ul>

         `;
      });
   });
});

                window.addEventListener("load", function() {
                   let form = document.querySelector("form");
                   form.addEventListener("submit", function(event){
                    
                    let pilotName = document.querySelector("input[name=pilotName]");
                    let copilotName = document.querySelector("input[name=copilotName]");
                    let fuelLevel = document.querySelector("input[name=fuelLevel]");
                    let cargoMass = document.querySelector("input[name=cargoMass]");
                    let launchStatus = document.getElementById('launchStatus');
                    let fuelStatus = document.getElementById('fuelStatus');
                    let cargoStatus = document.getElementById('cargoStatus');
                    let faultyItems = document.getElementById('faultyItems');
                    let flightIsReady = true
                    event.preventDefault();

                      
                   
                    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
                        alert("All fields are required!")
                        flightIsReady = false
                        
                    } 
                    if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
                        alert("Field must contain a valid number.")
                        flightIsReady = false
                         
                    }
                      
                    if ( !isNaN(pilotName.value) || !isNaN(copilotName.value) ) {
                        (pilotStatus).innerHTML = `Pilot ${pilotName.value} ready for launch.`;
                        (copilotStatus).innerHTML = `Co-pilot ${copilotName.value} ready for launch.`; 
                        alert("Field must contain a valid name.")
                        flightIsReady = false
                        
                    }
                      
                    if (fuelLevel.value < 10000) {
                        launchStatus.style.color = 'red';
                        launchStatus.innerHTML = 'Shuttle is not ready for launch.';
                        faultyItems.style.visibility = 'visible';
                        (pilotStatus).innerHTML = `Pilot ${pilotName.value} ready for launch.`;
                        (copilotStatus).innerHTML = `Co-pilot ${copilotName.value} ready for launch.`;
                        fuelStatus.innerHTML = 'Fuel level is too low for launch';
                        flightIsReady = false
                          
                            
                    } else {
                       fuelStatus.innerHTML = 'Fuel level is high enough for launch'
                    }
                         
                    if (cargoMass.value > 10000) {
                        launchStatus.style.color = 'red';  
                        launchStatus.innerHTML = 'Shuttle is not ready for launch.';
                        faultyItems.style.visibility = 'visible';
                        (pilotStatus).innerHTML = `Pilot ${pilotName.value} ready for launch.`;
                        (copilotStatus).innerHTML = `Co-pilot ${copilotName.value} ready for launch.`; 
                        cargoStatus.innerHTML = 'Cargo mass is too high for launch';
                        flightIsReady = false

                    } else {
                       cargoStatus.innerHTML = 'Cargo mass is low enough for launch'
                    }

                    if (flightIsReady) { 
                        cargoStatus.innerHTML = 'Cargo mass low enough for launch.'  
                        fuelStatus.innerHTML = 'Fuel level high enough for launch.';
                        launchStatus.style.color = 'green';
                        launchStatus.innerHTML = 'Shuttle is ready for launch.';
                        (pilotStatus).innerHTML = `Pilot ${pilotName.value} ready for launch.`;
                        (copilotStatus).innerHTML = `Co-pilot ${copilotName.value} ready for launch.`; 
                        faultyItems.style.visibility = 'visible';
                            
                    }
    
                });  
            });     
             