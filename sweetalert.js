/* =========================================================
   SWEETALERT2 GLOBAL HELPER
   CNSTECH PORTFOLIO
========================================================= */

"use strict";

/* =========================================================
   SUCCESS ALERT
========================================================= */

function successAlert(message, title = "Success!") {
    return Swal.fire({
        icon: "success",
        title: title,
        text: message,
        confirmButtonText: "OK"
    });
}

/* =========================================================
   ERROR ALERT
========================================================= */

function errorAlert(message, title = "Error!") {
    return Swal.fire({
        icon: "error",
        title: title,
        text: message,
        confirmButtonText: "OK"
    });
}

/* =========================================================
   WARNING ALERT
========================================================= */

function warningAlert(message, title = "Warning!") {
    return Swal.fire({
        icon: "warning",
        title: title,
        text: message,
        confirmButtonText: "OK"
    });
}

/* =========================================================
   INFORMATION ALERT
========================================================= */

function infoAlert(message, title = "Information") {
    return Swal.fire({
        icon: "info",
        title: title,
        text: message,
        confirmButtonText: "OK"
    });
}

/* =========================================================
   LOADING ALERT
========================================================= */

function loadingAlert(message = "Please wait...") {
    Swal.fire({
        title: message,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
}

/* =========================================================
   CLOSE ALERT
========================================================= */

function closeAlert() {
    if (Swal.isVisible()) {
        Swal.close();
    }
}

/* =========================================================
   CONFIRMATION ALERT
========================================================= */

async function confirmAlert(
    message,
    title = "Are you sure?"
) {
    const result = await Swal.fire({
        icon: "warning",
        title: title,
        text: message,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        reverseButtons: true
    });

    return result.isConfirmed;
}

/* =========================================================
   SUCCESS TOAST
========================================================= */

function successToast(message) {
    return Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });
}

/* =========================================================
   ERROR TOAST
========================================================= */

function errorToast(message) {
    return Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: message,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
}