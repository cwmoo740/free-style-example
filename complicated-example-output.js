import * as React from 'react';
import { create } from 'free-style';

const style = create();

let somethingDynamic = 'red';

function change(color) {
    somethingDynamic = color;
}

const backgroundStyle = style.registerStyle({
    color: somethingDynamic
}, 'background-style-display-name');
