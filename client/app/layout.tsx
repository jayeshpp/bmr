import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthProvider';
import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bangalore Malayali Riders',
  description: 'Grasp life by the handlebars',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Layout>
            <main className='px-5'>
              <div className='container m-auto'>{children}</div>
            </main>
          </Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
