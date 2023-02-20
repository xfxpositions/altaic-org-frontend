import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import { browser } from '$app/environment';

register('en', () => import('./locales/en.json'));
register('tr', () => import('./locales/tr.json'));
// en, en-US and pt are not available yet

let lang = '';
if (browser) {
	// @ts-ignore
	lang = localStorage.getItem('lang');
}

init({
	fallbackLocale: 'en',
	initialLocale: lang || getLocaleFromNavigator()
});
