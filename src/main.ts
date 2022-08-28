import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { main } from './02-mini-max-sum/problem';

//main();
main();
const app = document.querySelector<HTMLDivElement>("#app")!;


app.innerHTML = `
  <div>
    <h2>Hello SHL</h2>

    <a href="https://vitejs.dev" target="_blank">Documentation</a>
  </div>
`;

