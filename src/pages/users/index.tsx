import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { RiAddLine, RiPencilLine, RiRestartLine } from "react-icons/ri";
import { useState } from "react";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import ROUTES from "../../config/routes";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/axios";

export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isFetching, refetch, error } = useUsers(currentPage);

  const isRefetching = isFetching && !isLoading;

  async function handlePrefetch(userId: string) {
    await queryClient.prefetchQuery(["user", userId], async () => {
      const { data } = await api.get(`/users/${userId}`);
      return data;
    });
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" as="h2">
              Users
              {isRefetching && <Spinner size="sm" color="pink.300" ml="2" />}
            </Heading>
            <HStack spacing="2">
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                variant="outline"
                _hover={{ cursor: "pointer" }}
                leftIcon={<Icon as={RiRestartLine} />}
                onClick={() => refetch()}
                isDisabled={isRefetching}
              >
                Reload List
              </Button>
              <NextLink href={ROUTES.CREATE_USER} passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} />}
                >
                  Create new
                </Button>
              </NextLink>
            </HStack>
          </Flex>

          {isLoading ? (
            <Flex justify="center" my="auto" h="100%">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Error at loading user data.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>User</Th>
                    {isWideVersion && <Th>Registration date</Th>}
                    <Th w="8">Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.users.map((user) => (
                    <Tr key={user.id} px="6">
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            colo="purple.400"
                            onMouseEnter={() => handlePrefetch(user.id)}
                            _hover={{
                              textDecoration: "none",
                              color: "purple.400",
                            }}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="small" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="small"
                          colorScheme="gray"
                          color="gray.800"
                          leftIcon={<Icon as={RiPencilLine} />}
                        >
                          {isWideVersion && "Edit"}
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={200}
                currentPage={currentPage}
                onChangePage={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
