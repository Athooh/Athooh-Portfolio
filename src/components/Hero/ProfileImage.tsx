import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 animate-[slideIn_1s_ease-out]">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse" />
      <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900">
        <img
          src="/src/components/images/profile.png"
          alt="Seth Odhiambo Athooh"
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 animate-[spin_10s_linear_infinite]" />
    </div>
  );
};

export default ProfileImage;