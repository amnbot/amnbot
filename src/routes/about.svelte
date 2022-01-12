<script>
    import DescriptionCard from "../components/ui/DescriptionCard.svelte";
    import {slide} from "svelte/transition"
    
    import {SkillsStore} from "../stores/SkillsStore"
    import {AboutStore} from "../stores/About"
</script>
<svelte:head><title>About Aymen Ouali</title></svelte:head>
<div class="flex flex-col text-center">
    <DescriptionCard border={4} color={"#2C2837"}>
        <h1 class="text-thin tracking-widest text-center uppercase text-5xl ">
            ABOUT ME
        </h1>
    </DescriptionCard>
    <DescriptionCard color={"#2C2837"}>
        <p class="text-2xl">
            {$AboutStore}
        </p>
    </DescriptionCard>
        <h1 class="text-thin tracking-widest text-center uppercase text-3xl text-white">
            i have worked with:
        </h1>
        <div class="py-1 grid gap-4 md:grid-cols-10 grid-cols-2">
            {#each $SkillsStore as skill}
            <div class="bg-[#f6edff] border-4 border-[#B777F5] flex items-center justify-center text-white rounded-3xl p-4 my-4 w-12/12">
            <img src={skill} alt="skill">
            </div>
            {/each}
        </div>
</div>