/* eslint-disable no-console */
/* eslint-disable max-len */
const logger = {
  log: function log(...args) {
    if (__GLOBALS__.dev) {
      console.log('%c LOGGER  ', 'color: #555555; background-color: #EEEEEE; font-weight: bold', ...args);
    }
  },

  warning: function warning(...args) {
    if (__GLOBALS__.dev) {
      console.log('%c WARNING ', 'color: #9F6000; background-color: #FEEFB3; font-weight: bold', ...args);
    }
  },

  info: function info(...args) {
    if (__GLOBALS__.dev) {
      console.log('%c INFO    ', 'color: #00529B; background-color: #BDE5F8; font-weight: bold', ...args);
    }
  },

  error: function error(...args) {
    if (__GLOBALS__.dev) {
      console.log('%c ERROR   ', 'color: #D8000C; background-color: #FFBABA; font-weight: bold', ...args);
    }
  },

  success: function success(...args) {
    if (__GLOBALS__.dev) {
      console.log('%c SUCCESS ', 'color: #4F8A10; background-color: #DFF2BF; font-weight: bold', ...args);
    }
  },
};

export default logger;
