import React from 'react';
import { useMachine } from '@xstate/react';
import Steps from 'rc-steps';

import { FormPart } from './components/FormPart/FormPart';
import { Spacer } from './components/Spacer/Spacer';
import { formMachine, formMachineStates } from './formMachine';

function App() {
  const [current, send] = useMachine(formMachine);

  return (
    <div className="app">
      <div className="stepsContainer">
        <Steps current={current.context.currentView.step} labelPlacement="vertical" size="small">
          {formMachineStates.map(s => (
            <Steps.Step title={s} key={s} />
          ))}
        </Steps>
      </div>

      <Spacer />

      <FormPart
        onPrevious={() => {
          send('PREVIOUS');
        }}
        onNext={() => {
          send('NEXT');
        }}
      >
        {current.context.currentView.Component}
      </FormPart>
    </div>
  );
}
