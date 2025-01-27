
import { Box, Card, CardActions, CardContent, CardMedia, Divider, Link, Typography } from '@mui/material';
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import './PropertyCard.css'
import agentImg from '../../../assets/images/default-user_1.png'

const PropertyCard = ({ property }) => {

    const { _id, photos, title, price, description, bedrooms, bathrooms, property_size, featured, status, address, agent } = property

    const cardStyle = {
        boxShadow: 'rgba(7, 152, 255, 0.09) 0px 3px 5px',
    }

    return (
        <Card className='property-card relative' sx={cardStyle}>
            {
                featured && <Typography zIndex={10} fontSize={14} component={'span'} className='absolute top-2 left-2 bg-[#69c17dd9] text-white px-[6px] rounded-sm'>
                    Featured
                </Typography>
            }

            <Box zIndex={10} className={'flex justify-end items-center gap-2 absolute top-2 right-2'}>
                {
                    status && <Typography fontSize={14} component={'span'} className='bg-[#0073e1d9] text-white px-[6px] rounded-sm capitalize'>
                        {status}
                    </Typography>
                }
            </Box>
            <Link href={`/properties/${_id}`} className='card-img'>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={photos[0]}
                />
            </Link>
            <CardContent sx={{ padding: '16px 16px 0' }}>
                <div className='flex items-center gap-1 mb-1'>
                    <FaMapMarkerAlt color='#5C727D' fontSize={13} />
                    <Typography component={'span'} className='flex justify-start items-center gap-1 text-black' variant='body2'>
                        {address.address}, {address.city}
                    </Typography>
                </div>
                <Link href={`/properties/${_id}`} underline='none' color={'black'}>
                    <Typography gutterBottom variant="h5" component="div" fontSize={22} fontWeight={500}>
                        {title}
                    </Typography>
                </Link>
                <Typography gutterBottom variant="h6" component="div" fontSize={16} fontWeight={500} color='main'>
                    $ {price.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.split(' ').slice(0, 15).join(' ')}...
                </Typography>
                <Box display={'flex'} justifyContent={'space-between'} component={'div'} className='mt-2'>
                    <Typography variant='body1' fontSize={14} component={'span'}>
                        Bedrooms: {bedrooms}
                    </Typography>
                    <Typography variant='body1' fontSize={14} component={'span'}>
                        Bathrooms: {bathrooms}
                    </Typography>
                    <Typography variant='body1' fontSize={14} component={'span'}>
                        Area: {property_size} ft<sup>2</sup>
                    </Typography>
                </Box>
                <Divider className='pt-4' />
            </CardContent>
            <CardActions style={{ padding: '0px', display: 'block' }}>
                <Box component={'div'} padding={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Link href={'#'} underline='none'>
                        <Box component={'div'} className='flex justify-start items-center gap-2'>
                            <img src={agentImg} alt='agent' width={30} height={30} className='rounded-full' />
                            <Typography variant='body2' component={'span'} fontSize={14} color={'black.main'} fontWeight={'medium'}>
                                {agent}
                            </Typography>
                        </Box>
                    </Link>

                    <Link href={`/properties/${_id}`}>
                        <button className='bg-[#0073e1] hover:bg-[var(--header-bg)] duration-300 text-xs py-2 px-3 text-white capitalize font-semibold cursor-pointer rounded-full'>
                            View Details
                        </button>
                    </Link>

                </Box>
            </CardActions>
        </Card>
    );
};

export default PropertyCard;