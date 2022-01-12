<script>
    import Carousel from "../components/ui/Carousel.svelte";

    let images = [
			{ title: 'image', src: 'https://picsum.photos/200/300' },
			{ title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
			{ title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
            { title: 'image', src: 'https://picsum.photos/200/300' },
		]

        console.log(images)
</script>

<section class="flex flex-col items-center">
    <Carousel {images} />
</section>