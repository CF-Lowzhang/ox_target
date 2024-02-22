import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye = document.getElementById("eyeImg");

var job = 'YNS1_Die'

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";

  switch (event.data.event) {
    case "visible": {
      body.style.visibility = event.data.state ? "visible" : "hidden";
      return (eye.src = 'https://cdn.discordapp.com/attachments/1201143976170893393/1207214907976589334/icon_alt_off_150ppi.png?ex=65e80fff&is=65d59aff&hm=f21e003cedc2235a78e16262a1fd36e2fd9fe9ec814779bd396d9cfe07cd16c9&');
    }

    case "leftTarget": {
      return (eye.src = 'https://cdn.discordapp.com/attachments/1201143976170893393/1207214907976589334/icon_alt_off_150ppi.png?ex=65e80fff&is=65d59aff&hm=f21e003cedc2235a78e16262a1fd36e2fd9fe9ec814779bd396d9cfe07cd16c9&');
    
    }

    case "setTarget": {
      eye.src = 'https://cdn.discordapp.com/attachments/1201143976170893393/1207214837130600508/icon_alt_on_150ppi.png?ex=65e80fee&is=65d59aee&hm=2b475266dfeb08edd3e5c98e841abb1960734cf30b287dedfdb46d30e0947aac&';


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
