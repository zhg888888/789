let backgroundMusicPlaying = false;

function toggleBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    if (backgroundMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.textContent = '🔇';
        backgroundMusicPlaying = false;
    } else {
        backgroundMusic.play().then(() => {
            musicToggle.textContent = '🔊';
            backgroundMusicPlaying = true;
        }).catch(error => {
            console.error('播放背景音乐时出错:', error);
        });
    }
}

function tryPlayBackgroundMusic() {
    if (!backgroundMusicPlaying) {
        toggleBackgroundMusic();
    }
    document.removeEventListener('click', tryPlayBackgroundMusic);
}

document.addEventListener('click', tryPlayBackgroundMusic);

// 如果需要在页面加载时自动播放音乐（可能会被浏览器阻止）
// window.addEventListener('load', tryPlayBackgroundMusic);
