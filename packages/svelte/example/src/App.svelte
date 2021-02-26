<script lang="ts">
  import { ToasterBag, addNotification } from '@guillotin/svelte';
  import Notification from './Notification.svelte';
</script>

<ToasterBag />

<main>
  <h1>Notification</h1>

  <button
    type="button"
    on:click={() => {
      addNotification(Notification, { message: 'new notification' });
    }}>Add notification</button
  >
</main>
