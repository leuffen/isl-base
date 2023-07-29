import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

## Accordion

---{: .use-accordion}

### Accordion 1

Test

Anderer Titel

### Accordion 2

Test

Test 2 slakjsalkfjdlaksdjflöaskjdflkjas sadlfkjasldkfjlaskj fdlaskd jflaskjdflkjasldkfj 
laskjdf lksdj lksdj las

wurst

##### Some Child content

Some Content

`;


JodaDescriptionManager.addClass("element", ".use-accordion", "This is a description", example, []);
