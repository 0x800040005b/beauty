document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('#select__header'),
        selectBody = document.querySelector('#select__body'),
        selectElement = document.querySelector('#select-current__item');

    /* Events */
    let selectItems = selectBody.querySelectorAll('.select__item');
    if (selectItems != null) {
        selectItems.forEach((item) => {
            if (item.classList.contains('choose')) {
                selectElement.innerText = item.innerText;
                document.querySelectorAll('.select__head').forEach((item) => {
                    item.innerText = selectElement.innerText;
                });
            }
        });

    }
    if (header != null) {
        header.addEventListener('click', function () {
            selectBody.classList.toggle('active');
            document.querySelector('.select-icon').classList.toggle('rotate-icon');

        });
    }

    selectBody.addEventListener('click', function (event) {
        selectItems.forEach((item) => {
            if (item.classList.contains('choose'))
                item.classList.remove('choose');
        });
        let clickedElement = event.target;
        if (!clickedElement.classList.contains('choose')) {
            clickedElement.classList.add('choose');
            selectElement.innerText = clickedElement.innerText;
            selectBody.classList.remove('active');
            document.querySelector('.select-icon').classList.toggle('rotate-icon');
            document.querySelectorAll('.select__head').forEach((item) => {
                item.innerText = selectElement.innerText;
            });

        }


    });


});
