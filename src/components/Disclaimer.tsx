import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Disclaimer = () => {
    return (
        <Flex justifyContent='center' py='20px' px='40px' textAlign='center'>
            <Text maxW='700px' margin={0}>
                All product and company names are trademarks™ or registered® trademarks of their respective holders. Use
                of them does not imply any affiliation with or endorsement by them.
            </Text>
        </Flex>
    );
};

export default Disclaimer;
