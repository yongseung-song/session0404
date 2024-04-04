'use client';
import Page from '@/components/Page';
import { ProfileState } from '@/redux/reducers/profile.reducer';
import { useSelector } from 'react-redux';

function HomePage() {
  const profile = useSelector((state: any) => state.profile as ProfileState);
  return (
    <Page>
      {profile.id !== null && (
        <h2 className="text-3xl font-bold">
          {profile.nickname}님, 안녕하세요!
        </h2>
      )}
    </Page>
  );
}

export default HomePage;
