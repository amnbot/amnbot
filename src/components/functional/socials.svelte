<script>
    import Send from 'svelte-material-icons/Send.svelte'
    import GitHub from 'svelte-material-icons/GithubCircle.svelte'
    import Linkedin from 'svelte-material-icons/LinkedinBox.svelte'
    import Resume from 'svelte-material-icons/NoteText.svelte'
</script>
      <div class=" space-y-0 sm:space-x-2 space-x-0 text-white uppercase font-black flex flex-row justify-center">
          <div class="w-20 transform transition-transform hover:scale-110 md:mx-4">
              <a target="_blank" class="transform transition-transform hover:scale-110 md:mx-4 text-lg" href="https://github.com/amnbot">
                <GitHub color={"#b777f5"} size={75}></GitHub>
              </a>
          </div>
          <div class="w-20 transform transition-transform hover:scale-110 md:mx-4">
              <a target="_blank" class="transform transition-transform hover:scale-110 md:mx-4 text-lg" href="https://www.linkedin.com/in/aymen-ouali-513939201/">
                <Linkedin color={"#b777f5"} size={75}></Linkedin>
              </a>
          </div>
          <div class="w-20 transform transition-transform hover:scale-110 md:mx-4 flex items-center">
            <a target="_blank" class="transform transition-transform hover:scale-110 md:mx-4 text-lg" href="mailto:aymenouali01@gmail.com">
                <Send color={"#b777f5"} size={75}></Send>
            </a>
        </div>
          <div class="w-20 transform transition-transform hover:scale-110 md:mx-4 flex items-center">
            <a target="_blank" class="transform transition-transform hover:scale-110 md:mx-4 text-lg" href="/Aymen_Ouali_Software_Engineering_Coop_Resume.pdf">
                <Resume color={"#b777f5"} size={75}></Resume>
            </a>
        </div>
      </div>