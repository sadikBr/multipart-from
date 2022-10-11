import { ChangeEvent } from "react";
import type UserInfo from "../interfaces/userInfo";

interface PropsTypes {
  userInfo: UserInfo;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SecondStep = ({ userInfo, handleChange }: PropsTypes) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="street" className="w-[100px]">
          Street
        </label>
        <input
          type="text"
          name="street"
          onChange={handleChange}
          value={userInfo.street}
          id="street"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="city" className="w-[100px]">
          City
        </label>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={userInfo.city}
          id="city"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="state" className="w-[100px]">
          State
        </label>
        <input
          type="text"
          name="state"
          onChange={handleChange}
          value={userInfo.state}
          id="state"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="zip" className="w-[100px]">
          Zip
        </label>
        <input
          type="number"
          onChange={handleChange}
          value={userInfo.zip}
          min="0"
          name="zip"
          id="zip"
          className="flex-1 border-2 border-black rounded-sm py-1 px-2 text-sm"
        />
      </div>
    </>
  );
};

export default SecondStep;
