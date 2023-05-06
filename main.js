import { pintar } from "./components/Song/Song";
import { initVolume } from "./components/Volume/Volume";
import "./style.css";

const APP$$ = document.querySelector("#app");

export const SONGS = [];

const initApp = () => {
  APP$$.innerHTML = `
        <h1>Animal Crossing ~ Songs</h1>
        <div class="song"></div>
        <audio autoplay loop></audio>
        <div class="volumen"></div>
    `;

  peticion();
  initVolume();
  const audio$$ = document.querySelector("audio");

  audio$$.volume = 0.3;
};

const peticion = async () => {

  for (let i = 1; i <= 30; i++) {
    const resultado = await fetch("https://acnhapi.com/v1/songs/" + i);
    const res = await resultado.json();
    SONGS.push(res);
  }

  pintar(SONGS[0]);

};

initApp();