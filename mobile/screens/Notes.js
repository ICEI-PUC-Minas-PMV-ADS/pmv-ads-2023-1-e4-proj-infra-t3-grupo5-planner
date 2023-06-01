import {SafeAreaView, Text} from 'react-native';
import {ContainerBox} from '../components/ContainerBox'

const Notes = () => (
    <SafeAreaView>
        <ContainerBox title="Notas" content={<InputLabel labelStyle="textArea" placeholder="Digite aqui" style={{paddingTop:40}}/>}/>
        <Button buttonType="circleAddButton" style={{margin:34}}/>
    </SafeAreaView>
);

export default Notes;