import { GameState } from "../interfaces/GameState";

const initialState: GameState = {
  activity: {
    lastActive: 0,
    lastCall: 0,
    makeNewCall: false,
    season: "Spring",
    year: 1901,
    processTime: 0,
    frequency: 120,
  },
  apiStatus: "idle",
  board: undefined,
  data: {
    msg: "",
    referenceCode: "",
    success: false,
    data: {
      currentOrders: [],
      territories: {},
      territoryStatuses: [],
      units: {},
    },
  },
  error: null,
  order: {
    inProgress: false,
    method: "click",
    onTerritory: null,
    orderID: "",
    subsequentClicks: [],
    toTerritory: null,
    unitID: "",
  },
  ordersMeta: {},
  ownUnits: [],
  maps: {
    territoryToUnit: {},
    unitToOrder: {},
    unitToTerritory: {},
    enumToTerritory: {},
    territoryToEnum: {},
  },
  territoriesMeta: {},
  mustDestroyUnitsBuildPhase: false,
  commands: {
    mapCommands: {},
    territoryCommands: {},
    unitCommands: {},
  },
  overview: {
    alternatives: "",
    anon: "Yes",
    drawType: "draw-votes-public",
    excusedMissedTurns: 4,
    gameID: 0,
    gameOver: "No",
    members: [],
    minimumBet: 5,
    name: "",
    pauseTimeRemaining: null,
    phase: "",
    phaseMinutes: 14400,
    playerTypes: "",
    pot: 35,
    potType: "",
    processStatus: "",
    processTime: null,
    season: "Spring",
    startTime: 0,
    turn: 0,
    user: {
      member: {
        bet: 5,
        country: "Russia",
        countryID: 1,
        excusedMissedTurns: 0,
        missedPhases: 0,
        newMessagesFrom: [],
        online: false,
        orderStatus: {
          Completed: false,
          None: false,
          Ready: false,
          Saved: false,
        },
        status: "Playing",
        supplyCenterNo: 4,
        timeLoggedIn: 0,
        unitNo: 4,
        userID: 1,
        username: "",
        votes: [],
      },
    },
    variant: {
      id: 1,
      mapID: 1,
      name: "Classic",
      fullName: "Classic",
      description: "The standard Diplomacy map of Europe.",
      author: "Avalon Hill",
      countries: [],
      variantClasses: {
        drawMap: "Classic",
        adjudicatorPreGame: "Classic",
      },
      codeVersion: null,
      cacheVersion: null,
      coastParentIDByChildID: {
        "76": 8,
        "77": 8,
        "78": 32,
        "79": 32,
        "80": 20,
        "81": 20,
      },
      coastChildIDsByParentID: {
        "8": [76, 77],
        "32": [78, 79],
        "20": [80, 81],
      },
      terrIDByName: null,
      supplyCenterCount: 34,
      supplyCenterTarget: 18,
    },
    variantID: 1,
    year: 1901,
  },
  status: {
    gameID: 2,
    countryID: 0,
    variantID: 1,
    potType: "",
    turn: 0,
    phase: "",
    gameOver: "No",
    pressType: "",
    phases: [],
    standoffs: [],
    occupiedFrom: [],
    votes: null,
    orderStatus: "",
    status: "",
  },
  messages: {
    messages: [],
    pressType: "",
    phase: "",
  },
  notifications: [],
};

export default initialState;
