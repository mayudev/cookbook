<script lang="ts">
  export let placeholder: string = ''
</script>

<input class="input" type="text" {placeholder} />

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
  }
</style>
