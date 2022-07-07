import React from 'react';
import {
  MdOutlineChat,
  MdOutlineManageAccounts,
  MdWaterfallChart,
} from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdOutlineChat />}
            title="Consulting"
            desc="Feel your business need improvements? We can do it."
          />
          <ServicesSectionItem
            icon={<MdOutlineManageAccounts />}
            title="Engineering"
            desc="Searching for a hard/smart working intern? Contact me."
          />
          <ServicesSectionItem
            icon={<MdWaterfallChart />}
            title="Projects"
            desc="Have an idea in mind? Let's get a coffee and talk."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
