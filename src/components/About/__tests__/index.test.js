import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //First test
    it('renders', () => {
        render(<About />);
    });

    //Second test
    it('matches snapsho DOM node structre', () => {
        //render About
    });
})

const { asFragment } = render(<About />);
expect(asFragment()).toMatchSnapshot();