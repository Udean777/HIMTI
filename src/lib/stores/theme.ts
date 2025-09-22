import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// 1. Buat store dengan nilai awal null.
const createThemeStore = () => {
	const { subscribe, set } = writable<Theme | null>(null);

	// 2. Fungsi untuk menerapkan tema ke DOM.
	function applyTheme(theme: Theme) {
		if (browser) {
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(theme);
		}
	}
	
	// 3. Inisialisasi store saat kode berjalan di browser.
	if (browser) {
		const savedTheme = localStorage.getItem('theme') as Theme;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');
		
		set(initialTheme);
		applyTheme(initialTheme);
	}
	
	return {
		subscribe,
		set: (theme: Theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				applyTheme(theme);
				set(theme);
			}
		},
		toggle: () => {
			if (browser) {
				const currentTheme = localStorage.getItem('theme') as Theme;
				const newTheme = currentTheme === 'light' ? 'dark' : 'light';
				localStorage.setItem('theme', newTheme);
				applyTheme(newTheme);
				set(newTheme);
			}
		}
	};
};

export const theme = createThemeStore();