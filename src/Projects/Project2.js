import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import PText from '../components/PText';

const ProjectStyle = styled.div`
  padding: 10rem 0 5rem 0;

  .resp_container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    margin: 4rem;
  }
  .resp_iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .project__info {
    margin: 4rem 10rem 4rem 10rem;
    text-align: justify;
    .para {
      max-width: 100%;
    }
  }
  .project__description {
    text-align: center;
    .para {
      max-width: 100%;
    }
  }
`;

export default function Video() {
  return (
    <>
      <ProjectStyle>
        <SectionTitle
          subheading="Automotive"
          heading="ACCESSIBLE KART"
          className="resp__title"
        />
        <div className="resp_container">
          <iframe
            className="resp_iframe"
            title="Video"
            src="https://www.youtube.com/embed/zhl-Cs1-sG4"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className="project__info">
          <br />
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            molestie mi eu urna iaculis, vel consequat magna consectetur.
            Vestibulum facilisis laoreet massa, sed fringilla mi faucibus quis.
            Quisque aliquet in enim eget tristique. Sed maximus ex in justo
            pulvinar congue. Nunc vestibulum nibh id imperdiet tincidunt. Duis
            tristique mi et sapien lacinia, eu fermentum neque volutpat.
            Vestibulum interdum sapien ac metus ultricies vestibulum.
            Pellentesque bibendum elit vitae dui vestibulum ultricies.
          </PText>
          <br />
        </div>
      </ProjectStyle>
    </>
  );
}
