import {ka_create_element, ka_dom_ready, ka_html, ka_sleep, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, Joda, jodaRenderer, JodaRendererInterface, JodaUseRenderer} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle";


// language=HTML
const tpl = `
    <div class="as__screen [[layout.type]]">
        <div class="as__screen-shadow" style="background-image: url(https://cdn.leuffen.de/hyperpage-components/v1.0/screens/[[layout.type]]-shadow.svg);"></div>
        <slot class="as__screen-image" data-select="img"></slot>
        <div class="as__screen-overlay" style="background-image: url(https://cdn.leuffen.de/hyperpage-components/v1.0/screens/[[layout.type]].svg)"></div>
    </div>
`;


export class ScreenLayout extends DefaultLayout {

    cdnBaseUrl: string = "https://cdn.leuffen.de/hyperpage-components/v1.0";
    type: string = "mobile";
}


Joda.registerTemplate("screen", tpl, {type: "desktop"});



// language=HTML
const tplScreens = `
    <div class="as__screens">
        <slot class="as-screens__desktop" data-select="img.desktop || img:not(.mobile)" layout="use: #screen; type: desktop;"></slot>
        <slot class="as-screens__mobile" data-select="img.mobile || img:not(.desktop)" layout="use: #screen; type: mobile;"></slot>
    </div>
`;

Joda.registerTemplate("screens", tplScreens, {type: "desktop"});

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


