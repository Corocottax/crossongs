import { SONGS } from "../../main";
import "./Song.css";

export const pintar = (SONG) => {
  const song$$ = document.querySelector(".song");

  const audio$$ = document.querySelector("audio");

  song$$.innerHTML = `
        <div class="cover_arrows">
          <img src="/assets/flecha.png" class="flecha izquierda"/>
          <div class="img_wrp">
              <img class="cover" src="${SONG.image_uri}"/>
              <img class="play_pause" id="paused" src=${
                audio$$.paused ? "/assets/play.png" : "/assets/pausa.png"
              }/>
          </div>
          <img src="/assets/flecha.png" class="flecha derecha"/>
        </div>
        <h3>${SONG.name["name-EUes"]}</h3>
        <img src="https://i.pinimg.com/originals/04/88/49/048849d0f9758ba46ea7e725afdb8a54.gif" alt="bailoteo" class="bailoteo"/>
    `;

  const flechaIzquierda$$ = document.querySelector(".izquierda");
  const flechaDerecha$$ = document.querySelector(".derecha");
  const playPause$$ = document.querySelector(".play_pause");

  flechaIzquierda$$.addEventListener("click", () => cambiarCancion("atras"));
  flechaDerecha$$.addEventListener("click", () => cambiarCancion("adelante"));
  playPause$$.addEventListener("click", playPause);

  audio$$.src = SONG.music_uri;
};


let SONG = null;
let numero = 0;

const cambiarCancion = (accion) => {

    if (accion === "atras") {
        if (numero > 0) {
            numero--;
        } else {
          numero = SONGS.length - 1;
        }
    } else {
        if (numero < SONGS.length - 1) {
            numero++;
        } else {
          numero = 0;
        }
    }

    SONG = SONGS[numero];
    pintar(SONG);

}

const playPause = (e) => {
  const audio$$ = document.querySelector("audio");

  if (e.target.id === "paused") {
    audio$$.play();
    e.target.src = "/assets/pausa.png";
    e.target.id = "playing"
  } else {
    audio$$.pause();
    e.target.src = "/assets/play.png";
    e.target.id = "paused"
  }
};