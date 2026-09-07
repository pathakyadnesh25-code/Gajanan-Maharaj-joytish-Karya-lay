
/* =========================================================
   GAJANAN MAHARAJ JYOTISH KARYALAY
   Main Website JavaScript
   ========================================================= */


/* =========================================================
   1. WEBSITE START
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Gajanan Maharaj Jyotish Karyalay website started successfully!"
    );

    initializeWebsite();

});


/* =========================================================
   2. INITIALIZE WEBSITE
   ========================================================= */

function initializeWebsite() {

    setupSmoothNavigation();

    setupLanguageButtons();

    setupConsultationButton();

    setupServiceButtons();

    setupScrollEffects();

}


/* =========================================================
   3. SMOOTH NAVIGATION
   ========================================================= */

function setupSmoothNavigation() {

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                targetId === ""
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}


/* =========================================================
   4. LANGUAGE BUTTONS
   ========================================================= */

function setupLanguageButtons() {

    const languageButtons =
        document.querySelectorAll(
            ".language-selector button"
        );

    languageButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const selectedLanguage =
                    this.textContent.trim();

                changeLanguage(selectedLanguage);

            }
        );

    });

}


/*
   TEMPORARY LANGUAGE FUNCTION

   Real English / Marathi / Hindi translation
   will be added in a later development step.
*/

function changeLanguage(language) {

    if (language === "EN") {

        showMessage(
            "English language selected."
        );

    }

    else if (language === "मराठी") {

        showMessage(
            "मराठी भाषा निवडली आहे."
        );

    }

    else if (language === "हिन्दी") {

        showMessage(
            "हिन्दी भाषा चुनी गई है."
        );

    }

}


/* =========================================================
   5. CONSULTATION BUTTON
   ========================================================= */

function setupConsultationButton() {

    const consultationButton =
        document.querySelector(
            ".pricing-box .btn-primary"
        );

    if (!consultationButton) {
        return;
    }

    consultationButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            startConsultation();

        }
    );

}


/*
   TEMPORARY CONSULTATION FUNCTION

   The real consultation system will later contain:

   2 minutes FREE
          ↓
   ₹25 payment
          ↓
   5 minutes 30 seconds
          ↓
   ₹25 payment
          ↓
   5 minutes 30 seconds
          ↓
   etc.

   That system will be connected to Supabase
   and a payment gateway later.
*/

function startConsultation() {

    showMessage(
        "Online consultation will be available in the next development step."
    );

}


/* =========================================================
   6. SERVICE BUTTONS
   ========================================================= */

function setupServiceButtons() {

    const serviceCards =
        document.querySelectorAll(
            ".service-card"
        );

    serviceCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const serviceName =
                    this.querySelector("h3");

                if (serviceName) {

                    console.log(
                        "Service selected:",
                        serviceName.textContent
                    );

                }

            }
        );

    });

}


/* =========================================================
   7. SCROLL EFFECTS
   ========================================================= */

function setupScrollEffects() {

    const sections =
        document.querySelectorAll("section");

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "section-visible"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );

    sections.forEach(function (section) {

        observer.observe(section);

    });

}


/* =========================================================
   8. MESSAGE SYSTEM
   ========================================================= */

function showMessage(message) {

    /*
       Remove an existing message.
    */

    const existingMessage =
        document.querySelector(
            ".website-message"
        );

    if (existingMessage) {

        existingMessage.remove();

    }


    /*
       Create message box.
    */

    const messageBox =
        document.createElement("div");

    messageBox.className =
        "website-message";

    messageBox.textContent =
        message;


    /*
       Message styling.
    */

    messageBox.style.position =
        "fixed";

    messageBox.style.bottom =
        "25px";

    messageBox.style.left =
        "50%";

    messageBox.style.transform =
        "translateX(-50%)";

    messageBox.style.background =
        "#65170f";

    messageBox.style.color =
        "#fff8e7";

    messageBox.style.padding =
        "14px 22px";

    messageBox.style.borderRadius =
        "8px";

    messageBox.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.25)";

    messageBox.style.zIndex =
        "9999";

    messageBox.style.maxWidth =
        "90%";

    messageBox.style.textAlign =
        "center";

    messageBox.style.fontSize =
        "15px";


    document.body.appendChild(
        messageBox
    );


    /*
       Automatically remove message.
    */

    setTimeout(function () {

        if (messageBox) {

            messageBox.remove();

        }

    }, 3000);

}


