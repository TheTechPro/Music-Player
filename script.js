const songs = [
    "Aaron Smith - Dancin (Krono Remix).mp3",
    "Andrea Bocelli, Laura Pausini - Dare To Live.mp3",
    "Aries Morningstar - I Like You So Much.mp3",
    "Demon Slayer - Gurenge.mp3",
    "Game of Thrones - Theme Song.mp3",
    "JONY - Love Your Voice.mp3",
    "RedOne - Dont You Need Somebody.mp3",
    "Lucifer Morningstar - Pipeline.mp3",
    "Survivor.mp3",
    "Swedish House Mafia - Don't You Worry Child.mp3"
];

const player = document.getElementById("player");

const createSongList = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(songs[i]));
      list.appendChild(item);
    }
    return list;
  };




  
  const songList = document.getElementById("songList");
  songList.appendChild(createSongList());
  songList.onclick = function (e) {
    document.querySelector('#headphones').classList.remove("pulse");
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();

    document.querySelector('#headphones').classList.add("pulse");
  };

function playAudio() {
  if(player.readyState) {
     player.play();
  }
}

function pauseAudio() {
  player.pause();
}


const slider = document.getElementById('volumeSlider')
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
}

function updateProgress() {
  if(player.currentTime > 0) {
    const progressBar = document.getElementById('progress');
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}










