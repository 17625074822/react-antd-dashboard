import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

function  DrawerDemo(props){
    let [visible, setVisible] = useState(false);
    let showDrawer = () => {
        setVisible(true);
    };
    let onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default DrawerDemo