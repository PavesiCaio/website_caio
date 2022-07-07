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
          subheading="Aerospace"
          heading="FORMULA DRONE 2019"
          className="resp__title"
        />
        <div className="resp_container">
          <iframe
            className="resp_iframe"
            title="Video"
            src="https://www.youtube.com/embed/ARvBWkASgUQ"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="project__info">
          <br />
          <PText title="Objective">
            The 3 day competition, provided by
            <a
              href="https://saebrasil.org.br/programas-estudantis/formula-drone/"
              target="_blank"
              rel="noreferrer noopener"
            >
               <u>SAE BRASIl</u>
            </a>
            , among team’s from students of technical professional education of
            high level, guided by teachers of their institutions, having as
            technical interest an aircraft of rotary wings radio controlled,
            drone type, endorsed with systems/sensors to the fulfillment of
            certain tasks that constitute the technical challenge of the
            Competition, according to requirements detailed in the
            <a
              href="http://saebrasil.org.br/wp-content/uploads/2020/03/FD_2019-Regulamento-Rev02-30-03-2019.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
               <u>Competition Regulation</u>
            </a>
          </PText>
          <br />
          <PText title="Technical details">
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
          <br />
          <PText title="Results/Outcome">
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
