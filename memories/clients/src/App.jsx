import { Container,AppBar,Typography,Grow,Grid } from "@mui/material";
import Form from "./components/Form/Form";
import {Posts} from "./components/Posts/Posts";
import memories from './images/mem.png'

function App(){
    return (
        <Container >
            <AppBar postion='static' color='inherit'>
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;