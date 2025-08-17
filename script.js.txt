function openPopup(wrapper) {
    const popup = document.getElementById("popup");
    const img = wrapper.querySelector('img');
    const caption = wrapper.querySelector('figcaption');
    
    document.getElementById("zoomedImage").src = img.src;
    document.getElementById("zoomedCaption").textContent = caption.textContent;
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close when clicking outside image
document.getElementById("popup").addEventListener('click', function(e) {
    if (e.target === this) closePopup();
});