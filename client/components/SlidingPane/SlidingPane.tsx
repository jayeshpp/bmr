"use client";

import ReactSlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { UserProfileCard } from "../UserProfileCard";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { Div } from "../Div";

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
      width={"350px"}
      hideHeader
    >
      <Div className="flex flex-col justify-between h-full">
        <Div>
          <UserProfileCard />
          <Navigation isAuthenticated={valid} />
        </Div>
        <Div className="p-4 h-[100px]">
          {valid && (
            <Link
              href="/"
              onClick={() => {
                logout();
                onClose();
              }}
              className="block p-2 hover:bg-gray-100"
            >
              Logout
            </Link>
          )}
        </Div>
      </Div>
    </ReactSlidingPane>
  );
};
