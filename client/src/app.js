import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter , {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import blogs from './dev-fixtures/posts';


const store = configureStore();
console.log(blogs);
store.dispatch({
    type:'SET_BLOGS',
    blogs
});

console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () =>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app')); 
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />,document.getElementById('app'));

console.log('Once the data is loaded show the homepage')
renderApp();

