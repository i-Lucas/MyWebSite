import React from 'react';

import CheckDevice from '../resources/device';
import MobileComponent from './mobile';
import DesktopComponent from './desktop';

export default function Home() {

    const isDesktop = CheckDevice();
    return isDesktop ?
        <DesktopComponent /> : <MobileComponent />
}