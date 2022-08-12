/* eslint-disable i18next/no-literal-string */
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Checkbox from '@radix-ui/react-checkbox';
import cntl from 'cntl';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as z from 'zod';

import { Button } from '@labfaz/core';
import { trpc } from '@root/utils/trpc';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  age: z.number().min(10),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    criteriaMode: 'all',
  });

  return (
    /* eslint-disable-next-line no-console */
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('name')}
      />
      <ErrorMessage errors={errors} name="name" />
      <input
        type="number"
        aria-invalid={errors.age ? 'true' : 'false'}
        {...register('age', { valueAsNumber: true })}
      />
      <ErrorMessage errors={errors} name="age" />
      <input type="submit" />
    </form>
  );
}

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const mainCN = cntl`
  container
  mx-auto
  flex
  flex-col
  items-center
  justify-center
  h-screen
  p-4
`;

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'tRPC' }]);
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('header.title')}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={mainCN}>
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
          <TechnologyCard
            name="tRPC"
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
          />
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
        <Button>@labfaz/core/Button</Button>
        <Form />
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

export const getStaticProps = async ({
  locale,
}: {
  locale: string | undefined;
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? '')),
  },
});

export default Home;
