import { writable } from 'svelte/store';

let id = 1;

const notifications = writable([]);

function addNotification(Component, data) {
  notifications.update(($notifications) => {
    return [...$notifications, { ...data, id: id++, Component }];
  });
}

function dismiss(id) {
  notifications.update(($notifications) => {
    return $notifications.filter((notification) => notification.id !== id);
  });
}

export { notifications, addNotification, dismiss };
