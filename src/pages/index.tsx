import React from 'react';
import type { NextPage } from 'next';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    IconButton,
    Input,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { ArrowRightIcon, EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';
import { Contacts, Disclaimer, Footer, Intro } from '../components';

const Home: NextPage = () => {
    return (
        <Box position='relative'>
            <Intro />
            <Contacts />
            <Disclaimer />
            <Footer />
        </Box>
    );
};

export default Home;
