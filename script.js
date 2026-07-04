// ეს კოდი მუშაობს 7 წამის ლოდინზე და ქულების შენახვაზე
document.addEventListener('DOMContentLoaded', () => {
    // 7 წამიანი ლოდინი (7000 მილიწამი)
    setTimeout(() => {
        const loading = document.getElementById('loading-screen');
        if (loading) loading.style.display = 'none';
    }, 7000);

    // ქულების აღდგენა
    let savedScore = localStorage.getItem('myScore');
    if (savedScore) {
        document.getElementById('score').innerText = savedScore;
    }
});

function incrementScore() {
    let currentScore = localStorage.getItem('myScore') || 0;
    let score = parseInt(currentScore) + 1;
    localStorage.setItem('myScore', score);
    document.getElementById('score').innerText = score;
}
