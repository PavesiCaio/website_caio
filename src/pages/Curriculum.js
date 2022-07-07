import React from 'react';
import styled from 'styled-components';

const Adapt = styled.div`
  .resp_container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }
  .resp_iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function Curriculum() {
  return (
    <>
      <Adapt>
        <br />
        <br />
        <br />
        <br />
        <div className="resp_container">
          <iframe
            className="resp_iframe"
            title="Curriculum"
            src="https://drive.google.com/file/d/1DeR2e42bwk42lJXBaheTuAegIrvc26wK/preview"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Adapt>
    </>
  );
}
