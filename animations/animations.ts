export function isBotUserAgent(): boolean {
    return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)

}

export function setVisibleClassOnVisible(element: HTMLElement, visibleClass: string = "visible", options: IntersectionObserverInit = {threshold: 1}) {
    if (isBotUserAgent()) {
        element.classList.add(visibleClass)
        return
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                element.classList.add(visibleClass)
                observer.unobserve(element)
            }
        })
    }, options)


    observer.observe(element)
}


window.addEventListener("JodaContentReady", () => {
    console.log("JodaContentReady")
   document.querySelectorAll(".ani-container, .ani").forEach((element) => {
       // check if element has a ani-container as parent element
       if (element.parentElement.closest(".ani-container")) {
              return;
       }

       if (element.classList.contains("ani")) {
           element.classList.add("ani-standalone");
       }

       let options = {
              threshold: 1
       }
       if (element.classList.contains("ani-start-threshold-0")) {
              options.threshold = 0.10
       }
       setVisibleClassOnVisible(element as HTMLElement, "ani-start", options);
    })
});
