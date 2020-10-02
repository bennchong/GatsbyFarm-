import React, { useEffect } from "react";
import View from "../components/View";
import { useDocument } from "react-firebase-hooks/firestore";
import useFirebase from "../utils/useFirebase";

const Dashboard = () => {
  // const firebase = useFirebase();
  // useEffect(() => {
  //   if (!firebase) return;
  //   return firebase.auth().onAuthStateChanged((user) => {
  //     console.log("User:", user);
  //   });
  // }, [firebase]);
  // console.log(firebase);
  // const [value, loading, error] = useDocument(
  //   firebase.firestore().doc("data/prototype"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );
  return (
    <View>
      <p>
        {/* {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && <span>Document: {JSON.stringify(value.data())}</span>} */}
      </p>
    </View>
  );
};

export default Dashboard;
