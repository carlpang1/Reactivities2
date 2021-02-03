import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import LoadingComponenet from "../../../app/layout/LoadingComponenet";
import ActivityStore from "../../../stores/activityStore";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const { loadingInitial, loadActivities } = activityStore;

  useEffect(() => {
    loadActivities();
  }, [activityStore, loadActivities]);

  if (loadingInitial)
    return <LoadingComponenet content="Loading activities..." />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Filter</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
