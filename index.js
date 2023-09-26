
ymaps.ready(initMap);

function initMap() {
    let map = new ymaps.Map('map', {
        center: [59.93211816614698,30.35414769720245],
        zoom: 18
    });
}

function onMapClick() {
    const mapBanner = document.querySelector("#map-wrapper");

    mapBanner.classList.toggle("hidden");
}

function onCatalogMouseover() {
    const catalogMenu = document.querySelector("#menu-current");

    catalogMenu.classList.toggle("hidden");
}

function onAboutClick() {
    const aboutForm = document.querySelector("#about-form");

    aboutForm.classList.toggle("hidden");
}

const mapHandler = () => {
    const buttonMap = document.querySelector("#button_map");
    const mapOverlay = document.querySelector("#map-overlay");

    buttonMap.addEventListener("click", onMapClick);
    mapOverlay.addEventListener("click", onMapClick);
}

const catalogHandler = () => {
    const linkCatalog = document.querySelector("#catalog-link");

    linkCatalog.addEventListener("mouseover", onCatalogMouseover);
    linkCatalog.addEventListener("mouseout", onCatalogMouseover);
}

const formHandler = () => {
    const buttonAbout = document.querySelector("#about_button");
    const buttonForm = document.querySelector("#form-button");

    buttonAbout.addEventListener("click", onAboutClick);
    buttonForm.addEventListener("click", onAboutClick);
}

const clearButtonsClasses = () => {
    const buttonCredit = document.querySelector("#button-credit");
    const buttonGuarantee = document.querySelector("#button-guarantee");
    const buttonDelivery = document.querySelector("#button-delivery");

    buttonCredit.classList.remove('slider__button--active');
    buttonDelivery.classList.remove('slider__button--active');
    buttonGuarantee.classList.remove('slider__button--active');
}

const clearSlidesClasses = () => {
    const slideCredit = document.querySelector("#credit-slide");
    const slideGuarantee = document.querySelector("#guarantee-slide");
    const slideDelivery = document.querySelector("#delivery-slide");

    if (!slideCredit.classList.contains("hidden")) {
        slideCredit.classList.add("hidden");
    }

    if (!slideDelivery.classList.contains("hidden")) {
        slideDelivery.classList.add("hidden");
    }

    if (!slideGuarantee.classList.contains("hidden")) {
        slideGuarantee.classList.add("hidden");
    };
}

const sliderHendler = () => {
    const buttonCredit = document.querySelector("#button-credit");
    const buttonGuarantee = document.querySelector("#button-guarantee");
    const buttonDelivery = document.querySelector("#button-delivery");

    const slideCredit = document.querySelector("#credit-slide");
    const slideGuarantee = document.querySelector("#guarantee-slide");
    const slideDelivery = document.querySelector("#delivery-slide");

    buttonGuarantee.addEventListener("click", () => {
        clearButtonsClasses();
        buttonGuarantee.classList.add('slider__button--active');

        clearSlidesClasses();
        slideGuarantee.classList.remove("hidden");
    });

    buttonCredit.addEventListener("click", () => {
        clearButtonsClasses();
        buttonCredit.classList.add('slider__button--active');

        clearSlidesClasses();
        slideCredit.classList.remove("hidden");
    });

    buttonDelivery.addEventListener("click", () => {
        clearButtonsClasses();
        buttonDelivery.classList.add('slider__button--active');

        clearSlidesClasses();
        slideDelivery.classList.remove("hidden");
    });

}

function init() {
    mapHandler();
    catalogHandler();
    formHandler();
    sliderHendler();
}

window.addEventListener("load", init);


