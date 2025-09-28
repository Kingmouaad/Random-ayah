async function aynsfunction() {
  let tafasir: Array<string> = [];
  // do {
  //   const numberayah = Math.floor(Math.random() * 286 + 1);
  //   const numbersurah = Math.floor(Math.random() * 114 + 1);
  // } while ((numberayah) => {});

  const quran = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh/1/1.json"
  );
  const quranresponse = await quran.json();
  const englishquran = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliquliqarai1/1/1.json"
  );
  const englishresponse = await englishquran.json();
  const frenshquran = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fra-rashidmaash/1/1.json"
  );
  const frenshresponse = frenshquran.json();
  // for (let i = 0; i < 5; i++) {
  const tafsir = await fetch(
    `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/en-al-jalalayn/1/1.json`
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
