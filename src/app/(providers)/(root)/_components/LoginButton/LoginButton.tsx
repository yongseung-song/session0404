'use client';

import initialProfile from '@/data/profile.json';
import { ProfileState, setProfile } from '@/redux/reducers/profile.reducer';
import { useDispatch, useSelector } from 'react-redux';

function LoginButton() {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile as ProfileState);
  const handleClickLogin = () => {
    dispatch(setProfile(initialProfile));
  };

  if (profile.id) return null;

  return (
    <button
      onClick={handleClickLogin}
      className="border bg-black text-white px-4 py-1 text-sm font-bold rounded"
    >
      로그인
    </button>
  );
}

export default LoginButton;
