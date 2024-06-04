import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Components/Miscellaneous/SideDrawer";
import ChatBox from "../Components/ChatBox";
import MyChats from "../Components/MyChats";

const ChatPage = () => {
    const { user } = ChatState();
    const [ fetchAgain, setFetchAgain] = useState();

    return (
        <div style={{width: "100%"}}>
            {user && <SideDrawer />}
            <Box
                display = "flex"
                justifyContent= "space-between"
                w ="100%"
                h = "91.5vh"
                p="10px"
            >
                {user && (
                    <MyChats fetchAgain={fetchAgain}/>
                )}
                {user && (
                    <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                )}
            </Box>
        </div>
        
    );
};

export default ChatPage;