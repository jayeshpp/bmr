"use client";

import ReactSlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { UserProfileCard } from "../UserProfileCard";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { Navigation } from "./Navigation";

interface ISlidingPane {
  isOpen: boolean;
  onClose: () => void;
}

export const SlidingPane = ({ isOpen, onClose }: ISlidingPane) => {
  const {
    user: { valid },
    logout,
  } = useAuth();

  return (
    <ReactSlidingPane
      className="navigation"
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      onRequestClose={onClose}
      from="left"
      hideHeader
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <UserProfileCard />
          <Navigation isAuthenticated={valid} />
        </div>
        <div className="p-4 h-[100px]">
          {valid && (
            <Link
              href="/"
              onClick={() => {
                logout();
                onClose();
              }}
              className="block p-2"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </ReactSlidingPane>
  );
};
