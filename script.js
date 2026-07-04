<script>
    // 1. მონაცემების წამოღება localStorage-დან (თუ არ არსებობს, იწყება 0-დან)
    let score = parseInt(localStorage.getItem('myScore')) || 0;
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = score; // ეკრანზე გამოტანა

    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');

    function enterGame() {startScreen.style.display = 'none';
        gameScreen.style.display = 'flex';}

    function incrementScore() {score++;
        scoreElement.innerText = score;
        
        // 2. ქულის შენახვა localStorage-ში ყოველი დაჭერისას
        localStorage.setItem('myScore', score);

        // ანიმაცია
        const coin = document.getElementById('game-coin');
        coin.style.transform = 'scale(0.95)';
        setTimeout(() => { coin.style.transform = 'scale(1)'; }, 100);}

    // 3. როცა ტრანზაქცია შესრულდება, ბალანსი უნდა გაანულოთ:
    function resetScoreAfterTransaction() {score = 0;
        localStorage.setItem('myScore', 0);
        scoreElement.innerText = 0;
        alert("ტრანზაქცია წარმატებით შესრულდა!");}
</script>
