import "./Volume.css"

export const initVolume = () => {

    const audio$$ = document.querySelector("audio")
    const volume$$ = document.querySelector(".volumen");

    const h3Volume$$ = document.createElement("h3");
    const inputVolume$$ = document.createElement("input");

    inputVolume$$.type = "range";
    inputVolume$$.value = 30;
    h3Volume$$.textContent = 30;
    h3Volume$$.className = "volume"

    volume$$.appendChild(h3Volume$$);
    volume$$.appendChild(inputVolume$$);

    inputVolume$$.addEventListener("change", (e) => cambiarVolumen(e, audio$$, h3Volume$$));

}

const cambiarVolumen = (e, audio$$, h3Volume$$) => {

    audio$$.volume = e.target.value / 100;
    h3Volume$$.textContent = e.target.value;

}