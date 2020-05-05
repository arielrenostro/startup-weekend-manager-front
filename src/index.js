import React, { useState } from 'react';

import {UserContextProvider} from './context/user';
import Navigator from './base_navigation';

const App = () => {
    return (
        <UserContextProvider>
            <Navigator />
        </UserContextProvider>
    )
};

export default App;