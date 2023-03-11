import React,{ createContext, useState } from "react";
import { IChildren,  ISpeechContext } from "./types/Context";


export const SpeechContext = createContext({} as ISpeechContext);

export const SpeechProviders = ({ children }:IChildren) =>{
  const [img, setImg] = useState(false)

  const toggleImg = () => {
    setImg(!img)
  }
  return (
    <SpeechContext.Provider 
      value={{img, setImg,toggleImg}}>
      {children}
    </SpeechContext.Provider>
  );
}