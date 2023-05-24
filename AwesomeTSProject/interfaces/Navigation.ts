import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";

type StackParamList = {
    Home: { foo: string, onBar: () => void } | undefined
    View: { foo: string, onBar: () => void } | undefined
    Create: { foo: string, onBar: () => void } | undefined
}

type NavigationProps = StackNavigationProp<StackParamList>;

export default NavigationProps;

