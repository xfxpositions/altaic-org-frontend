import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const config = {
	translations: {
		en: { lang },
		cs: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'index',
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'tr',
			key: 'index',
			loader: async () => (await import('./tr/home.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
