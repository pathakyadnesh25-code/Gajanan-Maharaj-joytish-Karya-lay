/* =========================================================
   GAJANAN MAHARAJ JYOTISH KARYALAY
   MULTILINGUAL WEBSITE SYSTEM
   English | Marathi | Hindi
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Gajanan Maharaj Jyotish Karyalay website started successfully!");

    initializeWebsite();
    initializeLanguageSystem();
    initializeNavigation();
    initializeServiceLogging();

});


/* =========================================================
   WEBSITE INITIALIZATION
========================================================= */

function initializeWebsite() {

    document.documentElement.setAttribute("lang", "en");

}


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

const translations = {

    en: {

        "Home": "Home",
        "About": "About",
        "Services": "Services",
        "Kundali": "Kundali",
        "Consultation": "Consultation",
        "Dharmik Karya": "Dharmik Karya",
        "Contact": "Contact",

        "OUR SERVICES": "OUR SERVICES",
        "ASTROLOGY": "ASTROLOGY",
        "KUNDALI": "KUNDALI",
        "DHARMIK KARYA": "DHARMIK KARYA",
        "LIVE CONSULTATION": "LIVE CONSULTATION",
        "SIMPLE PROCESS": "SIMPLE PROCESS",
        "NEED GUIDANCE?": "NEED GUIDANCE?",

        "Gajanan Maharaj": "Gajanan Maharaj",
        "Jyotish Karyalay": "Jyotish Karyalay",

        "Astrology & Traditional Guidance":
            "Astrology & Traditional Guidance",

        "Astrology Consultation":
            "Astrology Consultation",

        "General Astrology Consultation":
            "General Astrology Consultation",

        "Marriage Consultation":
            "Marriage Consultation",

        "Career Guidance":
            "Career Guidance",

        "Education Guidance":
            "Education Guidance",

        "Business Guidance":
            "Business Guidance",

        "Life Questions":
            "Life Questions",

        "Kundali Services":
            "Kundali Services",

        "Kundali Making":
            "Kundali Making",

        "Kundali Analysis":
            "Kundali Analysis",

        "Kundali Questions":
            "Kundali Questions",

        "Traditional Dharmik Karya":
            "Traditional Dharmik Karya",

        "Satyanarayana Puja":
            "Satyanarayana Puja",

        "Other Dharmik Karya":
            "Other Dharmik Karya",

        "How Our Services Work":
            "How Our Services Work",

        "Choose a Service":
            "Choose a Service",

        "Provide Details":
            "Provide Details",

        "Get Guidance":
            "Get Guidance",

        "Have a Question?":
            "Have a Question?",

        "Ask Astrologer":
            "Ask Astrologer",

        "Start Consultation":
            "Start Consultation",

        "Start Free Consultation":
            "Start Free Consultation",

        "Request Kundali":
            "Request Kundali",

        "Consult Astrologer":
            "Consult Astrologer",

        "View Details":
            "View Details",

        "Contact Us":
            "Contact Us",

        "First 2 minutes FREE":
            "First 2 minutes FREE",

        "2 Minutes FREE":
            "2 Minutes FREE",

        "2 MIN":
            "2 MIN",

        "FREE":
            "FREE",

        "₹25":
            "₹25",

        "5 MIN 30 SEC":
            "5 MIN 30 SEC",

        "5 min 30 sec":
            "5 min 30 sec"

    },


    /* =====================================================
       MARATHI
    ===================================================== */

    mr: {

        "Home": "मुख्यपृष्ठ",
        "About": "आमच्याबद्दल",
        "Services": "सेवा",
        "Kundali": "कुंडली",
        "Consultation": "सल्लामसलत",
        "Dharmik Karya": "धार्मिक कार्य",
        "Contact": "संपर्क",

        "OUR SERVICES": "आमच्या सेवा",
        "ASTROLOGY": "ज्योतिष",
        "KUNDALI": "कुंडली",
        "DHARMIK KARYA": "धार्मिक कार्य",
        "LIVE CONSULTATION": "ऑनलाइन सल्लामसलत",
        "SIMPLE PROCESS": "सोपे प्रक्रिया",
        "NEED GUIDANCE?": "मार्गदर्शन हवे आहे?",

        "Gajanan Maharaj": "गजानन महाराज",
        "Jyotish Karyalay": "ज्योतिष कार्यालय",

        "Astrology & Traditional Guidance":
            "ज्योतिष आणि पारंपरिक मार्गदर्शन",

        "Astrology Consultation":
            "ज्योतिष सल्लामसलत",

        "General Astrology Consultation":
            "सामान्य ज्योतिष सल्लामसलत",

        "Marriage Consultation":
            "विवाह सल्लामसलत",

        "Career Guidance":
            "करिअर मार्गदर्शन",

        "Education Guidance":
            "शैक्षणिक मार्गदर्शन",

        "Business Guidance":
            "व्यवसाय मार्गदर्शन",

        "Life Questions":
            "जीवनाशी संबंधित प्रश्न",

        "Kundali Services":
            "कुंडली सेवा",

        "Kundali Making":
            "कुंडली तयार करणे",

        "Kundali Analysis":
            "कुंडली विश्लेषण",

        "Kundali Questions":
            "कुंडली संबंधी प्रश्न",

        "Traditional Dharmik Karya":
            "पारंपरिक धार्मिक कार्य",

        "Satyanarayana Puja":
            "सत्यनारायण पूजा",

        "Other Dharmik Karya":
            "इतर धार्मिक कार्य",

        "How Our Services Work":
            "आमच्या सेवा कशा कार्य करतात",

        "Choose a Service":
            "सेवा निवडा",

        "Provide Details":
            "माहिती द्या",

        "Get Guidance":
            "मार्गदर्शन मिळवा",

        "Have a Question?":
            "तुम्हाला काही प्रश्न आहे का?",

        "Ask Astrologer":
            "ज्योतिषांना विचारा",

        "Start Consultation":
            "सल्लामसलत सुरू करा",

        "Start Free Consultation":
            "मोफत सल्लामसलत सुरू करा",

        "Request Kundali":
            "कुंडलीची विनंती करा",

        "Consult Astrologer":
            "ज्योतिषांचा सल्ला घ्या",

        "View Details":
            "तपशील पहा",

        "Contact Us":
            "आमच्याशी संपर्क साधा",

        "First 2 minutes FREE":
            "पहिली २ मिनिटे मोफत",

        "2 Minutes FREE":
            "२ मिनिटे मोफत",

        "2 MIN":
            "२ मिनिटे",

        "FREE":
            "मोफत",

        "5 MIN 30 SEC":
            "५ मिनिटे ३० सेकंद",

        "5 min 30 sec":
            "५ मिनिटे ३० सेकंद"

    },


    /* =====================================================
       HINDI
    ===================================================== */

    hi: {

        "Home": "होम",
        "About": "हमारे बारे में",
        "Services": "सेवाएँ",
        "Kundali": "कुंडली",
        "Consultation": "परामर्श",
        "Dharmik Karya": "धार्मिक कार्य",
        "Contact": "संपर्क",

        "OUR SERVICES": "हमारी सेवाएँ",
        "ASTROLOGY": "ज्योतिष",
        "KUNDALI": "कुंडली",
        "DHARMIK KARYA": "धार्मिक कार्य",
        "LIVE CONSULTATION": "ऑनलाइन परामर्श",
        "SIMPLE PROCESS": "सरल प्रक्रिया",
        "NEED GUIDANCE?": "मार्गदर्शन चाहिए?",

        "Gajanan Maharaj": "गजानन महाराज",
        "Jyotish Karyalay": "ज्योतिष कार्यालय",

        "Astrology & Traditional Guidance":
            "ज्योतिष एवं पारंपरिक मार्गदर्शन",

        "Astrology Consultation":
            "ज्योतिष परामर्श",

        "General Astrology Consultation":
            "सामान्य ज्योतिष परामर्श",

        "Marriage Consultation":
            "विवाह परामर्श",

        "Career Guidance":
            "करियर मार्गदर्शन",

        "Education Guidance":
            "शिक्षा संबंधी मार्गदर्शन",

        "Business Guidance":
            "व्यवसाय मार्गदर्शन",

        "Life Questions":
            "जीवन से जुड़े प्रश्न",

        "Kundali Services":
            "कुंडली सेवाएँ",

        "Kundali Making":
            "कुंडली बनाना",

        "Kundali Analysis":
            "कुंडली विश्लेषण",

        "Kundali Questions":
            "कुंडली संबंधी प्रश्न",

        "Traditional Dharmik Karya":
            "पारंपरिक धार्मिक कार्य",

        "Satyanarayana Puja":
            "सत्यनारायण पूजा",

        "Other Dharmik Karya":
            "अन्य धार्मिक कार्य",

        "How Our Services Work":
            "हमारी सेवाएँ कैसे काम करती हैं",

        "Choose a Service":
            "सेवा चुनें",

        "Provide Details":
            "जानकारी दें",

        "Get Guidance":
            "मार्गदर्शन प्राप्त करें",

        "Have a Question?":
            "क्या आपका कोई प्रश्न है?",

        "Ask Astrologer":
            "ज्योतिषी से पूछें",

        "Start Consultation":
            "परामर्श शुरू करें",

        "Start Free Consultation":
            "निःशुल्क परामर्श शुरू करें",

        "Request Kundali":
            "कुंडली के लिए अनुरोध करें",

        "Consult Astrologer":
            "ज्योतिषी से परामर्श करें",

        "View Details":
            "विवरण देखें",

        "Contact Us":
            "संपर्क करें",

        "First 2 minutes FREE":
            "पहले २ मिनट निःशुल्क",

        "2 Minutes FREE":
            "२ मिनट निःशुल्क",

        "2 MIN":
            "२ मिनट",

        "FREE":
            "निःशुल्क",

        "5 MIN 30 SEC":
            "५ मिनट ३० सेकंड",

        "5 min 30 sec":
            "५ मिनट ३० सेकंड"

    }

};


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

