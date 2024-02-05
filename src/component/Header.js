import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import Stat from "./Stat";
import {useContext} from "react";
import {StatsContext} from "../context/StatsContext";

const Header = ({end}) => {
    const {
        notorietyState: [noto],
        popularityState: [pop],
        moneyState: [money],
        privateLifeState: [life],
    } = useContext(StatsContext);

    let sx = {
        justifyContent: "space-around",
        columnGap: 4,
        flexWrap: "wrap",
        maxWidth: 700,
        margin: "0 auto",
    };
    return <>
        <AppBar position="static">
            {end && <Box p={5}/>}
            {end &&<Toolbar sx={sx}>
                <Typography variant={"h3"}>Ваш результат</Typography>
            </Toolbar>}
            <Toolbar sx={sx}>
                <Stat label={"Информированность"} value={noto}/>
                <Stat label={"Популярность"} value={pop}/>
                <Stat label={"Деньги"} value={money}/>
                <Stat label={"Личная жизнь"} value={life}/>
            </Toolbar>
            {end && <Box p={5}/>}
        </AppBar>
    </>;
};

export default Header