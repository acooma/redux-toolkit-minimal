import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItemsFromStickySlice, setStickyFlag } from '../redux/slices/stickySlice';

function StickyHeader() {
  const [scrollPos, setScrollPos] = useState('');
  const stickyFlag = useSelector(selectItemsFromStickySlice);
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

    const scrolled = winScroll / height;

    setScrollPos(scrolled);

    // console.log('winScroll', winScroll);
    // console.log('height', height);
    // console.log('scrolled', scrolled);
  }

  // console.log(stickyFlag);
  if (scrollPos > 0.06) {
    dispatch(setStickyFlag(true));
    return (
      <div class="my-sticky-header-sticky">
        <text>HELLO</text>
      </div>
    );
  } else {
    dispatch(setStickyFlag(false));
    return (
      <div class="my-sticky-header">
        <text>HELLO</text>
      </div>
    );
}
}

export default StickyHeader;
