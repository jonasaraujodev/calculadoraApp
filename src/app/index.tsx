import { Stack } from "expo-router";
import Calculadora from "../components/calculadora";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title: 'Calculadora'}}/>
    <Calculadora/>
    </>
  );
}
