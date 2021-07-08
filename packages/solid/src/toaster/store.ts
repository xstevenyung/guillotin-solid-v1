import { createSignal } from "solid-js"
import type { Component} from "solid-js"

let id = 1;

export type Notification = {
  id: number
  Component: Component,
  data: object
}

export const [notifications, setNotifications] = createSignal<Notification[]>([])

export const addNotification = (Component: Component, data: object) => {
  return setNotifications([...notifications(), { id: id++, Component, data }])
}

export const dismissNotification = ({id }: Notification) => {
  return setNotifications(
    notifications().filter(notification => notification.id !== id)
  )
}