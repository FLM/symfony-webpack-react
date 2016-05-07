import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const basePath = (__GLOBALS__.dev ? '/app_dev.php' : '');

const myHistory = useRouterHistory(createHistory)({
  basename: basePath,
});

export default myHistory;
