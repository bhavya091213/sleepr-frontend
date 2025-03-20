import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [emailMatch, setEmailMatch] = useState(false);
  const navigate = useNavigate();

  // Check passwords
  useEffect(() => {
    if (password === checkPassword || password.length === 0) {
      setPasswordMatch(true);
      //   console.log("passwords match");
    } else {
      setPasswordMatch(false);
      //   console.log("passwords do not match");
    }
  }, [checkPassword]);

  // check emails
  useEffect(() => {
    if (email === checkEmail || email.length === 0) {
      setEmailMatch(true);
      //   console.log("emails match");
    } else {
      setEmailMatch(false);
      //   console.log("emails do not match");
    }
  }, [checkEmail]);

  // handle submit
  const handleSubmit = () => {
    setUsername("");
    setEmail("");
    setCheckEmail("");
    setPassword("");
    setCheckPassword("");
    navigate("/login");
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
            <h1 className="font-extrabold text-7xl text-primary">signup</h1>
            <h1 className="font-extrabold text-lg p-2 text-primary">
              already have an account?{" "}
              <span className="text-tertiary">
                <Link to="/login">login here</Link>
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
              type="text"
              placeholder="email"
              value={email}
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="retype email"
              value={checkEmail}
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCheckEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="retype password"
              value={checkPassword}
              className="block appearance-none w-full rounded-2xl text-primary bg-darkest border hover:border-primary px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>

          {/* submit button */}

          {emailMatch && passwordMatch && (
            <div className="flex flex-col justify-center items-center p-5">
              <button
                onClick={handleSubmit}
                className="bg-tertiary hover:bg-secondary hover:shadow-sm hover:shadow-secondary rounded-3xl px-6 py-3 font-bold text-darkest transition-all"
              >
                submit
              </button>
            </div>
          )}

          {/* Add google auth and other auth down here */}
        </div>
      </div>
    </div>
  );
};
