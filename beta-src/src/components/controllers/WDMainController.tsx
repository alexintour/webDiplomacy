import { Box } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import {
  fetchGameOverview,
  gameApiSliceActions,
  gameOverview,
  gameData,
  gameStatus,
  loadGameData,
} from "../../state/game/game-api-slice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import getPhaseKey from "../../utils/state/getPhaseKey";
import WDGameProgressOverlay from "../ui/WDGameProgressOverlay";
import WDAlertModal from "../ui/WDAlertModal";
import { store } from "../../state/store";
import useInterval from "../../hooks/useInterval";

const WDMainController: React.FC = function ({ children }): React.ReactElement {
  const [displayedPhaseKey, setDisplayedPhaseKey] = React.useState<
    string | null
  >(null);
  const dispatch = useAppDispatch();
  const overview = useAppSelector(gameOverview);
  const { data } = useAppSelector(gameData);
  const status = useAppSelector(gameStatus);

  const countryID = overview.user?.member.countryID;

  const overviewKey = getPhaseKey(overview, "<BAD OVERVIEW_KEY>");
  const statusKey = getPhaseKey(status, "<BAD STATUS_KEY>");
  const dataKey = getPhaseKey(data, "<BAD DATA_KEY>");

  const dispatchFetchOverview = () => {
    const { game } = store.getState();
    const { outstandingOverviewRequests } = game;
    // console.log({ outstandingOverviewRequests });
    if (!outstandingOverviewRequests) {
      dispatch(
        fetchGameOverview({
          gameID: String(overview.gameID),
        }),
      );
    }
  };

  // FIXME: for now, crazily fetch all messages every 5sec
  useInterval(dispatchFetchOverview, 5000);

  const needsGameData = useAppSelector(({ game }) => game.needsGameData);
  const noPhase = ["Error", "Pre-game"].includes(overview.phase);
  const consistentPhase =
    noPhase || (overviewKey === statusKey && overviewKey === dataKey);

  console.log({ countryID });
  if (needsGameData && !noPhase) {
    dispatch(gameApiSliceActions.setNeedsGameData(false));
    dispatch(
      loadGameData(
        String(overview.gameID),
        countryID ? String(countryID) : undefined, // keep undefined when converting
      ),
    );
  }

  const { name, gameID } = overview;
  useEffect(() => {
    document.title = `${name} - webDiplomacy Game ${gameID}`;
  }, [name, gameID]);

  if (!consistentPhase) {
    return <Box>Loading...</Box>;
  }

  const showOverlay =
    noPhase || (displayedPhaseKey && overviewKey !== displayedPhaseKey);
  if (displayedPhaseKey === null && overview.phase) {
    setDisplayedPhaseKey(overviewKey);
  }
  return (
    <div>
      {!noPhase && children}
      {showOverlay && (
        <WDGameProgressOverlay
          overview={overview}
          clickHandler={() => {
            setDisplayedPhaseKey(overviewKey);
            // When the user clicks on the overlay to show the latest
            // phase, this makes it also jump forward to show them the
            // latest phase.
            dispatch(gameApiSliceActions.changeViewedPhaseIdxBy(Infinity));
          }}
        />
      )}
      <WDAlertModal />
    </div>
  );
};

export default WDMainController;
