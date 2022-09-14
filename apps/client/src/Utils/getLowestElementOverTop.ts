import { RefObject } from 'react';

//? OBS: margin needs to get used for position: sticky navbar's
//   - a positive value means it accepts elements N pixels below the top
//   - a negative value means it rejects elements N pixels above the top

export const getLowestElementOverTop = (
  elementRefs: RefObject<HTMLElement>[],
  margin = 0
) => {
  // list of elements whose top is over the top of the screen, sorted by closest to the top
  const elementsOverTop = elementRefs
    .filter((ele) => ele.current)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .map((ele) => ele.current!)
    .map((ele) => ({ ele, rec: ele.getBoundingClientRect() }))
    .filter(({ rec }) => rec.y && rec.y <= margin)
    .sort(({ rec: a }, { rec: b }) => b.y - a.y);

  // if there is at least one element above the screen, return it
  // if there isn't, return null
  return elementsOverTop.length > 0 ? elementsOverTop[0]?.ele : null;
};
