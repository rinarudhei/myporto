import { Button } from '@/components/ui/button';
import { Navbar } from './partials/navbar';
import { Header } from './partials/header';
import ProfileDescription from './partials/profileDescription';

export default function Home() {
  return (
    <div>
      <Header>
        <Navbar />
        <ProfileDescription />
      </Header>
    </div>
  );
}
