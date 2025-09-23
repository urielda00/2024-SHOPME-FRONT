import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(min-width:601px) and (max-width:960px)");
  const isMd = useMediaQuery("(min-width:961px) and (max-width:1280px)");
  const isLg = useMediaQuery("(min-width:1281px)");

  return { isXs, isSm, isMd, isLg };
};

export default useResponsive;