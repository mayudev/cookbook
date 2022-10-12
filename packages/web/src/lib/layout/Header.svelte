<script lang="ts">
  import Button from '../ui/Button.svelte'
  import SearchBar from './SearchBar.svelte'
  import ThemeSwitcher from './ThemeSwitcher.svelte'
</script>

<nav>
  <div class="logo">Cookbook</div>
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
    font-weight: 200;
    font-size: 22px;
    text-decoration: underline var(--cb-second-bg);
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>
