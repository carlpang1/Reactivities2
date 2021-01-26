import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponenet from "./LoadingComponenet";
import ActivityStore from "../../stores/activityStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const activityStore = useContext(ActivityStore);
  const { loadingInitial, loadActivities } = activityStore;

  useEffect(() => {
    loadActivities();
  }, [activityStore, loadActivities]);

  if (loadingInitial)
    return <LoadingComponenet content="Loading activities..." />;

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
