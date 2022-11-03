<script lang="ts">
  import { goto, params } from '@roxi/routify'
  let query = ''
  $: query = $params.q

  function search() {
    $goto('/search', {
      q: query,
    })
  }
</script>

<input
  class="input"
  type="text"
  placeholder="Search for recipes..."
  bind:value={query}
  on:input={search}
/>

<style lang="scss">
  .input {
    font: inherit;
    font-weight: 500;
    background: var(--cb-second-bg);
    color: var(--cb-second-color);

    padding: 0.75rem 1.5rem;
    border-radius: 75px;

    border: none;
    outline: none;
  }

  :global(.trans .input) {
    transition: var(--theme-trans);
  }
</style>
