import { Link } from "react-router";
import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  // handle submit
  const handleSubmit = () => {
    // handle if auth successful or not succesful

    // if right, navigate here, no else case just run rest of functions

    // clear fields regardless
    setUsername("");
    setPassword("");
  };

  return (
    // background
    <div className=" overflow-y-hidden w-screen h-screen bg-gradient-to-t from-quinary to-darkest">
      {/* center */}
      <div className="flex flex-col justify-center items-center p-20">
        {/* card */}
        <div className=" pt-20 pb-10 px-20 w-[40%] h-fit rounded-3xl bg-quinary shadow-2xl">
          {/* text */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-extrabold text-2xl text-secondary">sleepr</h1>
            <h1 className="font-extrabold text-7xl text-primary">login</h1>
            <h1 className="font-extrabold text-lg p-2 text-primary">
              don't have an account?{" "}
              <span className="text-tertiary">
                <Link to="/signup">signup here</Link>
              </span>
            </h1>
          </div>
          {/* Forms */}
          {/* //TODO ADD GOOGLE AUTH */}
          <div className="pt-10 flex flex-col justify-center items-center space-y-5">
            <input
              type="text"
              placeholder="username"
              value={username}
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="password"
              value={password}
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* submit button */}

          <div className="flex flex-col justify-center items-center p-5">
            <button
              onClick={handleSubmit}
              className="bg-tertiary hover:bg-secondary hover:shadow-sm hover:shadow-secondary rounded-3xl px-6 py-3 font-bold text-darkest transition-all"
            >
              submit
            </button>
          </div>

          {/* Add google auth and other auth down here */}
        </div>
      </div>
    </div>
  );
};
