<script>
	/** @type {string} */
	export let text = 'Klik Saya';
	/** @type {string} */
	export let color = 'bg-pastel-blue';
	/** @type {string} */
	export let textColor = 'text-dark-black';
</script>

<button
	class="
    border-dark-black brutal-shadow
    hover:brutal-shadow-sm border-4
    px-6 py-3
    text-lg
    font-bold transition-all duration-100
    ease-in-out active:translate-x-[4px] active:translate-y-[4px]
    active:shadow-none
    {color} {textColor}
  "
>
	{text}
</button>