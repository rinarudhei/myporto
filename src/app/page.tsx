import { Button } from '@/components/ui/button';
import { Navbar } from './partials/navbar';
import { Header } from './partials/header';
import ProfileDescription from './partials/profileDescription';
import { Achievements } from './partials/achivements';
import { EmploymentStatus } from './partials/employmentStatus';
import { Hero } from './partials/hero';

export default function Home() {
  return (
    <div>
      <Header>
        <Navbar />
        <ProfileDescription />
        <Achievements />
        <EmploymentStatus />
        <Hero />
      </Header>
    </div>
  );
}
