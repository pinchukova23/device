
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

function onDeliveryGuarantee() {
    const deliveryActive = document.querySelector("#delivery-active");
    const deliveryPossive = document.querySelector("#delivery-possive");
    const buttonGuaranteeActive = document.querySelector("#button-guarantee-active");
    const deliveryDescription = document.querySelector("#delivery__description");
    const deliveryGuarantee = document.querySelector("#guarantee-description");

    deliveryActive.classList.toggle("hidden");
    deliveryPossive.classList.toggle("hidden");
    buttonGuaranteeActive.classList.remove("delivery__item--possive");
    buttonGuaranteeActive.classList.add("delivery__button--active");
    deliveryDescription.classList.toggle("hidden");
    deliveryGuarantee.classList.toggle("hidden");

}


function init() {
   const buttonMap = document.querySelector("#button_map");
   const mapOverlay = document.querySelector("#map-overlay");
   const linkCatalog = document.querySelector("#catalog-link");
   const buttonAbout = document.querySelector("#about_button");
   const buttonForm = document.querySelector("#form-button");
   const buttonGuarantee = document.querySelector("#button-guarantee");

   buttonMap.addEventListener("click", onMapClick);
   mapOverlay.addEventListener("click", onMapClick);
   linkCatalog.addEventListener("mouseover", onCatalogMouseover);
   linkCatalog.addEventListener("mouseout", onCatalogMouseover);
   buttonAbout.addEventListener("click", onAboutClick);
   buttonForm.addEventListener("click", onAboutClick);
   buttonGuarantee.addEventListener("click", onDeliveryGuarantee);
}

window.addEventListener("load", function (event) {
    init();
});


