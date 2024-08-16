
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { InitDataPage } from '../InitDataPage/InitDataPage';



export const IndexPage: FC = () => {
  return (
    <div>
      <h1 className='text-white text-6xl font-black'>Hello</h1>
      <Link to={'https://google.com'} className='text-white text-2xl'>More data about your profile is <span className='underline'>here</span></Link>

      <InitDataPage />
    </div>
  );
};
