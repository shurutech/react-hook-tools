# react-hook-tools

A lightweight library that provides two essential custom hooks for your react or react-native projects.

## Features

- **`useInterval`**: Set up recurring functions at specified intervals.
- **`useTimeout`**: Delay execution of a function for a specified time.
- **`useDebouncedValue`**: Debounce a value, updating it after a specified delay.
- **`usePrevious`**: Capture and store the previous value of a state or prop.

## Installation

Install the library using npm or yarn:

```bash
npm install @shurutech/react-hook-tools
```

## Example Usage

### useInterval:

#### Syntax:

```
useInterval(()=>{
    // functionality
},time)
```
Note: Time will in milliseconds ( > 0 ) if you need to run interval, and undefined or null to stop the interval.

#### Example

```
import { useInterval } from '@shurutech/react-hook-tools';

const IntervalComponent = () => {
  useInterval(() => {
    console.log('Interval triggered!');
  }, 1000); // Runs every 1 second

  return <div>Check the console for interval logs.</div>;
};
```

### useTimeout:

#### Syntax:

```
useTimeout(()=>{
    // functionality
},time)
```
Note: Time will in milliseconds ( > 0 ) if you need to run interval, and undefined or null to clear the timer.

#### Example

```
import { useTimeout } from '@shurutech/react-hook-tools';

const TimerComponent = () => {
  useTimeout(() => {
    console.log('Print after 1 second!');
  }, 1000); // Runs after 1 second

  return <div>Check the console for timer logs.</div>;
};
```

### useDebouncedValue:

#### Syntax:

```
const debouncedValue = useDebouncedValue(value, delay);
```

#### Example

```
import { useDebouncedValue } from '@shurutech/react-hook-tools';

const SearchComponent = () => {
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebouncedValue(search, 500);

  React.useEffect(() => {
    if (debouncedSearch) {
      console.log('Searching for:', debouncedSearch);
      // Call your API here
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    />
  );
};
```

### usePrevious:

#### Syntax:

```
const previousValue = usePrevious(value);
```

#### Example

```
import { usePrevious } from '@shurutech/react-hook-tools';

const PreviousValueComponent = () => {
  const [count, setCount] = React.useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
```

## How to Contribute
1. Fork this repository to your GitHub account and clone it locally.

2. Install project dependencies.

3. Create a new branch for your feature or bugfix.

4. Implement your changes, ensuring they follow existing coding standards.

5. Commit your changes with a descriptive message.

6. Push your branch to your forked repository.

7. Open a pull request with a clear description of your changes.

8. Address any feedback or requested changes from maintainers.

9. Celebrate once your contribution is merged! 🎉

