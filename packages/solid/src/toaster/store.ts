import { createSignal } from "solid-js"
import type { Component} from "solid-js"

let id = 1;

export type Notification = {
  id: number
  Component: Component,
}

export const [notifications, setNotifications] = createSignal<Notification[]>([])

export const addNotification = (Component: Component) => {
  return setNotifications([...notifications(), { id: id++, Component }])
}

export const dismissNotification = ({id }: Notification) => {
  return setNotifications(
    notifications().filter(notification => notification.id !== id)
  )
}