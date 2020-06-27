import React, { useEffect, useRef } from 'react';

/**
 * Use setInterval with Hooks in a declarative way.
 *
 * @see https://stackoverflow.com/a/59274004/3723993
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
const useInterval = (
  callback: React.EffectCallback,
  delay: number
): React.MutableRefObject<number> => {
  const intervalRef = useRef<number>(0);
  const callbackRef = useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  // eslint-disable-next-line
  // @ts-ignore
  useEffect(() => {
    intervalRef.current = window.setInterval(
      () => callbackRef.current(),
      delay
    );
    return () => window.clearInterval(intervalRef.current);
  }, [delay]);

  // In case you want to manually clear the interval from the consuming component...:
  return intervalRef;
};

export default useInterval;
