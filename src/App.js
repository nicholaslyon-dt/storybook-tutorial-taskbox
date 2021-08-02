import { Provider } from 'react-redux';
import store from './lib/redux';

import Inbox from './screens/Inbox/Inbox';

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Inbox />
    </Provider>
  );
}
export default App;
