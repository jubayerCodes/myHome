import React, { useEffect, useState } from 'react';
import { useGetPropertiesFilterOptionsQuery, useGetPropertiesQuery, useGetTotalPagesQuery } from '../../../Utilities/Redux/features/api/propertiesApi';
import PropertyCard from '../../shared/PropertyCard/PropertyCard';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './PropertiesList.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PropertiesList = (props) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState(() => props?.category || '')
    const [city, setCity] = useState(() => props?.city || '')
    const [sort, setSort] = useState(() => "newest_first")
    const [limit, setLimit] = useState(6)

    const { data: properties } = useGetPropertiesQuery({ page: currentPage, category: category, city: city, sort: sort, limit: limit, status: 'active' })

    const { data: filterOptions } = useGetPropertiesFilterOptionsQuery()

    const { data: totalPages } = useGetTotalPagesQuery({ category: category, city: city, limit: limit, status: 'active' })

    const pages = [...Array(totalPages?.pages).keys()]?.map(page => page + 1)

    return (
        <section className='section bg-[var(--secondary-bg)]'>

            <div className="my-container">

                <div className=" bg-white rounded flex justify-between items-center property-list-filter" style={{ boxShadow: '0 10px 31px 0 rgba(7,152,255,.09)' }}>
                    <Box display={'flex'} gap={1} padding={'10px'}>
                        <FormControl sx={{ minWidth: 50 }}>
                            <Select
                                size='small'
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                    setCurrentPage(1)
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    textTransform: 'capitalize'
                                }}
                            >
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value="">
                                    Category
                                </MenuItem>
                                {
                                    filterOptions?.categories?.map((cat, idx) => <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} key={idx} value={cat}>{cat}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 50 }}>
                            <Select
                                size='small'
                                value={city}
                                onChange={(e) => {
                                    setCity(e.target.value)
                                    setCurrentPage(1)
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    textTransform: 'capitalize'
                                }}
                            >
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value="">
                                    City
                                </MenuItem>
                                {
                                    filterOptions?.cities?.map((city, idx) => <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} key={idx} value={city}>{city}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 50 }}>
                            <Select
                                size='small'
                                value={sort}
                                onChange={(e) => {
                                    setSort(e.target.value)
                                    setCurrentPage(1)
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    textTransform: 'capitalize'
                                }}
                            >
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'newest_first'}>Newest First</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'oldest_first'}>Oldest First</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value="">
                                    Title
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'price_high_low'}>Price High to Low</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'price_low_high'}>Price Low to High</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'bedrooms_high_low'}>Bedrooms High to Low</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'bedrooms_low_high'}>Bedrooms Low to High</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'bathrooms_high_low'}>Bathrooms High to Low</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={'bathrooms_low_high'}>Bathrooms Low to High</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box display={'flex'} gap={1} padding={'10px'}>
                        <FormControl sx={{ minWidth: 50 }}>
                            <Select
                                size='small'
                                value={limit}
                                onChange={(e) => {
                                    setLimit(e.target.value)
                                    setCurrentPage(1)
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    textTransform: 'capitalize'
                                }}
                            >
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={6}>
                                    Properties Per Page
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={10}>10</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={15}>15</MenuItem>
                                <MenuItem sx={{ fontSize: '14px', textTransform: 'capitalize' }} value={20}>20</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                    {
                        properties?.map((property) => <PropertyCard key={property?._id} property={property} />)
                    }
                    {
                        properties?.length === 0 && <>
                            <div className='col-span-3 mx-auto'>
                                <h3>Properties Not Found.</h3>
                            </div>
                        </>
                    }
                </div>
                {
                    (pages?.length > 0) && <>
                        <div className='mt-10'>
                            <div className="pagination">
                                <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} size='small' className='pagination-btn'><FaAngleLeft /></Button>


                                {pages?.map((page, idx) => <Button size='small' onClick={() => setCurrentPage(page)} className={`${(page === currentPage) ? 'active' : ''} pagination-btn`} key={idx}>
                                    {page}
                                </Button>)}


                                <Button disabled={currentPage === totalPages?.pages} onClick={() => setCurrentPage(currentPage + 1)} size='small' className='pagination-btn'><FaAngleRight /></Button>
                            </div>
                        </div>
                    </>
                }
            </div>

        </section >
    );
};

export default PropertiesList;