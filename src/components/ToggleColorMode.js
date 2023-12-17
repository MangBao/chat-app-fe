import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={() => toggleColorMode()}
      pos={"absolute"}
      top={0}
      right={0}
      m={"1rem"}
    >
      {colorMode === "dark" ? (
        <SunIcon color={"orange.200"} />
      ) : (
        <MoonIcon color={"blue.700"} />
      )}
    </Button>
  );
};

export default ToggleColorMode;
