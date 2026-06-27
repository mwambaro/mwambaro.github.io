# Instructions

Build a static website using the information detailed below. It should be slick using a diversity of colors. The website uses tailwind CSS. It must be responsive and scaled on devices of all sizes. The website supports both English and French. It uses the system’s configured language to know which language to display between English and French. If the language is neither English nor French, then it should default to English. Translations into French of special keywords are given below. 

In the codebase structure the site is in the index.html root file while images and files to use are in the 'assets' subfolder. Use animations (AOS library and more) and shadows but avoid using curved corners. Forms will use formsubmit.co to onkezabahizi@gmail.com.
It should render a nicely looking navigation bar to the different sections of the website except for the intro section (whose accompanying image is named 'description_intro.png') which is not featured in the navigation bar. The images to use in each section have file names starting with the section name. 

Section definitions:

1. Platforms: A carousel of images and the description of the platform below it. The carousel should allow enough time (30 sec minimum) for the user to read the entire description while giving an option to navigate back and forth within the carousel. Details below.
2. Philosophy: Details below.
3. Institutions: A carousel of images and the description of the institution below it. The carousel should allow enough time (10 sec minimum) for the user to read the entire description while giving an option to navigate back and fourth within the carousel. Details below.
4. Join Our Community: Details below
5. Our Publications: The publications to feature are given as pdf documents in the ‘assets’ folder in the root folder of the website. Each bear its name as file name. Rest of details below.
6. Subscribe to News: Details below.

Note: All acronyms should be accompanied by their full form unless deemed unnecessary. The logo has a filename starting with 'logo' and is located in the 'assets' subfolder. The icon to display in the title bar has a name starting with 'favicon' and is located in the 'assets' subfolder as well. You must implement validations for the forms' fields. Make sure the email fields recieve proper format validations. The phone number must include country code (e.g +256700000000).

# Description 

Laastras is a company that fixes the current fragmented and uncertain economy in which one job and one e-card are not enough to get everything one needs to live with dignity. Our motto is: “One job. One e-card. Dignified Life”.

# Platforms 

We build an ecosystem of 5 platforms:
1. Jobperon: An AI-powered job search engine that makes job hunting natural. Describe the job you want and get curated results displayed.
2. Chaperon: A social support system that uses AI for job placement and adds housing, meals, allowance fees, and training. It is a social form of loaning.
3. GetClientele: An AI-intensive clientele distribution that uses navigation technologies. 
4. eCard Wireless: A cloud infrastructure that ensures connectivity and delivers a multi-purpose e-card that serves as wallet, ID, passport, driver’s license, and unified access to all official and social documents.
5. AORI: It uses M&A to either merge or Acquire companies, individual properties, and governmental services in such a way that they form one unified conglomerate in which one job is enough to get everything one needs to live with dignity.

# Philosophy

Laastras stands for “Leadership as a Service Trade System”. It is an application of a philosophy called LaaS – “Leadership as a Service”. It is operationalized by a system of government termed Homocracy – “Governance by Equals”. It builds a social and economic platform called Morshux – “Management of Resources that Support Human Existence” in which one role yields, in return, Porshux – “Portion of Resources that Support Human Existence”, that is, everything an individual needs to live with dignity. LaaS/Homocracy establishes a two-layered trade system:

1. SerX – “Services Exchange”: Instead of using currency, it uses service as means of exchange
2. VirCu – “Virtual Currency”: It is a form of trade that uses DeFi to allow individuals to pursue creativity on their Porshux and get extra comfort. It compléments SerX.

# Institutions

Laastras ecosystem of platforms mirrors 4 fundamental institutions defined by LaaS/Homocracy:

1. HDN – “Human Demography and Nutrition”: Mirrored by Jobperon and Chaperon, it inventories all humans as well as all life-supporting resources.
2. CTP – “Chain of Transformation and Production”: It is parallel to AORI (Acquire and Integrate). It makes sure life-supporting resources are transformed and produced to turn them into consumables.
3. WTSC – “World Trade System Consortium”: It is rooted in eCard Wireless. It synchronizes all the other institutions, provides legal protection, digitizes everything, and maintains the trade-centered Constitution.
4. IFaSS – “International Fair Social System”: It is to emerge from GetClientele. It makes sure every individual gets all they need delivered to them.

# Our publications

Implement a pdf viewer that reads and displays a pdf document within the browser using only JavaScript, html, and CSS. This section will feature the following publications:

1.  Homocracy and Digital Public Infrastructure.
2.  World Federal Government Constitution 
3.  Comprehension Excerpts on LaaS/Homocracy – Volume 1
4.  Comprehension Excerpts on LaaS/Homocracy – Volume 2
5.  Laastras Pitch Deck

On click one should be able to view and read the pdf from the browser. The view should feature a hovering button, in the bottom right corner,  that sends the reader back to the main website. Each of those pdf files is in the 'assets' subfolder. Their file names resemble the above names.

# Join Our Community

This invites volunteers, investors, philanthropists, and government officials to join our community. It must be a form that provisions these fields: Full name, Email, WhatsApp (Full Phone Number), Message.

# Subscribe to News

It is a form that has one field: Email. It asks the user to subscribe to latest News by providing his/her email. The leading input tag should be made invisible and its name should be “Subscription” with the value set to “Email Below”.

