import { Grid, GridItem, Tabs } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { createContext, useState } from "react";

export const FriendContext = createContext();

const Home = () => {
  const [friendList, setFriendList] = useState([
    // { username: "Mang Bao", connected: true, message: "Friend one" },
    // { username: "Minh Truc", connected: true, message: "Friend two" },
    // { username: "Tri Nguyen", connected: false, message: "Friend three" },
  ]);

  return (
    <FriendContext.Provider value={{ friendList, setFriendList }}>
      <Grid templateColumns="repeat(10, 1fr)" h="100vh" as={Tabs}>
        <GridItem colSpan="3" borderRight="1px solid gray">
          <Sidebar />
        </GridItem>
        <GridItem colSpan="7">
          <Chat />
        </GridItem>
      </Grid>
    </FriendContext.Provider>
  );
};

export default Home;
