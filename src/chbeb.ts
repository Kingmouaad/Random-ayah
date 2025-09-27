async function aynsfunction() {
  let tafasir: Array<string> = [];
  const quran = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh/1/1.json"
  );
  const quranresponse = await quran.json();
  // for (let i = 0; i < 5; i++) {
  const tafsir = await fetch(
    `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/en-al-jalalayn/1/1.json`
  );
  const tafsirresponse = await tafsir.json();
  tafasir.push(tafsirresponse);
  // }

  return [quranresponse, tafasir];
}
// Wrap in async IIFE to use await at top level
(async () => {
  const [quran, tafsir] = await aynsfunction();
  console.log(quran);
  console.log(tafsir);
})();
