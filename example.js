import { create } from 'free-style';

const style = create();

const backgroundStyle = style.registerStyle({
    backgroundColor: 'blue'
}, 'background-style-display-name');

const item = style.registerStyle({
    color: 'gold'
}, 'item-style-display-name');
