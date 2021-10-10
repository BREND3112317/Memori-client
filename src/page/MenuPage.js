import React from 'react';

import MenuItem from '../component/MenuItem';
import Menu from '../component/Menu';

let menuItemWording = [
    "發問",
    "回答",
    "文章",
    "留言"
];

const MenuPage = () => {
    let menuItemArr = menuItemWording.map((wording) => <MenuItem text={wording}/>);

    return <Menu title={"BREND 的 Like"}>{menuItemArr}</Menu>
}

export default MenuPage;