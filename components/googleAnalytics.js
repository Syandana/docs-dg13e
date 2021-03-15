import ReactGA from "react-ga"
 
export const initGA = () => {
  ReactGA.initialize("G-T7H8BFQBPE")
}
 
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}