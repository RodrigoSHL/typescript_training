import './style.css'
import { main } from './Kangooro/problem';

const app = document.querySelector<HTMLDivElement>("#app")!;


app.innerHTML = `
  <div>
    <h2>Hello SHL</h2>

    <a href="https://vitejs.dev" target="_blank">Documentation</a>
  </div>
`;

main();
