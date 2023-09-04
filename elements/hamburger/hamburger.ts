import {ka_create_element, ka_html, KaTemplate} from "@kasimirjs/embed";
import {DefaultLayout, jodaRenderer, JodaRendererInterface} from "@leuffen/jodastyle";
import {QTemplate} from "@leuffen/jodastyle";



// language=HTML
const tpl = ka_html(`
<a class="as__hamburger" href="javascript:void(0);" aria-label="Menü">
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-menu">Menü</div>
</a>
`);


export class HamburgerLayout extends DefaultLayout {

}


@jodaRenderer("hamburger", HamburgerLayout)
class Hamburger implements JodaRendererInterface {

    public render(element: HTMLElement, layout: HamburgerLayout) {
        let main = new QTemplate(tpl);
        element.append(main.content);

        main.content.addEventListener("click", () => {
            document.body.classList.toggle("nav-open");
        });


        return element;
    }
}

