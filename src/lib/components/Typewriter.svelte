<script>
	import { onMount, onDestroy } from 'svelte';

	/** @type {string} */
	export let text = '';
	/** @type {number} */
	export let speed = 50;
	/** @type {number} */
	export let delay = 1000;
	/** @type {boolean} */
	export let loop = false;

	let currentText = '';
	let cursorVisible = true;
	let textIndex = 0;
	/** @type {ReturnType<typeof setTimeout> | null} */
	let typeTimeout = null;
	/** @type {ReturnType<typeof setInterval> | null} */
	let cursorInterval = null;

	function typeCharacter() {
		if (textIndex < text.length) {
			currentText += text.charAt(textIndex);
			textIndex++;
			typeTimeout = setTimeout(typeCharacter, speed);
		} else {
			if (typeTimeout !== null) clearTimeout(typeTimeout);
			startCursorBlinking();
			if (loop) {
				setTimeout(() => {
					function deleteCharacter() {
						if (currentText.length > 0) {
							currentText = currentText.slice(0, -1);
							typeTimeout = setTimeout(deleteCharacter, speed / 2);
						} else {
							resetTyping();
						}
					}
					deleteCharacter();
				}, 2000);
			}
		}
	}

	function startCursorBlinking() {
		if (cursorInterval) clearInterval(cursorInterval);
		cursorInterval = setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 500);
	}

	function stopCursorBlinking() {
		if (cursorInterval) clearInterval(cursorInterval);
		cursorVisible = false;
	}

	function resetTyping() {
		currentText = '';
		textIndex = 0;
		stopCursorBlinking();
		typeTimeout = setTimeout(typeCharacter, delay);
	}

	onMount(() => {
		typeTimeout = setTimeout(typeCharacter, delay);
	});

	onDestroy(() => {
		if (typeTimeout !== null) clearTimeout(typeTimeout);
		if (cursorInterval !== null) clearInterval(cursorInterval);
	});
</script>

<div class="font-mono text-xl leading-relaxed">
	<span>{currentText}</span>
	{#if cursorVisible}
		<span
			class="bg-dark-black ml-1 inline-block h-6 w-2 align-middle"
			style="animation: blink-cursor 1s infinite step-end;"
		></span>
	{/if}
</div>

<style>
	@keyframes blink-cursor {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
