import { ReactNode } from 'react';
import { StateNode } from 'xstate';

export type Event = { type: 'NEXT' } | { type: 'PREVIOUS' };

export type View = {
  Component: ReactNode;
  step: number;
};

export type Context = {
  currentView: View;
};

export type State = {
  states: {
    company: StateNode;
    director: StateNode;
    contact: StateNode;
  };
};
