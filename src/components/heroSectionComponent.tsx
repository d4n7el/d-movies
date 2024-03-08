export const HeroSectionComponent = () => {
  return (
    <div
      className=' relative h-[550px] bg-cover bg-center lg:bg-top'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg')`,
      }}
    >
      <div className='absolute h-full w-screen gradient-top-bottom'></div>
    </div>
  );
};
