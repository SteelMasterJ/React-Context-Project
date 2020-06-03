import React from 'react';

const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.provider;
export const Consumer = ScoreboardContext.consumer;