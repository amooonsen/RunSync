import {create} from "zustand";

interface UserData {
  gender: "male" | "female";
  age: number;
  height: number;
  weight: number;
  lifeStyle: string;
  exerciseLevel: string;
  exerciseFrequency: string;
  healthLevel: string;
}

interface HeartRateState {
  userData: UserData;
  maxHeartRate: number;
  restingHeartRate: number;
  zones: {
    zone1: {min: number; max: number};
    zone2: {min: number; max: number};
    zone3: {min: number; max: number};
    zone4: {min: number; max: number};
    zone5: {min: number; max: number};
  };
  setUserData: (data: UserData) => void;
}

export const useHeartRateStore = create<HeartRateState>((set) => ({
  userData: {
    gender: "male",
    age: 0,
    height: 0,
    weight: 0,
    lifeStyle: "",
    exerciseLevel: "",
    exerciseFrequency: "",
    healthLevel: "",
  },
  maxHeartRate: 0,
  restingHeartRate: 0,
  zones: {
    zone1: {min: 0, max: 0},
    zone2: {min: 0, max: 0},
    zone3: {min: 0, max: 0},
    zone4: {min: 0, max: 0},
    zone5: {min: 0, max: 0},
  },
  setUserData: (data) => set(data),
}));
