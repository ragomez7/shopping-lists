import React from "react";
import { useMediaQuery } from "usehooks-ts";

interface BackButtonProps {
  handleClickBack: (event: React.BaseSyntheticEvent) => void
}

const BackButton: React.FC<BackButtonProps> = ({ handleClickBack }) => {
    const isXs = useMediaQuery("(max-width: 360px)");

  return (
    <button
      onClick={handleClickBack}
      style={{
        textTransform: "none",
        marginTop: "29px",
        marginLeft: isXs ? 0 : "315px",
      }}
    >
      Back
    </button>
  );
};

export default BackButton;
