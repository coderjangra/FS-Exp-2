# Experiment 1.2: React Testing, Debugging & Performance

This folder `FS-2` contains a React application built specifically to satisfy the requirements for Experiment 1.2. 

Below are the steps to demonstrate each part of the experiment.

## a. Write unit tests using Jest and React Testing Library.
We have written three unit tests in `src/App.test.js` that check for:
1. The presence of the experiment heading.
2. The initial state of the Counter and verifying that clicking the button successfully increments the count.
3. The presence of our optimized list elements.

**How to run it:**
1. Open your terminal in this directory (`FS-2/react-app`).
2. Run `npm test`.
3. You will see Jest run the tests and show that all 3 pass successfully.

---

## b. Debug React applications using Chrome DevTools.
We have inserted deliberate debugging hooks in `src/App.js` for you to inspect.

**How to perform debugging:**
1. Run the app in your terminal using `npm start`.
2. Open Chrome and press `F12` to open **Chrome DevTools**.
3. Go to the **Console** tab. 
4. When you click the "Increment Count" button, you will see exactly what state the application is in: `Current count is 0, incrementing by 1.`
5. **Set a Breakpoint:** Go to the **Sources** tab, find `src/App.js`, and click the line number next to `setCount(count + 1);`. When you click the button on the screen again, the application will freeze, allowing you to manually inspect variables (`count`, `text`, etc.) in the DevTools window.

---

## c. Analyze performance with Lighthouse and optimize rendering.
We built a deliberate performance optimization into the app using `React.memo` and `useMemo` on the `HeavyComponent` in `src/App.js`.

**How to perform the analysis:**
1. With the app running (`npm start`), type something into the text input box.
2. Notice in the DevTools Console that typing **does not** trigger the message `"HeavyComponent: Sorting items..."`. 
3. **The Optimization:** Because we wrapped `HeavyComponent` in `React.memo` and memoized its props with `useMemo`, React is smart enough to know that typing in the text box only updates the `text` state, so it entirely skips re-rendering the heavy list component, saving massive amounts of processing power.
4. **Lighthouse Audit:**
   - In Chrome DevTools, click the **Lighthouse** tab (you may need to click the `>>` arrows at the top to find it).
   - Select "Performance" and click **Analyze page load**.
   - Lighthouse will generate a report showing your application's First Contentful Paint, Time to Interactive, and overall performance score. Thanks to our optimization, the score will be very high!
