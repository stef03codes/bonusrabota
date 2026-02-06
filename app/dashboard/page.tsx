import { LogoutButton } from '@/app/components/LogoutButton';
import { cookies } from 'next/headers';

async function getProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get('xano_auth_token')?.value;

  const res = await fetch(`${process.env.XANO_BASE_URL}/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return res.json();
}

export default async function Dashboard() {
  const user = await getProfile();
  return (
    <>
      <h1>Welcome, {user.name ?? 'Guest'}</h1>
      <LogoutButton />
    </>
  );
}