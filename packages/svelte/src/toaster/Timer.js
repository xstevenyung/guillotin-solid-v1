// // inspired by: https://gist.github.com/ncou/3a0a1f89c8e22416d0d607f621a948a9

// export class Timer {
//   constructor(private readonly callback, private readonly delay) {}

//   private timerId;
//   private start;
//   private remaining = this.delay;

//   resume() {
//     this.start = new Date().getTime();

//     this.clear();

//     this.timerId = setTimeout(this.callback, this.remaining);

//     return this;
//   }

//   pause() {
//     this.clear();

//     this.remaining -= new Date().getTime() - this.start;

//     return this;
//   }

//   clear() {
//     if (this.timerId) {
//       clearTimeout(this.timerId);
//     }

//     return this;
//   }
// }

export class Timer {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.remaining = this.delay;
  }
  resume() {
    this.start = new Date().getTime();
    this.clear();
    this.timerId = setTimeout(this.callback, this.remaining);
    return this;
  }
  pause() {
    this.clear();
    this.remaining -= new Date().getTime() - this.start;
    return this;
  }
  clear() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    return this;
  }
}