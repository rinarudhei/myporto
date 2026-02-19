import { Button } from '@/components/ui/button';
import { Navbar } from './partials/navbar';
import { Header } from './partials/header';
import ProfileDescription from './partials/profileDescription';
import { Achievements } from './partials/achivements';

export default function Home() {
  return (
    <div>
      <Header>
        <Navbar />
        <ProfileDescription />
        <Achievements />
      </Header>
    </div>
  );
}
