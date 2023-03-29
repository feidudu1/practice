import { MachineConfig, MachineOptions, createMachine } from 'xstate';

import { mapNameToView, changeView } from './formMachine.actions';
import { State, Context } from './formMachine.types';

const initialStateName = 'company';

const formMachineConfig: MachineConfig<Context, State, Event> = {
  id: 'formState',
  initial: initialStateName,
  context: {
    currentView: mapNameToView[initialStateName],
  },
  states: {
    company: {
      on: {
        NEXT: { target: 'director', actions: { type: 'changeView', payload: 'director' } },
      },
    },
    director: {
      on: {
        PREVIOUS: { target: 'company', actions: { type: 'changeView', payload: 'company' } },
        NEXT: { target: 'contact', actions: { type: 'changeView', payload: 'contact' } },
      },
    },
    contact: {
      on: {
        PREVIOUS: { target: 'director', actions: { type: 'changeView', payload: 'director' } },
      },
    },
  },
};

const formMachineOptions: Partial<MachineOptions<Context, Event>> = {
  actions: { changeView },
};

export const formMachine = createMachine(formMachineConfig, formMachineOptions);

export const formMachineStates = Object.keys(formMachine.states);
