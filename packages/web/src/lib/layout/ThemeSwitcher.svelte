<script lang="ts">
  import Button from '../ui/Button.svelte'
  import Icon from '@iconify/svelte'

  import { theme } from '../../store/theme'

  function switchTheme() {
    theme.switch()
  }
</script>

<Button isIcon title="Toggle theme" on:click={switchTheme}>
  {#if $theme === 'light'}
    <Icon icon="akar-icons:moon" />
  {:else}
    <Icon icon="akar-icons:sun" />
  {/if}
</Button>
