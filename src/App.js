import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/Chat/ChatFeed";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="ac1af39c-9a05-44c3-b40c-9bfe712d95d4 "
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
    />
  );
};

export default App;
