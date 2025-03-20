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
      // return (eye.src = 'nui://ox_target/web/img/uwz1_off.png');
      // return (eye.src = 'nui://ox_target/web/img/utt1_off2.png');
      return (eye.src = 'nui://ox_target/web/img/SDT1_OFF.png');
    }

    case "leftTarget": {
      // return (eye.src = 'nui://ox_target/web/img/uwz1_off.png');
      // return (eye.src = 'nui://ox_target/web/img/utt1_off2.png');
      return (eye.src = 'nui://ox_target/web/img/SDT1_OFF.png');
    
    }

    case "setTarget": {
      // eye.src = 'nui://ox_target/web/img/uwz1_on.png';
      //eye.src = 'nui://ox_target/web/img/utt1_on2.png';
      eye.src = 'nui://ox_target/web/img/SDT1_ON.png';
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
