import { useContext, useEffect } from "react";
import socket from "../../socket";
import { AccountContext } from "../AccountContext";

const useSocketSetup = (setFriendList) => {
  const { setUser } = useContext(AccountContext);
  useEffect(() => {
    // socket.connect();
    // socket.on("friends", (friendList) => {
    //   console.log("Working...");
    //   setFriendList(friendList);
    // });
    // socket.on("connect_error", () => {
    //   setUser({ loggedIn: false });
    // });
    // return () => {
    //   socket.off("connect_error");
    // };
    const connectSocket = () => {
      console.log("Attempting to connect...");
      socket.connect();

      const handleFriendsList = (friendList) => {
        console.log("Friends list received:", friendList);
        setFriendList(friendList);
      };

      socket.on("friends", handleFriendsList);
      socket.on("connect_error", () => {
        console.log("Connection error, attempting to reconnect...");
        setUser({ loggedIn: false });
        // Optionally, you can initiate a reconnection attempt here
      });

      // This ensures that if the socket disconnects, it will remove the listeners
      // and add them back upon reconnection.
      socket.on("disconnect", () => {
        console.log("Socket disconnected, cleaning up...");
        socket.off("friends", handleFriendsList);
        socket.off("connect_error");
        // Re-setup the listeners upon reconnection
        connectSocket();
      });
    };

    connectSocket(); // Initial connection setup

    return () => {
      // Cleanup on component unmount or before reconnecting
      socket.off("friends");
      socket.off("connect_error");
      socket.off("disconnect");
      socket.disconnect(); // Consider if you want to disconnect when the component unmounts
    };
  }, [setUser, setFriendList]);
};

export default useSocketSetup;
