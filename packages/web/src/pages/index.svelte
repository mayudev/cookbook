<script lang="ts">
  async function fetchLatestRecipes() {
    const resp = await fetch('/api/recipes/latest')
    const data = await resp.json()

    return data
  }
</script>

<main>
  <h2>latest recipes</h2>
  {#await fetchLatestRecipes()}
    loading...
  {:then data}
    {#each data as recipe}
      <li>{recipe.name}</li>
    {/each}
  {/await}
</main>
