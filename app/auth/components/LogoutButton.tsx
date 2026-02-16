'use client';

import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { logout } from '../api/actions';

export function LogoutButton() {

  const [state, action, pending] = useActionState(logout, undefined);

  return (
    <>
      <form action={action}>
        <Button type='submit' disabled={pending} className='cursor-pointer'>
          {pending && <>
              <Spinner data-icon="inline-start" /> 
              <span>Ве одјавуваме...</span>
            </> }
            {!pending && <span>Одјави се</span>} 
        </Button>
      </form>
    </>
  );
}