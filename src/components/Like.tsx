import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FcLike onClick={toggle} size={30} />;

  return <FcLikePlaceholder onClick={toggle} size={30} />;
};

export default Like;
