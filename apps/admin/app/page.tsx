import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Layout from '../src/layout';
import { redirect } from 'next/navigation';

export default async function OverviewPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  {console.log("user",user)}

  return (
    <Layout title='Overview'>
      <div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4">

          <h2>{user.email}</h2>
        </div>
      </div>
    </Layout>
  );
}