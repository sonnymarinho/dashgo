import { useMemo } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import EllipsisItem from "./EllipsisItem";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  siblingsCount?: number;
  onChangePage: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  siblingsCount = 1,
  onChangePage,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  const minItemInPage = useMemo(
    () => (currentPage - 1) * registersPerPage,
    [currentPage, registersPerPage]
  );

  const maxItemInPage = useMemo(
    () =>
      totalCountOfRegisters < currentPage * registersPerPage
        ? totalCountOfRegisters
        : currentPage * registersPerPage,
    [totalCountOfRegisters, currentPage, registersPerPage]
  );

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="center"
      gridGap={["4", "0"]}
    >
      <Box>
        <strong>{minItemInPage}</strong> - <strong>{maxItemInPage}</strong> de{" "}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <PaginationItem changePageHandler={onChangePage} number={1} />
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => (
            <>
              {currentPage > 2 + siblingsCount && <EllipsisItem />}
              <PaginationItem
                changePageHandler={onChangePage}
                key={page}
                number={page}
              />
            </>
          ))}

        <PaginationItem
          changePageHandler={onChangePage}
          number={currentPage}
          isCurrent
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => (
            <PaginationItem
              changePageHandler={onChangePage}
              key={page}
              number={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <EllipsisItem />}
            <PaginationItem
              changePageHandler={onChangePage}
              number={lastPage}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
}
