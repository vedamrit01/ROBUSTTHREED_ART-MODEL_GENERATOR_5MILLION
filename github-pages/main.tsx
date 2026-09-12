import {createRoot} from 'react-dom/client';
import Studio from '../components/studio';
import '../app/globals.css';

const root=document.getElementById('root');
if(!root)throw new Error('The studio could not find its mounting point.');
createRoot(root).render(<Studio/>);
