import { Dynamic, mergeProps } from 'solid-js/web'
import { Show, onMount } from 'solid-js'
import { modal, closeModal } from './store'
import styles from './Outlet.module.css'

const ModalOutlet = props => {
  props = mergeProps({ zIndex: 99999 }, props)

  onMount(() => {
    window.addEventListener('keydown', e => {
      if (modal.Component && e.code === 'Escape') {
        closeModal()
      }
    })
  })

  return (
    <Show when={!!modal.Component}>
      <div>
        <div style={{ 'z-index': props.zIndex }}>
          <slot name="background">
            {/* <Dynamic component={modal.Background()} /> */}
          </slot>
        </div>

        <div class={styles.content} style={{ 'z-index': props.zIndex + 1 }}>
          <slot name="content">
            {/* <Dynamic component={modal.Component} {...modal.data} /> */}
          </slot>
        </div>
      </div>
    </Show>
  )
}

export default ModalOutlet
