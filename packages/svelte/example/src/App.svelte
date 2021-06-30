<script>
  import {
    // ToasterBag,
    // addNotification,
    ModalOutlet,
    modalStore,
    // ModalBackground,
  } from '@guillotin/svelte';
  // import Notification from './Notification.svelte';
  import Modal from './Modal.svelte';
</script>

<!-- <ToasterBag x="center" y="top" /> -->

<ModalOutlet>
  <!-- <div slot="background">
    <ModalBackground backgroundColor="rgba(147, 197, 253)" />
  </div> -->
</ModalOutlet>

<main>
  <section>
    <h1>Notification</h1>

    <!-- on:click={() => {
        addNotification(Notification, {
          message: 'new notification',
          duration: null,
        });
      }} -->
    <button type="button">Add notification</button>
  </section>

  <section>
    <h1>Modal</h1>

    <button
      type="button"
      on:click={() => {
        modalStore.setModal(Modal);
      }}>Open Modal</button
    >
  </section>
</main>
