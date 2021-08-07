import type { Component } from 'solid-js';

const Container: Component = (props) => {
  return (
    <div class="w-screen h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl flex justify-center items-center">
      {props.children}
    </div>
  );
};

export default Container;
