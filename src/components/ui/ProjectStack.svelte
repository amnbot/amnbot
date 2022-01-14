<script>
    export let stack;
</script>

<div class="flex flex-col sm:flex-row items-center justify-center">
    {#each stack as fw}
    <img class="sm:w-[10%] w-[30%] m-5 transition-transform hover:scale-110" src={fw} alt="image"/>
    {/each}
</div>