<script>
  import { modalStore } from '@guillotin/svelte';
</script>

<div class="container">
  <p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        target="_blank"
        rel="noopener">babel</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
        target="_blank"
        rel="noopener">typescript</a
      >
    </li>
  </ul>
  <h3>Essential Links</h3>
  <ul>
    <li>
      <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
    </li>
    <li>
      <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
    </li>
    <li>
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
        >Community Chat</a
      >
    </li>
    <li>
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >Twitter</a
      >
    </li>
    <li>
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
    </li>
  </ul>
  <h3>Ecosystem</h3>
  <ul>
    <li>
      <a href="https://router.vuejs.org" target="_blank" rel="noopener"
        >vue-router</a
      >
    </li>
    <li>
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-devtools#vue-devtools"
        target="_blank"
        rel="noopener">vue-devtools</a
      >
    </li>
    <li>
      <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
        >vue-loader</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener">awesome-vue</a
      >
    </li>
  </ul>

  <button type="button" on:click={modalStore.closeModal}>Close</button>

  <hr />

  <p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        target="_blank"
        rel="noopener">babel</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
        target="_blank"
        rel="noopener">typescript</a
      >
    </li>
  </ul>
  <h3>Essential Links</h3>
  <ul>
    <li>
      <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
    </li>
    <li>
      <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
    </li>
    <li>
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
        >Community Chat</a
      >
    </li>
    <li>
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >Twitter</a
      >
    </li>
    <li>
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
    </li>
  </ul>
  <h3>Ecosystem</h3>
  <ul>
    <li>
      <a href="https://router.vuejs.org" target="_blank" rel="noopener"
        >vue-router</a
      >
    </li>
    <li>
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-devtools#vue-devtools"
        target="_blank"
        rel="noopener">vue-devtools</a
      >
    </li>
    <li>
      <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
        >vue-loader</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener">awesome-vue</a
      >
    </li>
  </ul>
</div>

<style>
  .container {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    padding: 1rem;
    max-height: 100vh;
    overflow-y: scroll;
  }
</style>
