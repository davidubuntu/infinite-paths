import CodeBlock from 'components/CodeBlock/subcomponents/CodeBlock'
import style  from './Home.module.scss'
import imageWebStorm from '../../assets/images/screens/webstorm.png'

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
      <p className={style.text}>As explained in the <a href='https://create-react-app.dev/docs/importing-a-component/#absolute-imports'>docs</a>, you start by creating a <code>jsconfig.json</code> file
        in your root with these characters and symbols in it:
      </p>
      <h3>jsconfig.json</h3>
      <CodeBlock height={10}>
        {code1}
      </CodeBlock>

      <h3>ESLint</h3>

      <CodeBlock height={18}>
        {code2}
      </CodeBlock>
      <h4>Vscode Automatic </h4>
      <h4>WebStorm</h4>
      <img className={style.imageWebStorm} src={imageWebStorm} alt="img-webstorm"/>
      <h3>Capital letters by convention</h3>
      <p>Absolute paths have been possible for a long time with Webpack, and it has become convention to use PascalCase for your aliased import roots (this is how it’s done in the examples from the Webpack docs).
        This is smart, and I would recommend doing the same in your codebase by renaming all your top-level directories to PascalCase.</p>
      <div>
        <h3>Why is really cool then</h3>
        <h5>
           NO more ../../../../../HELL🦠
        </h5>
        <h5>
          Copy/paste code including imports into other files
        </h5>
        <h5>
          -  Move a file without having to update its input paths (if you IDE doesn’t do that for you anyway).
        </h5>
        <h5>
          -  It’s fucking neat.
        </h5>
      </div>
    </div>
  )
}
