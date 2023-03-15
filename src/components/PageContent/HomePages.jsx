import React from 'react';
import { About } from '../Home/About/About';
import { Branding } from '../Home/Branding';
import { Home } from '../Home/homes/Home';
import { Services } from '../Home/Services/Services';
import { Skill } from '../Home/Skill';
import { Blog } from '../Home/Blog/Blog';
import { Work } from '../Home/Work/Work';
import { Wrapper } from '../Home/Wrapper';
import { WrapperOne } from '../Home/WrapperOne';


export const HomePages = () => {
  return (
    <div>
      <Home />
      <Branding />
      <About />
      <Services />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
      <Blog />
      
    </div>
  )
}
