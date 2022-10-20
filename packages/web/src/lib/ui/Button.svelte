<script lang="ts">
  export let isIcon: boolean = false
  export let hasIcon: boolean = false
  export let big: boolean = false
  export let title: string = ''
</script>

<button
  class="btn {isIcon && 'btn-icon'} {big && 'btn-big'} {hasIcon &&
    'btn-withicon'}"
  {title}
  on:click
>
  <slot />
</button>

<style lang="scss">
  .btn {
    font: inherit;
    font-weight: 500;
    background: var(--cb-second-bg);
    color: var(--cb-second-color);

    border: none;
    outline: none;

    padding: 0.5rem 1.5rem;
    border-radius: 75px;

    margin-left: 0.5rem;

    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover {
      background: var(--cb-second-bg3);
    }
  }

  .btn-icon {
    display: flex;
    justify-content: center;
    font-size: 20px;
    width: 48px;
    padding: 0;
    align-items: center;
  }

  .btn-withicon {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .btn-big {
    font-size: 20px;
    padding: 1rem 5rem;
  }
</style>
