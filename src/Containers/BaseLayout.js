import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import bookingMachine from '../Machines/bookingMachine';
import './BaseLayout.css';

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log('Estado', state.value);
  console.log('Context', state.context);
  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send}/>
      <StepsLayout send={send} state={state}/>
    </div>
  );
}