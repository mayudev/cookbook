<script lang="ts">
  import { params } from '@roxi/routify'

  $: query = $params.q as string
</script>

<p>{query}</p>
