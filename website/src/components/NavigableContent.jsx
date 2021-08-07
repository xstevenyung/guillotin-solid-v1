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
        {(headline) => <SectionItem {...headline} />}
      </For>
    </ol>
  );
};

const SectionItem = (props) => {
  props = mergeProps({ isViewing: false }, props);

  const [hovered, setHovered] = createSignal(false);

  return (
    <li
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      class="relative flex justify-baseline items-center gap-2 hover:bg-gray-200 cursor-pointer"
    >
      <a
        href={`#${props.id}`}
        class="inline-block px-6 py-2 w-full text-left text-lg flex-grow-0 truncate"
      >
        <span style={`padding-left: ${props.level * 2}rem`}>{props.name}</span>
      </a>

      <Show when={hovered() || props.isViewing}>
        <span class="w-6 h-6 text-gray-400 flex justify-center items-center mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
