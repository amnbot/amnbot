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
    import Carousel from "../../components/ui/Carousel.svelte";

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
<div class="py-8">
    <DescriptionCard>
        <div>
            <h2 class="text-center text-5xl font-normal text-[#171717] uppercase tracking-widest">{project.name}</h2>
            <h2 class="text-center text-3xl font-normal text-[#171717] uppercase tracking-wider my-3">{project.dates}</h2>
        </div>
        <img class="w-1/4 rounded-3xl" {src} alt={project.name}/>
        <ProjectLinks links={project.links} />
        <p class="p-8 md:text-3xl sm:text-2xl my-4 text-center text-[#171717]">{project.description}</p>
    </DescriptionCard>
    <DescriptionCard>
        <h1 class="text-thin tracking-widest text-center uppercase text-3xl text-black">
            MADE with
        </h1>
        <ProjectStack stack={project.stack} />
    </DescriptionCard>
    {#if project.id !== 'personal-website'}
    <h1 class="text-thin tracking-widest text-center uppercase text-3xl text-white">
        screenshots
    </h1>
    <div class="flex justify-center">
        <div in:slide class="transition-transform hover:scale-110 hover:drop-shadow-2xl bg-white rounded-3xl p-4 my-4  max-w-[15vw]  items-center">
            <Carousel images={project.images} />
        </div>
    </div>
    {/if}
</div>
{/await}