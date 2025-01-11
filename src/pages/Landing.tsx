import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";

const callFunc = () => {
  console.log("I am clicked");
};
export const Landing = () => {
  return (
    <>
      <button
        onClick={() => {
          console.log("I am cilced");
        }}
      >
        <FaBeer />
        Hello
      </button>
      <Flex
        style={{
          backgroundColor: "red",
          maxWidth: "10rem",
          height: "100%",
          paddingLeft: "7px",
        }}
        direction="column"
        gap="4"
      >
        <Flex>
          <Button
            onClick={() => {
              console.log("I am cilced");
            }}
          >
            <FaBeer />
            Hello
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Landing;
