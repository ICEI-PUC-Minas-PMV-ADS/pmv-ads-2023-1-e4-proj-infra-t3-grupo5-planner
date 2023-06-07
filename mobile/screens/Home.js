import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import {sizing} from '../styles/sizing';
import WidgetContent from '../components/WidgetContent';
import ItemSeparator from '../components/ItemSeparator';
import AppText from '../components/AppText';
import Mood from '../components/Mood';
import Button from '../components/Buttons';

const Home = ({navigation}) => (
    <ScreenWrapper header style={{paddingBottom:50}}>
        <View style={styles.headerContainer}>
            <View style={{flex: 1}}>
                <AppText type='SmallTextBold' color='#ED4B58'>Olá, Usuário</AppText>
                <AppText type='Subtitle'>Seg, 23 de Dez de 2023</AppText>
            </View>
            <View style={[styles.container, styles.mood]}>
                <Mood mood='happy' size='s' />
            </View>
        </View>
        <View style={{flex: 1}}>
            <View style={[styles.container, styles.planner]}>
                <View style={styles.itemContainer}>
                    <WidgetContent checklist />
                    <ItemSeparator size={sizing.m} />
                    <WidgetContent finance />
                </View>
                <View style={styles.itemContainer}>
                    <WidgetContent goals />
                    <ItemSeparator size={sizing.m} />
                    <WidgetContent habits />
                </View>
                <View style={styles.itemContainer}>
                    <WidgetContent notes />
                    <ItemSeparator size={sizing.m} />
                    <WidgetContent reminders />
                </View>
            </View>
        </View>
        <View style={styles.addContainer}>
            <Button buttonType='circleAddButton' fontColor='white' onPress={() => navigation.navigate('Widgets')} />
        </View>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: sizing.xl,
        flexDirection: 'row',
        alignItems: 'center',
    },
    mood: {
        width: sizing.xxl + sizing.s,
        height: sizing.xxl,
        backgroundColor: '#ED4B58',
        borderBottomWidth: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
       borderRadius: sizing.m,
       borderTopRightRadius: 0,
       borderWidth: 2,
       borderColor: '#000',
    },
    planner: {
       flex: 1,
       padding: sizing.m,
    },
    itemContainer: {
       flex: 1,
       flexDirection: 'row',
    },
    addContainer: {
        paddingTop: sizing.xl,
        alignItems: 'center',
    }
});

export default Home;