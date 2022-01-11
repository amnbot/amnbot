<script>
    export let stack;
</script>

<div class="flex flex-row items-center">
    {#each stack as fw}
    <img class="w-32 m-5 transition-transform hover:scale-110" src={fw} alt="image"/>
    {/each}
</div>