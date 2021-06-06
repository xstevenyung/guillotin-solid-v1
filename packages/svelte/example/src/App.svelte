<script>
  import {
    ToasterBag,
    addNotification,
    ModalOutlet,
    setModal,
    ModalBackground,
  } from '@guillotin/svelte';
  import Notification from './Notification.svelte';
  import Modal from './Modal.svelte';
</script>

<ToasterBag x="center" y="top" />

<ModalOutlet>
  <div slot="background" let:close>
    <ModalBackground backgroundColor="rgba(147, 197, 253)" {close} />
  </div>
</ModalOutlet>

<main>
  <section>
    <h1>Notification</h1>

    <button
      type="button"
      on:click={() => {
        addNotification(Notification, { message: 'new notification' });
      }}>Add notification</button
    >
  </section>

  <section>
    <h1>Modal</h1>

    <button
      type="button"
      on:click={() => {
        setModal(Modal);
      }}>Open Modal</button
    >
  </section>
</main>
