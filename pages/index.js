import { Button, Icon, Flex } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Icon color="black" size="64px" name="logo" />
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
