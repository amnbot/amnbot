<script>
    import {ProjectsStore} from "../stores/ProjectsStore"
    import ProjectCard from "../components/ui/ProjectCard.svelte"
    import DescriptionCard from "../components/ui/DescriptionCard.svelte";
</script>
<svelte:head><title>Aymen Ouali</title></svelte:head>

<div class="text-center">
    <DescriptionCard border={4}>
        <h1 class="text-thin tracking-widest text-center uppercase text-5xl ">projects</h1>
    </DescriptionCard>
    <div class="py-1 grid gap-5 md:grid-cols-3 grid-cols-2">
        {#each $ProjectsStore as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>