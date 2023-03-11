import React, { useContext, useState } from "react";

import { DivStyle, ImgStyle, SearchHomePageStyled } from "./style";

import { ButtonToSearch, ButtonToReco, ButtonToRecord } from "../Buttons";

import { SpeechContext } from "../../providers/SpeechContext";

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const SearchHome = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  !browserSupportsSpeechRecognition ? alert(`Busca por audio desabilitado`) : null;
  
  const searchResult = () => {
    transcript ? console.log(transcript) : console.log("função pesquisar do Diego");
  }
  
  return (
    <SearchHomePageStyled>
      <ImgStyle src={!listening ? "src/assets/mundo 1.png" : "https://www.upshow.tv/wp-content/uploads/2022/08/Waveform.gif " } alt="" />
      {
        listening 
        ? <input placeholder="Pesquise aqui" type="text"  value={transcript}/> 
        : <input placeholder="Pesquise aqui" type="text"/> 
      }
      <DivStyle>
        {
          !listening 
          ? <ButtonToRecord toglle={SpeechRecognition.startListening} />
          : <ButtonToReco toglle={SpeechRecognition.stopListening} />
        }
        <ButtonToSearch toglle={searchResult} />
      </DivStyle>
    </SearchHomePageStyled>
  );
};
