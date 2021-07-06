import { customElement } from 'solid-element'
import { ModalOutlet, ModalBackground } from './modal/index'

customElement('guillotin-modal-outlet', {}, ModalOutlet)
customElement('guillotin-modal-background', {}, ModalBackground)

export { setModal, closeModal } from './modal/index'
