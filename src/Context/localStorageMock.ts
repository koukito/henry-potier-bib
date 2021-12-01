// this is a mock for the localStorage object, because it's a browser only object
// not mocking it can cause build time issues because at build time the window object is undefined
export const localStorageMock = {
  getItem: () => {
    return null;
  },
  setItem: (a, b) => {}
};
