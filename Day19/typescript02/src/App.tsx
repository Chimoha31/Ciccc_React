import React, {useState} from "react";
import Login from './login';

const App = () => {
  const [email, setEmail] = useState<string>("example@test.com");
  const [password, setPassword] = useState<string>("xyz");

  return (
    <div>
      <Login email={email} password={password} />
    </div>
  );
};

export default App;
