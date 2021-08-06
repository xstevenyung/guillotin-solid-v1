import { onMount, createSignal, mergeProps } from 'solid-js';
import { For, Show } from 'solid-js/web';

const NavigableContent = (props) => {
  props = mergeProps({ tags: ['h1', 'h2'] }, props);

  let content;

  const [headlines, setHeadlines] = createSignal([]);

  onMount(() => {
    const newHeadlines = [];

    content
      .querySelectorAll(`.content ${props.tags.join(',')}`)
      .forEach((element) => {
        return newHeadlines.push({
          id: element.id,
          name: element.textContent,
          level: props.tags.findIndex(
            (tag) => tag === element.nodeName.toLowerCase(),
          ),
        });
      });

    setHeadlines(newHeadlines);
  });

  return (
    <div class="grid grid-cols-4">
      <div class="relative">
        <nav class="sticky top-24 right-0 left-0 overflow-y-scroll">
          <SectionList headlines={headlines()} />
        </nav>
      </div>

      <div ref={content} class="col-span-3">
        {props.children}
      </div>
    </div>
  );
};

export default NavigableContent;

const SectionList = (props) => {
  return (
    <ol>
      <For each={props.headlines}>
        {(headline) => <SectionItem {...headline} isViewing />}
      </For>
    </ol>
  );
};

const SectionItem = (props) => {
  props = mergeProps({ isViewing: false }, props);

  return (
    <li class="relative">
      <a
        href={`#${props.id}`}
        class="
        inline-block
        px-6
        py-2
        hover:bg-gray-200
        w-full
        text-left text-lg
        whitespace-no-wrap
      "
      >
        {props.name}
      </a>

      <Show when={props.isViewing}>
        <span
          class="
        absolute
        inset-y-0
        right-3
        text-gray-400
        flex
        justify-center
        items-center
      "
        >
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
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </Show>
    </li>
  );
};
