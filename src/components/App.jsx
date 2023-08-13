import {Routes,Route} from "react-router-dom";
import {Home} from "../pages/Home";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Movies from "../pages/Movies";
export const App = () => {
  return (
    <div
      style={{
        fontSize: 20,
        color: '#010101'
      }}
    >
    <Routes>
       <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} >
          <Route path=":movieId" element={<div></div>}></Route>
        </Route>
        <Route path="*" element={<div />} />
        </Route>
      </Routes>
    </div>
  );
};
