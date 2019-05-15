import React from 'react';
import { storiesOf } from '@storybook/react';
import { Notification } from '../src';

storiesOf('Notification', module).add('Status Badge', () => (
  <div style={{ padding: '2em' }} >
    <Notification
      status="success"
      message="This is a success message."
    />
    <br />
    <br />
    <br />
    <Notification
      status="caution"
      message="This is a caution message."
    />
    <br />
    <br />
    <br />
    <Notification
      status="failure"
      message="This is a failure message."
    />
    <br />
    <br />
    <br />
    
    <Notification
      status="success"
      message="Added role ‘TCG Developer’ to 46 users."
      action="Undo"
      onClick={() => {alert('Undone')}}
    />
    <br />
    <br />
    <br />
    <Notification
      status="caution"
      message="Lost connection to database."
      action="Reconnect"
      onClick={() => {alert('Reconnecting')}}
      />
      <br />
      <br />
      <br />
      <Notification
      status="failure"
      message="Failed to archive 46 users."
      action="Try again"
      onClick={() => {alert('Trying again')}}
    />
  </div>
));
