import { assign } from 'xstate';

import { CompanyDataFormPart } from '../components/CompanyDataFormPart/CompanyDataFormPart';
import { ContactDataFormPart } from '../components/ContactDataFormPart/ContactDataFormPart';
import { DirectorDataFormPart } from '../components/DirectorDataFormPartt/ContactDataFormPart';

import { Context, View } from './formMachine.types';

export const mapNameToView: Record<string, View> = {
  company: {
    Component: <CompanyDataFormPart />,
    step: 0,
  },
  director: {
    Component: <DirectorDataFormPart />,
    step: 1,
  },
  contact: {
    Component: <ContactDataFormPart />,
    step: 2,
  },
};

export const changeView = assign<Context, Event>({
  currentView: (_context, _event, { action }) => {
    if (typeof action.payload !== 'string') {
      throw new Error('Action payload should be string');
    }

    return mapNameToView[action.payload];
  },
});
