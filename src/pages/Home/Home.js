import style  from './Home.module.scss'
import imageWebStorm from '../../assets/images/screens/webstorm.png'
import imageMatrix from '../../assets/images/gif/matrix.gif'
import imageDavid from '../../assets/images/naviDavid.jpg'
import CodeBlock from '../../components/CodeBlock/subcomponents/CodeBlock'


export const Home = () => {
  const code1 = `{
  "compilerOptions": {
    "baseUrl": "src"
  },
   "include": ["src"]
  }
  `
  const code2 = `
  "eslintConfig": {
  "extends": ["react-app", "airbnb"],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
  `
  return (
    <div className={style.home}>
      <p>
        Import from this <code>'../../../../../hell'</code>   to  <code>'Heaven'</code>
      </p>
      <p>As explained in the <a href='https://create-react-app.dev/docs/importing-a-component/#absolute-imports'>docs</a>, you start by creating a <code>jsconfig.json</code> file
        in your root with these characters and symbols in it:
      </p>
      <p>
        Yes TS lovers <code>tsconfig.json</code> is working too
      </p>
      <h3>jsconfig.json</h3>
      <CodeBlock height={10}>
        {code1}
      </CodeBlock>

      <h3>ESLint</h3>

      <CodeBlock height={18}>
        {code2}
      </CodeBlock>
      <h4>WebStorm</h4>
      <img className={style.imageWebStorm} src={imageWebStorm} alt="img-webstorm"/>
      <h4>Vscode is magic 🪄</h4>

      <h6>So just enjoy this fliud  while webstorm devs are configuring their cool IDE</h6>
      <img className={style.imageWebStorm} src={imageMatrix} alt="img-webstorm"/>
      <h3>Capital letters by convention</h3>
      <p>Absolute paths with Webpack is convention to use PascalCase for your aliased import roots (Webpack <a href='https://webpack.js.org/configuration/resolve/#resolvealias'>docs</a>).
        Renaming all your top-level directories to PascalCase.</p>
      <p>
      When things like <code>Components</code> and <code>Utils</code> start with capital letters, it will be plain to see which imports are npm packages and which are your own source code. You’ll also never have a clash with an npm package.
      </p>
      <p>
        Avoid files stored in the root of src that you’re going to be importing.
        For example, if you had <code>src/constants.js</code> you’d have to do <code>import constants from 'constants'</code>  which is just odd.
      </p>
      <div>
        <h3>Why is really cool then</h3>
        <p>
          扠 Bye bye to  hell paths  ../../../../../HELL🦠
        </p>
        <p>
          贰 Copy/paste code including imports into other files
        </p>
        <p>
          參 Move a file without having to update its input paths (if you IDE doesn’t do that for you anyway).
        </p>
        <p>
          肆 It’s fucking neat.
        </p>
      </div>
      <h2>Thank you for you ⌚️ mates</h2>
      <img className={style.imgDavid} src={imageDavid} alt="img-webstorm"/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
