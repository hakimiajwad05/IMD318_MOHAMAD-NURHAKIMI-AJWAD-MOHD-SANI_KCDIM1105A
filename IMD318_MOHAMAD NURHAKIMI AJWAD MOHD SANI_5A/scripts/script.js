// --- Search Function for sitemap ---
function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let list = document.getElementById('sitemapList');  // rujuk sitemap
    let items = list.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent || items[i].innerText;
        if (text.toLowerCase().includes(input)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// --- Live Clock Function ---
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
    setTimeout(updateClock, 1000);
}

// Lightbox JS
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
}); 

