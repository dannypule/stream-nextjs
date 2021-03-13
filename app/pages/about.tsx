import { Box, Button, Container, Typography } from "@material-ui/core";
import Link from "next/link";

export default function About() {
  Container;
  Typography;
  Box;
  Button;
  Link;

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About page
        </Typography>
        <Link href="/">
          <Button variant="contained" color="primary">
            Go to the index page
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
