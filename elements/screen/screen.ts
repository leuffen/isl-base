import {ka_create_element, ka_dom_ready, ka_html, ka_sleep, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle";


// language=HTML
const tpl = `
    <div class="as__screen [[layout.type]]">
        <div class="as__screen-shadow" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]]-shadow.svg);"></div>
        <div class="as__screen-image" data-ref="image"></div>
        <div class="as__screen-overlay" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]].svg)"></div>
    </div>
`;


export class ScreenLayout extends DefaultLayout {

    cdnBaseUrl: string = "https://cdn.leuffen.de/hyperpage-components/v1.0";
    type: string = "mobile";
}

@jodaRenderer("screen", ScreenLayout)
class Screen implements JodaRendererInterface {
    render(element: HTMLElement, layout: ScreenLayout): HTMLElement {
        let q = new QTemplate(tpl);
        q.parse({layout: layout});
        q.content.classList.add(...Array.from(element.classList));
        q.content.setAttribute("style", element.getAttribute("style"));
        element.setAttribute("style", "");

        element.parentElement.replaceChild(q.content, element);
        q.select("image").append(element);

        return q.content;

    }

}


