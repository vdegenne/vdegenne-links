/**
 * @license
 * Copyright (c) 2023 Valentin Degenne
 * SPDX-License-Identifier: MIT
 */
function open(url, newTab = true) {
    if (newTab) {
        window.open(url, '_blank');
    }
    else {
        window.open(url);
    }
}
/**
 * Google related links
 */
// google images
export function googleImagesUrl(input) {
    return `http://www.google.com/search?q=${encodeURIComponent(input)}&tbm=isch`;
}
export function googleImagesOpen(input) {
    open(googleImagesUrl(input));
}
// google translate
export function googleTranslateUrl(input) {
    return `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(input)}&op=translate`;
}
export function googleTranslateOpen(input) {
    open(googleTranslateUrl(input));
}
/**
 * Japanese related
 */
// jisho
export function jishoUrl(input) {
    return `https://jisho.org/search/${encodeURIComponent(input)}`;
}
export function jishoOpen(input) {
    open(jishoUrl(input));
}
// goo
export function gooUrl(input) {
    // return `https://dictionary.goo.ne.jp/word/${encodeURIComponent(word)}/`;
    return `https://dictionary.goo.ne.jp/srch/all/${encodeURIComponent(input)}/m0u/`;
}
export function goo(input) {
    open(gooUrl(input));
}
// weblio
export function weblioUrl(input) {
    return `https://www.weblio.jp/content/${encodeURIComponent(input)}`;
}
export function weblioOpen(input) {
    open(weblioUrl(input));
}
// kotobank
export function kotobankUrl(input) {
    return `https://kotobank.jp/word/${encodeURIComponent(input)}`;
}
export function kotobankOpen(input) {
    open(kotobankUrl(input));
}
//# sourceMappingURL=index.js.map