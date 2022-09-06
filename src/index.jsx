import React from "react";
import { createRoot } from 'react-dom/client';
import Module from './module';
import './index.scss';

const root = createRoot(document.getElementById('root'));

root.render(<Module />);