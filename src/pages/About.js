import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/pavesilogotipo.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    text-align: justify;
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Caio Pavesi</span>
              </p>
              <h2 className="about__heading">A Engineering Student</h2>
              <div className="about__info">
                <PText>
                  Based in Brazil, actively participating inside the automotive
                  sector for the last 4 years and developing student sized
                  projects. I am moved by results, passion, and smart/hard work.
                  <br />
                  <br />
                  Binge-watching formula one stuff for a couple of years, I
                  developed a passion for well-designed products matched with
                  quality, high performance, and reliability. I do not only like
                  cars, but architecture, art, photography/cinema, and
                  well-designed products are in my list too.
                  <br />
                  <br />
                  With a creative way of thinking and always prioritizing
                  quality and teamwork I developed many projects and helped
                  improve many processes in different businesses areas down in
                  Joinville. With big companies such as Schultz S.A. and small
                  business like ICAP.
                  <br />
                  <br />
                  Currently i am open for business/workign part time as a
                  intern. Below you can see my Curriculum and in the contact
                  section we can start an e-mail conversation, or you can call
                  whenever you fell it is a great time.
                </PText>
              </div>
              <Button btnText="See my CV" btnLink="Curriculum" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="UDESC"
                items={['BaEng. Production Engineering']}
              />
              <AboutInfoItem
                title="SENAI"
                items={['AA. Automotive Production']}
              />
              <AboutInfoItem
                title="SENAI"
                items={['AA. Automotive Mainetenance']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Abilities</h1>

              <AboutInfoItem
                title="Technology"
                items={['Ms Office', 'Google Workspace', 'Python A1']}
              />
              <AboutInfoItem
                title="Hard Skills"
                items={['ISO/TS 16949', 'Project Management', 'Lean']}
              />
              <AboutInfoItem
                title="Soft Skills"
                items={['Team Work', 'Leadership', 'Comunication']}
              />
              <AboutInfoItem
                title="Languages"
                items={['Portuguese C2', 'English C1', 'Italian A1']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2022"
                items={['Well... you can Hire Me!']}
              />
              <AboutInfoItem
                title="2021-2021"
                items={['Logistics Person at BMW Dealership']}
              />
              <AboutInfoItem
                title="2020-2021"
                items={['Apprentice at BMW Group Brasil']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
