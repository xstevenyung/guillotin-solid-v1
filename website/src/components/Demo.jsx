const Demo = (props) => {
  return (
    <iframe
      src={`https://guillotinui.netlify.app/${props.key}`}
      class="w-full h-80"
      {...props}
    />
  );
};

export default Demo;
