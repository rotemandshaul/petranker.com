import React from 'react';

const HomepageContext = React.createContext();

export const HomepageProvider = HomepageContext.Provider;
export const HomepageConsumer = HomepageContext.Consumer;

export default HomepageContext;