# French translation of keywords 

1. One job. One e-card. Dignified Life: Un emploi. Une carte électronique. Une vie de dignité 
2. Morshux – “Management of Resources that Support Human Existence”: Gerseh – “Gestion des Ressources Supportant l’Existence Humaine”.
3. Porshux – “Portion of Resources that Support Human Existence”: Porseh – “Portion des Ressources Supportant l’Existence Humaine”.
4. SerX – “Services Exchange”: Echase – “Echange de Services”.
5. VirCu – “Virtual Currency”: DeVi – “Devise Virtuelle”.
6. HDN – “Human Demography and Nutrition”: DHN – “Démographie Humaine et Nutrition”.
7. CTP – “Chain of Transformation and Production”: CTP – “Chaine de Transformation et de Production”.
8. WTSC – “World Trade System Consortium”: CSCM – “Consortium du Système de Commerce Mondial”.
9. IFaSS – “International Fair Social System”: SIES – “Système International d’Equité Sociale”

# More behavior 1

Translate the sentence "Dignified Life for All", which is beside the logo, into French as follows: "Une Vie de Dignité pour Tous". Put appropriate flat icons wherever possible in the entire website. Also make sure this behavior is consistent in both languages.

# More behavior 2 

I finally opted for a more precise way of rendering the default language. We must use the following code to learn whether the visitor's country is French-speaking or not. If the response is not null, then use the returned language code (either fr or en), else fall back to the code
we already have in place. Please, validate the code below before using it and patch any possible errors. Code to use:
```
function preciseDefaultLanguage()
{
    let isFr = "en";

    // Set containing official/co-official French speaking country ISO 2-letter codes 
    const frenchSpeakingCountries = new Set([
        'FR', 'CA', 'CD', 'MG', 'CM', 'CI', 'NE', 'BF', 'ML', 'SN', 'TD', 'GN', 'RW', 'BI', 
        'BJ', 'HT', 'CH', 'TG', 'CF', 'CG', 'GA', 'DJ', 'GQ', 'KM', 'LU', 'VU', 'SC', 'MC', 'BE'
    ]);

    try {
                    
        // Call the geojs.io combined data endpoint asynchronously
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!response.ok) throw new Error('API server unreachable');
                    
        const data = await response.json();

        // Extract variables out of the geojs payload
        const countryCode = data.country_code ? data.country_code.toUpperCase() : null;

        // Evaluate whether the extracted country is French-speaking
        if (countryCode && frenchSpeakingCountries.has(countryCode)) {
            isFr = "fr";
        } 

    } catch (error) {
        console.error("GeoJS Error: ", error);
        isFr = null;
    }

    return isFr;
}
```
# More behavior 3

The static website is bilingual. The code is in the root index.html file and it uses the 'assets' sub-folder. The bug to fix is the navigation bar. It does not collapse into the Menu hamburger, when I press CTRL+SHIFT+I to open development tools in the browser but you can see very well that the menu items do no longer fit in the navigation bar. Leave the rest of the code as is.

# More behavior 4

Add a section before the Footer that contains the node `Laastras has been accepted into the EquityPilot program of <a href="https://www.fastercapital.com" style="color: blue; text-decoration: underline;">FasterCapital</a> and is seeking a capital of $500,000`. It should not be translated and must be put in such a way that it is easy to remove without affecting the rest of the code. The section should have no link in the navigation bar. However its look should be consistent with the rest of the page.

# More behavior 5

In the 'assets' folder, there are sub-folders named after the file names of the publications, except for 'Laastras Pitch Deck'. These sub-folders contain the html versions of the publications. For each publication card used to view the PDF versions, create two buttons 'WEB' and 'PDF' in that very order to allow the user choice to view the publication as HTML or as PDF. The PDF behavior should remain as is. For each HTML sub-folder, improve the HTML code to extract headings and subheadings to be accessible from a menu that shrinks in a standard hamburger icon at the top of the file in the navigation bar. The hamburger menu should be implemented as a left sidebar on all devices. Along with the hamburger icon should be the two icons available in the PDF viewer, that is, 'back to site' and 'copy link' icons allowing the user to go back to main site and to copy the link to the HTML publication, respectfully. Improve the font family and the font size to make the HTML publications readable and slick on all types of devices. Prioritize the 'Nunito' font-family, available using this html line of code: `<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">`. All the images must be centered horizontally in the view port and must scale to the view port without distortion for all types of devices. Use tailwindCSS to apply all the behavior mentioned.

# More behavior 6

In the 'assets' root folder, there are sub-folders named after the file names of the PDF publications, except for 'Laastras Pitch Deck'. These sub-folders contain the html versions of the publications. Inspect the code of each html publication to fix the behavior related to the hamburger in the top left corner. Make sure it looks like a hamburger button. The hamburger should, once clicked, should lead to a left sidebar menu that links to the headings and subheadings in the related html publication. The two buttons in the navigation bar in the top right corner of each html publication are 'back to site' and 'link copy' buttons. They should look exactly like the ones in the PDF viewer within the 'index.html' root file and must lead back to the main site and allow link copying for sharing, respectfully. Since the hamburger allows quick access to headings and subheadings of the html publications, we no longer need the 'table of contents' section, so, it must be removed anywhere it appears in those html publications. The rest of the behavior in the site should remain as is.


