<script>
	export let project;
	import { scale } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}

	let src = project.icon ? `/${project.icon}.png` : '';
</script>

{#await preload(src) then _}
	<div class="transition-transform hover:scale-110 text-white">
		<a
			transition:quintIn
			class=" transform transition-transform duration-500 relative p-6 bg-[#2C2837]  text-center rounded-full shadow-sm hover:shadow-md  hover:border-[#A656F3] hover:border-4 flex flex-col items-center"
			href={`/projects/${project.id}`}
		>
			<img class="rounded-full" {src} alt={project.name} />
		</a>
		<h2 class="uppercase tracking-widest">{project.name}</h2>
	</div>
{/await}
