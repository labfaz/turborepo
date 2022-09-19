import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { StaticRouter } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras';
// import { ErrorMessage } from '@hookform/error-message';
// import { zodResolver } from '@hookform/resolvers/zod';
// eslint-disable-next-line @cspell/spellchecker
// import { clsx } from 'clsx';
import GlobalContext from 'Context';
import { ShowRoutes } from 'FeatureFlags';
import GlobalStyles from 'GlobalStyles';
// import useGoogleAnalytics from 'Hooks/useInitializeGA';
import type { NextPage } from 'next';
import Head from 'next/head';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Construction from 'Pages/Construction';
import Routes from 'Routes';
// import { debug } from 'Utils/debugger';
// import * as z from 'zod';

// import { Button } from '@labfaz/core';
// import { trpc } from '@root/utils/trpc';

// const schema = z.object({
//   name: z.string().min(1, { message: 'Required' }),
//   age: z.number().min(10),
// });

// function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schema),
//     criteriaMode: 'all',
//   });

//   return (
//     /* eslint-disable-next-line no-console */
//     <form onSubmit={handleSubmit((d) => debug('Pages Index', d))}>
//       <input
//         aria-invalid={errors.name ? 'true' : 'false'}
//         {...register('name')}
//       />
//       <ErrorMessage errors={errors} name="name" />
//       <input
//         type="number"
//         aria-invalid={errors.age ? 'true' : 'false'}
//         {...register('age', { valueAsNumber: true })}
//       />
//       <ErrorMessage errors={errors} name="age" />
//       <input type="submit" />
//     </form>
//   );
// }

// type TechnologyCardProps = {
//   name: string;
//   description: string;
//   documentation: string;
// };

// eslint-disable-next-line @cspell/spellchecker
// const mainCN = clsx(`
//   container
//   mx-auto
//   flex
//   h-screen
//   flex-col
//   items-center
//   justify-center
//   p-4
// `);

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted)
    return (
      <>
        <Head>
          <title>Labfaz</title>
          <meta
            name="description"
            content="Laboratório dos saberes e fazeres da economia criativa"
          />
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <VLibras />
        <GlobalStyles />
        <GlobalContext>
          {ShowRoutes() ? (
            <Routes />
          ) : (
            <StaticRouter>
              <Construction />
            </StaticRouter>
          )}
        </GlobalContext>
      </>
    );
  else return <></>;
};

// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <a
//         className="mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };

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
