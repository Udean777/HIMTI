<script>
	import Button from '$lib/components/Button.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { members } from '$lib/dummy';

	const divisions = [...new Set(members.map((item) => item.division))];
</script>

<Hero
	title="Divisi"
	typeWriterText="Halaman ini memuat seluruh struktur organisasi dari divisi yang ada di HIMTI."
/>

<section class="text-dark-black container mx-auto px-6 py-16">
	{#each divisions as division}
		<div class="mb-16">
			<h2 class="border-pastel-blue mb-8 border-l-8 pl-4 text-3xl font-bold">
				Divisi {division}
			</h2>

			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{#each members.filter((item) => item.division === division) as person}
					<div
						class="border-dark-black brutal-shadow hover:brutal-shadow-lg {person.role.includes(
							'Kepala Divisi'
						)
							? 'bg-pastel-blue'
							: 'bg-pastel-yellow'} overflow-hidden border-4 transition-transform hover:-translate-y-2"
					>
						<img
							src={person.image}
							alt={person.name}
							class="h-64 w-full object-cover object-center"
							loading="lazy"
						/>

						<div class="p-4">
							<h3 class="text-xl font-bold">{person.name}</h3>
							<p class="text-sm">{person.role}</p>
							<p class="text-xs">Periode {person.period}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>
