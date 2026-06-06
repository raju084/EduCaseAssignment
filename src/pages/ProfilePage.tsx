import React from 'react';
import { Camera } from 'lucide-react';
import avatarImg from '../assets/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { logout } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.user);

  const displayName = currentUser?.fullName || 'Marry Doe';
  const displayEmail = currentUser?.email || 'test@example.com';

  const handleLogout = () => {
    dispatch(logout());
    navigate('/landing');
  };

  return (
    <div className="flex flex-col h-full">
      <header className="px-6 py-5 bg-white border-b border-[#EAEAEA]">
        <h1 className="text-[17px] font-medium text-[#1D2226]">Account Settings</h1>
      </header>

      <div className="flex-1 bg-[#ECECEC] px-6 pt-6">
        <div className="flex items-center mb-5">
          <div className="relative mr-4">
            <img src={avatarImg} alt="Avatar" className="w-[76px] h-[76px] rounded-full object-cover" />
            <div className="absolute bottom-0 right-0 w-[26px] h-[26px] bg-primary text-white border-2 border-white rounded-full flex items-center justify-center">
              <Camera size={13} />
            </div>
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-[#1D2226]">{displayName}</h2>
            <p className="text-[13px] text-[#6b7280] mt-0.5">{displayEmail}</p>
          </div>
        </div>

        <p className="text-[13px] text-[#444] leading-[1.6]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="bg-[#ECECEC] px-6 pb-6 pt-4 border-t border-[#CBCBCB]">
        <button
          onClick={handleLogout}
          className="w-full text-primary font-bold bg-transparent border-none cursor-pointer text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;

