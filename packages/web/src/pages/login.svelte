<script>
  import Input from '../lib/ui/Input.svelte'
  import Button from '../lib/ui/Button.svelte'
  import Icon from '@iconify/svelte'
  import Popup from '../lib/ui/Popup.svelte'

  let email = ''
  let popupShown = true

  function passwordless() {
    popupShown = !popupShown
  }

  function closeDialog() {
    popupShown = false
  }
</script>

{#if popupShown}
  <Popup on:close={closeDialog}>
    <h1>Login</h1>
    <p>
      A message was sent to your e-mail. Please enter the code you received
      below to continue:
    </p>
    <Input />
  </Popup>
{/if}

<main class="page">
  <div class="pane presentation">
    <img class="presentation-image" src="macaroons.jpg" alt="Burrito" />
    <div class="presentation-text">
      <h1>Save and post your favorite recipes</h1>
      <p>Register for a free account!</p>
    </div>
  </div>
  <div class="pane login">
    <h1>Log in</h1>
    <Input
      placeholder="E-mail address or username"
      bind:value={email}
      on:return={passwordless}
    />
    <p>
      <Button on:click={passwordless}>Continue</Button>
    </p>
    <p>or</p>
    <p>
      <Button big hasIcon>
        <Icon icon="akar-icons:google-fill" />
        Login with Google</Button
      >
    </p>
    <p>By registering you accept the <a href="/">Terms of Service</a>.</p>
  </div>
</main>

<style lang="scss">
  .page {
    display: grid;
    grid-template-columns: repeat(2, 50%);

    margin: 2rem auto;
    max-width: 1100px;

    line-height: normal;
  }

  .presentation-image {
    width: 100%;
    border-radius: 24px;
  }

  .presentation {
    border-radius: 24px;
    overflow: hidden;
  }

  .presentation-text {
    background: var(--cb-second-bg);
    border-radius: 24px;

    padding: 2rem;
    margin: 1rem 0;

    h1,
    p {
      margin: 0;
    }

    p {
      margin-top: 1rem;
    }
  }

  .login {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 0.75rem 0;
    }
  }
</style>
