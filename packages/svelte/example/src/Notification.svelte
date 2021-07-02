<script>
  // import { getPercentage } from "@guillotin/core"

  export let dismiss;
  export let message;
  export let percentage;

  // const percentage = getPercentage()
</script>

<div class="container">
  <button type="button" class="close" on:click={dismiss}>
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

  <div class="content">
    <div class="icon">
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

    <p class="message">{message}</p>
  </div>

  <div class="progress-bar" style={`width: ${$percentage}%;`} />
</div>

<style>
  .container {
    width: 20rem;
    background-color: #f0fdf4;
    border: 0px;
    border-left: 4px;
    border-color: #4ade80;
    border-style: solid;
    padding: 1rem;
    position: relative;
  }

  button.close {
    cursor: pointer;
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    background-color: inherit;
    position: absolute;
    right: 0;
    top: 0;
    width: 1rem;
    color: #4ade80;
    margin: 0.75rem;
  }

  .message {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #22c55e;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .progress-bar {
    height: 2px;
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgba(209, 250, 229, var(--tw-bg-opacity));
  }
</style>
