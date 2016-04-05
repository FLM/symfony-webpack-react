import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';
import store from 'store/store';

const basePath = (__GLOBALS__.dev ? '/app_dev.php' : '');

const browserHistory = useRouterHistory(createHistory)({
  basename: basePath,
});

const myHistory = syncHistoryWithStore(browserHistory, store);

export default myHistory;
