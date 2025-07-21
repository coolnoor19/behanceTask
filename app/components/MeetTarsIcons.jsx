import Image from "next/image";
import React from "react";

const icons = [
  { id: 1, src: '/design/instagram.png', name: 'playstore' },
  { id: 2, src: '/design/reddit.png', name: 'reddit' },
  { id: 3, src: '/design/youtube.png', name: 'youtube' },
  { id: 4, src: '/design/instagram.png', name: 'instagram' },
  { id: 5, src: '/design/youtube.png', name: 'youtube' },
  { id: 6, src: '/design/instagram.png', name: 'playstore' },
  { id: 7, src: '/design/reddit.png', name: 'reddit' },
  { id: 8, src: '/design/youtube.png', name: 'chat' },
  { id: 9, src: '/design/instagram.png', name: 'instagram' },
  { id: 10, src: '/design/youtube.png', name: 'youtube' },
  { id: 11, src: '/design/reddit.png', name: 'playstore' }, // Make sure this is not 5
];
const MeetTarsIcons = () => {
  return (
    <div className="max-w-6xl mx-auto mt-14 mb-48">
      <div className="flex gap-5">
        {icons.map((icon) => (
          <div key={icon.id} className="flex items-center justify-center rounded-2xl transition-transform duration-300 transform hover:scale-150 hover:shadow-lg cursor-pointer">
            <Image
              src={icon.src}
              alt={icon.name}
              height={200}
              width={200}
              className="object-contain"
            />
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default MeetTarsIcons;



