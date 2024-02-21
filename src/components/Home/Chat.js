import { TabPanel, TabPanels, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FriendContext } from "./Home";

const Chat = () => {
  const { friendList } = useContext(FriendContext);
  return friendList.length > 0 ? (
    <VStack>
      <TabPanels>
        {friendList.map((friend) => (
          <TabPanel>{friend.message}</TabPanel>
        ))}
      </TabPanels>
    </VStack>
  ) : (
    <VStack
      justify="center"
      pt="5rem"
      w="100%"
      textAlign="center"
      fontSize="large"
    >
      <TabPanels>
        <Text>No friend! Click add friend to start chating</Text>
      </TabPanels>
    </VStack>
  );
};

export default Chat;
