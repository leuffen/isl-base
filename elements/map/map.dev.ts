import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

## Map zeigen

<map data-map-url="" class="use-map"></div>

`;


JodaDescriptionManager.addClass("element", ".use-map", "This is a description", example, []);
