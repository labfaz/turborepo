/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import { FaCheckCircle, FaCheckSquare } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { IoMdCloudDownload } from 'react-icons/io';
import { MdContactPhone } from 'react-icons/md';
import { useHistory } from 'react-router';
import { User } from 'Context/LoggedUserToken';
import { ShowEditProfile } from 'FeatureFlags';
import Image from 'next/image';
import { getUserName } from 'Utils/userUtils';

import idiom_icon from '../idiomIcon.svg';
import isVerified from '../isVerified.svg';
import { SocialMediaLinks } from '../SocialMediaLink';

import {
  Container,
  Content,
  ContentText,
  ContentTitle,
  Header,
  NickName,
  ProfileContentContainer,
  UserBasicInformation,
  UserInformation,
  // UserName,
  UserLocation,
  UserPhoto,
  UserPhotoContainer,
  UserTechnicalInformation,
  UserVerified,
} from './style';

interface ProfileProps {
  data: User;
  PersonalProfilePage?: boolean;
}

const currentYear = new Date().getFullYear();

const UserInfo: FC<ProfileProps> = ({ data }) => {
  return (
    <UserInformation>
      <div className="Header">
        <a href="#Sobre">Sobre</a>
        {data.artist.accessibility_resources_description && (
          <a href="#RecursosDeAcessibilidade">Recursos de acessibilidade</a>
        )}
        <a href="#Formacao">Formação</a>
        <a href="#Certificacoes">Certificações</a>

        <a href="#Contato">Contato</a>
      </div>

      <div className="profileInformation" id="Sobre">
        <ContentTitle level={1}>Sobre</ContentTitle>

        <div>
          <ContentText>{data.artist.technical.area[0]?.describe}</ContentText>
        </div>
      </div>

      {data.artist.accessibility_resources_description && (
        <div className="profileInformation" id="RecursosDeAcessibilidade">
          <ContentTitle level={1}>Recursos de acessibilidade</ContentTitle>

          <ContentText>
            {data.artist.accessibility_resources_description}
          </ContentText>
        </div>
      )}

      <div className="profileInformation" id="Formacao">
        <ContentTitle level={1}>Formação</ContentTitle>

        <div>
          <span>
            <FaCheckCircle />
            {data.artist.technical.formation}
          </span>
          <ul>
            {data.artist.technical.idiom &&
              data.artist.technical.idiom.map((idiom, index) => (
                <li key={index}>
                  <Image layout="fill" src={idiom_icon} alt="" />{' '}
                  {idiom.name.toUpperCase()}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="profileInformation" id="Certificacoes">
        <ContentTitle level={1}>Certificações</ContentTitle>

        <div>
          {data.artist.technical.area[0]?.certificate &&
            data.artist.technical.area[0]?.certificate.map(
              (certificate, index) => (
                <span key={index}>
                  <FaCheckSquare />
                  {certificate.name}
                </span>
              )
            )}
          <ul>
            {data.artist.technical.is_ceac && <li>CEAC</li>}
            {data.artist.technical.is_drt && <li>DRT</li>}
            {data.artist.technical.is_cnpj && <li>CNPJ</li>}
          </ul>
        </div>
      </div>

      <div className="profileInformation" id="Contato">
        <ContentTitle level={1}>Contato</ContentTitle>

        <div className="socialContainer">
          <div className="socialContacts">
            <SocialMediaLinks user={data} />
          </div>
        </div>
      </div>
    </UserInformation>
  );
};

const Mobile: FC<ProfileProps> = ({ data, PersonalProfilePage }) => {
  const history = useHistory();

  const handleRedirectToEditProfile = () => {
    history.push('/edit-profile');
  };

  return (
    <Container>
      <ProfileContentContainer>
        <Header>
          <UserPhotoContainer>
            <UserPhoto>
              {data.artist.photo_url && (
                <Image
                  layout="fill"
                  src={data.artist.photo_url}
                  alt="User avatar"
                />
              )}
            </UserPhoto>
          </UserPhotoContainer>
          {ShowEditProfile() && PersonalProfilePage && (
            <GoGear onClick={() => handleRedirectToEditProfile()} />
          )}
        </Header>
        <Content>
          <UserBasicInformation>
            <div className="container">
              <div>
                <NickName>{getUserName(data)}</NickName>
                {/* <UserName>{data.artist.name}</UserName> */}
                {data.isVerified && (
                  <UserVerified>
                    Verificado Backstage
                    <Image layout="fill" src={isVerified} alt="isVerify" />
                  </UserVerified>
                )}
              </div>
              <div className="downloadable">
                {data.artist.curriculum && (
                  <a
                    className="downloadFile"
                    href={data.artist.curriculum}
                    download
                  >
                    {/* <button className="downloadFile"> */}
                    <IoMdCloudDownload />
                    CV
                    {/* </button> */}
                  </a>
                )}

                {data.artist.medicalReport && (
                  <a
                    className="downloadFile"
                    href={data.artist.medicalReport}
                    download
                  >
                    {/* <button className="downloadFile"> */}
                    <IoMdCloudDownload />
                    Laudo
                    {/* </button> */}
                  </a>
                )}
              </div>
            </div>
            <div className="container">
              <div>
                <UserLocation>
                  {data.artist.address.city}, {data.artist.address.state}
                </UserLocation>
              </div>

              <MdContactPhone />
            </div>
          </UserBasicInformation>
          <UserTechnicalInformation>
            <ul>
              <li>{data.artist.technical.area[0]?.name.toUpperCase()}</li>
              <li>
                EXPERIENCIA:
                {currentYear -
                  parseInt(
                    data.artist.technical.area[0]?.started_year as string
                  )}
                ANOS
              </li>
              {data.artist.technical.cnpj_type !== 'Nenhum' && (
                <li>{data.artist.technical.cnpj_type.toUpperCase()}</li>
              )}

              <li>
                {data.artist.technical.area[0]?.technical_formation.toUpperCase()}
              </li>
            </ul>
          </UserTechnicalInformation>
          <UserInfo data={data} />
        </Content>
      </ProfileContentContainer>
    </Container>
  );
};

export default Mobile;
