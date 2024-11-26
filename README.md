# react-hook-tools:

A lightweight library that provides two essential custom hooks for your react or react-native projects.

## Features

- **`useInterval`**: Set up recurring functions at specified intervals.
- **`useTimeout`**: Delay execution of a function for a specified time.

## Installation

Install the library using npm or yarn:

```bash
npm install react-hook-tools
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
import { useInterval } from 'react-hook-tools';

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
import { useTimeout } from 'react-hook-tools';

const TimerComponent = () => {
  useTimeout(() => {
    console.log('Print after 1 second!');
  }, 1000); // Runs after 1 second

  return <div>Check the console for timer logs.</div>;
};
```