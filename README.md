# react-hook-tools

A lightweight library that provides two essential custom hooks for your react or react-native projects.

## Features

- **`useInterval`**: Set up recurring functions at specified intervals.
- **`useTimeout`**: Delay execution of a function for a specified time.
- **`useDebouncedValue`**: Debounce a value, updating it after a specified delay.

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

