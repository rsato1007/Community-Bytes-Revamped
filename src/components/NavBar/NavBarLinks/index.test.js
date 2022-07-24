import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import NavBarLinks from '.';
import React from 'react';

it("expects links text to render", () => {
    // Arrange
    const list = ["home", "place"];

    // Act
    render(<NavBarLinks linksList={["home", "place"]}/>);

    // Assert
    list.forEach((link) => {
        expect(screen.findByText(link)).not.toBeNull();
    });
})