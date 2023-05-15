import { useState } from "react";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";
import MyNavBar from "./components/MyNavBar";
import { Box, Button, Container, Stack } from "@mui/material";

function App() {
  const [continent, setContinent] = useState("");
  const [countryData, setCountryData] = useState(undefined);
  const [favList, setFavList] = useState([]);

  return (
    <>
      <header>
        <MyNavBar />
      </header>
      <Container sx={{p:4}}>
        <Stack gap={4}>
          <Box className="App" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Right
              continent={continent}
              countryData={countryData}
              setFavList={setFavList}
              favList={favList} />
            <Left
              setContinent={setContinent}
              setCountryData={setCountryData}
              favList={favList} />
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default App;
