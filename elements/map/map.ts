import {ka_html, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle/src/helper/QTemplate";


// language=HTML
const tpl = `
    <div class="as__map [[ layout.mapClass ]]">
        <div class="as__map-overlay" data-ref="overlay">
            <img src="[[ layout.mapPreviewUrl ]]" loading="lazy" width="1461" height="729" alt="map preview" />
            <div>
                <div>
                    <p class="mx-auto">Indem Sie auf den Button "Mit Google Maps anzeigen" klicken, stimmen Sie zu, dass Inhalte von Google Maps geladen werden. </p>
                    <button class="btn btn-secondary mx-auto my-auto btn-lg" data-ref="button">Mit Google Maps anzeigen</button>
                    <p class="mx-auto">Bitte beachten Sie, dass hierbei Ihre Daten gemäß der Datenschutzrichtlinien von maps.google.com verarbeitet werden.</p>
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

        console.log("MAP");
        if ( ! element.hasAttribute("data-map-url")) {
            console.warn("Missing data-map-url attribute on element", element);
        }

        main.select("button").selected.addEventListener("click", () => {
            main.select("iframe").selected.removeAttribute("hidden");
            main.select("iframe").selected.setAttribute("src", element.getAttribute("data-map-url"));
            main.select("overlay").selected.setAttribute("hidden", "true");
        });

        element.append(main.content);
        return main.content;
    }

}


