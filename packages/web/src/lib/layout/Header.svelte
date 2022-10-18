<script lang="ts">
  import { url } from '@roxi/routify'
  import Button from '../ui/Button.svelte'
  import SearchBar from './SearchBar.svelte'
  import ThemeSwitcher from './ThemeSwitcher.svelte'
</script>

<nav>
  <div class="logo"><a href={$url('/')}>Cookbook </a></div>

  <SearchBar />
  <div class="buttons">
    <ThemeSwitcher />
    <Button>Login</Button>
  </div>
</nav>

<style lang="scss">
  nav {
    background: var(--cb-second-bg2);

    display: grid;
    grid-template-columns: 20% 60% 20%;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;
  }

  .logo {
    font-size: 24px;
    font-family: 'Arvo', serif;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>
