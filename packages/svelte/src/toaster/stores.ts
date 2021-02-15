import { writable } from 'svelte/store';

let id = 1;

const notifications = writable([]);

function addNotification(Component, data) {
  notifications.update(($notifications) => {
    return [...$notifications, { ...data, id: id++, Component }];
  });
}

export { notifications, addNotification };
