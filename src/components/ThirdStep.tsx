import { ChangeEvent } from "react";
import UserInfo from "../interfaces/userInfo";

interface PropsTypes {
  userInfo: UserInfo;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ThirdStep = ({ userInfo, handleChange }: PropsTypes) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="email" className="w-[100px]">
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userInfo.email}
          id="email"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="password" className="w-[100px]">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userInfo.password}
          id="password"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
    </>
  );
};

export default ThirdStep;
