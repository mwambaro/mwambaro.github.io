# Laastras

This website explains the mission of a start-up called `Laastras`. It explains its general framework
and the major brands that will lead to the accomplishment of the mission. It is a static website that uses
FormSubmit.co to send the needed form input to the Admin's email. It is freely hosted on Github Pages.


# ChatGPT next:

Next, add Esc key support to close the full-screen viewer, add fade-in/out animation for the overlay, add mouse becomes pointer on hovering the clickable images. Remember, no displaying the code in a canvas, just give the full-site code .html file for download.

In the code there is fullscreen overlay support that allows targetted images to be displayed. I will define 
forms that must be displayed in the overlay too, so you can add logic that does that. Make the forms very appealing using TailwindCSS as it is the case for the rest of the code. The forms support FormSubmit to onkezabahizi@gmail.com.
The current fullscreen overlay shows images only. I now want the same overlay to also display the forms, each triggered by specific link IDs. Remember, do not display the full-site code in a canvas, rather give it as .html file for download. Here is how the forms are defined:

- Form 1: It fires up when you click on a link tag whose id is "learn-more". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Learn more about GetClientele".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 2: It fires up when you click on a link tag whose id is "request-demo". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Request demo about GetClientele".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 3: It fires up when you click on a link tag whose id is "see-integration". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "See how DPI integrations support eCard Wireless".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 4: It fires up when you click on a link tag whose id is "partner-with-us". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Partner with us to launch eCard Wireless infrastructure".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 5: It fires up when you click on a link tag whose id is "join-chaperon". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Join Chaperon as an Unemployed or Job Seeker".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 6: It fires up when you click on a link tag whose id is "support". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Support Chaperon through donations or other means".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 7: It fires up when you click on a link tag whose id is "learn-about-aori". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Learn more about Aori (Acquire or Integrate)".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 8: It fires up when you click on a link tag whose id is "contribute-resources". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Contribute resources to Aori Conglomerate".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
- Form 9: It fires up when you click on a link tag whose id is "contact-us". Here are its fields:
    1. Input field named "subject" in which the user input what he/she wants to contact us about.
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).
    5. Textarea field named "message" in which the user input his/her message to us.
- Form 10: It fires up when you click on a link tag whose id is "request-whitepaper". Here are its fields:
    1. Invisible input field named "subject" whose value is set to "Request whitepaper about Laastras mission".
    2. Input field named "full_name" in which the user inputs his/her full name.
    3. Input field named "email" in which the user inputs his/her email.
    4. Input field named "phone_number" in which the user inputs his/her phone number (WhatsApp).

Given the code that contains forms, add validations. Give the resulting full code without omitting anything
as a .html file for download. You must validate:
- Full name as required, not blank
- Email as required, not blank, and ensure the email format
- Phone number as required, not blank, and according to the number leading with country code as in +25776177186
- Textarea message as required, not blank, and with a maximum of 3000 characters.
I want further enhancements, like inline error messages, highlighting invalid fields.

# ChatGPT postingJob:

Given the job description below, build an entire HTML site that uses jobPosting 
structured data (JSON-LD) so that Google can crawl it and display it as part of
Google jobs. Be sure to put the entire job description in the <body> part of the 
site as well. Use TailwindCSS to make it beautiful and appealing, using for example 
shadow box, and AOS for animations. In the <body> tag, at the bottom, make a clear link
that sends the user to the home page at `index.html`. 
Give the full site as .html file for download.

Information you will need for the structured data (JSON-LD) part:
- datePosted: 2025-12-4
- description: Get the full description from the description given below
- hiringOrganization: {"@type": "Organization", "name": "Laastras", "sameAs": "https://mwambaro.github.io"}
- jobLocation: [{
        "@type": "Place",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gimbo",
            "addressLocality": "Wakiso Sub-county",
            "addressRegion": "Wakiso",
            "postalCode": "00000",
            "addressCountry": "Uganda"
        }
    },
    {
        "@type": "Place",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "701 Aspen Peak Loop",
            "addressLocality": "Henderson",
            "addressRegion": "NV",
            "postalCode": "89011",
            "addressCountry": "US"
        }
    }]
- applicantLocationRequirements: {"@type": "Country", "name": "USA"}
- jobLocationType: TELECOMMUTE
- title: Co-Founder
- baseSalary: {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": {
            "@type": "QuantitativeValue",
            "value": 2000,
            "unitText": "MONTH"
        }
    }
- directApply: true
- employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR", "VOLUNTEER"]
- educationRequirements: [
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "high school" 
        },
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "bachelor degree" 
        },
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "postgraduate degree"
        }
    ]

Here is the detailed job description:

The Co-founder will help build and grow GetClientele, a client-routing app for marketplaces and malls. This role is hands-on, focused on product discovery, fieldwork, fundraising, and early operations.

Key Responsibilities:
- Visit marketplaces and malls daily to interview vendors and shoppers.
- Collect feedback, document insights, and report findings to guide product features.
- Support fundraising: prepare pitch materials, speak with investors, attend meetings, and follow up on leads.
- Help test early prototypes with real users and refine the product based on feedback.
- Build relationships with marketplace leaders, mall managers, and vendor groups.
- Assist in basic operations: organizing documents, planning activities, and helping structure internal processes.
- Participate in community engagement and awareness campaigns.

A Typical Day:
- Interview 10–20 vendors and shoppers.
- Record insights using structured templates.
- Review findings with the team and refine assumptions.
- Join an investor call or update the pitch deck.
- Meet a marketplace or mall official to explore partnerships.
- Test a feature or prototype with users.

Qualifications:
- Willing to provide essential equipment as in-kind equity contribution: engineering-grade laptop, professional camera, and business smartphone.
- Willing to defer salary until funding is secured.
- Must be US-based and legally allowed to work in the United States.
- Confident engaging with vendors, shoppers, and partners.
- Organized and detail-oriented, with consistent documentation habits.
- Clear, persuasive communicator for pitches and investor meetings.
- Experience in startups, business development, field research, or community engagement.
- Ability to collect, analyze, and summarize user insights.
- Familiarity with digital products or user-centered design.
- Interest in marketplaces, commerce, or socio-economic systems.
- Comfortable participating in fundraising activities.
- Reliable access to transportation for daily fieldwork.

Important note: 
Please, before applying, make sure you meet at least the first three qualifications
as they are very fundamental to the job. If you do not fully understand the qualification, copy it 
and paste it in some AI and ask the AI to help you understand it.

Application: 
Send your updated resume to `onkezabahizi@gmail.com`. The subject must be:
`Application for Co-Founder Role at Laastras`. In the body of the email to which you will 
attach the updated resume, tell us how you understand the first three qualifications and whether 
you meet them. This is important to make sure you do not get confused later in the application
process. In the body of the email, tell us as well why you are excited about working at Laastras
as Co-Founder.

# Author 
Obed-Edom Nkezabahizi: `onkezabahizi@gmail.com`