import {useContext, useState} from "react"
import EventComponent from "./component/Event";
import {Box, Button, Tab, Tabs, Typography} from "@mui/material";
import {StatsContext} from "./context/StatsContext";
import Events from "./model/Events";
import Header from "./component/Header";

const App = () => {
    const {
        notorietyState: [, setNoto],
        popularityState: [, setPop],
        moneyState: [, setMoney],
        privateLifeState: [, setLife],
    } = useContext(StatsContext);
    const [index, setIndex] = useState(0)
    const end = index >= Events.length;
    const [tab, setTab] = useState(0)
    const [select, setSelect] = useState(false)

    return (
        <>
            <Header end={end}/>
            <Box sx={{
                p: 1,
                width: 1.0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: 500,
                margin: "0 auto"
            }}>


                {!select &&
                    <>
                        <Box width={1.0} marginBottom={1}>
                            <Tabs variant="fullWidth" value={tab} onChange={(e, v) => setTab(v)}>
                                <Tab label="Sam Salamanca"/>
                                <Tab label="Ann Sunshine"/>
                                <Tab label="Melody Mysterious"/>
                                <Tab label="Flynn Förster"/>
                            </Tabs>
                        </Box>
                        <Box>
                            {tab === 0 && <>
                                <Typography>Однажды вы приняли участие в телевизионном кастинге и в результате стали знаменитым.
                                    Знаменитым. Теперь вас знает не так много людей. Вы хотите это изменить и
                                    и планируете начать все сначала! Слава и заработок - вот ваши главные приоритеты!
                                    Главное, чтобы люди знали вас в лицо и по имени. Для этого вы стараетесь
                                    как можно более привлекательным и симпатичным и передать определенный статус.
                                    статус.</Typography>
                            </>}
                            {tab === 1 && <>
                                <Typography>Вы - опытный певец и                                и теперь хотите стать известным в социальных сетях.Для вас особенно важно
                                    важно, чтобы вы вызывали доверие                                и заслуживающим доверия для ваших поклонников.Вы                                хотите, чтобы вы нравились вашим поклонникам
                                    нравились. В свою очередь, вы также рискуете                                заработать меньше денег или раскрыть частную
                                    информацию о себе.</Typography>
                            </>}
                            {tab === 2 && <>
                                <Typography>Вы в основном активны в социальных сетях                                    активны и определенно хотели бы стать
                                    стать более известным. Ваши любимые занятия                                    креативные видео и мистические фотографии и
                                    и пытаться передать таинственный образ                                    образ. Вы также поняли, что
                                    на этом можно еще и зарабатывать. Больше этого                                    еще больше!</Typography>
                            </>}
                            {tab === 3 && <>
                            <Typography>Вы - гандболист, и вас вызвали в сборную U21.                                национальную команду. Недавно на сайте
                                у вас также появился канал в социальных сетях.                                Вы очень добродушны и естественны.                                Семья и личная жизнь очень важны для вас.                                очень важны для вас.Тем не менее, вы хотели бы                                контактировать со своими поклонниками.Кроме того                                вы заинтересованы в сотрудничестве с определенными
                                брендами и хотели бы использовать свою
                                популярность в благих целях.</Typography>
                            </>}
                            <Box p={1} display={"flex"} justifyContent={"center"}>
                                <Button variant={"contained"} onClick={() => setSelect(true)}>Выберите</Button>
                            </Box>
                                <img src={`./${tab + 1}.png`} alt="" style={{width: "100%"}}/>

                        </Box>
                    </>
                }

                {select &&
                    <>
                        {!end && <EventComponent event={Events[index]} next={() => setIndex(index + 1)}/>}
                        {end && <>
                            <Box
                                sx={{
                                    width: 1.0,
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    gap: 4,
                                    p: 4
                                }}>
                                <Typography variant={"h3"}>Снова?</Typography>
                                <Typography><Button variant={"outlined"} onClick={() => {
                                    setIndex(0)
                                    setNoto(0)
                                    setPop(0)
                                    setMoney(0)
                                    setLife(0)
                                }}>Начни сначала.</Button></Typography>
                            </Box>
                        </>}
                    </>

                }


            </Box>
        </>
    );
};

export default App;
