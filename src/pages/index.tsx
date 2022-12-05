import { useRouter } from 'next/router';

import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main>
      <img
        src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
        alt="Nextjs starter banner"
      />
    </Main>
  );
};

export default Index;
