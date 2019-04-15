import { useState, useEffect } from 'react';
import { always, ifElse, defaultTo } from 'ramda';
import publicIp, { Options } from 'public-ip';

type VoidFunc = () => void;

type IsOnline = { isOnline: boolean };

const defaultToFalse = defaultTo(false);
const isNavigatorOnline = () => defaultToFalse(window.navigator.onLine);

export default (options: Options, delay = 30000, initialState = true): IsOnline => {
    const [isOnline, setIsOnline] = useState(initialState);
    const setFalsyIsOnline: VoidFunc = () => setIsOnline(false);
    const setTruthyIsOnline: VoidFunc = () => setIsOnline(true);
    const checkForConnection: VoidFunc = () => publicIp.v4(options).then(setTruthyIsOnline).catch(setFalsyIsOnline);
    useEffect(() => {
        const tick = ifElse(isNavigatorOnline, checkForConnection, setFalsyIsOnline);
        const intervalId = always(setInterval(tick, delay));
        return () => clearInterval(intervalId());
    }, [delay]);
    return { isOnline };
};
