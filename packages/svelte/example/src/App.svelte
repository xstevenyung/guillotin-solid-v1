<script>
  import { ToasterBag, addNotification } from '@guillotin/svelte';
  import Notification from './Notification.svelte';
</script>

<ToasterBag x="center" y="top" />

<main>
  <h1>Notification</h1>

  <button
    type="button"
    on:click={() => {
      addNotification(Notification, { message: 'new notification' });
    }}>Add notification</button
  >
</main>
