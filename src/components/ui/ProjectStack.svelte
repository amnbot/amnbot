<script>
    export let stack;
</script>

<div class="flex sm:flex-row flex-col items-center justify-center">
    {#each stack as fw}
    <img class="w-32 m-5 transition-transform hover:scale-110" src={fw} alt="image"/>
    {/each}
</div>