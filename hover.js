document.addEventListener('DOMContentLoaded', function() {
    const footerAnimation = document.querySelector('.footer-animation');
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Aggiungi la classe appropriata in base al social link hoverato
            if (link.classList.contains('email')) {
                footerAnimation.classList.add('email-hover');
            } else if (link.classList.contains('youtube')) {
                footerAnimation.classList.add('youtube-hover');
            } else if (link.classList.contains('facebook')) {
                footerAnimation.classList.add('facebook-hover');
            } else if (link.classList.contains('instagram')) {
                footerAnimation.classList.add('instagram-hover');
            } else if (link.classList.contains('school')) {
                footerAnimation.classList.add('school-hover');
            }
        });

        link.addEventListener('mouseleave', function() {
            // Rimuovi tutte le classi hover quando il mouse esce dal link
            footerAnimation.classList.remove(
                'email-hover', 
                'youtube-hover', 
                'facebook-hover', 
                'instagram-hover', 
                'school-hover'
            );
        });
    });
});