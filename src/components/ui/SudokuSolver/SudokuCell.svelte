<script>
    export let value;
    value = value === '.' ? ' ' : value
</script>
<div class="w-1/2 h-1/2 pb-1/2 bg-purple-50 rounded-lg">
    <h1 class="text-center font-black my-1">{value}</h1>
</div>