"use strict";
async function aynsfunction() {
    const tafasir = [];
    const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json");
    const info = await response.json();
    // Pick a valid chapter and ayah based on info.json
    const numbersurah = Math.floor(Math.random() * 114) + 1; // 1..114
    const verses = info.chapters[numbersurah - 1]?.verses;
    const maxAyah = Array.isArray(verses) ? verses.length : 286;
    const numberayah = Math.floor(Math.random() * maxAyah) + 1; // 1..maxAyah
    const quran = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh/${numbersurah}/${numberayah}.json`);
    const quranresponse = await quran.json();
    const englishquran = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliquliqarai1/${numbersurah}/${numberayah}.json`);
    const englishresponse = await englishquran.json();
    const frenshquran = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fra-rashidmaash/${numbersurah}/${numberayah}.json`);
    const frenshresponse = await frenshquran.json();
    const tafsirar = [
        "ar-tafsir-ibn-kathir",
        "ar-tafseer-al-saddi",
        "ar-tafsir-muyassar",
    ];
    for (let i = 0; i < tafsirar.length; i++) {
        const tafsir = await fetch(`https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/${tafsirar[i]}/${numbersurah}/${numberayah}.json`);
        const tafsirresponse = await tafsir.json();
        tafasir.push(tafsirresponse);
    }
    return [quranresponse, tafasir, englishresponse, frenshresponse];
}
const ayah = document.querySelector("#AYAH");
const translate = document.querySelector("#ayahtranslate");
const tfsir = document.querySelector("#tfsir");
const number = document.querySelector("#number");
const select = document.querySelector("#lang");
const tfsirplace = document.querySelector("#tfsirplace");
const generate = document.querySelector("#Generate");
const content = document.querySelector("#chest");
document.addEventListener("DOMContentLoaded", () => { });
const LOADER_ID = "chest-loader";
function showLoader() {
    if (!content)
        return;
    let overlay = content.querySelector(`#${LOADER_ID}`);
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = LOADER_ID;
        overlay.className = "loader-overlay";
        const spinner = document.createElement("div");
        spinner.className = "spinner";
        overlay.appendChild(spinner);
        content.appendChild(overlay);
    }
}
function hideLoader() {
    const overlay = content?.querySelector(`#${LOADER_ID}`);
    if (overlay && overlay.parentElement) {
        overlay.parentElement.removeChild(overlay);
    }
}
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
async function handleGenerateClick() {
    try {
        showLoader();
        const [quran, tafsir, en, fr] = await aynsfunction();
        if (ayah)
            ayah.textContent = quran.text ?? "";
        // Simple language switch for translation display
        const lang = select?.value;
        if (translate) {
            if (lang === "france") {
                translate.textContent = fr?.text ?? "";
            }
            else {
                translate.textContent = en?.text ?? "";
            }
        }
        const tfsir1 = document.createElement("button");
        const tfsir2 = document.createElement("button");
        const tfsir3 = document.createElement("button");
        tfsir1.classList.add("quran-btn", "btn-yellow");
        tfsir2.classList.add("quran-btn", "btn-yellow");
        tfsir3.classList.add("quran-btn", "btn-yellow");
        tfsir1.textContent = "tfsir ibn kathir";
        tfsir2.textContent = "tfsir al saadi";
        tfsir3.textContent = "tfsir muyassar";
        if (tfsir?.children) {
            Array.from(tfsir?.children).forEach((childd) => {
                tfsir?.removeChild(childd);
            });
            tfsir.textContent = "";
            tfsirplace.textContent = "";
        }
        tfsir?.appendChild(tfsir1);
        tfsir?.appendChild(tfsir2);
        tfsir?.appendChild(tfsir3);
        tfsir1.addEventListener("click", () => {
            tfsirplace.textContent = "";
            tfsirplace.textContent = tafsir[0].text;
        });
        tfsir2.addEventListener("click", () => {
            tfsirplace.textContent = "";
            tfsirplace.textContent = tafsir[1].text;
        });
        tfsir3.addEventListener("click", () => {
            tfsirplace.textContent = "";
            tfsirplace.textContent = tafsir[2].text;
        });
        number.textContent = `Al-quran | surah number :${quran.chapter} | Ayah :${quran.verse}`;
        console.log(quran);
        console.log(tafsir);
        console.log(en);
        console.log(fr);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        hideLoader();
    }
}
if (generate) {
    generate.addEventListener("click", handleGenerateClick);
}
const click = new Event("click");
generate?.dispatchEvent(click);
//# sourceMappingURL=chbeb.js.map