import { ToastComponent } from '../src';
import styles from './Notification.module.css';

const ExampleNotification: ToastComponent = (props) => {
  return (
    <div class={styles.container}>
      <button type="button" class={styles.close} onClick={props.dismiss}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div class={styles.content}>
        <div class={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <p class={styles.message}>{props.message}</p>
      </div>

      <div
        class={styles.progressBar}
        style={`width: ${props.context.percentage()}%;`}
      />
    </div>
  );
};

export default ExampleNotification;
