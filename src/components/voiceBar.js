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

  if (transcript.includes(options.items[0].value)) {
    console.log('we have a match: ', options.items[0].value);
    var flagsPayload = { isFound: true, isOpen: true };
    if (flags !== flagsPayload) {
      dispatch(setIsFound(flagsPayload));
      setPlaceHolder(transcript);
      resetTranscript();
    }
  }

  console.log('transcript:', transcript);
  console.log('flags: ', flags);
  return (
    <div class="d-flex justify-content-center text-white">
      <div class="inline-block relative w-75 top-1 right-1">
        <input
          type="text"
          placeholder={placeHolder}
          class="w-full mt-2 px-4 py-2 mb-3 border rounded-lg text-gray-700 focus:outline-none focus:border-red-400"
        />
      </div>
      <div class="mt-2.5">
        <button
          type="button"
          class="btn btn-primary m-1"
          onClick={SpeechRecognition.startListening}
        >
          Start
        </button>
        <button
          type="button"
          class="btn btn-danger m-1"
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </button>
      </div>
      {renderIcon()}
      <Modal open={flags.isOpen} onClose={closeModal}>
        <div class="">Yes, we have {options.items[0].value}</div>
      </Modal>
    </div>
  );
});

export default VoiceBar;