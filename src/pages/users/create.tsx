import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { api } from "../../services/axios";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";
import ROUTES from "../../config/routes";

type createNewUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createNewUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function UserCreate() {
  const router = useRouter();

  const createUser = useMutation(
    async (data: createNewUserFormData) => {
      await api.post("/users", {
        user: {
          ...data,
          created_at: new Date(),
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(createNewUserSchema),
  });

  const handleCreateNewUser: SubmitHandler<createNewUserFormData> = async (
    formData
  ) => {
    await createUser.mutateAsync(formData);
    router.push(ROUTES.USERS);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={["6", "8"]}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateNewUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Full Name"
                {...register("name")}
                errors={errors}
                isDisabled={isSubmitting}
              />
              <Input
                type="email"
                label="E-mail"
                {...register("email")}
                errors={errors}
                isDisabled={isSubmitting}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                type="password"
                label="Password"
                {...register("password")}
                errors={errors}
                isDisabled={isSubmitting}
              />
              <Input
                type="password"
                label="Password Confirmation"
                {...register("password_confirmation")}
                errors={errors}
                isDisabled={isSubmitting}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={["6", "8"]} justify="flex-end">
            <HStack spacing="4">
              <NextLink href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                  isDisabled={isSubmitting}
                >
                  Cancel
                </Button>
              </NextLink>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
