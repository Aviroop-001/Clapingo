import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Offer from "./components/Offer";
import Trial from "./components/Trial";
import Work from "./components/Work";

function Home() {
  return (
        <Box width="100vw">
          <Header />
          <Intro />
          <Trial />
          <Offer />
          <Work />
        </Box>
  );
}

export default Home;
