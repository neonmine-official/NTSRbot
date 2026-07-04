document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const video = document.getElementById('intro-video');

    if (video) {
        // როცა ვიდეო დასრულდება, ლოდინის ეკრანი გაქრება
        video.onended = () => {
            loadingScreen.style.display = 'none';
        };
        
        // სარეზერვო ვარიანტი: 7 წამში მაინც გაქრეს (თუ ვიდეო დაზიანებულია)
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 7000);
    }
});
// უსაფრთხო ჩატვირთვა
(function() {
    const scoreDisplay = document.getElementById('score');

    // 1. ქულის აღდგენა (ფუნქცია)
    function loadScore() {
        try {
            const saved = localStorage.getItem('myScore');
            if (saved !== null && scoreDisplay) {
                scoreDisplay.innerText = saved;
            }
        } catch (e) {
            console.error("Local Storage-ზე წვდომა შეზღუდულია");
        }
    }

    // 2. ქულის შენახვა (ფუნქცია)
    window.incrementScore = function() {
        try {
            let current = parseInt(scoreDisplay.innerText) || 0;
            let next = current + 1;
            scoreDisplay.innerText = next;
            localStorage.setItem('myScore', next.toString());
        } catch (e) {
            console.error("ქულის შენახვა ვერ მოხერხდა");
        }
    };

    // 3. ვიდეოს ლოდინი
    const video = document.getElementById('intro-video');
    const screen = document.getElementById('loading-screen');

    if (video) {
        video.onended = () => { if(screen) screen.style.display = 'none'; };
        setTimeout(() => { if(screen) screen.style.display = 'none'; }, 7500);
    }

    // გაშვება
    loadScore();
})();
