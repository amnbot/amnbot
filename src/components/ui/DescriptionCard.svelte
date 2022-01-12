<script>
    import {slide} from 'svelte/transition'
</script>
<div in:slide class="bg-white rounded-3xl p-4 my-4 w-12/12">
    <slot></slot>
</div>