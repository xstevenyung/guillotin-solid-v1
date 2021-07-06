import { mergeProps } from 'solid-js'
import { closeModal } from './store'
import styles from './Background.module.css'

const ModalBackground = props => {
  props = mergeProps(
    { backgroundColor: 'rgba(229, 231, 235)', opacity: 0.8 },
    props,
  )

  return (
    <div
      class={styles.background}
      onClick={closeModal}
      style={{
        opacity: props.opacity,
        'background-color': props.backgroundColor,
      }}
    />
  )
}

export default ModalBackground
