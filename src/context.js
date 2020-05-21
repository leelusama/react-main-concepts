import React from 'react';

let context;

export default {
  getContext() {
    if (context === undefined) {
      context = React.createContext('ru');
    }

    return context;
  },
};
