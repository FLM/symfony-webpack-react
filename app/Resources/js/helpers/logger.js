/* eslint-disable no-console */
const logger = {
  log: function log() {
    if (__GLOBALS__.dev) {
      console.log(`%c LOGGER  `, `color: #555555; background-color: #EEEEEE; font-weight: bold`, ...arguments);
    }
  },

  warning: function warning() {
    if (__GLOBALS__.dev) {
      console.log(`%c WARNING `, `color: #9F6000; background-color: #FEEFB3; font-weight: bold`, ...arguments);
    }
  },

  info: function info() {
    if (__GLOBALS__.dev) {
      console.log(`%c INFO    `, `color: #00529B; background-color: #BDE5F8; font-weight: bold`, ...arguments);
    }
  },

  error: function error() {
    if (__GLOBALS__.dev) {
      console.log(`%c ERROR   `, `color: #D8000C; background-color: #FFBABA; font-weight: bold`, ...arguments);
    }
  },

  success: function success() {
    if (__GLOBALS__.dev) {
      console.log(`%c SUCCESS `, `color: #4F8A10; background-color: #DFF2BF; font-weight: bold`, ...arguments);
    }
  },
};

export default logger;
