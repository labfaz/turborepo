/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { storiesOf } from '@storybook/react';
import type { User } from 'Context/LoggedUserToken';

import SignUpPage from './Display';

const EmptyUser: User = {
  id: '',
  email: '',
  isVerified: false,
  banned: false,
  active: false,
  artist: {
    name: '',
    artistic_name: '',
    social_name: '',
    show_name: '',
    birthday: new Date(),
    photo_url: '',
    curriculum: '',
    cpf: '',
    rg: '',
    sexual_orientation: '',
    gender: '',
    race: '',
    expedition_department: '',
    address: {
      cep: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: 0,
      residency: '',
      state: '',
    },
    contact: {
      facebook: '',
      instagram: '',
      linkedin: '',
      tiktok: '',
      twitter: '',
      whatsapp: '',
      youtube: '',
    },
    technical: {
      ceac: '',
      cnpj: '',
      cnpj_type: '',
      drt: '',
      is_ceac: false,
      is_cnpj: false,
      is_drt: false,
      name_enterprise: '',
      profession: '',
      formation: '',
      idiom: [],
      area: [],
    },
    medicalReport: '',
    accessibility_resources_description: '',
  },
  updated_at: new Date(),
  created_at: new Date(),
  deficiencies: [],
};

storiesOf('Pages/SignUp', module)
  .addParameters({ component: SignUpPage })
  .add('show SignUpPage', () => (
    <SignUpPage button_type="button" data={EmptyUser} token="" />
  ));
