import React from 'react';
import { storiesOf } from '@storybook/react';
import { Notification } from '../src';

storiesOf('Notification', module).add('Status Badge', () => (
  <div style={{ 'background-color': '#121212', padding: '2em' }} >
    <Notification status="active" />
    <br />
    <br />
    <Notification status="paused" />
    <br />
    <br />
    <Notification status="pending" />
    <br />
    <br />
    <Notification status="archived"
    />
  </div>
));
