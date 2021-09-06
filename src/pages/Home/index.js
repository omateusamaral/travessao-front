import React from 'react';

export function Home() {
  return (
    <main className='mx-5'>
      <div className='flex flex-col mb-28'>
        <h1 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
          Noticias Recentes
        </h1>
        <hr className='border-b-1 w-24 self-center border-black' />
      </div>
      <section className='md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit'>
        <div className='break-inside p-8 my-6 bg-gray-100 rounded-lg'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-1.jpg' />
          <p>
            Não é possível esperar a criatividade chegar. Por isso, este
            infográfico vai te ajudar a conceber ideias com mais naturalidade.
          </p>
        </div>
        <div className='break-inside p-8 my-6 bg-gray-100 rounded-lg'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-2.jpg' />
        </div>
        <div className='break-inside p-8 my-6 bg-gray-100 rounded-lg'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-3.jpg' />
          <p>
            Não é possível esperar a criatividade chegar. Por isso, este
            infográfico vai te ajudar a conceber ideias com mais naturalidade.
          </p>
        </div>
        <div className='break-inside p-8 my-6 bg-gray-100 rounded-lg'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-4.jpg' />
        </div>
        <div className='break-inside p-8 my-6 bg-gray-100 rounded-lg'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-5.jpg' />
        </div>
        <div className='break-inside p-8 my-6 bg-gray-100 rounded-lg'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-6.jpg' />
          <p>
            Não é possível esperar a criatividade chegar. Por isso, este
            infográfico vai te ajudar a conceber ideias com mais naturalidade.
          </p>
        </div>
        <div className='break-inside p-8 my-6 bg-gray-100 rounded-lg'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-1.jpg' />
          <p>
            Não é possível esperar a criatividade chegar. Por isso, este
            infográfico vai te ajudar a conceber ideias com mais naturalidade.
          </p>
        </div>
      </section>
    </main>
  );
}
