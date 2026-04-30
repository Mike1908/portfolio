import { cookies } from 'next/headers';

import { createSupabaseServerClient } from './supabase';

export async function getSession() {
  const supabase = createSupabaseServerClient();

  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('sb-access-token')?.value;

    if (!accessToken) {
      return null;
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return null;
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    if (user.email !== adminEmail) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}

export async function requireAuth() {
  const user = await getSession();

  if (!user) {
    throw new Error('Unauthorized');
  }

  return user;
}
