// import { Image } from 'astro:assets';
import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

import heroImage from '@/images/avatar.webp';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Stefan</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a <GradientText>Fullstack Web3 Developer</GradientText> based in
          the Netherlands.
        </>
      }
      avatar={
        <img
          className="h-[200px] w-[200px] rounded-full"
          src={heroImage.src}
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={''}
    />
  </Section>
);

export { Hero };
