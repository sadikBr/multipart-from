import { ChangeEvent } from "react";
import type UserInfo from "../interfaces/userInfo";

interface PropsTypes {
  userInfo: UserInfo;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FirstStep = ({ userInfo, handleChange }: PropsTypes) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="first_name" className="w-[100px]">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          onChange={handleChange}
          value={userInfo.first_name}
          id="first_name"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="last_name" className="w-[100px]">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          onChange={handleChange}
          value={userInfo.last_name}
          id="last_name"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="age" className="w-[100px]">
          Age
        </label>
        <input
          type="number"
          onChange={handleChange}
          value={userInfo.age}
          min="0"
          name="age"
          id="age"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
    </>
  );
};

export default FirstStep;
