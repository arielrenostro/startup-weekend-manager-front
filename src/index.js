import React, { useState } from 'react';

import {UserContextProvider} from './context/user';
import Navigator from './navigation';

const App = () => {
    return (
        <UserContextProvider>
            <Navigator />
        </UserContextProvider>
    )
};

export default App;