import {ka_html, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle";


// language=HTML
const tpl = `
    <div class="as__map [[ layout.mapClass ]]">
        <div class="as__map-overlay" data-ref="overlay">
            <img src="[[ layout.mapPreviewUrl ]]" loading="lazy" width="1461" height="729" alt="map preview" />
            <div>
                <div>

                    <button class="btn btn-secondary mx-auto my-auto btn-lg" data-ref="button">Mit Google Maps anzeigen</button>
                    <p class="mx-auto">Erst nach dem Klick werden Inhalte von Google Maps geladen.</p>
                </div>

            </div>
        </div>
        <iframe width="100%" hidden title="Google Maps" height="100%" data-ref="iframe"></iframe>
        <script>
        </script>
    </div>
`;


export class MapLayout extends DefaultLayout {

    mapPreviewUrl: string = "https://cdn.leuffen.de/hyperpage-components/v1.0/google-maps/maps-preview.jpg";
}

@jodaRenderer("map", MapLayout)
class Map implements JodaRendererInterface {
    render(element: HTMLElement, layout: MapLayout): HTMLElement {
        let main = new QTemplate(tpl);
        main.parse({layout});


        let mapUrl = window["mapUrl"] ?? null;


        if (element.hasAttribute("data-map-preview-url")) {
            mapUrl = element.getAttribute("data-map-url");
        }
        if ( mapUrl === null) {
            console.warn("Missing data-map-url attribute on element (nor window[mapUrl] is set)", element);
        }

        main.select("button").selected.addEventListener("click", () => {
            main.select("iframe").selected.removeAttribute("hidden");
            main.select("iframe").selected.setAttribute("src", mapUrl);
            main.select("overlay").selected.setAttribute("hidden", "true");
        });

        element.append(main.content);
        return main.content;
    }

}


