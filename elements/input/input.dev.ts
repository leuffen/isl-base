import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

## Inputs

[input type="email" label="E-Mail" placeholder="Enter your E-Mail" required="true" class="use-input" data-class="m-5"]
[select type="email" label="Auswählen" data-options="Wurst, Baz, Jess" required="true" class="use-input" data-class="m-5"]


`;


JodaDescriptionManager.addClass("element", "Inputs (<input>)", "This is a description", example, []);
