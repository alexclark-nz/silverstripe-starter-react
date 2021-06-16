import React from 'react';
import { render } from 'react-dom';

// @ts-ignore https://github.com/Microsoft/TypeScript/issues/27481
import SubscribeForm from './components/SubscribeForm.tsx';

require('./bootstrap.ts');

const subscribeForm = document.getElementById('subscribe-form');

if (subscribeForm) {
    render(<SubscribeForm {...subscribeForm.dataset} />, subscribeForm);
}
