import {StyleSheet} from 'react-native';
import ContainerBox from '../components/ContainerBox'
import InputLabel from '../components/Inputs';
import Button from '../components/Buttons';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';

const Notes = () => (
    <ScreenWrapper style={styles.container}>
        <ContainerBox title="Notas" content={<InputLabel labelStyle="textArea" placeholder="Digite aqui"/>}/>
        <ItemSeparator size="xl" />
        <Button buttonType="circleAddButton" fontColor='white'/>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
});
export default Notes;