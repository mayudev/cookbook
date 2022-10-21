<script lang="ts">
  import { slide, fade } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'

  const dispatch = createEventDispatcher<{
    close: {}
  }>()

  onMount(() => {
    document.addEventListener('keydown', keydown)
  })

  onDestroy(() => {
    document.removeEventListener('keydown', keydown)
  })

  function keydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      close()
    }
  }

  function close() {
    dispatch('close')
  }
</script>

<div class="dialog" transition:slide={{ easing: cubicInOut, duration: 300 }}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="backdrop" on:click={close} transition:fade={{ duration: 200 }} />
  <div class="contents">
    <slot />
  </div>
</div>

<style lang="scss">
  .dialog,
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  .contents {
    background: var(--cb-body-bg);
    z-index: 2;
  }
</style>
