import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import {
  HeaderContainer,
  RowContainer,
  SponsorWrapper,
} from '../../styles/sponsors/styles';
import { Organization } from '../../components/types/Organization';
import { Gold, Organisers, Platinum, Silver } from '../../data/organization';

export default function Sponsor() {
  function organizationItem(organization: Organization) {
    return (
      <a
        href={organization.url}
        target="_blank"
        rel="noreferrer"
        key={organization.name}
        className={`${
          organization.name === 'Tokka Labs' ? 'bg-[#0C1747]' : 'bg-white'
        } flex h-24 w-fit items-center justify-center rounded-lg px-4 py-2 shadow-lg`}
      >
        <Image
          className="scale-75"
          src={organization.logoSrc}
          alt={organization.name}
          height={organization.logoHeight}
          width={organization.logoWidth}
        />
      </a>
    );
  }
  function organizationRow(organizations: Organization[], index: number) {
    const row = organizations.map((organization) =>
      organizationItem(organization)
    );

    return (
      <RowContainer spacing="34" key={index}>
        {row}
      </RowContainer>
    );
  }
  const rowSize = useBreakpointValue({ base: 2, sm: 1, md: 2, lg: 2 });

  function organizationSection(
    organizations: Organization[],
    rowLength: number
  ) {
    const result = [];

    for (let i = 0; i < organizations.length; i += rowLength) {
      result.push(organizations.slice(i, i + rowLength));
    }

    return (
      <div className="flex flex-col gap-6">
        {result.map((row, index) => organizationRow(row, index))}
      </div>
    );
  }

  return (
    <SponsorWrapper overflow="hidden">
      <HeaderContainer>Sponsors</HeaderContainer>

      <HeaderContainer fontWeight="normal">Organized By</HeaderContainer>
      {organizationSection(Organisers, rowSize || 2)}

      <HeaderContainer fontWeight="normal">Platinum</HeaderContainer>
      {organizationSection(Platinum, rowSize || 2)}

      <HeaderContainer fontWeight="normal">Gold</HeaderContainer>
      {organizationSection(Gold, rowSize || 2)}

      <HeaderContainer fontWeight="normal">Silver</HeaderContainer>
      {organizationSection(Silver, rowSize || 2)}
    </SponsorWrapper>
  );
}
