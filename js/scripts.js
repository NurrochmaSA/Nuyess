/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function () {
    const instagramButton = document.getElementById('instagramButton');

    // Nama pengguna Instagram yang dituju
    const instagramUsername = 'nsaisyahh_';

    instagramButton.addEventListener('click', function () {
        openInstagramProfile();
    });

    function openInstagramProfile() {
        const instagramUrl = `https://www.instagram.com/${instagramUsername}`;
        window.open(instagramUrl, '_blank');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.getElementById('whatsappButton');

    // Nomor WhatsApp yang dituju
    const phoneNumber = '6285712631286';

    whatsappButton.addEventListener('click', function () {
        openWhatsAppChat();
    });

    function openWhatsAppChat() {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    }
});


