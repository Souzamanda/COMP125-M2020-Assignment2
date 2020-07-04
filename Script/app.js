"use strict";

// IIFE - Immediately Ivoked Function Expression

(function()
{

    function highLightActiveLink()
    {
        let title = document.title
        title = title.toLowerCase();
        console.log(`The title is ${title}`);

        let navbarAnchors = document.querySelectorAll("li a");

        for (const anchor of navbarAnchors)
        {
            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            if ((title === "about") && (anchorString === "index") || (title === anchorString))
            {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }

    //Form validation
    function validateForm()
    {
        let contactForm = document.getElementsByTagName("form")[0];

        if(contactForm)
        {
            contactForm.noValidate = true;
            let errorMessage = document.getElementById("errorMessage");
            
            //First Name validation
            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) =>
            {
                if(firstName.value.length < 2)
                {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid first name. With at least 2 characters.";
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            //Last Name validation
            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) =>
            {
                if(lastName.value.length < 2)
                {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid last name. With at least 2 characters.";
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            //Contact number validation
            let contactNumber = document.getElementById("contactNumber");
            contactNumber.addEventListener("blur", (event) =>
            {
                if(contactNumber.value.match(/^\d{10}$/))
                {
                    errorMessage.hidden = true;
                }
                else
                {
                    contactNumber.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid contact number with 10 digits and no symbols";
                }
            });

            //Email validation
            let emailAdress = document.getElementById("emailAdress");
            emailAdress.addEventListener("blur", (event) =>
            {
                if(emailAdress.value.match(/^([^\.-_])([\w\.-]+)@([a-zA-Z0-9-]+).([a-z]){2,4}(\.[a-z]{2,4})?$/))
                {
                    errorMessage.hidden = true;
                }
                else
                {
                    emailAdress.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid email address";
                }
            });

            //Submit alert
            let submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", (event) =>
            {
                event.preventDefault();
                
                successMessage.hidden = false;
                successMessage.textContent = "Form successfully sent!"
                console.log("Submit button clicked");
            });

            return true;
        }

        return false;

    }

    function Start ()
    {
        console.log('%cApp has started...', "color:purple; font-size: 24px;");

        let title = highLightActiveLink();

        let formValidation = validateForm();
        if(formValidation)
        {
            console.log("Successfully validated form");
        }
        else
        {
            console.warn("Form not validated - does not exist");
        }
    }

window.addEventListener("load", Start);

})();