<script>
    import DescriptionCard from "../components/ui/DescriptionCard.svelte";
    import {slide} from "svelte/transition"
    
    import {SkillsStore} from "../stores/SkillsStore"
</script>

<div class="flex flex-col text-center">
    <DescriptionCard>
        <h1 class="text-thin tracking-widest text-center uppercase text-5xl text-black">
            ABOUT ME
        </h1>
    </DescriptionCard>
    <DescriptionCard>
        <p class="text-2xl">
            Hello! My name is Aymen Ouali and I am a first year Software Engineering student currently enrolled at at McGill University. I've always been interested in what comes into making games, applications and all sorts of things, which naturally led me to coding in 2019. Since then, I have worked with multiple coding languages starting with C#. I am eager to learn new things and working with new frameworks.
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