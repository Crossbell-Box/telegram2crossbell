export interface Setting {
  includeService: boolean;
  aggregatedByTsp: boolean;
  characterHandle: string;
  channelName: string;
}

export interface Progress {
  finishedIDs: number[];
}

const settingKey = "telegram2crossbell-setting";
const progressKey = "telegram2crossbell-session";
let currentSetting: Setting | null = null;
let currentProgress: Progress | null = null;

const initSetting = () => {
  const storedSetting = localStorage.getItem(settingKey);
  if (storedSetting) {
    currentSetting = JSON.parse(storedSetting);
  } else {
    // Initialize
    currentSetting = {
      includeService: false,
      aggregatedByTsp: false,
      characterHandle: "",
      channelName: "",
    };
    localStorage.setItem(settingKey, JSON.stringify(currentSetting));
  }
};

const initProgress = () => {
  const storedProgress = localStorage.getItem(progressKey);
  if (storedProgress) {
    currentProgress = JSON.parse(storedProgress);
  } else {
    currentProgress = {
      finishedIDs: [],
    };
    localStorage.setItem(progressKey, JSON.stringify(currentProgress));
  }
};

export const getSetting = (): Setting => {
  if (!currentSetting) {
    initSetting();
  }

  return currentSetting!;
};

export const getProgress = (): Progress => {
  if (!currentProgress) {
    initProgress();
  }

  return currentProgress!;
};

export const setSetting = (newSetting: Setting) => {
  currentSetting = newSetting;
  localStorage.setItem(settingKey, JSON.stringify(newSetting));
  console.log(newSetting);
};

export const setProgress = (newProgress: Progress) => {
  currentProgress = newProgress;
  localStorage.setItem(progressKey, JSON.stringify(newProgress));
  console.log(newProgress);
};

export const clearSetting = () => {
  localStorage.removeItem(settingKey);
};

export const cleatProgress = () => {
  localStorage.removeItem(progressKey);
};
