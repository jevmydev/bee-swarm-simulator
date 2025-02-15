import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "wouter";

const Home = lazy(() => import("./pages/HomePage"));
const News = lazy(() => import("./pages/NewsPage"));
const Wiki = lazy(() => import("./pages/Wiki/WikiPage"));
const WikiCategories = lazy(() => import("./pages/Wiki/WikiCategories"));
const Blender = lazy(() => import("./pages/BlenderPage"));
const Map = lazy(() => import("./pages/MapPage"));
const Hive = lazy(() => import("./pages/HivePage"));
const Bond = lazy(() => import("./pages/BondPage"));

const App = () => {
    return (
        <Suspense>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/wiki" component={Wiki} />
                <Route path="/wiki/:category" component={WikiCategories} />
                <Route path="/blender" component={Blender} />
                <Route path="/map" component={Map} />
                <Route path="/hive" component={Hive} />
                <Route path="/bond" component={Bond} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Suspense>
    );
};

export default App;