/* =========================================================
   9. WHATSAPP HELPER
   ========================================================= */

/*
   We will activate this after the father's
   real WhatsApp number is added.

   Example later:

   openWhatsApp("919XXXXXXXXX");
*/

function openWhatsApp(phoneNumber) {

    if (!phoneNumber) {

        showMessage(
            "WhatsApp number has not been added yet."
        );

        return;

    }

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber;

    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================================
   10. FUTURE CONSULTATION TIMER
   ========================================================= */

/*
   IMPORTANT:

   DO NOT use this frontend timer as the
   final payment/security system.

   Later the secure system will work like:

   Customer
      ↓
   Consultation created
      ↓
   Server records start time
      ↓
   120 seconds FREE
      ↓
   Consultation expires
      ↓
   ₹25 payment
      ↓
   Payment verified by server
      ↓
   330 seconds added
      ↓
   Server records end time
      ↓
   Timer displayed to customer
      ↓
   Continue for ₹25
*/

let consultationTimer = null;


/*
   This is only a DEVELOPMENT placeholder.

   It is NOT connected to payment.
*/

function startDemoTimer(seconds) {

    clearInterval(
        consultationTimer
    );

    let remainingSeconds =
        seconds;


    consultationTimer =
        setInterval(function () {

            remainingSeconds--;

            console.log(
                "Demo consultation time:",
                remainingSeconds,
                "seconds"
            );


            if (remainingSeconds <= 0) {

                clearInterval(
                    consultationTimer
                );

                console.log(
                    "Demo consultation ended."
                );

            }

        }, 1000);

}


/* =========================================================
   11. FUTURE KUNDALI REQUEST
   ========================================================= */

/*
   Later this function will send the customer's
   birth details to Supabase.

   Required information will include:

   - Full Name
   - Date of Birth
   - Time of Birth
   - Birth Place
   - Mobile Number
   - Email
   - Kundali Requirement
*/

function submitKundaliRequest(data) {

    console.log(
        "Kundali request:",
        data
    );

    showMessage(
        "Kundali request system will be connected soon."
    );

}


/* =========================================================
   12. FUTURE PUJA BOOKING
   ========================================================= */

/*
   Later this function will create a
   Dharmik Karya / Puja booking.
*/

function submitPujaBooking(data) {

    console.log(
        "Puja booking:",
        data
    );

    showMessage(
        "Puja booking system will be connected soon."
    );

}


/* =========================================================
   13. FUTURE ADMIN SYSTEM
   ========================================================= */

/*
   The admin panel will later allow
   Ravindra Vasant Pathakk to:

   - View customers
   - Accept consultations
   - Reply to customers
   - View consultation history
   - View payments
   - Manage Kundali requests
   - Upload Kundali PDFs
   - Manage Puja bookings
   - Add/edit services
   - Manage reviews
   - Manage website content
*/


/* =========================================================
   14. SECURITY REMINDER
   ========================================================= */

/*
   NEVER put these inside this file:

   ❌ Supabase service_role key
   ❌ Payment gateway secret key
   ❌ Private API keys
   ❌ Admin passwords
   ❌ Payment verification secrets

   Public frontend code can be viewed by anyone.

   Secure credentials will stay on the server/backend.
*/


/* =========================================================
   END OF SCRIPT.JS
   ========================================================= */

