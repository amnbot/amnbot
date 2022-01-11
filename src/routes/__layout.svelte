<script>
    import Nav from "../components/functional/nav.svelte"
    import Socials from "../components/functional/socials.svelte"
import About from "./about.svelte"
</script>
<div class="min-h-screen bg-black flex flex-row">
    <Socials />
    <div class="px-4 max-w-6xl mx-auto content-center"> 
        
        <Nav />
        <slot></slot>
    </div>
    
 </div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@800;900&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>