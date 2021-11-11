import { Button } from "@chakra-ui/react";

interface PaginationProps {
  number: number;
  isCurrent?: boolean;
  changePageHandler: (number: number) => void;
}

export default function PaginationItem({
  number,
  isCurrent = false,
  changePageHandler,
}: PaginationProps) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      _disabled={{
        bg: "pink.500",
        cursor: "default",
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
      onClick={() => changePageHandler(number)}
    >
      {number}
    </Button>
  );
}
