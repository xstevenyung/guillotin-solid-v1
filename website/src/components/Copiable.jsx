import Clipboard from 'clipboard';
import { Match } from 'solid-js';
import { onMount, createSignal, onCleanup } from 'solid-js';

const Copiable = (props) => {
  let input;

  const [copied, setCopied] = createSignal(false);

  const showCopied = () => {
    setCopied(true);
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);
    onCleanup(() => clearTimeout(timeout));
  };

  onMount(() => {
    const clipboard = new Clipboard(input);

    clipboard.on('success', showCopied);
  });

  return (
    <div class="relative h-full">
      <input
        ref={input}
        onClick={console.log}
        type="text"
        readonly
        value={props.value}
        size={props.value.length + 2}
        class="text-gray-700 bg-gray-200 px-4 rounded-lg font-mono border border-gray-400 cursor-pointer h-full"
        data-clipboard-text={props.value}
      />

      <span class="absolute inset-y-0 right-2 text-gray-700 flex justify-center items-center">
        <Switch>
          <Match when={copied()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </Match>

          <Match when={true}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </Match>
        </Switch>
      </span>
    </div>
  );
};

export default Copiable;
