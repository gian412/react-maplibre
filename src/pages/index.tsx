import React from 'react';
import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { Contacts, Disclaimer, Footer, Intro, Map } from '../components';

const Home: NextPage = () => {
    return (
        <Box position='relative'>
            <Intro />
            <Contacts />
            <Map />
            <Disclaimer />
            <Footer />
        </Box>
    );
};

export default Home;
