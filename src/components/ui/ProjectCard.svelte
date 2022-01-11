<script>
    export let project;
    import {scale} from "svelte/transition"
    import {quintIn} from 'svelte/easing'

    function preload(src) {
        return new Promise(function(resolve) {
            let img = new Image()
            img.onload = resolve
            img.src = src
        })
    }

    let src = `/${project.icon}.png`
    
</script>

{#await preload(src) then _}
<a transition:quintIn class="m-8 transform transition-transform duration-500 relative p-6 bg-gray-100 text-gray-800 text-center rounded-3xl shadow-sm hover:shadow-md hover:scale-110 flex flex-col items-center" href={`/projects/${project.id}`}>
    <img class="rounded-3xl" {src} alt={project.name} />
    <h2 class="font-black uppercase">{project.name}</h2>
</a>
{/await}