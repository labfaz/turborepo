import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import RcPagination, { PaginationProps as PagProps } from 'rc-pagination';
import isFunction from 'Utils/isFunction';

import { PaginationControls } from './styles';

export interface PaginationProps<T> {
  baseProps?: PagProps;
  children?: ((pageItems: T[]) => ReactNode) | ReactNode;
  itemsPerPage?: number;
  items: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unnecessary-type-constraint
export const Pagination = <T extends any>({
  items,
  baseProps = {},
  itemsPerPage = 10,
  children,
}: PropsWithChildren<PaginationProps<T>>): ReactElement<PaginationProps<T>> => {
  const [page, setPage] = useState(1);

  const renderedItems = useMemo<T[]>(() => {
    const slicedItems = items.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
    return slicedItems;
  }, [itemsPerPage, page, items]);

  const onChange = useCallback((page: number) => setPage(page), [setPage]);
  return (
    <>
      {isFunction(children) ? children(renderedItems) : children}

      <PaginationControls>
        <RcPagination
          onChange={onChange}
          pageSize={itemsPerPage}
          current={page}
          total={items.length}
          locale={{
            items_per_page: 'itens por página',
            next_page: 'próxima',
            prev_page: 'anterior',
          }}
          prevIcon={<FaAngleLeft />}
          nextIcon={<FaAngleRight />}
          showPrevNextJumpers
          {...baseProps}
        />
      </PaginationControls>
    </>
  );
};

export default Pagination;
