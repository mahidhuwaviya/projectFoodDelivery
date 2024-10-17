function handleIsUserloggedIn(req, res) {
  res.send([global.isAuthenticated]);
}
function handleIsUserloggedOut(req, res) {
  res.clearCookie("token");
  res.send([false]);
}

export { handleIsUserloggedIn, handleIsUserloggedOut };
