import { timeStringWithKo } from "../../utils/timeString";
import { Banner } from "./Banner/Banner";
import { PreviewPost } from "./PreviewPost/PreviewPost";
import { TryCode } from "./TryCode/TryCode";

export const Main = () => {
  const timestamp = sessionStorage.getItem("timestamp");
  if (!timestamp) {
    const currentTimestamp = timeStringWithKo();
    sessionStorage.setItem("timestamp", currentTimestamp);
  }

  return (
    <main>
      <Banner />
      <TryCode />
      <PreviewPost />
    </main>
  );
};
