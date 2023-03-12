import React, { useContext, useState } from "react";

import { DivStyle, ImgStyle, SearchHomePageStyled } from "./style";

import { ButtonToSearch, ButtonToReco, ButtonToRecord } from "../Buttons";

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from "../../service/axios";
import { MainHome } from "../MainHome";
import { UserContext } from "../../providers/UserContext";

export const SearchHome = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [ click, setClick] = useState('')

  const {searchValue,  setSearchValue } = useContext(UserContext)
  
  !browserSupportsSpeechRecognition ? alert(`Busca por audio desabilitado`) : null;
  
  const searchResult = () => {
    transcript ? setSearchValue(transcript) : setSearchValue(click)
  }
  
  return (
    <SearchHomePageStyled>
      <ImgStyle src={!listening ? "src/assets/mundo 1.png" : "https://www.upshow.tv/wp-content/uploads/2022/08/Waveform.gif " } alt="" />
      {
        listening 
        ? <input placeholder="Pesquise aqui" type="text" value={transcript} /> 
        : <input placeholder="Pesquise aqui" type="text" onChange={(event)=> setClick(event.target.value)}/> 
      }
      <DivStyle>
        {
          !listening 
          ? <ButtonToRecord toglle={SpeechRecognition.startListening} />
          : <ButtonToReco toglle={SpeechRecognition.stopListening} />
        }
        <ButtonToSearch toglle={searchResult} />
      </DivStyle>
      {/* {searchResults.map((result) =>(
        <MainHome key={result} data={result}/>
      ))} */}
    </SearchHomePageStyled>
  );
};


