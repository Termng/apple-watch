import React from 'react';

import { Footer, Hero, HeroB,PopularProduct, Services, Subscribe, SuperQuality, CustomerReviews, SpecialOffer} from './sections'; 

import Nav from './components/nav';

const App = () => {
  return (
    <main className='relative'>
     <Nav />
      
      <section className=' xl:padding-l wide:padding-r padding-b'>
        <HeroB/>
      </section>
      <section>
        <Hero />
      </section>

      <section className="padding">
        <PopularProduct />
      </section>

      

     
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App