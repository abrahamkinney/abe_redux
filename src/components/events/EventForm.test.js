import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import EventForm from './EventForm';

describe('Event Form via Enzyme'), () => {

  function setup(saving {
    const props = {
      course: {}, saving: saving, errors: {},
      onSave: () => {},
      onChage: () => {}
    };

    return shallow(<EventForm {...props } />);
  }

}
