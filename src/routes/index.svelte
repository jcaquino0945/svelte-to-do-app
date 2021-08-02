<script lang="ts">
  import Tasks from '../lib/Tasks.svelte'
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Tailwind 2</title>
  <meta name="title" content="SvelteKit ❤️ Tailwind 2" />
  <meta name="description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta name="keywords" content="Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript" />
  <meta name="author" content="@dansvel" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta property="og:description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta
    property="og:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta
    property="twitter:description"
    content="SvelteKit and Tailwind 2 toggle dark/light theme demo"
  />
  <meta
    property="twitter:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />
</svelte:head>

<!-- write html code here-->

<main class="h-auto w-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 z-50 right-4 bottom-5 text-white fixed bg-blue-500 rounded-full bg-clip-content bg-cover add-icon opacity-70" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
  </svg>
<div class="section-1">
<div class="section-1-overlay">
    <div class="container mx-auto h-full flex justify-end px-4 section-1-body flex-col">
        <h1 class="text-4xl text-white font-thin mb-2">What Will You Do Today?</h1>
        <p class="text-xl text-white font-thin mb-2">October 26 2020</p>
    </div>
</div>
</div>

<Tasks></Tasks>
</main>


<style lang="postcss">
.section-1 {
    background-image: url('../../static/80622072_818311235304313_8533843013643087754_n.jpg/');
    background-size: cover;
    background-repeat: no-repeat;
    height: 40vh;
    background-color: red;
    width: 100%;
}
.section-1-overlay {
    background-color: #0568c5ad;
    width: 100%;
    height: 100%;
}
.section-1-body h1 {
    font-family: 'Antonio', sans-serif;
}
.section-1-body p {
    font-family: 'Abel', sans-serif;
}
svg.add-icon{
    transition: .1s all ease-in-out;
}
svg.add-icon:hover{
    background-color: #3b83f6;
    opacity: 1;
}
</style>
