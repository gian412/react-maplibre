import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Flex justifyContent='flex-end' bgColor='navy' color='white' pr={['10px', '40px']}>
            <Text fontSize='0.8rem' opacity={0.7}>
                &copy; Sample Inc. {new Date().getFullYear()}
            </Text>
        </Flex>
    );
};

export default Footer;
