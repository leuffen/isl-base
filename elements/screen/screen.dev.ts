import {JodaDescriptionManager} from "@leuffen/jodastyle";


const example = `

# Screens

![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-laptop style="width:400px"}

![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-mobile style="width:400px"}

![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-tablet style="width:400px"}

![](cdn:///leu-content/v/12/1200x2788_992x2305_768x1785_480x1116_256x256/Screenshot_2023-05-23_at_23-49-39_Zahnarztpraxis_Sebah_Ibrahim_in_Frankfurt_am_Main.avif_png){: .use-screen-desktop style="width:400px"}



Jetzt reiche tes aber

`;


JodaDescriptionManager.addClass("element", ".use-screen", "This is a description", example, []);
