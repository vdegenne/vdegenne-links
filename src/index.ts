/**
 * @license
 * Copyright (c) 2023 Valentin Degenne
 * SPDX-License-Identifier: MIT
 */

function open(url: string, newTab = true) {
	if (newTab) {
		window.open(url, '_blank');
	} else {
		window.open(url);
	}
}

/**
 * Google related links
 */
// google images
export function googleImagesUrl(input: string) {
	return `http://www.google.com/search?q=${encodeURIComponent(input)}&tbm=isch`;
}
export function googleImagesOpen(input: string) {
	open(googleImagesUrl(input));
}

// google translate
export function googleTranslateUrl(input: string) {
	return `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(
		input
	)}&op=translate`;
}
export function googleTranslateOpen(input: string) {
	open(googleTranslateUrl(input));
}

/**
 * Japanese related
 */
// jisho
export function jishoUrl(input: string) {
	return `https://jisho.org/search/${encodeURIComponent(input)}`;
}
export function jishoOpen(input: string) {
	open(jishoUrl(input));
}

// goo
export function gooUrl(input: string) {
	// return `https://dictionary.goo.ne.jp/word/${encodeURIComponent(word)}/`;
	return `https://dictionary.goo.ne.jp/srch/all/${encodeURIComponent(
		input
	)}/m0u/`;
}
export function gooOpen(input: string) {
	open(gooUrl(input));
}

// weblio
export function weblioUrl(input: string) {
	return `https://www.weblio.jp/content/${encodeURIComponent(input)}`;
}
export function weblioOpen(input: string) {
	open(weblioUrl(input));
}

// kotobank
export function kotobankUrl(input: string) {
	return `https://kotobank.jp/word/${encodeURIComponent(input)}`;
}
export function kotobankOpen(input: string) {
	open(kotobankUrl(input));
}
