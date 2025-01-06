import { Link } from '@mui/material';
import React from 'react';

const CityCard = ({ city }) => {
    return (
        <div className='flex items-center justify-start gap-4'>
            <div>
                <Link href={`/properties?city=${city?.name}`}>
                    <img src={city?.photo} className='h-[75px] w-[100px] rounded-md' />
                </Link>
            </div>
            <div>
                <Link color={'black.main'} fontWeight={'bold'} underline='none' href={`/properties?city=${city?.name}`} className='text-base transition-colors hover:text-[var(--btn-bg)]'>
                    <h4>{city?.name}</h4>
                </Link>
                <span className='font-light text-sm'>{city?.listings} listings</span>
            </div>
        </div>
    );
};

export default CityCard;