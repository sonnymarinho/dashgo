import { Flex, Stack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../components/Form/Input';
import SigninLogo from './SigninLogo';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignin: SubmitHandler<SignInFormData> = async formData => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    router.push('/dashboard');
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <SigninLogo />
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        flexDir="column"
        borderRadius={5}
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing={4}>
          <Input label="E-mail" type="email" {...register('email')} errors={errors} isDisabled={isSubmitting} />
          <Input label="Password" type="password" {...register('password')} errors={errors} isDisabled={isSubmitting} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" isLoading={isSubmitting}>
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
}
