<script lang="ts">
  import '../global.postcss'
  import { theme } from './store'
  import { onMount } from 'svelte'
  import Navbar from '../lib/Navbar.svelte'

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
</script>

<main>
  <Navbar></Navbar>

  <slot />
</main>
