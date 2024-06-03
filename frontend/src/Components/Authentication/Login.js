import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack} from "@chakra-ui/react";

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const submitHandler = () => {

    };

    return (
        <VStack spacing="5px" color="black">
            <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Your Email Address"
                />
            </FormControl> 
            
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Log In
            </Button>

            <Button
                variant="solid"
                colorScheme="red"
                width="100%"
            >
                Get Guest User Credentials
            </Button>

        </VStack>
    );
};

export default Login;
