document.addEventListener('DOMContentLoaded', function () {
     var burger = document.querySelector('#header-burger'),
         menuContainer = document.querySelector('#header-menu'),
         overlay = document.querySelector('.overlay'),
         menuCloseButton = document.querySelector('#header-menu__close'),
         body = document.querySelector('body'),
         menuItems = document.querySelectorAll('.header-menu__link'),
         feedbackSlideContentSpan = document.querySelectorAll('.feedback-slide__content span'),
         questionAnswers = document.querySelectorAll('.questions-answer'),
         feedbackSlideContentLink = document.querySelectorAll('.feedback-slide__link'),
         questionLinks = document.querySelectorAll('.questions__link'),
         pageUp = document.querySelector('#page-up__link'),
         buttonCallLink = document.querySelectorAll('.button_call__link'),
         iin = document.querySelectorAll('.iin'),
         sections = document.querySelectorAll('section'),
         selectWrapper = document.querySelector('.select-wrapper'),
         closeModal = document.querySelector('#close-modal'),
         footerLocationInfo = document.querySelector('#footer-location__info'),
         headerLocationInfo = document.querySelector('#header-location__info');

    /* Events */

    if (burger != null) {
        burger.addEventListener('click', function (event) {
            burger.classList.toggle('active');
            menuContainer.classList.toggle('active');
            overlay.classList.toggle('active');
            menuCloseButton.classList.toggle('active');
            body.classList.toggle('lock');

        });
    }
    if (menuCloseButton != null) {
        menuCloseButton.addEventListener('click', function () {
            burger.classList.toggle('active');
            menuContainer.classList.toggle('active');
            overlay.classList.toggle('active');
            menuCloseButton.classList.toggle('active');
            body.classList.toggle('lock');

        });
    }
    if (menuItems != null && menuItems.length > 0) {
        menuItems.forEach(function (currentMenuItem, index, menuItems) {
            currentMenuItem.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
                burger.classList.toggle('active');
                menuContainer.classList.toggle('active');
                overlay.classList.toggle('active');
                menuCloseButton.classList.toggle('active');
                body.classList.toggle('lock');

                if(sections != null){
                    sections.forEach(function (currentSection, indexSection, sections) {
                        if(currentMenuItem.getAttribute('href') == "#" + currentSection.id)
                            currentSection.scrollIntoView({behavior: "smooth"});
                    });
                }

            })

        });
    }
    if (feedbackSlideContentLink != null && feedbackSlideContentSpan != null) {
        feedbackSlideContentLink.forEach(function (currentLink, currentIndex, feedbackSlideContentLink) {
            currentLink.addEventListener('click', function (event) {
                event.stopImmediatePropagation();
                event.preventDefault();
                let currentItemClick = this;
                feedbackSlideContentSpan.forEach(function (currentSpan, currentIndex, feedbackSlideContentSpan) {
                    if (currentSpan.textContent === '')
                        return;
                    if (currentItemClick.getAttribute('href') === '#' + currentSpan.id) {
                        currentSpan.classList.toggle('active');
                        if (currentSpan.classList.contains('active'))
                            currentItemClick.textContent = 'скрыть текст';
                        else
                            currentItemClick.textContent = 'читать полностью';
                    }

                });
            });
        });
    }
    if (questionLinks != null && questionLinks.length > 0 && questionAnswers != null) {
        acordeone()
    }
    if(pageUp != null){
        pageUp.addEventListener('click',function (event) {
           event.preventDefault();
           event.stopImmediatePropagation();
           window.scrollTo({top: 0, behavior: "smooth"});
        });
    }
    if(buttonCallLink != null){
        buttonCallLink.forEach(function (currentButtonLink, currentIndexLink, buttonCallLink) {
           currentButtonLink.addEventListener('click',function (event) {
              event.preventDefault();
              event.stopImmediatePropagation();
           });
        });
    }
    if(iin != null){
        iin.forEach(function (currentIin,currentIinIndex,iin) {
           currentIin.addEventListener('click', function (event) {
               event.preventDefault();
               event.stopImmediatePropagation();
           });
        });
    }
    if(headerLocationInfo!= null){
        headerLocationInfo.addEventListener('click',showModal);
    }
    if(footerLocationInfo != null){
        footerLocationInfo.addEventListener('click',showModal);
    }

    if(closeModal!= null){
        closeModal.addEventListener('click',function () {
            selectWrapper.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('lock');

        });
    }
    function showModal() {
        if(overlay != null && selectWrapper != null){
            body.classList.add('lock');
            overlay.classList.add('active');
            selectWrapper.classList.add('active');
        }
    }

    function acordeone() {
        let span, img;
        questionLinks.forEach(function (currentLink, currentIndex, questionLinks) {
            currentLink.addEventListener('click',function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
                img = currentLink.querySelector('.questions-item__img');
                currentLink.classList.toggle('active');
                span = currentLink.nextElementSibling;
                span.classList.toggle('active');
                if(currentLink.classList.contains('active') && span.classList.contains('active')){
                    img.innerHTML = '&minus;';
                }else{
                    img.innerHTML = '&plus;';
                }

            });
        });

    }


});