function initializeLanguageSystem() {

    const buttons = document.querySelectorAll(".language-selector button");

    if (!buttons.length) {
        return;
    }

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const text = button.textContent.trim();

            let language = "en";

            if (text === "मराठी") {
                language = "mr";
            }

            if (text === "हिन्दी") {
                language = "hi";
            }

            changeLanguage(language);

        });

    });


    const savedLanguage = localStorage.getItem("websiteLanguage");

    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }

}


/* =========================================================
   CHANGE LANGUAGE
========================================================= */

function changeLanguage(language) {

    if (!translations[language]) {
        return;
    }

    localStorage.setItem("websiteLanguage", language);

    document.documentElement.setAttribute(
        "lang",
        language === "mr" ? "mr" : language === "hi" ? "hi" : "en"
    );

    translatePage(language);

    updateLanguageButton(language);

}


/* =========================================================
   TRANSLATE PAGE
========================================================= */

function translatePage(language) {

    const dictionary = translations[language];

    const elements = document.querySelectorAll(
        "body h1, body h2, body h3, body h4, body h5, " +
        "body p, body span, body a, body button, body strong, " +
        "body label, body option"
    );


    elements.forEach(function (element) {

        /*
         * Do not translate script/style elements.
         */

        if (
            element.tagName === "SCRIPT" ||
            element.tagName === "STYLE"
        ) {
            return;
        }


        const originalText =
            element.getAttribute("data-original-text") ||
            element.textContent.trim();


        if (!originalText) {
            return;
        }


        /*
         * Save the original English text once.
         */

        if (!element.hasAttribute("data-original-text")) {
            element.setAttribute(
                "data-original-text",
                originalText
            );
        }


        const englishText =
            element.getAttribute("data-original-text");


        if (dictionary[englishText]) {

            element.textContent =
                dictionary[englishText];

        }

    });


    /*
     * Translate document title.
     */

    translateTitle(language);

}


