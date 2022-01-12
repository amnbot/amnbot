<script>
    import {slide} from 'svelte/transition'
    export let color = "#2C2837";
    export let rounded = "3xl"
</script>
<div in:slide class="bg-[#2C2837] text-white rounded-{rounded} p-4 my-4 w-12/12">
    <slot></slot>
</div>