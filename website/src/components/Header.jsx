import { createSignal, onMount, onCleanup } from 'solid-js';
import { Show } from 'solid-js/web';

const Header = () => {
  let fixedHeader;

  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrolled(entry.boundingClientRect.y < 0);
        });
      },
      { threshold: 1 },
    );

    observer.observe(fixedHeader);

    onCleanup(observer?.disconnect);
  });

  return (
    <>
      <SimpleHeader ref={fixedHeader} />

      <Show when={scrolled()}>
        <div class="fixed inset-x-0 top-0 border-b shadow-sm z-50">
          <SimpleHeader />
        </div>
      </Show>
    </>
  );
};

export default Header;

const SimpleHeader = (props) => {
  return (
    <header {...props} class="py-6 px-10 bg-white">
      <a
        href="/"
        title="Guillotin's homepage"
        class="text-center my-10 text-3xl "
      >
        <span class="font-semibold">Guillotin</span>
        <span class="font-bold my-10 text-green-500 ml-1">Docs</span>
      </a>
    </header>
  );
};
