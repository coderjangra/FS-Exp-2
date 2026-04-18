# Experiment 1.2: React Testing, Debugging, and Performance Optimization
# AVAILABLE AT: https://coderjangra.github.io/FS-Exp-2/
## Aim
To perform React front-end testing and debugging using modern tools such as Jest, React Testing Library, Chrome DevTools, and Lighthouse.

## Objective
1. Write comprehensive unit tests for a React application using Jest and React Testing Library.
2. Debug React applications efficiently using Chrome DevTools.
3. Analyze performance with Lighthouse and apply React rendering optimizations (e.g., `React.memo` and `useMemo`) to improve the application's performance.

## Theory
### 1. Unit Testing in React
Unit testing ensures that individual components of the application work exactly as intended. **Jest** is a powerful JavaScript testing framework that provides the test runner and assertion libraries. **React Testing Library** builds on top of DOM Testing Library by adding APIs for working with React components, allowing developers to test components in a way that resembles how users interact with them (e.g., finding elements by their accessible text rather than their implementation details).

### 2. Debugging React Apps
Debugging is the process of identifying and removing errors from software. **Chrome DevTools** provides an interactive environment to inspect the DOM, monitor network requests, and execute JavaScript breakpoints. The **React Developer Tools** extension specifically allows developers to inspect the React component hierarchy, analyze props and state, and track exactly what caused a component to render.

### 3. Performance Analysis & Optimization
Performance metrics determine how fast and responsive an application feels to the user. **Lighthouse** is an open-source, automated tool for improving the quality of web pages, providing scores for Performance, Accessibility, and Best Practices. 
In React, rendering performance can often be optimized using techniques like:
- **`React.memo`**: A higher-order component that skips re-rendering a component if its props have not changed.
- **`useMemo`**: A React Hook that caches the result of a calculation between re-renders, preventing expensive operations from running on every render cycle.

## Procedure
1. **Initialize the Project:** Create a new React application using `create-react-app`.
2. **Develop the UI:** Build a dashboard interface containing interactive components (e.g., a counter) and a computationally heavy component (e.g., a data grid that sorts a large array).
3. **Implement Optimizations:** 
   - Wrap the computationally heavy component with `React.memo`.
   - Memoize the dataset passed as a prop using the `useMemo` hook so that unrelated state changes (like typing in a search bar) do not trigger unnecessary re-renders of the data grid.
4. **Write Unit Tests:**
   - Create a test file (`App.test.js`).
   - Use `render` to mount the application in a test DOM.
   - Use `screen.getByText` and `screen.getByTestId` to locate elements.
   - Use `fireEvent.click` to simulate user interaction on the counter button and assert the state change.
   - Run tests using the `npm test` command.
5. **Debug the Application:** 
   - Start the development server (`npm start`).
   - Open Chrome DevTools (`F12`), navigate to the **Sources** tab, and set execution breakpoints inside state-updating functions (e.g., `handleIncrement`).
   - Observe variable values and the call stack during execution.
6. **Analyze Performance:** 
   - Open the **Lighthouse** tab in Chrome DevTools.
   - Generate a Performance Report to analyze metrics like First Contentful Paint (FCP) and Time to Interactive (TTI).
   - Validate that the `React.memo` optimizations improved the overall rendering score by skipping the re-rendering of the data grid when unrelated state changes occur.
7. **Deployment:** Configure the `package.json` with the appropriate `homepage` and `deploy` scripts, then deploy the compiled build to GitHub Pages using the `gh-pages` package.

## Learning Outcomes
By the end of this experiment, the following outcomes are achieved:
- **Proficiency in Testing:** Demonstrated ability to write and execute unit tests for React components using industry-standard tools (Jest and React Testing Library).
- **Advanced Debugging Skills:** Mastered the use of Chrome DevTools to set breakpoints, trace execution flows, and inspect React states.
- **Performance Tuning Expertise:** Gained practical experience in identifying rendering bottlenecks and successfully implementing React optimization hooks (`React.memo`, `useMemo`) to achieve high Lighthouse performance scores.
- **Continuous Deployment:** Learned how to seamlessly build and deploy a React application to a static hosting environment like GitHub Pages.