/* =========================================================
   PAGE TITLES
========================================================= */

function translateTitle(language) {

    const path = window.location.pathname.toLowerCase();

    let title = "Gajanan Maharaj Jyotish Karyalay";

    if (path.includes("services")) {

        if (language === "mr") {
            title = "आमच्या सेवा | गजानन महाराज ज्योतिष कार्यालय";
        }

        else if (language === "hi") {
            title = "हमारी सेवाएँ | गजानन महाराज ज्योतिष कार्यालय";
        }

        else {
            title = "Our Services | Gajanan Maharaj Jyotish Karyalay";
        }

    }

    else if (path.includes("about")) {

        if (language === "mr") {
            title = "आमच्याबद्दल | गजानन महाराज ज्योतिष कार्यालय";
        }

        else if (language === "hi") {
            title = "हमारे बारे में | गजानन महाराज ज्योतिष कार्यालय";
        }

        else {
            title = "About | Gajanan Maharaj Jyotish Karyalay";
        }

    }

    else if (path.includes("kundali")) {

        if (language === "mr") {
            title = "कुंडली | गजानन महाराज ज्योतिष कार्यालय";
        }

        else if (language === "hi") {
            title = "कुंडली | गजानन महाराज ज्योतिष कार्यालय";
        }

        else {
            title = "Kundali | Gajanan Maharaj Jyotish Karyalay";
        }

    }

    else if (path.includes("consultation")) {

        if (language === "mr") {
            title = "सल्लामसलत | गजानन महाराज ज्योतिष कार्यालय";
        }

        else if (language === "hi") {
            title = "परामर्श | गजानन महाराज ज्योतिष कार्यालय";
        }

        else {
            title = "Consultation | Gajanan Maharaj Jyotish Karyalay";
        }

    }

    else if (path.includes("dharmik-karya")) {

        if (language === "mr") {
            title = "धार्मिक कार्य | गजानन महाराज ज्योतिष कार्यालय";
        }

        else if (language === "hi") {
            title = "धार्मिक कार्य | गजानन महाराज ज्योतिष कार्यालय";
        }

        else {
            title = "Dharmik Karya | Gajanan Maharaj Jyotish Karyalay";
        }

    }

    else if (path.includes("contact")) {

        if (language === "mr") {
            title = "संपर्क | गजानन महाराज ज्योतिष कार्यालय";
        }

        else if (language === "hi") {
            title = "संपर्क | गजानन महाराज ज्योतिष कार्यालय";
        }

        else {
            title = "Contact | Gajanan Maharaj Jyotish Karyalay";
        }

    }

    else {

        if (language === "mr") {
            title = "गजानन महाराज ज्योतिष कार्यालय";
        }

        else if (language === "hi") {
            title = "गजानन महाराज ज्योतिष कार्यालय";
        }

    }

    document.title = title;

}


