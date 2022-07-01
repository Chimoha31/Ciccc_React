import { FC } from "react";

type LoginModel = {
  email: string;
  password: string;
};

const Login: FC<LoginModel> = ({ email, password }) => {
  return (
    <div>
      <form>
        <label htmlFor="email" />
        <input
          type="email"
          autoComplete="on"
          placeholder="Enter Email"
        //   value={email}
        />
        <label htmlFor="email" />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Enter Password"
          //   value={password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
