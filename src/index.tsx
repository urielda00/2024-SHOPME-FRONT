import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider, QueryClient } from 'react-query';

let persistor = persistStore(store);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<BrowserRouter basename='/'>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</QueryClientProvider>
);
