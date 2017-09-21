import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import EventForm from './EventForm';

// describe('Event Form via Enzyme'), () => {

  function setup(saving) {
    const props = {
      event: {}, saving: saving, errors: {},
      onSave: () => {},
      onChage: () => {}
    };

    return shallow(<EventForm {...props } />);
  }

  it('renders from and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Events');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    console.log("VALUE", wrapper.find('input').props());
    expect(wrapper.find('input').props().defaultValue).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().defaultValue).toBe('Saving...');
  });
