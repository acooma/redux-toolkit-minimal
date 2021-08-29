import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStickyFlag } from '../redux/slices/stickySlice';
import VoiceBar from '../components/voiceBar';

const StickyHeader = (props) => {
  const [windScroll, setWindScroll] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  });

  function listenToScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // const scrolled = winScroll / height;

    setWindScroll(winScroll);

    // console.log('windScroll', windScroll);
    // console.log('height', height);
    // console.log('scrolled', scrolled);
  }

  if (windScroll >= 66) {
    dispatch(setStickyFlag(true));
    return (
      <div class="my-sticky-header-sticky">
        <VoiceBar />
      </div>
    );
  } else {
    dispatch(setStickyFlag(false));
    return (
      <div class="my-sticky-header">
        <VoiceBar />
      </div>
    );
  }
};

export default StickyHeader;
