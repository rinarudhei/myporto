import { Navbar } from './partials/navbar';
import { Header } from './partials/header';
import ProfileDescription from './partials/profileDescription';
import { Achievements } from './partials/achivements';
import { EmploymentStatus } from './partials/employmentStatus';
import { Hero } from './partials/hero';
import { HighlightSkills } from './partials/highlightSkiils';
import { Main } from './partials/main';
import { MainDescription } from './partials/mainDescription';
import { MainTraits } from './partials/mainTraits';
import { MainSkills } from './partials/mainSkills';
import { MainBenefits } from './partials/mainBenefits';
import { MainPortofolio } from './partials/mainPortofolio';
import { Experiences } from './partials/expericences';
import { Testimonials } from './partials/testimonials';

export default function Home() {
  return (
    <div>
      <Header>
        <Navbar />
        <HighlightSkills />
        <ProfileDescription />
        <Achievements />
        <EmploymentStatus />
        <Hero />
      </Header>
      <Main>
        <MainDescription />
        <MainTraits />
        <MainSkills />
        <MainBenefits />
        <MainPortofolio />
        <Experiences />
        <Testimonials />
      </Main>
    </div>
  );
}
