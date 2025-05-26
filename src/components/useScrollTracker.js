import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setScrollY } from '../store/scrollSlice';

const useScrollTracker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollOffset = scrollY / maxScroll;
      dispatch(setScrollY(scrollOffset));
      console.log("Scroll Offset:", scrollOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);
};

export default useScrollTracker;
