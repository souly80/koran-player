import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Footer from './index';

describe('Footer', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  })

  it('Footer should render', () => {
    expect(wrapper).to.have.length(1);
  });
});
