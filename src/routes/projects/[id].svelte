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
    <DescriptionCard color={"#2C2837"}>
        <div class=" items-center">

            <div>
                <h2 class="text-center text-5xl font-normal uppercase tracking-widest">{project.name}</h2>
                <h2 class="text-center text-3xl font-normal uppercase tracking-wider my-3">{project.dates}</h2>
            </div>
            <div class="rounded-3xl flex flex-row justify-center items-center">
                <img class="w-1/4 rounded-3xl" {src} alt={project.name}/>
                <ProjectLinks links={project.links} fillColor={"#A656F3"} />
            </div>
            <p class="p-8 md:text-3xl sm:text-2xl my-4 text-center ">{project.description}</p>
        </div>
    </DescriptionCard>
    <div in:slide class="bg-[#f6edff] border-4 border-[#B777F5] rounded-3xl p-4 my-4 w-12/12 items-center">
        <h1 class="text-thin tracking-widest text-center uppercase text-3xl text-black">
            MADE with
        </h1>
        <ProjectStack stack={project.stack} />
    </div>
    {#if project.id !== 'personal-website'}
    <h1 class="text-thin tracking-widest text-center uppercase text-3xl text-white">
        screenshots
    </h1>
    <div class="flex justify-center">
        <div in:slide class="transition-transform hover:scale-105 hover:drop-shadow-2xl bg-[#2C2837] rounded-3xl p-4 my-4 sm:max-w-[15vw]  max-w-[80vw]  items-center">
            <Carousel images={project.images} />
        </div>
    </div>
    {/if}
</div>
{/await}