<script>
    import DescriptionCard from "../components/ui/DescriptionCard.svelte";
    import {slide} from "svelte/transition"
    
    import {SkillsStore} from "../stores/SkillsStore"
    import {AboutStore} from "../stores/About"
</script>
<svelte:head><title>About Aymen Ouali</title></svelte:head>
<div class="flex flex-col text-center">
    <DescriptionCard>
        <h1 class="text-thin tracking-widest text-center uppercase text-5xl text-black">
            ABOUT ME
        </h1>
    </DescriptionCard>
    <DescriptionCard>
        <p class="text-2xl">
            {$AboutStore}
        </p>
    </DescriptionCard>
        <h1 class="text-thin tracking-widest text-center uppercase text-3xl text-white">
            i have worked with:
        </h1>
    <div class="py-1 grid gap-4 md:grid-cols-10 grid-cols-2">
        {#each $SkillsStore as skill}
        <DescriptionCard>
            <img src={skill} alt="skill">
        </DescriptionCard>
        {/each}
    </div>
</div>