document.addEventListener('DOMContentLoaded', () => {
    // 1. 7 წამიანი ლოდინის ვიდეო ლოგიკა
    const loadingScreen = document.getElementById('loading-screen');
    const video = document.getElementById('intro-video');

    if (video) {
        video.onended = () => {
            if (loadingScreen) loadingScreen.style.display = 'none';
        };
    }
    // სარეზერვო გათიშვა
    setTimeout(() => {
        if (loadingScreen) loadingScreen.style.display = 'none';
    }, 7500);

    // 2. ქულების აღდგენის "რკინისებური" მეთოდი
    const scoreElement = document.getElementById('score');
    
    // გვერდის ჩატვირთვისას წამოვიღოთ მონაცემი
    let savedScore = localStorage.getItem('myScore');
    if (scoreElement) {
        scoreElement.innerText = savedScore !== null ? savedScore : "0";
    }
});

// 3. ქულის მომატების ფუნქცია
function incrementScore() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        let currentScore = parseInt(scoreElement.innerText) || 0;
        let newScore = currentScore + 1;
        
        // ეკრანზე გამოტანა
        scoreElement.innerText = newScore;
        
        // ბრაუზერში შენახვა
        localStorage.setItem('myScore', newScore);
        
        console.log("ქულა შენახულია: " + newScore);
    }
}
