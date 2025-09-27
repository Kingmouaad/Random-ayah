"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function aynsfunction() {
    return __awaiter(this, void 0, void 0, function* () {
        let tafasir = [];
        const quran = yield fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh/1/1.json");
        const quranresponse = yield quran.json();
        // for (let i = 0; i < 5; i++) {
        const tafsir = yield fetch(`https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/en-al-jalalayn/1/1.json`);
        const tafsirresponse = yield tafsir.json();
        tafasir.push(tafsirresponse);
        // }
        return [quranresponse, tafasir];
    });
}
// Wrap in async IIFE to use await at top level
(() => __awaiter(void 0, void 0, void 0, function* () {
    const [quran, tafsir] = yield aynsfunction();
    console.log(quran);
    console.log(tafsir);
}))();
//# sourceMappingURL=chbeb.js.map