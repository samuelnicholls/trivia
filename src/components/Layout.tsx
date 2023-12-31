import { FC } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export type LayoutProps = {
  children: JSX.Element;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Trivia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col py-8 lg:py-20 text-center bg-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
