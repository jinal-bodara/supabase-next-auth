import { ReactNode } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { ToastContainer } from 'react-toastify';
import AuthProvider from 'apps/admin/src/helpers/AuthProvider';

import './global.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }:{
  children:ReactNode
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
            <AuthProvider accessToken={accessToken}>{children}
            </AuthProvider>
      </body>
    </html>
  );
}
