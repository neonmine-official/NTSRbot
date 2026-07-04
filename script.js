document.addEventListener('DOMContentLoaded', () => {
    // 1. 7 წამიანი ლოდინი
    setTimeout(() => {
        const loading = document.getElementById('loading-screen');
        if (loading) loading.style.display = 'none';
    }, 7000);

    // 2. გვერდის ჩატვირთვისას, ამოიღეთ შენახული ქულა localStorage-დან
    const savedScore = localStorage.getItem('myScore');
    if (savedScore !== null) {
        document.getElementById('score').innerText = savedScore;
    }
});

function incrementScore() {
    // 3. მიიღეთ მიმდინარე ქულა ეკრანიდან
    let currentScore = parseInt(document.getElementById('score').innerText);
    let newScore = currentScore + 1;
    
    // 4. განაახლეთ ეკრანი
    document.getElementById('score').innerText = newScore;
    
    // 5. შეინახეთ ახალი ქულა localStorage-ში, რომ არ წაიშალოს
    localStorage.setItem('myScore', newScore);
}
გაიგზავნა
შედგენა
მისწერეთ
