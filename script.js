function openPopup(wrapper) {
    const popup = document.getElementById("popup");
    const zoomedImage = document.getElementById("zoomedImage");
    const zoomedCaption = document.getElementById("zoomedCaption");

    if (!popup || !zoomedImage) {
        return;
    }

    const img = wrapper.querySelector('img');
    const caption = wrapper.querySelector('figcaption');

    if (!img) {
        return;
    }

    zoomedImage.src = img.src;
    zoomedImage.alt = img.alt || "Expanded artwork preview";

    if (zoomedCaption) {
        zoomedCaption.textContent = caption ? caption.textContent : "";
    }

    popup.style.display = "flex";
    document.body.classList.add('popup-overlay-active');
}

function closePopup() {
    const popup = document.getElementById("popup");
    if (!popup) {
        return;
    }

    popup.style.display = "none";
    document.body.classList.remove('popup-overlay-active');
}

const popupOverlay = document.getElementById("popup");
if (popupOverlay) {
    popupOverlay.addEventListener('click', function (e) {
        if (e.target === this) {
            closePopup();
        }
    });
}
