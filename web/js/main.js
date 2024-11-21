import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye = document.getElementById("eyeImg");

var job = 'YNS1_Die'

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";
  optionsWrapper.style.display = "none";
  switch (event.data.event) {
    case "visible": {
      body.style.visibility = event.data.state ? "visible" : "hidden";
      return (eye.src = 'nui://ox_target/web/img/uwz1_off.png');
    }

    case "leftTarget": {
      return (eye.src = 'nui://ox_target/web/img/uwz1_off.png');
    
    }

    case "setTarget": {
      eye.src = 'nui://ox_target/web/img/uwz1_on.png';
      optionsWrapper.style.display = "block";
      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }

      if (event.data.zones) {
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            createOptions("zones", data, id + 1, i + 1);
          });
        }
      }
    }
  }
});
