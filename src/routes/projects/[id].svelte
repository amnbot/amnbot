<script context="module">
    export async function load({url, params}) {
        const id = params.id;
        return {props: {id}}
    }
</script>
<script>
    export let id;

    import {slide} from "svelte/transition"

    import { ProjectsStore } from "../../stores/ProjectsStore";
    import DescriptionCard from "../../components/ui/DescriptionCard.svelte"
    import ProjectStack from "../../components/ui/ProjectStack.svelte"
    import ProjectLinks from "../../components/ui/ProjectLinks.svelte"

    let project = $ProjectsStore.filter((proj)=> proj.id == id)[0]

    function preload(src) {
        return new Promise(function(resolve) {
            let img = new Image()
            img.onload = resolve
            img.src = src
        })
    }

    let src = `/${project.icon}.png`
</script>
<svelte:head><title>{project.name}</title></svelte:head>

{#await preload(src) then _}
<div transition:slide class="py-8">
    <DescriptionCard>
        <div>
            <h2 class="text-center text-5xl font-encode-sans font-black text-[#171717] uppercase tracking-tighter">{project.name}</h2>
            <h2 class="text-center text-3xl font-encode-sans font-black text-[#171717] uppercase tracking-wider my-3">{project.dates}</h2>
        </div>
        <p class="p-8 text-3xl my-4 text-center text-[#171717]">{project.description}</p>
            <img class="w-1/4 rounded-full" {src} alt={project.name}/>
        <ProjectLinks links={project.links} />
    </DescriptionCard>
    <DescriptionCard>
        <ProjectStack stack={project.stack} />
    </DescriptionCard>
</div>
{/await}