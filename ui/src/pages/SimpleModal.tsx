import { useModal, ModalProvider } from '@guillotin/solid';
import Container from '../components/Container';

const Modal = () => {
  const { closeModal } = useModal();

  return (
    <div class="bg-white p-6 rounded-xl shadow w-80 h-48">
      <h1 class="text-3xl font-bold mb-1">Simple Modal</h1>

      <p class="text-gray-600">
        This is a simple modal example created with Guillotin.
      </p>

      <button
        type="button"
        onClick={closeModal}
        class="transition duration-250 ease-in-out bg-red-600 hover:bg-red-700 rounded-lg px-6 py-3 text-white font-bold mt-4"
      >
        You can close it
      </button>
    </div>
  );
};

const SimpleModal = () => {
  return (
    <ModalProvider>
      {() => {
        const { setModal } = useModal();
        return (
          <Container>
            <button
              class="transition duration-250 ease-in-out bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 text-white font-bold shadow-md hover:shadow-lg transform hover:-translate-y-2"
              onClick={() => setModal({ Component: Modal })}
              type="button"
            >
              Open example modal
            </button>
          </Container>
        );
      }}
    </ModalProvider>
  );
};

export default SimpleModal;
