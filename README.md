# Stopwatch Application

This project is a stopwatch application built with React, TypeScript, and SCSS, following good practices for code structure and modularity. The stopwatch tracks total time, lap times, and provides a summary of lap details when stopped. The project makes use of components like `TotalTime`, `LapTime`, `LapsTable`, `LapEntry`, and `Summary` for clear separation of concerns.

## Features

- **Stopwatch Functionality**: Start, stop, lap, and reset functionality with precise timing updates.
- **Total Time and Lap Time**: Tracks both the total running time and the individual lap time.
- **Laps Table**: Displays a list of all recorded laps with lap numbers and lap times.
- **Summary**: Provides a summary after stopping the stopwatch, including total time, average lap time, fastest lap, and slowest lap.
- **Responsive Styling**: The application is styled using SCSS modules, with theme support for both light and dark modes, and is responsive for different screen sizes.

## Technologies Used

- **React**: Used for building the UI components.
- **TypeScript**: Ensures type safety and better development experience.
- **SCSS Modules**: Used for modular and maintainable styling.
- **useState and useEffect**: React hooks for managing state and side effects.
- **Props Passing**: Cleanly passes props between components to ensure flexibility and reusability.
- **Dynamic Rendering**: Uses conditional rendering to show different views based on the state (e.g., switching between showing lap data and the summary when the stopwatch is stopped).

## Code Example

Here's an example of how laps are rendered dynamically with `.map()` in the `LapsTable` component. Each lap entry is passed to the `LapEntry` component, where the `formatTime` function is used to display the time in `mm:ss:ms` format:

```tsx
import { LapEntry } from './LapEntry';
import { Laps } from '../Stopwatch/Stopwatch';
import styles from './lapsTable.module.scss';

type LapsTableProps = {
  lapsTable: Laps[];
};

export const LapsTable = ({ lapsTable }: LapsTableProps) => {
  return (
    <table className={styles.lapsTable}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>Lap Nr</th>
          <th>Time</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {lapsTable.map(lap => (
          <LapEntry
            key={lap.lapNr}
            lap={lap}
          />
        ))}
      </tbody>
    </table>
  );
};
```
The individual lap entry is rendered inside the `LapEntry` component:
```tsx
import { Laps } from '../Stopwatch/Stopwatch';
import { formatTime } from '../utils/formatTime';
import styles from './lapsTable.module.scss';

type LapEntryProps = {
  lap: Laps;
};

export const LapEntry = ({ lap }: LapEntryProps) => {
  const formattedLapTime = formatTime(lap.lapTime);

  return (
    <tr className={styles.tableRow}>
      <td>{lap.lapNr}</td>
      <td>{formattedLapTime}</td>
    </tr>
  );
};
```

## Key Points:

- **LapEntry** handles the formatting of the lap time with `formatTime` and renders each lap entry as a row (`<tr>`).

- **LapsTable** uses `.map()` to iterate through the `lapsTable` array and passes each lap object to `LapEntry` as a prop. The `key` prop is assigned to ensure proper identification of list items in React.

- The approach improves code organization and separation of concerns. `LapsTable` manages the structure of the table, while `LapEntry` is responsible for rendering individual rows.

## Folder Structure
/src
  /Button
    - Button.tsx
    - ButtonsComponent.tsx
    - button.module.scss
  /Laps
    - LapsTable.tsx
    - LapEntry.tsx
    - lapsTable.module.scss
    - lapEntry.module.scss
  /Stopwatch
    - Stopwatch.tsx
    - stopwatch.module.scss
  /Summary
    - Summary.tsx
    - summary.module.scss
  /TimeDisplay
    - LapTime.tsx
    - TotalTime.tsx
  /utils
    - formatTime.ts


## Conclusion
This project demonstrates my ability to build a modular and scalable React application using TypeScript and SCSS. By focusing on separation of concerns, prop passing, and dynamic rendering, I have created a stopwatch application that efficiently tracks time and provides detailed lap summaries.

This project also illustrates best practices, such as:
- Using hooks like `useState` and `useEffect` for state management and side effects.
- Keeping the logic outside of the JSX whenever possible, especially when it involves dynamic calculations, such as formatting times or mapping over arrays of data.
- Ensuring that styles are modular, maintainable, and responsive, while also supporting both light and dark themes.

Feel free to explore the code and suggest improvements. Thank you for checking out this project!


### Notes:
- The **Code Example** demonstrates dynamic rendering and the use of the `formatTime` function within `LapEntry`.
- The **Conclusion** section explains what makes the project professional, including the use of hooks, modularity, and best practices in React.
- The styles are mentioned as being responsive and modular through SCSS modules with theme support.

This should give potential interviewers a comprehensive understanding of your project and the approach you've taken.
