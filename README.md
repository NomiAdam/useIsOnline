# useIsOnline

> Experimental React hook utility to check whether internet connection is available or not.

>Uses both browser navigator.onLine to check for local connection, then confirms with public-ip library call

> TODO: test coverage

[![NPM](https://img.shields.io/npm/v/useIsOnline.svg)](https://www.npmjs.com/package/useIsOnline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save useIsOnline

// Or using yarn

yarn add useIsOnline
```

## Usage

```jsx
import React from 'react';
import { ifElse, always } from 'ramda';
import { isTruthy } from 'ramda-extension';
import useIsOnline from 'useIsOnline';

const options = {
    https: true,
    delay: 3000
};

const checkConnectionDelay = 30000;

const getNetworkStatus = ifElse(isTruthy, always('online'), always('offline'));

const App = () => {
    const { isOnline } = useIsOnline(options, checkDelay);
    return (
        <h1>{ `You are ${ getNetworkStatus(isOnline) }` }<h1>
    );
};

export default App;
```

## License

MIT © [NomiAdam](https://github.com/NomiAdam)
