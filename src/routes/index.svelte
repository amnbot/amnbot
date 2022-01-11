<script>
    import {ProjectsStore} from "../stores/ProjectsStore"
    import ProjectCard from "../components/ui/ProjectCard.svelte"
</script>
<svelte:head><title>Aymen Ouali</title></svelte:head>
<div class="py-1 grid gap-4 md:grid-cols-3 grid-cols-2">
    {#each $ProjectsStore as project}
        <ProjectCard {project} />
    {/each}
</div>