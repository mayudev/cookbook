<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let placeholder: string = ''
  export let value: string = ''

  const dispatch = createEventDispatcher<{
    return: {}
  }>()

  function keydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      dispatch('return')
    }
  }
</script>

<input
  class="input"
  type="text"
  {placeholder}
  bind:value
  on:keydown={keydown}
/>

<style lang="scss">
  .input {
    font: inherit;
    font-weight: 500;
    background: var(--cb-second-bg);
    color: var(--cb-second-color);

    outline: none;
    border: none;

    padding: 1rem 1.5rem;
    border-radius: 75px;

    width: 70%;

    &::placeholder {
      text-align: center;
    }
  }
</style>
