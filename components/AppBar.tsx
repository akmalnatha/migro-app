import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function AppBar(route: any, options: any) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
