// import React from "react";
// import { ViewProvider } from "./src/contexts/ViewContext";

// export const wrapRootElement = ({ element }) => (
//   <ViewProvider>{element}</ViewProvider>
// );

// import React from "react";
// import { GlobalStateProvider } from "./src/components/GlobalStateContext";

// export const wrapRootElement = ({ element }) => {
//   return <GlobalStateProvider>{element}</GlobalStateProvider>;
// };

export const onServiceWorkerUpdateReady = () => {
  // Check if window is defined before using it
  if (typeof window !== "undefined") {
    const answer = window.confirm(
      `This website has been updated since your last visit. ` +
        `Reload to display the latest version?`
    );

    if (answer === true) {
      window.location.reload();
    }
  }
};
