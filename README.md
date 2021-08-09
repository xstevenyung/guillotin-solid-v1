# Guillotin

Collection of Headless Components for demanding developers

[Full documentation](https://guillotin.netlify.app/docs)

## What is Guillotin?

Guillotin (named after [Joseph-Ignace Guillotin](https://en.wikipedia.org/wiki/Joseph-Ignace_Guillotin)) is a headless components library for demanding developers who needs complete control over the UI of their app without re-inventing the wheel and giving up on productivity.

This library is lightweight, and ultra-customizable, but do not render any markup or styles for you. This effectively means that Guillotin is a "headless" UI library

## What is a "headless" UI library?

React Headless Notifier is a headless utility, which means out of the box, it doesn't render or supply any actual UI elements. You are in charge of utilizing styling and managing your different notification types across your application. Read this article to understand [why Guillotin is built this way](https://www.merrickchristensen.com/articles/headless-user-interface-components/). If you don't want to, then here's a quick explanation of why headless UI is important:

- Separation of Concerns - Not that superficial kind you read about all the time. The real kind. React Headless Notifier as a library honestly has no business being in charge of your UI. The look, feel, and overall experience of your table is what makes your app or product great. The less React Headless Notifier gets in the way of that, the better!
- Maintenance - By removing the API surface area required to support every UI use-case, React Headless Notifier can remain small, easy-to-use and simple to customize.
- Extensibility - UI presents countless edge cases for a library simply because it's a creative medium, and one where every developer does things differently. By not dictating UI concerns, React Headless Notifier empowers the developer to design and extend the UI based on their unique use-case.

## Getting Started

### Installation

```bash
npm install --save @guillotin/solid
```

or

```bash
yarn add @guilltoin/solid
```

Guillotin is compatible with Solid.js `v1.0.0+`.

### Choose a component and use it

At the moment, Guillotin only include 2 components, [Toaster](https://guillotin.netlify.app/docs#toaster) and [Modal](https://guillotin.netlify.app/docs#modal). We are working on increasing the size of the library. If you have any suggestions of what component we could add, feel free to [send me a Tweet](https://twitter.com/intent/tweet?original_referer=guillotin.recodable.io&text=I%20love%20Guillotin%20but%20we%20need%20a%20X%20component!%20@xstevenyung)

[Full documentation](https://guillotin.netlify.app/docs)
