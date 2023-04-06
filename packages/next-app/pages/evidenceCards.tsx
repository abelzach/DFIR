import { Center } from '@chakra-ui/react';
import Link from 'next/link';
import { Card, Stack, StackDivider, Box, Button, Heading, Text, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import {Evidences} from './evidencedata'



interface Evidence {
    "fir_no" : number,
    "dor" : string,
    "police_station" : string,
    "name_complainant" : string,
    "name_accused" : string,
    "applicant_detail_name" : string,
    "applicant_detail_parentage" : string,
    "applicant_detail_address" : string,
    "applicant_detail_contact_no" : number,
    "applicant_relationship_accussed" : string,
}

interface Evidences_Props extends Array<Evidence>{};

var Evi: Evidences_Props = Evidences;
console.log(Evi);

export default function evidenceCards() {
    return (
        <>
        <div className="h-27 bg-gradient-to-r from-rose-100 to-teal-100">
        <center>
            <h1>Evidences </h1>
            <h3>
                <Link href="/">Back to home</Link>
            </h3>
        </center>

        

        <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 4fr))'>

        {Evi.map(evi => <Card> 
                            <CardHeader>
                                <Heading size='md'>FIR {evi.fir_no}</Heading>
                            </CardHeader>

                            <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Date of Registration
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.dor}
                                </Text>
                            </Box>


                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Police Station
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.police_station}
                                </Text>
                            </Box>


                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Name of the Complainant
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.name_complainant}
                                </Text>
                            </Box>


                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Person Accussed
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.name_accused}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Person Accused
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.name_accused}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant Detail
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_name}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Parentage
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_parentage}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Address
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_address}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Contact detail
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_detail_contact_no}
                                </Text>
                            </Box>

                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Applicant's Relationship with Accussed
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                {evi.applicant_relationship_accussed}
                                </Text>
                            </Box>




                            </Stack>

                            
                        </Card>
                                
                )
        }


            
            </SimpleGrid>
            <style jsx>{`
                h1{
                    font-size: 70px;
                    font-weight: 800;
                }
                p {
                color: blue;
                }
                h3{
                    font-size: 30px;
                    font-weight: 400;
                    color: #0070f3;
                }
            `}</style>

        
        </div>
        </>
    )

}