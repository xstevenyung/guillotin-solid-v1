import type { Component } from "solid-js"
import { mergeProps } from "solid-js/web";
import { styled } from "solid-styled-components"

type Props = {
  zIndex: number;
	backgroundColor?: string,
	opacity?: number
  onClick: () => any
};

const ModalBackground: Component<Props> = (props) => {
	props = mergeProps({
		backgroundColor: 'rgba(229, 231, 235)',
		opacity :0.8,
  }, props)


	return <Container {...props} />
}

export default ModalBackground

const Container = styled('div')`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: ${props => props.zIndex};
	background-color: ${props => props.backgroundColor};
	opacity: ${props => props.opacity};
`

{
  /* <script>
  export let close;
  export let backgroundColor = 'rgba(229, 231, 235)';
  export let opacity = 0.8;
  export let zIndex = 99999;
</script>

<div
  on:click={close}
  class="background"
  style={`opacity: ${opacity}; background-color: ${backgroundColor}; z-index: ${zIndex}`}
/>

<style>
  .background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style> */
}
