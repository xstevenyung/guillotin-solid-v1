import { writable } from 'svelte/store'
import { initPercentage } from './percentage'

let id = 1

const notifications = writable([])

function addNotification(Component, data) {
  notifications.update($notifications => {
    return [
      ...$notifications,
      { ...data, id: id++, Component, percentage: initPercentage() },
    ]
  })
}

function dismiss(id) {
  notifications.update($notifications => {
    return $notifications.filter(notification => notification.id !== id)
  })
}

export default { subscribe: notifications.subscribe, addNotification, dismiss }
