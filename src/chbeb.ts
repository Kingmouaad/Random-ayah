async function aynsfunction() {
  let tafasir: Array<string> = [];
  let numberayah: number;
  let numbersurah: number;

  while (true) {
    numberayah = Math.floor(Math.random() * 286 + 1);
    numbersurah = Math.floor(Math.random() * 114 + 1);
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json"
    );
    const info = await response.json();
    if (info.chapters[numbersurah].verses[numberayah - 1]) {
      break;
    }
  }

  const quran = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh/${numbersurah}/${numberayah}.json`
  );
  const quranresponse = await quran.json();
  const englishquran = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliquliqarai1/${numbersurah}/${numberayah}.json`
  );
  const englishresponse = await englishquran.json();
  const frenshquran = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fra-rashidmaash/${numbersurah}/${numberayah}.json`
  );
  const frenshresponse = await frenshquran.json();
  // for (let i = 0; i < 5; i++) {
  const tafsir = await fetch(
    `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/en-al-jalalayn/${numbersurah}/${numberayah}.json`
  );
  const tafsirresponse = await tafsir.json();
  tafasir.push(tafsirresponse);
  // }

  return [quranresponse, tafasir, englishresponse, frenshresponse];
}
// Wrap in async IIFE to use await at top level
const ayah = document.querySelector("#AYAH");
const translate = document.querySelector("#ayahtranslate");
const tfsir = document.querySelector("#tfsir");
const number = document.querySelector("#number");
const select = document.querySelector("#lang");
const generate = document.querySelector("#Generate");

try {
  (async () => {
    const [quran, tafsir, en, fr] = await aynsfunction();
    console.log(quran);
    console.log(tafsir);
    console.log(en);
    console.log(fr);
  })();
} catch (error) {
  (async () => {
    const [quran, tafsir, en, fr] = await aynsfunction();
    console.log(quran);
    console.log(tafsir);
    console.log(en);
    console.log(fr);
  })();
}
