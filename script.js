function updatePlayer(channel) {
    if (channel === 'sbt') {
        const videoID = document.getElementById('sbt-videoID').value;
        if (videoID.trim()) {
            const player = document.getElementById('sbt-player');
            player.src = `https://youtube-player.sbt.com.br/?videoID=${videoID}&t=0&adunit=/1011235/SBT_Videos/Especiais/SBT_Live/video`;
        } else {
            alert('Por favor, insira um videoID válido para o SBT.');
        }
    } else if (channel === 'band') {
        const url = document.getElementById('band-url').value;
        if (url.trim()) {
            const player = document.getElementById('band-player');
            player.src = url;
        } else {
            alert('Por favor, insira um URL válido para o Band.');
        }
    }
}
