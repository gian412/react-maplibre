import { Flex, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const Intro: NextPage = () => {
    return (
        <Flex
            direction='column'
            justifyContent='start'
            alignItems='flex-start'
            textAlign='left'
            backgroundColor='navy'
            color='white'
            // height={['40vh', '25vh']}
            px='130px'
            py='130px'
        >
            <Heading as='h2' margin={0}>
                Our Mission
            </Heading>
            <Text maxW='85wh'>
                Every single person who understands the impact of the web should be an advocate and strive for a better,
                more inclusive web for all.
            </Text>
        </Flex>
    );
};

export default Intro;
