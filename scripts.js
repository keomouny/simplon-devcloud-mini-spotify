var all_artists = document.querySelectorAll('*[data-single]');
var album_artist = document.querySelector('section:nth-child(2) > img');
var audio_artist = document.querySelector('section:nth-child(3) > audio > source')
var lorem_random = document.querySelector('#description > p:nth-child(4)').innerText;

// fonction changer de musique et de photo lors du choix de l'artiste
function changeArtiste (name_artiste) {
    let artiste_picture_url = album_artist.src.lastIndexOf('/');
    let artiste_audio_url = audio_artist.src.lastIndexOf('/');

    artiste_picture_url = artiste_picture_url == -1 ? album_artist.src.length : artiste_picture_url + 1;
    artiste_audio_url = artiste_audio_url == -1 ? audio_artist.src.length : artiste_audio_url + 1;

    album_artist.src = album_artist.src.substring(0, artiste_picture_url) + name_artiste + '.jpg';
    audio_artist.src = audio_artist.src.substring(0, artiste_audio_url) + name_artiste + '.mp3';
    document.querySelector('#description > p').innerText = name_artiste.replace(/-/gi, ' ');
    document.querySelector('#description > p:nth-child(3)').innerText = 'la chanson de ' + name_artiste.replace('-', ' ');
    document.querySelector('#description > p:nth-child(4)').innerText = name_artiste.replace('-', ' ') + ' is ' + lorem_random;
    
    audio_artist.parentElement.load();
    audio_artist.parentElement.play();
}

all_artists.forEach(function(artist) {
    artist.addEventListener("click", () => {
        
        switch(artist.dataset.single) {
            case 'gcm':
                changeArtiste('grand-corps-malade')
                break;
            case 'jd':
                changeArtiste('julien-dore')
                break;
            case 'madonna':
                changeArtiste('madonna');
                break;
            case 'mc':
                changeArtiste('mariah-carey');
                break;
            case 'ts':
                changeArtiste('taylor-swift');
                break;
            default:
                changeArtiste('grand-corps-malade')
        }

    })
})