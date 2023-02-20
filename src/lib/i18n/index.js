import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('tr', () => import('./locales/tr.json'));
// en, en-US and pt are not available yet

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
