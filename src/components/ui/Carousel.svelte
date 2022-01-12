<script lang="js">
    export let images
    export let name = 'carousel'
    export const getItemId = (index => `carousel-item-${index}`)
</script>

<ul class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]">
    {#each images as image, index}
    <li id={getItemId(index)} class="shrink-0 snap-center">
        <img class="rounded-3xl object-cover  max-h-[35vw] max-w-[15vw]" title={image.title} src={image.src} alt={image.title} />
    </li>
    {/each}
</ul>

<!-- <nav class="text-white">
    <ul>
        {#each images as image, index}
        <li class="shrink-0 snap-center">
            <a href={`#${getItemId(index)}`}>{image.title}</a>
        </li>
        {/each}
    </ul>
</nav> -->