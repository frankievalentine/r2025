import Head from 'next/head';
import { Stack, Button, Icon, Flex, Link, Text } from '@chakra-ui/core';

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
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
          window.location.href = "/dashboard"
        }
        `
          }}
        />
        <title>Fast Feedback</title>
      </Head>
      <Icon color="black" size="64px" name="logo" mb={2} />
      <Text mb={4} fontSize="lg" p={6}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {' is being build as part of '}
        <Link href="https://react2025" isExternal textDecoration="underline">
          React 2025
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
      </Text>
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <Stack>
          <Button
            onClick={(e) => auth.signinWithGithub()}
            backgroundColor="gray.900"
            color="white"
            leftIcon="github"
            fontWeight="medium"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign in with Github
          </Button>
          <Button
            onClick={(e) => auth.signinWithGoogle()}
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            mt={4}
            leftIcon="google"
            fontWeight="medium"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign in with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Home;
