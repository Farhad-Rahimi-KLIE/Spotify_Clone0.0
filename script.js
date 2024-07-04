console.log("Welcome to Spotify...");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/song1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    fileName: "Salam-e-Ishq",
    filePath: "songs/song2.mp3",
    coverPath: "covers/cover2.png",
  },
  {
    fileName: "Ishaaaq",
    filePath: "songs/song2.mp3",
    coverPath: "covers/cover3.png",
  },
  {
    fileName: "Mahboob",
    filePath: "songs/song3.mp3",
    coverPath: "covers/cover4.png",
  },
  {
    fileName: "Aqha jaaan",
    filePath: "songs/song4.mp3",
    coverPath: "covers/cover5.png",
  },
  {
    fileName: "Haseena man jayigi",
    filePath: "songs/song5.mp3",
    coverPath: "covers/cover6.png",
  },
];
//Show Cover and Song Name in the Screen
songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].fileName;
});
// Handle Play or Pause Click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update the Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
// const makeAllplays = () => {
//   Array.from(
//     document.getElementsByClassName("songItemPlay").forEach((element) => {
//       element.classList.remove("play");
//       element.classList.add("pause");
//     })
//   );
// };
