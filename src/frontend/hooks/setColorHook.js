const setColorHook = (idx) => {
  if (idx % 3 === 0) return '34 176 74';
  if (idx % 2 === 0) return '255 167 100';
  return '124 180 249';
};
export default setColorHook;
