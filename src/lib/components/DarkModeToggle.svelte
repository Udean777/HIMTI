<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon } from 'lucide-svelte';
</script>

<button
	onclick={theme.toggle}
	aria-label="Toggle dark mode"
	class="text-foreground hover:bg-accent rounded-md p-2 transition-colors"
>
	{#if $theme === 'dark'}
		<Sun class="h-6 w-6" />
	{:else}
		<Moon class="h-6 w-6" />
	{/if}
</button>
