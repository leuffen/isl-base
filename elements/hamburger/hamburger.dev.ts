import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

<a href="#" class="use-hamburger"></a>

`;


JodaDescriptionManager.addClass("element", ".use-hamburger", "This is a description", example, []);
