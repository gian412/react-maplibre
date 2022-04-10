import { ArrowRightIcon, EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons';
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
import React from 'react';

const Contacts = () => {
    const formInputs = [
        { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
        {
            id: 'tel',
            type: 'tel',
            label: 'Phone number',
            placeholder: '+01 234 567 8900',
        },
        {
            id: 'email',
            type: 'email',
            label: 'Email address',
            placeholder: 'you@example.com',
        },
        {
            id: 'message',
            type: 'textarea',
            label: 'Your message',
            placeholder: 'How can we help you? Or you us?',
        },
    ];
    const contactDetails = [
        {
            value: '1600 Amphitheatre Parkway, Mountain View, california.',
            icon: <InfoIcon />,
        },
        { value: '+1 234 567 8900', icon: <PhoneIcon /> },
        { value: 'support@example.com', icon: <EmailIcon /> },
    ];

    return (
        <Grid
            backgroundColor='white'
            width='100%'
            templateColumns='3fr 1.5fr'
            maxWidth='80vw'
            height='475px'
            margin={0}
            top='-100px'
            left='50%'
            ml='-40vw'
            mb='-100px'
            position='relative'
            borderRadius='5px'
            overflow='hidden'
            boxShadow='2xl'
        >
            <FormControl
                display='grid'
                flexDirection='column'
                justifyContent='unset'
                alignItems='start'
                alignContent='space-between'
                gridTemplateAreas={`'header .' 'name message' 'tel message' 'email submit'`}
                gap='o.5vh 1vw'
                maxW='100%'
                padding='40px'
            >
                <GridItem gridArea='header'>
                    <Heading as='h2' margin={0} textTransform='uppercase' textAlign='left'>
                        Send us a message
                    </Heading>
                </GridItem>
                {formInputs.map(formInput => (
                    <GridItem gridArea={formInput.id} h={formInput.type === 'textarea' ? '100%' : undefined}>
                        <FormLabel key={formInput.id} htmlFor={formInput.id} id={formInput.id} my='10px' mx={0}>
                            {formInput.label}
                        </FormLabel>
                        {formInput.type === 'textarea' ? (
                            <Textarea
                                placeholder={formInput.placeholder}
                                display='block'
                                mt='5px'
                                fontSize='1rem'
                                w='90%'
                                border='1px'
                                borderStyle='solid'
                                borderColor='navy'
                                p='10px'
                                h='150px'
                            />
                        ) : (
                            <Input
                                type={formInput.type}
                                placeholder={formInput.placeholder}
                                display='block'
                                mt='5px'
                                fontSize='1rem'
                                w='90%'
                                border='1px'
                                borderStyle='solid'
                                borderColor='navy'
                                p='10px'
                            />
                        )}
                    </GridItem>
                ))}

                <GridItem gridArea='submit' display='flex' justifyContent='flex-end'>
                    <IconButton
                        aria-label='Send message'
                        icon={<ArrowRightIcon />}
                        // justifySelf='end'
                        fontSize='sm'
                        color='white'
                        backgroundColor='whatsapp.600'
                        mr='6'
                    />
                </GridItem>
            </FormControl>
            {/* Info Section */}
            <Flex
                textAlign='left'
                p='20px'
                bgColor='whatsapp.600'
                color='white'
                flexDirection='column'
                justifyContent='flex-start'
                padding='40px'
            >
                <Heading as='h2' textTransform='uppercase' fontWeight='normal' margin={0}>
                    Contact information
                </Heading>
                <Box my='40px' mx={0}>
                    {contactDetails.map(detail => (
                        <Text key={detail.value} fontWeight='semibold' lineHeight={2}>
                            {detail.icon} {detail.value}
                        </Text>
                    ))}
                </Box>
            </Flex>
        </Grid>
    );
};

export default Contacts;
