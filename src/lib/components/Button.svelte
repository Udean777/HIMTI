<script lang="ts">
  export let text: string = 'Klik Saya';
  export let color: string = 'bg-pastel-blue';
  export let textColor: string = 'text-dark-black';
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
    cursor-pointer
    {color} {textColor}
  "
>
	{text}
</button>