"use strict";

const form = document.getElementById("form");

if (form) {

    const submitBtn = form.querySelector(
        'button[type="submit"]'
    );

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        if (!navigator.onLine) {

            errorAlert(
                "Please connect to the internet and try again.",
                "No Internet Connection"
            );

            return;
        }

        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        const formData = new FormData(form);

        formData.append(
            "access_key",
            "e570d7c1-db84-4783-a6f4-1ba302259ee6"
        );

        loadingAlert("Sending your message...");

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            closeAlert();

            if (response.ok && data.success) {

                form.reset();

                await successAlert(
                    "Your message has been sent successfully.",
                    "Message Sent!"
                );

            } else {

                errorAlert(
                    data.message ||
                    "Your message could not be sent. Please try again.",
                    "Message Not Sent"
                );

            }

        } catch (error) {

            closeAlert();

            errorAlert(
                "Unable to send your message. Please check your internet connection.",
                "Connection Error"
            );

            console.error(
                "Web3Forms Error:",
                error
            );

        } finally {

            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

        }

    });

}