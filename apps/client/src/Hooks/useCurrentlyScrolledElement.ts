import { RefObject, useState } from 'react';
import useScrollPosition, {
  Options as ScrollOptions,
} from 'Hooks/useScrollPosition';
import { getLowestElementOverTop } from 'Utils/getLowestElementOverTop';

export interface Options extends ScrollOptions {
  margin?: number;
}

// hook to select from a list of elements which one, if any,
// has the top of it's containing rectangle above the top of the
// screen. if there are elements in the array that pass
// this condition, the one closest to the top gets selected
const useCurrentlyScrolledElement = (
  refs: RefObject<HTMLElement>[],
  opt: Options
) => {
  // setup state variable
  const [currentScrolled, setCurrentScrolled] = useState<HTMLElement | null>(
    null
  );

  // on scroll, check if current scrolled element has changed
  useScrollPosition(() => {
    const element = getLowestElementOverTop(refs, opt.margin);
    setCurrentScrolled(element || null);
  }, opt);

  // return element
  return currentScrolled;
};

export default useCurrentlyScrolledElement;
