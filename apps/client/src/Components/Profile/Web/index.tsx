/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import { FaCheckCircle, FaCheckSquare } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { IoMdCloudDownload } from 'react-icons/io';
import { useHistory } from 'react-router';
import { User } from 'Context/LoggedUserToken';
import { ShowEditProfile } from 'FeatureFlags';
import Image from 'next/image';
import { getUserName } from 'Utils/userUtils';

import idiom_icon from '../idiomIcon.svg';
import isVerified from '../isVerified.svg';
import { SocialMediaLinks } from '../SocialMediaLink';

import {
  Aside,
  AsideHeader,
  ButtonContainer,
  Container,
  Content,
  ContentHeader,
  ContentText,
  ContentTitle,
  NickName,
  ProfileContentContainer,
  SocialMedias,
  // UserName,
  UserLocation,
  UserPhoto,
  UserVerified,
} from './style';

interface ProfileProps {
  data: User;
  personalProfilePage: boolean;
}

const currentYear = new Date().getFullYear();

const AsideContent: FC<ProfileProps> = ({ data, personalProfilePage }) => {
  const history = useHistory();

  const handleRedirectToEditProfile = () => {
    history.push('/edit-profile');
  };
  return (
    <Aside>
      <AsideHeader>
        <UserPhoto>
          {data.artist.photo_url && (
            <Image
              layout="fill"
              src={data.artist.photo_url}
              alt="User avatar"
            />
          )}
        </UserPhoto>
        <NickName level={1}>{getUserName(data)}</NickName>
        {/* <UserName level={2}>{data.artist?.name}</UserName> */}
        {data.isVerified && (
          <UserVerified>
            Verificado Backstage
            <Image layout="fill" src={isVerified} alt="isVerify" />
          </UserVerified>
        )}
      </AsideHeader>

      <UserLocation>
        {data.artist.address.city}, {data.artist.address.state}
      </UserLocation>

      <hr />

      <SocialMedias>
        <SocialMediaLinks user={data} ContainerElement="li" />
      </SocialMedias>

      <hr />

      <ButtonContainer>
        {data.artist.curriculum && (
          <a className="downloadFile" href={data.artist.curriculum} download>
            <IoMdCloudDownload /> BAIXAR CV
          </a>
        )}

        {data.artist.medicalReport && (
          <a className="downloadFile" href={data.artist.medicalReport} download>
            <IoMdCloudDownload /> BAIXAR LAUDO
          </a>
        )}

        {ShowEditProfile() && personalProfilePage && (
          <button
            type="button"
            className="editProfile"
            onClick={() => handleRedirectToEditProfile()}
          >
            <GoGear /> EDITAR PERFIL
          </button>
        )}
      </ButtonContainer>

      <hr className="sideDivider" />
    </Aside>
  );
};

const Web: FC<ProfileProps> = ({ data, personalProfilePage }) => {
  return (
    <Container>
      <ProfileContentContainer>
        {/* Função menor foi separada para organização. */}
        <AsideContent data={data} personalProfilePage={personalProfilePage} />

        <Content>
          <ContentHeader>
            <a href="#Sobre">Sobre</a>
            <a href="#Formacao">Formação</a>
            <a href="#RecursosDeAcessibilidade">Recursos de acessibilidade</a>
            <a href="#Certificacoes">Certificações</a>
            <a href="#Contato">Contato</a>
          </ContentHeader>

          <div className="profileInformation">
            <ContentTitle level={1}>Sobre</ContentTitle>

            <div>
              <ContentText>
                {data.artist.technical.area[0]?.describe}
              </ContentText>
              <ul>
                <li>{data.artist.technical.area[0]?.name.toUpperCase()}</li>
                <li>
                  EXPERIENCIA :
                  {` ${
                    currentYear -
                    parseInt(
                      data.artist.technical.area[0]?.started_year as string
                    )
                  } `}
                  ANOS
                </li>
                <li>
                  {data.artist.technical.area[0]?.technical_formation.toUpperCase()}
                </li>

                {data.artist.technical.cnpj_type !== 'Nenhum' && (
                  <li>{data.artist.technical.cnpj_type.toUpperCase()}</li>
                )}
              </ul>
            </div>
          </div>
          {data.artist.accessibility_resources_description && (
            <div className="profileInformation" id="RecursosDeAcessibilidade">
              <ContentTitle level={1}>Recursos De Acessibilidade</ContentTitle>

              <div>
                <ContentText>
                  {data.artist.accessibility_resources_description}
                </ContentText>
              </div>
            </div>
          )}

          <div className="profileInformation" id="Formacao">
            <ContentTitle level={1}>Formação</ContentTitle>

            <div>
              <span>
                <FaCheckCircle />
                {data.artist.technical.formation !== 'não tem' &&
                  data.artist.technical.formation}
              </span>

              <ul>
                {data.artist.technical.idiom &&
                  data.artist.technical.idiom.map((idiom, index) => (
                    <li key={index}>
                      <Image layout="fill" src={idiom_icon} alt={idiom.name} />{' '}
                      {idiom.name}
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

            <div className="socialContacts">
              <SocialMediaLinks user={data} ContainerElement="li" />
            </div>
          </div>
        </Content>
      </ProfileContentContainer>
    </Container>
  );
};

export default Web;
