<script lang="ts">
  import Tasks from '../lib/Tasks.svelte'
  import { onMount } from 'svelte';
  import { tasks } from '../routes/store';
  let myTasks = []
  let addPrompt;

  onMount(async () => {
	tasks.subscribe(val => {
  myTasks = val;
	});
  addPrompt = false;
  })

  function showPrompt() {
    addPrompt = true;
  }

  function closePrompt() {
    addPrompt = false;
  }
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
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 z-50 right-4 bottom-5 text-white fixed bg-blue-500 rounded-full bg-clip-content bg-cover add-icon opacity-70" viewBox="0 0 20 20" fill="currentColor" on:click={() => showPrompt()}>
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

{#if addPrompt == true}<!-- unchecked -->
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <!-- Heroicon name: outline/exclamation -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Add New Task
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Input the title and description of your new task!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
          <div class="bg-white rounded px-8 pt-6 pb-8">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Title
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="My New Task">
              <p class="text-red-500 text-xs italic">Please enter the title of your task.</p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Description
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Description Of My New Task">
              <p class="text-red-500 text-xs italic">Please enter the description of your task.</p>
            </div>
          </div>
        </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
          Add New Task
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" on:click={() => closePrompt()}>
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
{/if}

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
