import React, { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { BsFillVolumeDownFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './modal';
import {
  selectFlagFromInputFoundSlice,
  setIsFound,
} from '../redux/slices/inputFoundSlice';
import { selectOptionsBasket } from '../redux/slices/optionsBasketSlice';

const VoiceBar = React.memo((props) => {
  const flags = useSelector(selectFlagFromInputFoundSlice);
  const dispatch = useDispatch();
  const options = useSelector(selectOptionsBasket);
  const [placeHolder, setPlaceHolder] = useState('');
  const [foundSubstring, setFoundSubstring] = useState('');

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  //toggle voice icon to indicate recording
  function renderIcon() {
    if (listening) {
      return (
        <div class="icon-wrapper absolute right-2 md:right-20">
          <BsFillVolumeDownFill class="mt-2" size={32} />
        </div>
      );
    } else {
      return null;
    }
  }

  //when we click Close button on modal
  function closeModal() {
    var flagsPayload = { isFound: false, isOpen: false };
    dispatch(setIsFound(flagsPayload));
  }

  if (!listening) {
    if (placeHolder !== transcript) {
      setPlaceHolder(transcript);
      for (let i = 0; i < options.items.length; i++) {
        if (transcript.includes(options.items[i].value)) {
          setFoundSubstring(options.items[i].value);
          // console.log('we have a match: ', foundSubstring);
          var flagsPayload = { isFound: true, isOpen: true };
          if (flags !== flagsPayload) {
            dispatch(setIsFound(flagsPayload));
            resetTranscript();
          }
        }
      }
    }
  }
  console.log('transcript:', transcript);
  console.log('flags: ', flags);

  return (
    <div class="d-flex justify-content-center text-white">
      <div class="inline-block relative w-75 top-1 right-1">
        <input
          type="text"
          placeholder={listening ? transcript : placeHolder}
          class="w-full mt-2 px-4 py-2 mb-3 border rounded-lg text-gray-700 focus:outline-none focus:border-red-400"
        />
      </div>
      <div class="mt-2.5">
        <button
          id="start"
          type="button"
          class="btn btn-primary m-1"
          onClick={SpeechRecognition.startListening}
        >
          Start
        </button>
        <button
          id="stop"
          type="button"
          class="btn btn-danger m-1"
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </button>
      </div>
      {renderIcon()}
      <Modal open={flags.isOpen} onClose={closeModal}>
        <div class="">Yes, we have {foundSubstring}</div>
      </Modal>
    </div>
  );
});

export default VoiceBar;
