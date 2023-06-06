import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Buttons';
import ItemSeparator from '../components/ItemSeparator';
import {sizing} from '../styles/sizing';

const Widgets = () => (
    <ScreenWrapper>
        <View style={styles.container}>
            <Button buttonType='whiteRoundedButton' title='Lembretes' fontColor='black' />
            <ItemSeparator size={sizing.m} />
            <Button buttonType='whiteRoundedButton' title='Hábitos' fontColor='black' />
            <ItemSeparator size={sizing.m} />
            <Button buttonType='blackRoundedButton' title='Notas' fontColor='white' />
            <ItemSeparator size={sizing.m} />
            <Button buttonType='whiteRoundedButton' title='Finanças' fontColor='black' />
            <ItemSeparator size={sizing.m} />
            <Button buttonType='blackRoundedButton' title='Checklists' fontColor='white' />
            <ItemSeparator size={sizing.m} />
            <Button buttonType='blackRoundedButton' title='Metas' fontColor='white' />
        </View>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Widgets;