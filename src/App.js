import { Toaster } from "react-hot-toast";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo list</PageTitle>
        <div className={styles.app__wrapper}>
          {/* App Header */}
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
