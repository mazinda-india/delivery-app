import { ActivityIndicator, SafeAreaView } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthData } from "../redux/AuthReducer";
import Navbar from "../components/Navbar";

export const Router = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.isLoading);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    (async () => {
      dispatch(fetchAuthData());
    })();
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) {
    return <AuthStack />;
  }

  return (
    <>
      <Navbar />
      <AppStack />
    </>
  );
};
