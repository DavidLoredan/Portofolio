import React from 'react';
import SAboutMe from './style';

function AboutMe() {
  return (
    <SAboutMe>
      <div>
        <img className="headerStyle" src="/image/bg.jpg" alt="logo" />
      </div>
      <section className="descriptionStyle">
        <p className="textImage">
          Loredan DAVID Développeur web, spécialisé dans le JavaScript et les
          frameworks React /vue.Js, parfaitement à l’aise avec le HTML / CSS /
          JavaScript et le développement d’application mobile React Native.
          Passionné du monde numérique, autodidacte et toujours à l&apos;affût
          de l’actu web. J’aime lire, me tenir informé des dernières nouveautés
          mobiles / Android.
        </p>
      </section>
    </SAboutMe>
  );
}
export default AboutMe;
