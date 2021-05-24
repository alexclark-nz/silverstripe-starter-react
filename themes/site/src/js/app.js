import React from 'react';
import { render } from 'react-dom';

import SubscribeForm from './components/SubscribeForm';

require('./bootstrap');

const subscribeForm = document.getElementById('subscribe-form');
render(<SubscribeForm {...subscribeForm.dataset} />, subscribeForm);
