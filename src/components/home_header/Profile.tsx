'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import IconProfile from 'public/icon/profile.svg';

const ProfileBottomSheet = dynamic(() => import('./ProfileBottomSheet'), { ssr: false });

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <IconProfile />
      </button>
      {open && <ProfileBottomSheet closeSheet={() => setOpen(false)} />}
    </>
  );
};
export default Profile;
