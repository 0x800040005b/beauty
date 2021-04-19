let discountPetals = document.querySelector('.discount-petals'),
    servicePetals = document.querySelector('#service-petals');
let parallaxDiscount = new Parallax(discountPetals,{
    relativeInput: true,
});
let parallaxService = new Parallax(servicePetals,{
    relativeInput: true,
});

