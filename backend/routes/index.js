import UserRouter from "./userRoutes.js";

function routes(app) {
    app.use('/api/v1/user', UserRouter);
}

export default routes;