/* =========================================================
   LANGUAGE BUTTON ACTIVE STATE
========================================================= */

function updateLanguageButton(language) {

    const buttons =
        document.querySelectorAll(".language-selector button");

    buttons.forEach(function (button) {

        button.classList.remove("active-language");

    });


    buttons.forEach(function (button) {

        const text = button.textContent.trim();

        if (
            (language === "en" && text === "EN") ||
            (language === "mr" && text === "मराठी") ||
            (language === "hi" && text === "हिन्दी")
        ) {

            button.classList.add("active-language");

        }

    });

}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

    const links = document.querySelectorAll(
        'a[href^="#"]'
    );

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {

                event.preventDefault();

                document
                    .querySelector(targetId)
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    });

}


/* =========================================================
   SERVICE LOGGING
========================================================= */

function initializeServiceLogging() {

    const serviceButtons =
        document.querySelectorAll(".service-card a");

    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".service-card");

            if (!card) {
                return;
            }

            const title =
                card.querySelector("h3");

            if (title) {

                console.log(
                    "Service selected:",
                    title.textContent.trim()
                );

            }

        });

    });

}


/* =========================================================
   MESSAGE SYSTEM
========================================================= */

function showMessage(message, type = "success") {

    const existing =
        document.querySelector(".website-message");

    if (existing) {
        existing.remove();
    }


    const messageBox =
        document.createElement("div");

    messageBox.className =
        "website-message " + type;

    messageBox.textContent =
        message;


    document.body.appendChild(messageBox);


    setTimeout(function () {

        messageBox.classList.add("show");

    }, 50);


    setTimeout(function () {

        messageBox.classList.remove("show");

        setTimeout(function () {

            messageBox.remove();

        }, 300);

    }, 4000);

}


/* =========================================================
   WHATSAPP HELPER
========================================================= */

function openWhatsApp(phoneNumber) {

    if (!phoneNumber) {
        console.warn("WhatsApp number is not configured yet.");
        return;
    }

    const url =
        "https://wa.me/" +
        phoneNumber.replace(/\D/g, "");

    window.open(url, "_blank");

}


/* =========================================================
   DEMO TIMER
========================================================= */

function startDemoTimer(seconds) {

    let remaining = seconds;

    const interval =
        setInterval(function () {

            remaining--;

            if (remaining <= 0) {

                clearInterval(interval);

                console.log(
                    "Demo consultation period ended."
                );

            }

        }, 1000);

}


/* =========================================================
   FUTURE BACKEND FUNCTIONS
========================================================= */

function submitKundaliRequest(data) {

    console.log(
        "Kundali request:",
        data
    );

    /*
     * Supabase backend will be connected later.
     */

}


function submitPujaBooking(data) {

    console.log(
        "Puja booking:",
        data
    );

    /*
     * Supabase backend will be connected later.
     */

}


/* =========================================================
   SECURITY REMINDER
========================================================= */

/*
   NEVER put these in frontend JavaScript:

   - Supabase service_role key
   - Payment secret key
   - Razorpay secret key
   - Admin password
   - Payment verification secret

   These will be handled securely on the backend.
*/
