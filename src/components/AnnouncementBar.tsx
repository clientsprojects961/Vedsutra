import { Truck } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="flex items-center justify-center gap-2">
        <Truck className="w-4 h-4" />
        <span>Free shipping and returns</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
