const breakpoints: {
  [key: string]: number;
} = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1600,
};

const mq = (value: `sm` | `md` | `lg` | `xl` | `xxl` | `xxxl`) => {
  const bpArray = Object.keys(breakpoints).map((key) => [
    key,
    breakpoints[key],
  ]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (value === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

export default mq;
