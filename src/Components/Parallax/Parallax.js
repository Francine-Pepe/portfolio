import React from 'react';

export default function Parallax() {
    return (
    <>
      <Parallax translateX={['-100px', '200px']}>
    <div className="my-thing" />
  </Parallax>
    </>
    );
  }