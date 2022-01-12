<script>
    import Nav from "../components/functional/nav.svelte"
    import Socials from "../components/functional/socials.svelte"
import About from "./about.svelte"
</script>
<div class="min-h-[screen] bg-[#1a1620] ">
    <div class="px-4 max-w-6xl mx-auto content-center text-center"> 
        
        <Nav />
        <h1 class="font-thin tracking-widest uppercase text-7xl text-white">Aymen Ouali</h1>
        <Socials />
        <slot></slot>
    </div>
    
 </div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@800;900&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>