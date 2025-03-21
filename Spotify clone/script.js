
console.log("Welcome to Spotify");



//intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
    {songName: "Mortals Warrio" , filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo" , filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Invinsible" , filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "My heart" , filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Heroes tonight" , filePath: "songs/5.mp3", coverPath: "covers/5.jpg"}
    
]


//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})


//Listening to Events

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //updating range/seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    console.log(progress);
})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value *  audioElement.duration)/100;
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        console.log(e.target);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
    })
})
    









