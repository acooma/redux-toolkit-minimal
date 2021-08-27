import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { BsFillVolumeDownFill } from 'react-icons/bs';

const VoiceBar = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

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

  return (
    // <div class="d-flex p-3 justify-content-start text-white text-xl">
    //   <button
    //     type="button"
    //     class="btn btn-primary m-1"
    //     onClick={SpeechRecognition.startListening}
    //   >
    //     Start
    //   </button>
    //   <button
    //     type="button"
    //     class="btn btn-danger m-1"
    //     onClick={SpeechRecognition.stopListening}
    //   >
    //     Stop
    //   </button>
    //   <button type="button" class="btn btn-success m-1" onClick={resetTranscript}>
    //     Reset
    //   </button>
    //   {listening ? renderIcon() : renderIcon()}
    //   <div class="input-group ml-2 mb-2 my-input">
    //     <div class="input-group-prepend">
    //       <span class="input-group-text" id="inputGroup-sizing-default">
    //         Transcript
    //       </span>
    //     </div>
    //     <input
    //       type="text"
    //       class="form-control"
    //       aria-label="Default"
    //       aria-describedby="inputGroup-sizing-default"
    //       placeholder={transcript}
    //     />
    //   </div>
    // </div>
    <div class="d-flex justify-content-center text-white">
      <div class="inline-block relative w-75 top-1 right-1">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black">
          <option>{transcript}</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
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

      {listening ? renderIcon() : renderIcon()}
    </div>
  );
};
export default VoiceBar;
